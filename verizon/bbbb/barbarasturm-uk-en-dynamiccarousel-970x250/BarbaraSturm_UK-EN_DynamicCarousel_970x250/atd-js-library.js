// ─────────────────────────────────────────────────────────────────────────────
// ─── Incubeta Ad Tech Library ────────────────────────────────────────────────
// ─── v1.2 19.09.2023 ─────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

var adTech = (function () {
	var _this = {};

	_this.init = function () {
		// ─────────────────────────────────────────────────────────────
		// ─── Utility Functions ───────────────────────────────────────
		// ─────────────────────────────────────────────────────────────

		// Element selector
		_this.elem = function (query) {
			var t = document.querySelectorAll(query);
			return t.length === 0 ? false : t.length === 1 ? t[0] : t;
		};

		// Update class
		_this.updClass = function (txt) {
			var extraBgStyle = document.createElement('style');
			extraBgStyle.innerHTML = txt;
			document.head.appendChild(extraBgStyle);
		};

		// Return true if element contains class
		_this.hasClass = function (el, className) {
			return el.classList.contains(className);
		};

		// Add classname to element
		_this.addClass = function (el, className) {
			el.classList.add(className);
		};

		// Remove classname from element
		_this.removeClass = function (el, className) {
			el.classList.remove(className);
		};

		// Check string case
		_this.checkCase = function (str) {
			if (str === str.toUpperCase()) {
				return 'uppercase';
			} else if (str === str.toLowerCase()) {
				return 'lowercase';
			} else {
				return 'mixed case';
			}
		};

		// Parse from JSON into Class Styles (required css object in JSON)
		_this.JSON_into_CSS = function (obj) {
			var _css = '';
			var _obj = JSON.parse(obj);
			if (_obj.css) {
				_obj = _obj.css;
				Object.keys(_obj).forEach(function (key) {
					var value = _obj[key];
					_css += key + ':' + value + ';';
				});
			}
			return _css;
		};

		// Image preloader
		// Pass in an array of image urls and a callback function to execute when all images are loaded
		_this.preloadImages = function (imgArray, callbackFunction) {
			var totalImages = imgArray.length,
				loadedImages = 0,
				img = null,
				i;
			for (i = 0; i < totalImages; i++) {
				img = document.createElement('img');
				img.src = imgArray[i];
				img.onload = function () {
					loadedImages++;
					if (loadedImages === totalImages) {
						callbackFunction();
					}
				};
			}
		};

		// Debug HTML DOM by generating outlines.
		_this.debug = function () {
			var container = document.querySelector('.container-dc');
			var parents = container.querySelectorAll(':not(.container-dc)');

			parents.forEach((parent) => {
				var randomColor;
				do {
					randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
				} while (randomColor === '#000000' || randomColor === '#FFFFFF');
				parent.style.outline = `1px dashed ${randomColor}`;
			});
		};

		// TODO:
		// 1. fitText() function that allows you to resize, trim, and use the minimum or maximum font size of the copy to fit the container
		// 2. checkPrice() function that checks if the price is on sale. Accepts two parameters, the original price and the sale price.

		// ─────────────────────────────────────────────────────────────
		// ─── Studio Based Functions ──────────────────────────────────
		// ─────────────────────────────────────────────────────────────

		// Add suffix
		_this.addSuff = function (url) {
			var urlSuffix = Enabler.getParameter('exit_suffix'); // Example: var urlSuffix = "?a=123";
			var _url = '';
			if (url) {
				var symbol = url.indexOf('?') > -1 ? '&' : '?';
				if (urlSuffix) {
					while (urlSuffix.charAt(0) === '?' || urlSuffix.charAt(0) === '&') {
						urlSuffix = urlSuffix.substring(1);
					}
					if (urlSuffix.indexOf('?') > -1) {
						urlSuffix = urlSuffix.replace(/\?/g, '&');
					}
				} else {
					symbol = '';
					urlSuffix = '';
				}
				_url = url + symbol + urlSuffix;
			}
			return _url;
		};

		// Get UTM
		_this.getUtmParams = function (exitUrl, obj) {
			var utmarr = [];
			var temp_url = exitUrl;

			if (obj.utm_source !== '') {
				utmarr.push('utm_source=' + obj.utm_source);
			}
			if (obj.utm_medium !== '') {
				utmarr.push('utm_medium=' + obj.utm_medium);
			}
			if (obj.utm_campaign !== '') {
				utmarr.push('utm_campaign=' + obj.utm_campaign);
			}
			if (obj.utm_term !== '') {
				utmarr.push('utm_term=' + obj.utm_term);
			}
			if (obj.utm_content !== '') {
				utmarr.push('utm_content=' + obj.utm_content);
			}

			for (var i = 0; i < utmarr.length; i++) {
				if (i === 0) {
					temp_url += '?' + utmarr[i];
				} else {
					temp_url += '&' + utmarr[i];
				}
			}
			return temp_url;
		};

		/**
		 * Dynamically update the exit url with utm variables from the studio snippet.
		 * If the exit url has utm variables already, replace it with the values from the snippet.
		 * If the exit url has no utm variables, add it to the url.
		 */
		_this.addUtmParams = function (exitURL, parameters) {
			// Split the URL into the base and the existing parameters.
			let urlParts = exitURL.split('?');
			let base = urlParts[0];
			let existingParams = urlParts[1] ? urlParts[1].split('&') : [];

			// Convert the existing parameters into a key-value object.
			let paramsObj = {};
			existingParams.forEach((param) => {
				let keyValue = param.split('=');
				paramsObj[keyValue[0]] = keyValue[1];
			});

			// Update the parameter values with the new values from 'parameters'
			Object.keys(parameters).forEach((key) => {
				paramsObj[key] = parameters[key];
			});

			// Convert the updated parameter object back into a URL parameter string
			let updatedParams = Object.keys(paramsObj)
				.map((key) => `${key}=${paramsObj[key]}`)
				.join('&');

			// Return the updated URL
			return base + '?' + updatedParams;
		};

		// CTA exit global function
		_this.exits = function (e) {
			if (e.target.dataset.utm === 'true') {
				Enabler.exitOverride(e.target.dataset.reporting, adTech.addSuff(adTech.getUTMparams(e.target.dataset.exit)));
			} else {
				Enabler.exitOverride(e.target.dataset.reporting, adTech.addSuff(e.target.dataset.exit));
			}
		};

		// CTA data install
		_this.setCtaData = function (el, report, url, utm) {
			el.dataset.reporting = report;
			el.dataset.exit = url;
			el.dataset.utm = utm;
		};
	};

	return _this;
})();
