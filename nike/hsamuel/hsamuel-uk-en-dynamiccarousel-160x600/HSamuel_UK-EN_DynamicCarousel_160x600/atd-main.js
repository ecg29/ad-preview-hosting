// ─────────────────────────────────────────────────────────────────────────────
// ─── Doubleclick Boilerplate ─────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}

	function enablerInitHandler() {
		if (Enabler.isPageLoaded()) {
			pageLoadedHandler();
		} else {
			Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
		}
	}

	function pageLoadedHandler() {
		if (Enabler.isVisible()) {
			adVisibilityHandler();
		} else {
			Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
		}
	}

	function adVisibilityHandler() {
		creative.init();
	}
});

// ─────────────────────────────────────────────────────────────────────────────
// ─── Creative Initialization ─────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
var creative = (function () {
	var _this = {};

	_this.init = function () {
		// ─── 1. Snippet Initialization ───────────────────────────────
		snippet.init();

		// ─── 2. Adtech Library Initialization ────────────────────────
		adTech.init();

		// ─── 3. Data Mapping Initialization ──────────────────────────
		// mapData.init();
	
		// ─── 4. Asset Preloading ─────────────────────────────────────
		// var assets = [
		// 	snippet.SF.a1_bgImage__img.Url,
		// 	snippet.SF.a2_bgImage__img.Url,
		// 	snippet.SF.a3_bgImage__img.Url
		// ];

		/**
		 * Parameters:
		 * orientation: 'horizontal' or 'vertical'
		 * itemWidth: width of each carousel item
		 * itemHeight: height of each carousel item
		 * imageWidth: width of each carousel image
		 * imageHeight: height of each carousel image
		 * itemSpace: space between each carousel item
		 * numDisplay: number of carousel items to display
		 */
		carousel.init({
			element: '.carousel-wrapper',
			orientation: 'vertical',
			itemWidth: 160,
			itemHeight: 210,
			imageHeight: 138,
			imageWidth: 138,
			numDisplay: 2,
			itemSpace: 0,
			autoPlay: true
		});

		addEvents.init();

		// ─── 6. Creative Animation ───────────────────────────────────
		animation.init();



	};

	return _this;
})();


// ─────────────────────────────────────────────────────────────────────────────
// ─── Creative Events ─────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
var addEvents = (function () {
	var _this = {};

	_this.init = function () {
		// Add exit to all clickable elements with class .overlay
		adTech.elem('body .overlay').forEach((element) => {
			element.addEventListener('click', adTech.exits, false);
		});

		adTech.elem('body .overlay2').forEach((element) => {
			element.addEventListener('click', ()=>Enabler.exit("Background Exit", bgClickUrl), false);
		});
	};

	return _this;
})();



// ─────────────────────────────────────────────────────────────────────────────
// ─── Carousel Component ──────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
var carousel = (function () {
	var _this = {};
	var ctr = 0;
	var interval;

	_this.init = function (options) {
		_this.mapCarouselData();
		_this.checkPromo();
		_this.configureCarousel(options);
		_this.generateCarousel();
		_this.checkOnSale();
		_this.createTicker();
		_this.bindEvents();
		// _this.autoPlay();
	};

	_this.checkPromo = function () {
		var mainWrapperWidth = gsap.getProperty('.main-wrapper', 'width');
		var mainWrapperHeight = gsap.getProperty('.main-wrapper', 'height');

		const dynamicUrl = snippet.HF['size' + mainWrapperWidth + 'x' + mainWrapperHeight].Url;

		gsap.set('.frame0 div.promo-display', {backgroundImage: 'url('+carousel.replaceSpacesWithPercent(dynamicUrl)+')' });
		
		if(snippet.HF.promo){
	
			gsap.set('.promo-display', {autoAlpha:1});
			gsap.set('.intro, .shopnow-intro', {autoAlpha:0});
		} 

		
	}

	_this.replaceSpacesWithPercent = function(inputString) {
			// Example usage:
			// const originalString = "Hello world! This is a test.";
			// const modifiedString = replaceSpacesWithPercent(originalString);

		return inputString.replace(/\s/g, '%20');
	}
	


	_this.mapCarouselData = function () {
		productArr = [];

		for (var i = 0; i < snippet.PF.length; i++) {
			productData = {};
			productData.id = i;
			productData.name = snippet.PF[i].productName;
			productData.brand = snippet.PF[i].brand;
			productData.image = snippet.PF[i].image.Url;
			productData.price = snippet.PF[i].price;
			productData.salePrice = snippet.PF[i].sale_price;
			productData.url = snippet.PF[i].link.Url;
			productArr.push(productData);
		}
	};

	// ─────────────────────────────────────────────────────────────────────
	// ─── Carousel Configuration ──────────────────────────────────────────
	// ─────────────────────────────────────────────────────────────────────
	_this.configureCarousel = function (options) {
		carouselWrapper = options.element;
		carouselOrientation = options.orientation || 'vertical';
		carouselItemWidth = options.itemWidth || 300;
		carouselItemHeight = options.itemHeight || 139;
		carouselImageWidth = options.imageWidth || 138;
		carouselImageHeight = options.imageHeight || 138;
		carouselItemSpace = options.itemSpace || 0;
		carouselNumDisplay = options.numDisplay || 3;
		carouselAutoPlay = options.autoPlay || false;
		carouselContainerWidth = carouselItemWidth * carouselNumDisplay;
		carouselContainerHeight = carouselItemHeight * carouselNumDisplay;
	};

	_this.generateCarousel = function () {
		carouselItemsArr = [];
		lockArrows = false;

		carouselItems = document.createElement('div');
		carouselItems.classList.add('carousel-items');
		
		if(carouselOrientation === 'horizontal' ? carouselItems.style.width = carouselContainerWidth + 'px':carouselItems.style.height = carouselContainerHeight + 'px');

		adTech.elem(carouselWrapper).appendChild(carouselItems);

		for (var i = 0; i < productArr.length; i++) {
			var carouselItem = document.createElement('div');
			carouselItem.classList.add('carousel-item');

			carouselItem.classList.add('overlay');
			carouselItem.setAttribute('data-reporting', `PROD${i + 1}_BG_EXIT`);
			carouselItem.setAttribute('data-exit', `${snippet.PF[i].link.Url}`);
			carouselItem.setAttribute('data-utm', 'false');
			carouselItem.setAttribute('data-product-index', `${i+1}`);


			carouselItem.innerHTML = `

					<!-- Product Logo -->
					

					<!-- Product Image -->
					<div class="carousel-image" style="background-image: url(${productArr[i].image}); width: ${carouselImageWidth}px; height: ${carouselImageHeight}px;"></div>

					<!-- Product Info -->
					<div class="carousel-product-info-wrapper">

						<div class="carousel-product-name"><p class=" vln3">${productArr[i].name}</p></div>
					
						<div class="carousel-product-prices">
							<div class="carousel-product-price">
								<div class="price">${productArr[i].price}</div>
							</div>
							<div class="carousel-product-sale-price">
								<div class="price">${productArr[i].salePrice}</div>
							</div>
						
						</div>
						
					</div>
				
			`;

			carouselItems.appendChild(carouselItem);
			carouselItemsArr.push(carouselItem);

			if (carouselOrientation == 'horizontal') {
				carouselItem.style.width = `${carouselItemWidth}px`;
				carouselItem.style.height = `${carouselItemHeight}px`;
				carouselItem.style.left = `${(carouselItemWidth + carouselItemSpace) * i}px`;
			} else {
				carouselItem.style.width = `${carouselItemWidth}px`;
				carouselItem.style.height = `${carouselItemHeight}px`;
				carouselItem.style.top = `${(carouselItemHeight + carouselItemSpace) * i}px`;
			}

			// Hide the carousel arrows if there is only one product.
			if (productArr.length <= 1) {
				adTech.elem('.left-arrow').style.display = 'none';
				adTech.elem('.right-arrow').style.display = 'none';
			}
		}
	};


	_this.checkOnSale = function () {
		for (let i = 0; i < carouselItemsArr.length; i++) {

			var saleHolder = adTech.elem(`.carousel-product-sale-price .price`)[i];
			var priceHolder = adTech.elem(`.carousel-product-price .price`)[i];

			

			if (saleHolder.innerHTML != "") {
				// console.log("has sale", saleHolder)
				// priceHolder.style.color = "grey";
				adTech.addClass(priceHolder, 'onsale-slash');


			}
		}
	};

	_this.createTicker = function () {
		//POPULATE TICKER
		const tickerContainer = adTech.elem('.ticker');
		const numberOfItems = 3;
		const textContent = snippet.HF.ticketText;
		const textBGColor = snippet.HF.tickerColor;
		const textColor = snippet.HF.tickerFontColor;

		var tickerBG = document.querySelectorAll('.ticker-bg');
		tickerBG[0].style.backgroundColor = textBGColor;
		// Generate ticker text items
		for (let i = 0; i < numberOfItems; i++) {
			const tickerText = document.createElement('div');
			tickerText.classList.add('ticker-text');
			
			tickerText.textContent = textContent;
			tickerText.style.color = textColor;
			tickerContainer.appendChild(tickerText);
		}
	};

	_this.bindEvents = function () {
		adTech.elem('.left-arrow').addEventListener('click', function (e) {
			_this.carouselPrev();
			window.clearInterval(interval);
		});

		adTech.elem('.right-arrow').addEventListener('click', function (e) {
			_this.carouselNext();
			window.clearInterval(interval);
		});
	};

	_this.carouselPrev = function () {
		if (lockArrows) return;
		lockArrows = true;

		ctr = ctr > 0 ? --ctr : carouselItemsArr.length - 1;
		direction = 1;

		for (var i = 0; i < carouselItemsArr.length; i++) {
			if (carouselOrientation === 'horizontal' && carouselItemsArr[i].offsetLeft >= carouselItemWidth * (carouselItemsArr.length - 1)) {
				gsap.set(carouselItemsArr[i], { left: -(carouselItemWidth + carouselItemSpace) + 'px' });
			} else if (carouselOrientation === 'vertical' && carouselItemsArr[i].offsetTop >= carouselItemHeight * (carouselItemsArr.length - 1)) {
				gsap.set(carouselItemsArr[i], { top: -(carouselItemHeight + carouselItemSpace) + 'px' });
			}
		}

		_this.slideCarousel();
	};

	_this.carouselNext = function () {
		if (lockArrows) return;
		lockArrows = true;

		ctr = ctr < carouselItemsArr.length - 1 ? ++ctr : 0;
		direction = -1;

		for (var i = 0; i < carouselItemsArr.length; i++) {
			if (carouselOrientation === 'horizontal' && carouselItemsArr[i].offsetLeft < 0) {
				gsap.set(carouselItemsArr[i], { left: (carouselItemWidth + carouselItemSpace) * (carouselItemsArr.length - 1) + 'px' });
			} else if (carouselOrientation === 'vertical' && carouselItemsArr[i].offsetTop < 0) {
				gsap.set(carouselItemsArr[i], { top: (carouselItemHeight + carouselItemSpace) * (carouselItemsArr.length - 1) + 'px' });
			}
		}

		_this.slideCarousel();
	};

	_this.slideCarousel = function () {
		gsap.to(carouselItemsArr, {
			duration: 0.5,
			[carouselOrientation === 'horizontal' ? 'left' : 'top']: '+=' + direction * (carouselOrientation === 'horizontal' ? carouselItemWidth + carouselItemSpace : carouselItemHeight + carouselItemSpace) + 'px',
			onComplete: function () {
				lockArrows = false;
			},
		});
		// _this.updateExitUrl();
	};

	_this.autoPlay = function () {
		if (carouselAutoPlay) {
			interval = setInterval(function () {
				_this.carouselNext();

				if (ctr == 0) {
					window.clearInterval(interval);
				}
			}, 2000);
		}
		// _this.updateExitUrl();
	};

	_this.updateExitUrl = function () {
		let overlays = document.querySelectorAll('.overlay');
		overlays.forEach((overlay) => {
			overlay.setAttribute('data-reporting', `PROD${ctr + 1}_BG_EXIT`);
			overlay.setAttribute('data-exit', `${snippet.PF[ctr].link.Url}`);
			overlay.setAttribute('data-utm', 'false');
		});
	};


	_this.getProductData = function (newVal) {
		return arguments.length ? (productArr = newVal) : productArr;
	};

	_this.getActiveProduct = function (newVal) {
		return arguments.length ? (ctr = newVal) : ctr;
	};

	

	return _this;
})();



// ─────────────────────────────────────────────────────────────────────────────
// ─── Creative Animation ──────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
var animation = (function () {
	var _this = {};

	
	_this.init = function () {
		// Configure animation timeline
		var tl = gsap.timeline(); // GSAP master timeline
		var displayTime = 2; // The the display time of each frame in seconds
		var zIndex = 10; // Ensures the animating frame is the top most frame

		/**
		 * The animation per frame is dynamic.
		 * Arrange them in the order you want them to play.
		 */
		_this.frame0(tl, displayTime, zIndex++);
		_this.frame1(tl, displayTime, zIndex++);
		// _this.frame2(tl, displayTime, zIndex++);
		// _this.frame3(tl, displayTime, zIndex++);
	};

	// ─── Frame 0 Animation ───────────────────────────────────────────────
	_this.frame0 = function (tl, displayTime, zIndex) {
		var frameLabel = '.frame0';
		


		tl.set(frameLabel, { zIndex: zIndex });

		// Your frame animation goes here.
		tl.fromTo(frameLabel, { autoAlpha: 0 }, { autoAlpha: 1 });
		
		tl.to({}, {}, `+=${displayTime}`); // Delay of this frame before going to the next frame.
	};


	// ─── Frame 1 Animation ───────────────────────────────────────────────
	_this.frame1 = function (tl, displayTime, zIndex) {
	
		gsap.config({ force3D: true })
		carousel.autoPlay();
		var frameLabel = '.frame-1';
		// tl.set(frameLabel, { zIndex: zIndex });
		tl.set('.frame0', { autoAlpha: 0 });
		// // Your frame animation goes here.
		tl.fromTo(frameLabel, { autoAlpha: 0 }, { autoAlpha: 1 });

		tickerAnimation.init();
		

		tl.to({}, {}, `+=${displayTime}`); // Delay of this frame before going to the next frame.
	};

	return _this;
})();

var tickerAnimation = (function () {
	var _this = {};

	
	_this.init = function () {
	
		_this.animate();
		
	};

		
	_this.animate = function () {
		// Configure animation timeline
	
		var tickerText = document.querySelectorAll('.ticker-text');		
		var tickDirection = -1;
		_this.slideTicker(tickerText, tickDirection);
	};


	_this.slideTicker = function(tickerText, tickDirection){
		
		
		gsap.to(tickerText, {
			duration: 3,
			'left': '+=' + tickDirection * tickerText[0].offsetWidth+ 'px', repeat:3, ease:"none"
		});

		
	}



	return _this;
})();

