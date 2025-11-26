//
// ────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: D O U B L E C L I C K   B O I L E R P L A T E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//

document.addEventListener( 'DOMContentLoaded', function () {

	if ( Enabler.isInitialized() ) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener( studio.events.StudioEvent.INIT, enablerInitHandler );
	}

	function enablerInitHandler () {

		if ( Enabler.isPageLoaded() ) {
			pageLoadedHandler();
		} else {
			Enabler.addEventListener( studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler );
		}
	}

	function pageLoadedHandler () {

		if ( Enabler.isVisible() ) {
			adVisibilityHandler();
		} else {
			Enabler.addEventListener( studio.events.StudioEvent.VISIBLE, adVisibilityHandler );
		}
	}

	function adVisibilityHandler () {

		Dynamic.init();
		Creative.init();

	}





} );



// ────────────────────────────────────────────────────── I ──────────
//   :::::: D Y N A M I C : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
// Dynamic invocation code.
// Use "Dynamic.get().key" to access the value.
// ie: var foo = Dynamic.get().ID;

var Dynamic = ( function () {

	function init () {


			// Dynamic Content variables and sample values
			Enabler.setProfileId(10881682);
			var devDynamicContent = {};

			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed = [{}];
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0]._id = 0;
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].backgroundImage = {};
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].backgroundImage.Type = "file";
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].backgroundImage.Url = "https://s0.2mdn.net/ads/richmedia/studio/26655713/26655713_20240116025647292_300x600_EJ.jpg";
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].headlineCopy = "GIFTS FOR THE<br>ONE YOU LOVE GIFTS FOR THE<br>ONE YOU LOVE GIFTS FOR THE<br>ONE YOU LOVE";
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].sublineCopy = "Find the perfect Valentines gift.";
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].question1 = "Diamonds";
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].question2 = "Jewellery";
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].question3 = "Watches";
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].ctaCopy = "Shop Now";
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].exitUrl = {};
			devDynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].exitUrl.Url = "https://www.ernestjones.co.uk/?utm_medium=cpc&cm_mmc=google-_-EJ%7C%7CSearch%7C%7CBrand%7C%7CBrand%20Exact-_-EJ%7C%7CSearch%7C%7CBrand%7C%7CBrand%20Exact-_-ernest%20jones&_$ja=acid:652-269-0449%7Ccid:18598490592%7Cagid:144940972520%7Ctid:kwd-102558698%7Ccrid:628922444810%7Cnw:g%7Crnd:2476561686787061903%7Cdvc:c%7Cadp:%7Cmt:e%7Cloc:1006810&gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9e6w54Vq50j8g28957IrXKNWjI25u_Hqkk336ZDiRFzFUOYB66y755hoCUl0QAvD_BwE";
			devDynamicContent.selection1Recs = [{},{},{},{},{},{}];
			devDynamicContent.selection1Recs[0]._id = 0;
			devDynamicContent.selection1Recs[0].Category = "diamonds";
			devDynamicContent.selection1Recs[0].productId = "9099987";
			devDynamicContent.selection1Recs[0].recId = "9099987";
			devDynamicContent.selection1Recs[1].Category = "diamonds";
			devDynamicContent.selection1Recs[1].productId = "8433716";
			devDynamicContent.selection1Recs[1].recId = "8433716";
			devDynamicContent.selection1Recs[2].Category = "jewellery";
			devDynamicContent.selection1Recs[2].productId = "4517644";
			devDynamicContent.selection1Recs[2].recId = "4517644";
			devDynamicContent.selection1Recs[3].Category = "jewellery";
			devDynamicContent.selection1Recs[3].productId = "4896734";
			devDynamicContent.selection1Recs[3].recId = "4896734";
			devDynamicContent.selection1Recs[4].Category = "jewellery";
			devDynamicContent.selection1Recs[4].productId = "3139034";
			devDynamicContent.selection1Recs[4].recId = "3139034";
			devDynamicContent.selection1Recs[5].Category = "jewellery";
			devDynamicContent.selection1Recs[5].productId = "8467501";
			devDynamicContent.selection1Recs[5].recId = "8467501";
			devDynamicContent.selection2Recs = [{},{},{},{},{},{}];
			devDynamicContent.selection2Recs[0]._id = 0;
			devDynamicContent.selection2Recs[0].Category = "diamonds";
			devDynamicContent.selection2Recs[0].productId = "9099987";
			devDynamicContent.selection2Recs[0].recId = "9099987";
			devDynamicContent.selection2Recs[1].Category = "diamonds";
			devDynamicContent.selection2Recs[1].productId = "8433716";
			devDynamicContent.selection2Recs[1].recId = "8433716";
			devDynamicContent.selection2Recs[2].Category = "jewellery";
			devDynamicContent.selection2Recs[2].productId = "4517644";
			devDynamicContent.selection2Recs[2].recId = "4517644";
			devDynamicContent.selection2Recs[3].Category = "jewellery";
			devDynamicContent.selection2Recs[3].productId = "4896734";
			devDynamicContent.selection2Recs[3].recId = "4896734";
			devDynamicContent.selection2Recs[4].Category = "jewellery";
			devDynamicContent.selection2Recs[4].productId = "3139034";
			devDynamicContent.selection2Recs[4].recId = "3139034";
			devDynamicContent.selection2Recs[5].Category = "jewellery";
			devDynamicContent.selection2Recs[5].productId = "8467501";
			devDynamicContent.selection2Recs[5].recId = "8467501";
			devDynamicContent.selection3Recs = [{},{},{},{},{},{}];
			devDynamicContent.selection3Recs[0]._id = 0;
			devDynamicContent.selection3Recs[0].Category = "watches";
			devDynamicContent.selection3Recs[0].productId = "9099987";
			devDynamicContent.selection3Recs[0].recId = "9099987";
			devDynamicContent.selection3Recs[1].Category = "watches";
			devDynamicContent.selection3Recs[1].productId = "8433716";
			devDynamicContent.selection3Recs[1].recId = "8433716";
			devDynamicContent.selection3Recs[2].Category = "jewellery";
			devDynamicContent.selection3Recs[2].productId = "4517644";
			devDynamicContent.selection3Recs[2].recId = "4517644";
			devDynamicContent.selection3Recs[3].Category = "jewellery";
			devDynamicContent.selection3Recs[3].productId = "4896734";
			devDynamicContent.selection3Recs[3].recId = "4896734";
			devDynamicContent.selection3Recs[4].Category = "watches";
			devDynamicContent.selection3Recs[4].productId = "3139034";
			devDynamicContent.selection3Recs[4].recId = "3139034";
			devDynamicContent.selection3Recs[5].Category = "jewellery";
			devDynamicContent.selection3Recs[5].productId = "8467501";
			devDynamicContent.selection3Recs[5].recId = "8467501";
			devDynamicContent.selection1 = [{},{},{},{},{},{}];
			devDynamicContent.selection1[0]._id = 0;
			devDynamicContent.selection1[0].productName = "CARAT* Waverly Princesss Silver Bezel Hoop Earrings";
			devDynamicContent.selection1[0].price = "&pound;149.00";
			devDynamicContent.selection1[0].salePrice = "&pound;139.00";
			devDynamicContent.selection1[0].onSale = false;
			devDynamicContent.selection1[0].link = {};
			devDynamicContent.selection1[0].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=8677775&productname=CARAT%2A+Waverly+Princesss+Silver+Bezel+Hoop+Earrings&wgtarget=https://www.ernestjones.co.uk/carat-waverly-princesss-silver-bezel-hoop-earrings/p/V-8677775";
			devDynamicContent.selection1[0].imageUrl = {};
			devDynamicContent.selection1[0].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-8677775_0_565.jpg?pristine=true";
			devDynamicContent.selection1[1].productName = "Chamilia Sassy Sterling Silver Id Bracelet";
			devDynamicContent.selection1[1].price = "&pound;30.00";
			devDynamicContent.selection1[1].salePrice = "&pound;28.00";
			devDynamicContent.selection1[1].onSale = false;
			devDynamicContent.selection1[1].link = {};
			devDynamicContent.selection1[1].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=2233568&productname=Chamilia+Sassy+Sterling+Silver+Id+Bracelet&wgtarget=https://www.ernestjones.co.uk/chamilia-sassy-sterling-silver-id-bracelet/p/V-2233568";
			devDynamicContent.selection1[1].imageUrl = {};
			devDynamicContent.selection1[1].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-2233568_0_565.jpg?pristine=true";
			devDynamicContent.selection1[2].productName = "Marco Bicego 18ct Yellow Gold Lunaria Ring";
			devDynamicContent.selection1[2].price = "&pound;1390.00";
			devDynamicContent.selection1[2].salePrice = "&pound;1380.00";
			devDynamicContent.selection1[2].onSale = false;
			devDynamicContent.selection1[2].link = {};
			devDynamicContent.selection1[2].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=5279445&productname=Marco+Bicego+18ct+Yellow+Gold+Lunaria+Ring&wgtarget=https://www.ernestjones.co.uk/marco-bicego-18ct-yellow-gold-lunaria-ring/p/V-5279437";
			devDynamicContent.selection1[2].imageUrl = {};
			devDynamicContent.selection1[2].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-5279437_0_565.jpg?pristine=true";
			devDynamicContent.selection1[3].productName = "Jean Pierre Pocket Alarm Watch With Leatherette Case";
			devDynamicContent.selection1[3].price = "&pound;110.00";
			devDynamicContent.selection1[3].salePrice = "";
			devDynamicContent.selection1[3].onSale = false;
			devDynamicContent.selection1[3].link = {};
			devDynamicContent.selection1[3].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=8113548&productname=Jean+Pierre+Pocket+Alarm+Watch+With+Leatherette+Case&wgtarget=https://www.ernestjones.co.uk/jean-pierre-pocket-alarm-watch-leatherette-case/p/V-8113548";
			devDynamicContent.selection1[3].imageUrl = {};
			devDynamicContent.selection1[3].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-8113548_0_565.jpg?pristine=true";
			devDynamicContent.selection1[4].productName = "Titanium Men\'s Ring";
			devDynamicContent.selection1[4].price = "&pound;90.00";
			devDynamicContent.selection1[4].salePrice = "";
			devDynamicContent.selection1[4].onSale = false;
			devDynamicContent.selection1[4].link = {};
			devDynamicContent.selection1[4].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=2277328&productname=Titanium+Men%27s+Ring&wgtarget=https://www.ernestjones.co.uk/titanium-mens-ring/p/V-2277271";
			devDynamicContent.selection1[4].imageUrl = {};
			devDynamicContent.selection1[4].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-2277271_0_565.jpg?pristine=true";
			devDynamicContent.selection1[5].productName = "Titanium Men\'s Ring";
			devDynamicContent.selection1[5].price = "&pound;90.00";
			devDynamicContent.selection1[5].salePrice = "&pound;85.00";
			devDynamicContent.selection1[5].onSale = false;
			devDynamicContent.selection1[5].link = {};
			devDynamicContent.selection1[5].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=2277301&productname=Titanium+Men%27s+Ring&wgtarget=https://www.ernestjones.co.uk/titanium-mens-ring/p/V-2277271";
			devDynamicContent.selection1[5].imageUrl = {};
			devDynamicContent.selection1[5].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-2277271_0_565.jpg?pristine=true";
			devDynamicContent.selection2 = [{},{},{},{},{},{}];
			devDynamicContent.selection2[0]._id = 0;
			devDynamicContent.selection2[0].productName = "CARAT* Waverly Princesss Silver Bezel Hoop Earrings";
			devDynamicContent.selection2[0].price = "&pound;149.00";
			devDynamicContent.selection2[0].salePrice = "";
			devDynamicContent.selection2[0].onSale = false;
			devDynamicContent.selection2[0].link = {};
			devDynamicContent.selection2[0].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=8677775&productname=CARAT%2A+Waverly+Princesss+Silver+Bezel+Hoop+Earrings&wgtarget=https://www.ernestjones.co.uk/carat-waverly-princesss-silver-bezel-hoop-earrings/p/V-8677775";
			devDynamicContent.selection2[0].imageUrl = {};
			devDynamicContent.selection2[0].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-8677775_0_565.jpg?pristine=true";
			devDynamicContent.selection2[1].productName = "Chamilia Sassy Sterling Silver Id Bracelet";
			devDynamicContent.selection2[1].price = "&pound;30.00";
			devDynamicContent.selection2[1].salePrice = "";
			devDynamicContent.selection2[1].onSale = false;
			devDynamicContent.selection2[1].link = {};
			devDynamicContent.selection2[1].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=2233568&productname=Chamilia+Sassy+Sterling+Silver+Id+Bracelet&wgtarget=https://www.ernestjones.co.uk/chamilia-sassy-sterling-silver-id-bracelet/p/V-2233568";
			devDynamicContent.selection2[1].imageUrl = {};
			devDynamicContent.selection2[1].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-2233568_0_565.jpg?pristine=true";
			devDynamicContent.selection2[2].productName = "Marco Bicego 18ct Yellow Gold Lunaria Ring";
			devDynamicContent.selection2[2].price = "&pound;1390.00";
			devDynamicContent.selection2[2].salePrice = "&pound;1380.00";
			devDynamicContent.selection2[2].onSale = false;
			devDynamicContent.selection2[2].link = {};
			devDynamicContent.selection2[2].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=5279445&productname=Marco+Bicego+18ct+Yellow+Gold+Lunaria+Ring&wgtarget=https://www.ernestjones.co.uk/marco-bicego-18ct-yellow-gold-lunaria-ring/p/V-5279437";
			devDynamicContent.selection2[2].imageUrl = {};
			devDynamicContent.selection2[2].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-5279437_0_565.jpg?pristine=true";
			devDynamicContent.selection2[3].productName = "Jean Pierre Pocket Alarm Watch With Leatherette Case";
			devDynamicContent.selection2[3].price = "&pound;110.00";
			devDynamicContent.selection2[3].salePrice = "";
			devDynamicContent.selection2[3].onSale = false;
			devDynamicContent.selection2[3].link = {};
			devDynamicContent.selection2[3].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=8113548&productname=Jean+Pierre+Pocket+Alarm+Watch+With+Leatherette+Case&wgtarget=https://www.ernestjones.co.uk/jean-pierre-pocket-alarm-watch-leatherette-case/p/V-8113548";
			devDynamicContent.selection2[3].imageUrl = {};
			devDynamicContent.selection2[3].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-8113548_0_565.jpg?pristine=true";
			devDynamicContent.selection2[4].productName = "Titanium Men\'s Ring";
			devDynamicContent.selection2[4].price = "&pound;90.00";
			devDynamicContent.selection2[4].salePrice = "&pound;85.00";
			devDynamicContent.selection2[4].onSale = false;
			devDynamicContent.selection2[4].link = {};
			devDynamicContent.selection2[4].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=2277328&productname=Titanium+Men%27s+Ring&wgtarget=https://www.ernestjones.co.uk/titanium-mens-ring/p/V-2277271";
			devDynamicContent.selection2[4].imageUrl = {};
			devDynamicContent.selection2[4].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-2277271_0_565.jpg?pristine=true";
			devDynamicContent.selection2[5].productName = "Titanium Men\'s Ring";
			devDynamicContent.selection2[5].price = "&pound;90.00";
			devDynamicContent.selection2[5].salePrice = "";
			devDynamicContent.selection2[5].onSale = false;
			devDynamicContent.selection2[5].link = {};
			devDynamicContent.selection2[5].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=2277301&productname=Titanium+Men%27s+Ring&wgtarget=https://www.ernestjones.co.uk/titanium-mens-ring/p/V-2277271";
			devDynamicContent.selection2[5].imageUrl = {};
			devDynamicContent.selection2[5].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-2277271_0_565.jpg?pristine=true";
			devDynamicContent.selection3 = [{},{},{},{},{},{}];
			devDynamicContent.selection3[0]._id = 0;
			devDynamicContent.selection3[0].productName = "CARAT* Waverly Princesss Silver Bezel Hoop Earrings";
			devDynamicContent.selection3[0].price = "&pound;149.00";
			devDynamicContent.selection3[0].salePrice = "";
			devDynamicContent.selection3[0].onSale = false;
			devDynamicContent.selection3[0].link = {};
			devDynamicContent.selection3[0].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=8677775&productname=CARAT%2A+Waverly+Princesss+Silver+Bezel+Hoop+Earrings&wgtarget=https://www.ernestjones.co.uk/carat-waverly-princesss-silver-bezel-hoop-earrings/p/V-8677775";
			devDynamicContent.selection3[0].imageUrl = {};
			devDynamicContent.selection3[0].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-8677775_0_565.jpg?pristine=true";
			devDynamicContent.selection3[1].productName = "Chamilia Sassy Sterling Silver Id Bracelet";
			devDynamicContent.selection3[1].price = "&pound;30.00";
			devDynamicContent.selection3[1].salePrice = "";
			devDynamicContent.selection3[1].onSale = false;
			devDynamicContent.selection3[1].link = {};
			devDynamicContent.selection3[1].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=2233568&productname=Chamilia+Sassy+Sterling+Silver+Id+Bracelet&wgtarget=https://www.ernestjones.co.uk/chamilia-sassy-sterling-silver-id-bracelet/p/V-2233568";
			devDynamicContent.selection3[1].imageUrl = {};
			devDynamicContent.selection3[1].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-2233568_0_565.jpg?pristine=true";
			devDynamicContent.selection3[2].productName = "Marco Bicego 18ct Yellow Gold Lunaria Ring";
			devDynamicContent.selection3[2].price = "&pound;1390.00";
			devDynamicContent.selection3[2].salePrice = "";
			devDynamicContent.selection3[2].onSale = false;
			devDynamicContent.selection3[2].link = {};
			devDynamicContent.selection3[2].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=5279445&productname=Marco+Bicego+18ct+Yellow+Gold+Lunaria+Ring&wgtarget=https://www.ernestjones.co.uk/marco-bicego-18ct-yellow-gold-lunaria-ring/p/V-5279437";
			devDynamicContent.selection3[2].imageUrl = {};
			devDynamicContent.selection3[2].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-5279437_0_565.jpg?pristine=true";
			devDynamicContent.selection3[3].productName = "Jean Pierre Pocket Alarm Watch With Leatherette Case";
			devDynamicContent.selection3[3].price = "&pound;110.00";
			devDynamicContent.selection3[3].salePrice = "&pound;108.00";
			devDynamicContent.selection3[3].onSale = false;
			devDynamicContent.selection3[3].link = {};
			devDynamicContent.selection3[3].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=8113548&productname=Jean+Pierre+Pocket+Alarm+Watch+With+Leatherette+Case&wgtarget=https://www.ernestjones.co.uk/jean-pierre-pocket-alarm-watch-leatherette-case/p/V-8113548";
			devDynamicContent.selection3[3].imageUrl = {};
			devDynamicContent.selection3[3].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-8113548_0_565.jpg?pristine=true";
			devDynamicContent.selection3[4].productName = "Titanium Men\'s Ring";
			devDynamicContent.selection3[4].price = "&pound;90.00";
			devDynamicContent.selection3[4].salePrice = "";
			devDynamicContent.selection3[4].onSale = false;
			devDynamicContent.selection3[4].link = {};
			devDynamicContent.selection3[4].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=2277328&productname=Titanium+Men%27s+Ring&wgtarget=https://www.ernestjones.co.uk/titanium-mens-ring/p/V-2277271";
			devDynamicContent.selection3[4].imageUrl = {};
			devDynamicContent.selection3[4].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-2277271_0_565.jpg?pristine=true";
			devDynamicContent.selection3[5].productName = "Titanium Men\'s Ring";
			devDynamicContent.selection3[5].price = "&pound;90.00";
			devDynamicContent.selection3[5].salePrice = "";
			devDynamicContent.selection3[5].onSale = false;
			devDynamicContent.selection3[5].link = {};
			devDynamicContent.selection3[5].link.Url = "https://track.webgains.com/click.html?wgcampaignid=139873&wgprogramid=287575&product=1&wglinkid=4541188&productid=2277301&productname=Titanium+Men%27s+Ring&wgtarget=https://www.ernestjones.co.uk/titanium-mens-ring/p/V-2277271";
			devDynamicContent.selection3[5].imageUrl = {};
			devDynamicContent.selection3[5].imageUrl.Url = "https://www.ernestjones.co.uk/productimages/processed/V-2277271_0_565.jpg?pristine=true";
			Enabler.setDevDynamicContent(devDynamicContent);
	}

	function get () {
		// return [dynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0],dynamicContent.selection1Recs,dynamicContent.selection2,,dynamicContent.selection1Recs,dynamicContent.selection3,,dynamicContent.selection1Recs,dynamicContent.selection3];
		var content = {
		  creativeFeed: {},
		
		};

		var productSelection1 = {
			productRec: [],
			productItem:[],
		}

		var productSelection2 = {
			productRec: [],
			productItem:[],
		}

		var productSelection3 = {
			productRec: [],
			productItem:[],
		}


		for (let i = 0; i < dynamicContent.Ernest_Jones_Gift_Finder_creativeFeed.length; i++) {
			content.creativeFeed = {
			backgroundImage : dynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].backgroundImage.Url,
			headlineCopy: dynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].headlineCopy,
			subheadlineCopy: dynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].sublineCopy,
			question1: dynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].question1,
			question2: dynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].question2,
			question3: dynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].question3,
			ctaCopy:dynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].ctaCopy,
			exitUrl : dynamicContent.Ernest_Jones_Gift_Finder_creativeFeed[0].exitUrl.Url,
			}
		
		}

		for (let i = 0; i < dynamicContent.selection1Recs.length; i++) {
			productSelection1.productRec[i] = {

				category: dynamicContent.selection1Recs[i].Category,
				productId: dynamicContent.selection1Recs[i].productId,
				rectId: dynamicContent.selection1Recs[i].recId
				
			};

			productSelection1.productItem[i]= {

				productName: dynamicContent.selection1[i].productName,
				productPrice: dynamicContent.selection1[i].price,
				productSalePrice: dynamicContent.selection1[i].salePrice,
				productLink: dynamicContent.selection1[i].link.Url,
				productImage: dynamicContent.selection1[i].imageUrl.Url,

			};
		}

		for (let i = 0; i < dynamicContent.selection2Recs.length; i++) {
			productSelection2.productRec[i] = {

				category: dynamicContent.selection2Recs[i].Category,
				productId: dynamicContent.selection2Recs[i].productId,
				rectId: dynamicContent.selection2Recs[i].recId
				
			};

			productSelection2.productItem[i]= {

				productName: dynamicContent.selection2[i].productName,
				productPrice: dynamicContent.selection2[i].price,
				productSalePrice: dynamicContent.selection2[i].salePrice,
				productLink: dynamicContent.selection2[i].link.Url,
				productImage: dynamicContent.selection2[i].imageUrl.Url,

			};
		}

		for (let i = 0; i < dynamicContent.selection3Recs.length; i++) {
			productSelection3.productRec[i] = {

				category: dynamicContent.selection3Recs[i].Category,
				productId: dynamicContent.selection3Recs[i].productId,
				rectId: dynamicContent.selection3Recs[i].recId
				
			};

			productSelection3.productItem[i]= {

				productName: dynamicContent.selection3[i].productName,
				productPrice: dynamicContent.selection3[i].price,
				productSalePrice: dynamicContent.selection3[i].salePrice,
				productLink: dynamicContent.selection3[i].link.Url,
				productImage: dynamicContent.selection3[i].imageUrl.Url,

			};
		}


		return {
			content, productSelection1,productSelection2,productSelection3,
		}
	}

	return {
		init : init,
		get : get
	};
}() );


//
// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: C R E A T I V E   D O M : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
// Setup your creative's DOM access here.
// Use "DOM.get().selectorName" to access the value.
// ie: DOM.get().wrapper;



var DOM = ( function () {

	var el = {};

	function init () {

		//		el.wrapper = Utilities.selector( '.main-wrapper' );
		el.buttons = Utilities.selector('.button');
		el.carouselFrame = Utilities.selector('#carousel-frame');
		el.buttonContainer = Utilities.selector('#button-container');
		el.logoContainer = Utilities.selector('#logo_container');
		el.bgContainer = Utilities.selector('#bg_container');
		el.copyContainer = Utilities.selector('#copy_container');
		el.carouselBG = Utilities.selector('#carousel_bg');
		el.copy1Elem = Utilities.selector('#copy-1');
		el.copy2Elem = Utilities.selector('#copy-2');
		el.copyContainer = Utilities.selector('#copy_container');
		el.bg = Utilities.selector('.bg');
		el.bgCarousel = Utilities.selector('.carousel-bg');
		el.copyHeadline = Utilities.selector('#copy-1');
		el.copySubheadline = Utilities.selector('#copy-2');
		el.button1 = Utilities.selector('#button-1');
		el.button2 = Utilities.selector('#button-2');
		el.button3 = Utilities.selector('#button-3');
		el.button1Span = document.querySelector('#button-1 > span');
		el.button2Span = document.querySelector('#button-2 > span');
		el.button3Span = document.querySelector('#button-3 > span');

	}

	function get () {

		init();

		return el;
	}

	return {
		get : get
	};

}() );

//
// ──────────────────────────────────────────────────────── I ──────────
//   :::::: C R E A T I V E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────
// This is the main entry point of your creative.
// Creative logic, animation, events, and everything to make your creative work.

var Creative = ( function () {

	function init () {

		setup();

		addListeners();
	}
	//Frame 1 vars
	var frame1CopyConfig;

	//
	var tl;

	//
	var entryDelay;
	//
	// ───────────────────────────────────────────────────── SETUP DYNAMIC VALUES ─────
	// This is where you assign the dynamic values to your DOM elements.

	function addListeners() {

				DOM.get().buttons.forEach((element, index) => {

				element.addEventListener('click', buttonClick, true);

				});

				DOM.get().bgContainer.addEventListener('click',bgExit, false);
				DOM.get().logoContainer.addEventListener('click',bgExit, false);
				DOM.get().copyContainer.addEventListener('click',bgExit, false);
				DOM.get().carouselBG.addEventListener('click',bgExit, false);
				DOM.get().buttonContainer.addEventListener('click',bgExit, false);

	}

	function setup () {

		let imgArr = [Dynamic.get().content.creativeFeed.backgroundImage];
		let btn1FS,btn2FS,btn3FS;
		

		
		gsap.set([DOM.get().bg,DOM.get().carouselBG], {attr: { src: Dynamic.get().content.creativeFeed.backgroundImage }});
		gsap.set(DOM.get().copyHeadline, {innerHTML:Dynamic.get().content.creativeFeed.headlineCopy});
		gsap.set(DOM.get().copySubheadline, {innerHTML:Dynamic.get().content.creativeFeed.subheadlineCopy});
		gsap.set(DOM.get().button1, {innerHTML:`<span class="buttonSpan">${Dynamic.get().content.creativeFeed.question1}</span>`});
		gsap.set(DOM.get().button2, {innerHTML:`<span class="buttonSpan">${Dynamic.get().content.creativeFeed.question2}</span>`});
		gsap.set(DOM.get().button3, {innerHTML:`<span class="buttonSpan">${Dynamic.get().content.creativeFeed.question3}</span>`});

		// buttons dataset assignment
		gsap.set(DOM.get().button1, {attr: {"data-product-type":Dynamic.get().content.creativeFeed.question1.replace(/\s/g, '').toLowerCase()}});
		gsap.set(DOM.get().button2, {attr: {"data-product-type":Dynamic.get().content.creativeFeed.question2.replace(/\s/g, '').toLowerCase()}});
		gsap.set(DOM.get().button3, {attr: {"data-product-type":Dynamic.get().content.creativeFeed.question3.replace(/\s/g, '').toLowerCase()}});


		gsap.delayedCall(0.500,function(){
			Utilities.fitText(DOM.get().button1Span, 2, 'unset');
			Utilities.fitText(DOM.get().button2Span, 2, 'unset');
			Utilities.fitText(DOM.get().button3Span, 2, 'unset');
			Utilities.fitText(DOM.get().copyHeadline, 10, 'unset');
			Utilities.fitText(DOM.get().copySubheadline, 10, 'unset');
		});

		gsap.delayedCall(0.300, function(){

			let computedStyleBtn1 = window.getComputedStyle(DOM.get().button1Span);
			let fontSizeBtn1 = computedStyleBtn1.getPropertyValue('font-size');
			btn1FS = convertStringToNumber(fontSizeBtn1);

			let computedStyleBtn2 = window.getComputedStyle(DOM.get().button2Span);
			let fontSizeBtn2 = computedStyleBtn2.getPropertyValue('font-size');
			btn2FS = convertStringToNumber(fontSizeBtn2);

			let computedStyleBtn3 = window.getComputedStyle(DOM.get().button3Span);
			let fontSizeBtn3 = computedStyleBtn3.getPropertyValue('font-size');
			btn3FS = convertStringToNumber(fontSizeBtn3);
			
			let setFontSize = (findLeastValue(btn1FS, btn2FS, btn3FS));
			gsap.set([DOM.get().button1Span, DOM.get().button2Span,DOM.get().button3Span], {fontSize:setFontSize});
		});

		// SET TEXT POSITIONS
		setTimeout(function(){
			animate();
			// preloadImages(imageArr,animate);
		}, 600);

	}

	//
	// ──────────────────────────────────────────────────────────────── ANIMATION ─────
	// This is where you'll place all animation related code.

	function animate () {

		gsap.set('#copy-1', {y:-60,autoAlpha:0});
		gsap.set('#copy-2', {y:60,autoAlpha:0});
		gsap.set('.main-wrapper', {autoAlpha:1});

		tl = gsap.timeline({delay: .4});

		tl.to(DOM.get().logoContainer, {duration:.6,autoAlpha:1,y:0, ease:"Power1.out"},"anim")
		.to([DOM.get().copy1Elem,DOM.get().copy2Elem], {stagger:0.15,autoAlpha:1,duration:.6,y:0, ease:"Circ.out"},"anim+=.5")
		.to(DOM.get().buttons, {stagger:0.3,duration:.4,y:0,autoAlpha:1, ease:"Circ.out"},"anim+=1.2")


	}
	/* - -- - - - - -- -- - - - - -- -- - - - - -- -- - - - - -- -- - - - - -- -- - - - - -- -- - - - - -- -- - - - - -*/

	return {
		init : init
	};
}() );


function buttonClick(e){
	gsap.to('#copy_container',{autoAlpha:0,duration:0.3});
		if(e.target.dataset.getClick == 'false'){
			gsap.set('.nmpiProductPrice.size970x250 span', {visibility:'hidden'});
			DOM.get().buttons.forEach((element, index) => {

			element.style.color = "#000";
			element.style.backgroundColor = "transparent";
			element.style.border = "1px solid #000";
			element.dataset.getClick = false;

			});
			e.target.style.color = "#000000";
			e.target.style.backgroundColor = "#ffffff";

						if(e.target.dataset.getClick == 'false'){
								e.target.dataset.productType;
								e.target.dataset.getClick = true;
											if(!isFirst){
												destroyCarousel();
												var products = document.getElementsByClassName('nmpiProduct');
												loopStage = (loopStage + noProducts - 1) % noProducts;
												for (var i = 0; i < products.length; i++) {
														products[i].className = products[i].className.replace(/ noTransition/g, '');
												}
											}
								applyClasses();
								epCount = checkEligibleProduct(e.target.dataset.productType);
								productPositions = [];
								loopStage = 0;
								loopStage = (epCount-2);
								buildCarousel(epCount);
								addDynamicElements(startCreative);

								gsap.to('#nmpiSlider',{autoAlpha:1});
								if(isFirst){
									gsap.to(DOM.get().carouselFrame, {autoAlpha:1});
									gsap.to(DOM.get().buttonContainer, {y:-47,x:573,zIndex:999,flexDirection:'column',justifyContent:'space-evenly',width:150,height:180,gap:0});
									gsap.to([DOM.get().buttons], {fontSize:15,padding:'0px 0px',width:115,height:30,delay:.1, duration:.3});
								
									DOM.get().buttons.forEach((element, index) => {
								
										let btnSpan = element.firstElementChild;
		
										gsap.set(element.firstElementChild, {width:105});
										gsap.delayedCall(.250, function(){
											
											Utilities.fitText(btnSpan, 2, 'unset');
		
										},["btnSpan"]);
									});

								}
								isFirst = false;
						}

		}
}

// CAROUSEL FUNCTIONALITY
var position = (scrollDirection === 'vertical' ? 'top': 'left');
var dimension = (scrollDirection === 'vertical' ? 'height': 'width');
var productPositions = [];

var animationTime = timers.animationLimit - timers.intro - timers.transition;
var maxScrolls = parseInt(animationTime / timers.autoScroll);

if (returnToStart) {
  maxScrolls = parseInt(maxScrolls / noProducts) * noProducts;
}

var arrowDown = false;
var loopStage = 0;
var scrollCounter = 0;
var scrollInterval;


function applyClasses() {

  // Apply dimensions
	if(applyOnce){
  var allElements = document.getElementsByTagName('body')[0].getElementsByTagName('*');
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].className += ' size' + creativeSize;
  }

  // Apply scroll direction
  var nmpiCarousel = document.getElementById('nmpiCarousel');
  nmpiCarousel.className += ' ' + scrollDirection + 'Scroll';

  var carouselElements = nmpiCarousel.getElementsByTagName('*');
  for (var i = 0; i < carouselElements.length; i++) {
    carouselElements[i].className += ' ' + scrollDirection + 'Scroll';
  }
	applyOnce = false;
	}


}

function buildCarousel(checkEligibleProduct) {

  var productCount = checkEligibleProduct;
  var nmpiCarousel = document.getElementById('nmpiCarousel');
  var nmpiArrowBack = document.getElementById('nmpiArrowBack');
  var nmpiArrowForward = document.getElementById('nmpiArrowForward');
  var nmpiSlider = document.getElementById('nmpiSlider');

  var carouselSize = (scrollDirection === 'horizontal' ? nmpiCarousel.clientWidth : nmpiCarousel.clientHeight);

  var sliderSize = carouselSize - 2 * arrowSize - 4 * productSeparation;
  var productSize = (sliderSize - (visibleProducts - 1) * productSeparation) / visibleProducts;

  nmpiArrowBack.style[dimension] = 13 + 'px';
  nmpiArrowForward.style[dimension] = 13 + 'px';

  nmpiArrowBack.style.padding = (scrollDirection === 'horizontal' ? '10px 12px 9px' : productSeparation + 'px' + ' 0');
  nmpiArrowForward.style.padding = (scrollDirection === 'horizontal' ? '10px 12px 9px' : productSeparation + 'px' + ' 0');

  nmpiSlider.style[dimension] = sliderSize+ 'px';
  nmpiSlider.style.margin = (scrollDirection === 'horizontal' ? '0px' : '0px' + ' 0');

  noProducts = productCount;

  for (var i = 0; i < noProducts; i++) {

		if(noProducts < 3){
			productPositions.push(0,366);
			nmpiArrowBack.style.visibility = "hidden";
			nmpiArrowForward.style.visibility = "hidden";
		}else{
			productPositions.push((i - 1) * (productSize + productSeparation));
			nmpiArrowBack.style.visibility = "visible";
			nmpiArrowForward.style.visibility = "visible";
		}

  }

  for (var i = 0; i < noProducts; i++) {

    var nmpiProduct = document.createElement('div');
    nmpiProduct.id = 'nmpiProduct' + i;
    nmpiProduct.className = 'nmpiProduct size' + creativeSize;
    nmpiProduct.style[dimension] = productSize + 'px';
    nmpiProduct.style[(dimension === 'height' ? 'width' : 'height')] = '100%';
    nmpiProduct.style[position] = productPositions[i] + 'px';
	nmpiProduct.className = nmpiProduct.className.replace(/ noTransition/g, '');
    nmpiProduct.style.transition = 'left ' + timers.scrollAnimation + 's ease-out 0s, top ' + timers.scrollAnimation + 's ease-out 0s'

    var nmpiProductPicture = document.createElement('div');
    nmpiProductPicture.id = 'nmpiProductPicture' + i;
    nmpiProductPicture.className = 'nmpiProductPicture size' + creativeSize;

    var nmpiProductName = document.createElement('div');
    nmpiProductName.id = 'nmpiProductName' + i;
    nmpiProductName.className = 'nmpiProductName size' + creativeSize;

    var nmpiProductPrice = document.createElement('div');
    nmpiProductPrice.id = 'nmpiProductPrice' + i;
    nmpiProductPrice.className = 'nmpiProductPrice size' + creativeSize;

    var nmpiProductPictureImg = document.createElement('img');
    nmpiProductPictureImg.id = 'nmpiProductPictureImg' + i;
    nmpiProductPictureImg.className = 'nmpiProductPictureImg size' + creativeSize;

    var nmpiProductNameSpan = document.createElement('span');
    nmpiProductNameSpan.id = 'nmpiProductNameSpan' + i;
    nmpiProductNameSpan.className = 'nmpiProductNameSpan size' + creativeSize;

    var nmpiProductPriceSpan = document.createElement('span');
    nmpiProductPriceSpan.id = 'nmpiProductPriceSpan' + i;
    nmpiProductPriceSpan.className = 'nmpiProductPriceSpan size' + creativeSize;

	var nmpiProductSalePriceSpan = document.createElement('span');
    nmpiProductSalePriceSpan.id = 'nmpiProductSalePriceSpan' + i;
    nmpiProductSalePriceSpan.className = 'nmpiProductSalePriceSpan size' + creativeSize;

	var nmpiProductButton = document.createElement('div');
	nmpiProductButton.id = 'nmpiProductButton' + i;
	nmpiProductButton.className = 'nmpiProductButton size' + creativeSize;
	nmpiProductButton.innerHTML = "<span>Shop Now</span>";

    nmpiProduct.appendChild(nmpiProductPicture);
    nmpiProduct.appendChild(nmpiProductName);
    nmpiProduct.appendChild(nmpiProductPrice);
	nmpiProduct.appendChild(nmpiProductButton);
    nmpiProductPicture.appendChild(nmpiProductPictureImg);
    nmpiProductName.appendChild(nmpiProductNameSpan);
    nmpiProductPrice.appendChild(nmpiProductPriceSpan);
	nmpiProductPrice.appendChild(nmpiProductSalePriceSpan);
    

	
	nmpiSlider.appendChild(nmpiProduct);
	
  }



	var products = document.getElementsByClassName('nmpiProduct');
	var firstProduct = loopStage;
	var lastProduct = (noProducts + loopStage - 1) % noProducts;
	loopStage = (loopStage + noProducts + 1) % noProducts;
	for (var i = 0; i < products.length; i++) {

		products[i].style[position] = "";
		if (i === lastProduct) {
			products[i].className += ' noTransition';
			products[i].style.zIndex = 0;
		}else {
			products[i].className = products[i].className.replace(/ noTransition/g, '');
			products[i].style.zIndex = 9;
		}
		if (i === firstProduct) {
			products[i].className += ' noTransition';
			products[i].style.zIndex = 9;
		} else {
			products[i].style.zIndex = 0;
			products[i].className = products[i].className.replace(/ noTransition/g, '');
		}

		products[i].style[position] = productPositions[(i - loopStage + products.length) % products.length] + 'px';
	}
	isClickable = true;
}

function addDynamicElements() {

  populateCarousel(content);

}

function populateCarousel(content) {

  for (var i = 0; i < (productEligible.length); i++) {

    var productNumber = (i + productEligible.length-1) % (productEligible.length);
    var product = document.getElementById('nmpiProduct' + i);
    var productPictureImage = document.getElementById('nmpiProductPictureImg' + i);
    var productNameSpan = document.getElementById('nmpiProductNameSpan' + i);
	var productName = document.getElementById('nmpiProductName' + i);
    var productPriceSpan = document.getElementById('nmpiProductPriceSpan' + i);
	var productSalePriceSpan = document.getElementById('nmpiProductSalePriceSpan' + i);
	var productPrice = document.getElementById('nmpiProductPrice' + i);
	var productButton = document.getElementById('nmpiProductButton' + i);
    
	

    productPictureImage.src = productEligible[productNumber].productImage;
    productNameSpan.innerHTML = productEligible[productNumber].productName;
    productPriceSpan.innerHTML = productEligible[productNumber].productPrice;
	productSalePriceSpan.innerHTML = productEligible[productNumber].productSalePrice;
  


	productPrice.dataset.productIndex = productNumber;
	productButton.dataset.productIndex = productNumber;
	productName.dataset.productIndex = productNumber;
	product.dataset.productIndex = productNumber;
	product.dataset.elemIndex = i;
	productPrice.dataset.elemIndex = i;
	productButton.dataset.elemIndex = i;
	productName.dataset.elemIndex = i;
	// gsap.delayedCall(1, function(){
	// 	Utilities.fitText(productPriceSpan, 10,'27');
	// 	Utilities.fitText(productSalePriceSpan, 10,'27');
	//   })

	if (productEligible[productNumber].productSalePrice) {
		productPriceSpan.className += ' sale';
		gsap.delayedCall(0.10, function(){
		gsap.set('.nmpiProductPrice.size970x250 span', {position:'relative', top:'unset',x:'0%',y:'50%',left:'unset',display:'inline-block',visibility:'visible'});
		});
		gsap.set(productPriceSpan, {paddingRight:4});
	  }




  }

var nmpiArrowForward = document.getElementById('nmpiArrowForward');
var nmpiArrowBack = document.getElementById('nmpiArrowBack');

nmpiArrowForward.addEventListener('click', moveForward, false);
nmpiArrowBack.addEventListener('click', moveBackward, false);

nmpiArrowForward.addEventListener('mouseover', mouseHover, false);
nmpiArrowBack.addEventListener('mouseover', mouseHover, false);

nmpiArrowForward.addEventListener('mouseout', mouseOut, false);
nmpiArrowBack.addEventListener('mouseout', mouseOut, false);

productColor = gsap.getProperty('.nmpiProductButton', 'color');
productBGColor = gsap.getProperty('.nmpiProductButton', 'backgroundColor');

document.querySelectorAll('.nmpiProductButton').forEach((element, index) => {

				element.addEventListener('mouseover',productBtnMouseOver,false)

});

document.querySelectorAll('.nmpiProductButton').forEach((element, index) => {

				element.addEventListener('mouseout',productBtnMouseOut,false)

});

document.querySelectorAll('.nmpiProduct').forEach((element, index) => {

				element.addEventListener('click',productBtnMouseClick,false)

});

}


function productBtnMouseOver(e){

		if(!isOnHover){
	  		getProductDataIndex = e.target.dataset.elemIndex;
			gsap.to('#nmpiProductButton'+getProductDataIndex,{color: productBGColor, backgroundColor:productColor,ease:'power1.out',duration:.6,onStart:function(){isOnHover = true;}});
		}
}

function productBtnMouseOut(e){

		if(isOnHover){
			getProductDataIndex = e.target.dataset.elemIndex;
			gsap.to('#nmpiProductButton'+getProductDataIndex,{color:productColor, backgroundColor:productBGColor,ease:'power1.out',duration:.6,onStart:function(){isOnHover = false;}});
		}
}

function productBtnMouseClick(e){
	e.stopPropagation();
	var ProductDataIndex = e.target.dataset.productIndex;
	var ProductDataIndexAdj;
	ProductDataIndexAdj = Number(ProductDataIndex) + 1;
	// Enabler.exitOverride('Product-'+ProductDataIndexAdj+'-Click',productEligible[ProductDataIndex].exitUrl.Url);
	Enabler.exitOverride('Product-'+ProductDataIndexAdj+'-Click',productEligible[ProductDataIndex].productLink);
}


function mouseHover(e){

	gsap.to(e.target,{scale:1.1,duration:.3})

}

function mouseOut(e){

	gsap.to(e.target,{scale:1,backgroundColor:'transparent',duration:.3})

}


function checkEligibleProduct(productType) {


	let firstCategory = Dynamic.get().content.creativeFeed.question1.replace(/\s/g, '').toLowerCase();
	let secondCategory = Dynamic.get().content.creativeFeed.question2.replace(/\s/g, '').toLowerCase();
	let thirdCategory = Dynamic.get().content.creativeFeed.question3.replace(/\s/g, '').toLowerCase();
	
	productSelected = productType;
	destroyCarousel();
		switch (productSelected) {
			case firstCategory:
				productEligible = [];

				// Dynamic.get().productSelection1.productItem.forEach(function(element){
				// 	productEligible.push(element);
				// });

				Dynamic.get().productSelection1.productRec.forEach(function(element,index){
					let selectedCateg = element.category.replace(/\s/g, '').toLowerCase();
					
					if(firstCategory == selectedCateg){
						productEligible.push(Dynamic.get().productSelection1.productItem[index]);
					
					}
					
				});

				

				Enabler.counter('First Category Click');
				
				break;

			case secondCategory:
				productEligible = [];
			
				Dynamic.get().productSelection2.productRec.forEach(function(element,index){
					let selectedCateg = element.category.replace(/\s/g, '').toLowerCase();
					
					if(secondCategory == selectedCateg){
						productEligible.push(Dynamic.get().productSelection2.productItem[index]);
					
					}
					
				});

				Enabler.counter('Second Category Click');

				break;

			case thirdCategory:
				productEligible = [];
			
				Dynamic.get().productSelection3.productRec.forEach(function(element,index){
					let selectedCateg = element.category.replace(/\s/g, '').toLowerCase();
					
					if(thirdCategory == selectedCateg){
						productEligible.push(Dynamic.get().productSelection3.productItem[index]);
					}
					
				});

				Enabler.counter('Third Category Click');
				break;


			default:

		}

		

		return productEligible.length;

}


function removeEligibleProduct(productType) {

	// liquorSelected = productType;
	// for (var i = productEligible.length; i > 0;i--) {
	// 	if(liquorSelected == String(productEligible[i-1].liqourType)){
	// 					productEligible.splice(i-1,1);
	//
	// 	}
	// }
	return productEligible.length;
}

function destroyCarousel(){
			var nmpiSlider = document.getElementById('nmpiSlider');

			var child = nmpiSlider.lastElementChild;
			while (child) {
					nmpiSlider.removeChild(child);
					child = nmpiSlider.lastElementChild;
			}
			productPositions = [];
			loopStage = '';

}


function startCreative() {

	var imageArr = [];
}



function moveForward(e) {
  if (!arrowDown) {
		if(noProducts < 3){

				
				Enabler.counter("Next Button Click")
				var products = document.getElementsByClassName('nmpiProduct');
				var firstProduct = loopStage;
				var lastProduct = (noProducts + loopStage - 1) % noProducts;

				arrowDown = true;
				loopStage = (loopStage + noProducts + 1) % noProducts;
				productPositions = [];
				productPositions.push(366,0);
				for (var i = 0; i < products.length; i++) {
					products[i].style[position] = "";
					if (i === lastProduct) {
						products[i].style.zIndex = 0;

					}else {
						products[i].className = products[i].className.replace(/ noTransition/g, '');
						products[i].style.zIndex = 9;
					}
					if (i === firstProduct) {
						products[i].style.zIndex = 9;
					} else {
						products[i].style.zIndex = 0;
						products[i].className = products[i].className.replace(/ noTransition/g, '');
					}

					products[i].style[position] = productPositions[(i - loopStage + products.length) % products.length] + 'px';
				}

		}else{


				Enabler.counter("Next Button Click")
			    var products = document.getElementsByClassName('nmpiProduct');
			    var firstProduct = loopStage;
			    var lastProduct = (noProducts + loopStage - 1) % noProducts;

				
			    arrowDown = true;
			    loopStage = (loopStage + noProducts + 1) % noProducts;
			    for (var i = 0; i < products.length; i++) {
						products[i].style[position] = "";
						if (i === lastProduct) {
							products[i].className += ' noTransition';
							products[i].style.zIndex = 0;
							products[i].style.opacity = 1;
						}else {
							products[i].className = products[i].className.replace(/ noTransition/g, '');
							products[i].style.zIndex = 9;
						}
			      if (i === firstProduct) {
			        products[i].className += ' noTransition';
							products[i].style.zIndex = 9;
			      } else {
							products[i].style.zIndex = 0;
			        		products[i].className = products[i].className.replace(/ noTransition/g, '');
			      }

			      products[i].style[position] = productPositions[(i - loopStage + products.length) % products.length] + 'px';
			    }

		}

    setTimeout(function() {
      arrowDown = false;
    }, timers.scrollAnimation * 1500);

		clearInterval(scrollInterval);


  }else {
  		clearInterval(scrollInterval);
  }

}

function moveBackward() {


  if (!arrowDown) {
			if(noProducts < 3){

				Enabler.counter("Previous Button Click")
				var products = document.getElementsByClassName('nmpiProduct');
				var firstProduct = loopStage;
				var lastProduct = (noProducts + loopStage - 1) % noProducts;

				arrowDown = true;
				loopStage = (loopStage + noProducts - 1) % noProducts;
				productPositions = [];
				productPositions.push(-366,0);

				for (var i = 0; i < products.length; i++) {
					if (i === firstProduct) {
						products[i].className += ' noTransition';
						products[i].style.zIndex = 9;
					} else {
						products[i].className = products[i].className.replace(/ noTransition/g, '');
						products[i].style.zIndex = 0;
					}
					if (i === lastProduct) {
						products[i].className += 'noTransition';
					products[i].style.zIndex = 0;
					} else {
						products[i].className = products[i].className.replace(/ noTransition/g, '');
						products[i].style.zIndex = 9;
					}
					products[i].style[position] = productPositions[(i - loopStage + products.length) % products.length] + 'px';
				}

				setTimeout(function() {
					arrowDown = false;
				}, timers.scrollAnimation * 1500);

				clearInterval(scrollInterval);

			}else{
						Enabler.counter("Previous Button Click")
				    var products = document.getElementsByClassName('nmpiProduct');
				    var firstProduct = loopStage;
				    var lastProduct = (noProducts + loopStage - 1) % noProducts;

				    arrowDown = true;
				    loopStage = (loopStage + noProducts - 1) % noProducts;

				    for (var i = 0; i < products.length; i++) {
							if (i === firstProduct) {
								products[i].className += ' noTransition';
								products[i].style.zIndex = 9;
							} else {
								products[i].className = products[i].className.replace(/ noTransition/g, '');
								products[i].style.zIndex = 0;
							}
				      if (i === lastProduct) {
				        products[i].className += 'noTransition';
								products[i].style.zIndex = 0;
								products[i].style.opacity = 0;
				      } else {
				        products[i].className = products[i].className.replace(/ noTransition/g, '');
								products[i].style.zIndex = 9;
								products[i].style.opacity = 1;
				      }
				      products[i].style[position] = productPositions[(i - loopStage + products.length) % products.length] + 'px';
				    }

				    setTimeout(function() {
				      arrowDown = false;
				    }, timers.scrollAnimation * 1500);

						clearInterval(scrollInterval);
		}
  }else {
  		clearInterval(scrollInterval);
  }

}


function bgExit(e){

	switch (e.target.id) {
		case 'logo_container':Enabler.exitOverride('Background Exit Click', Dynamic.get().content.creativeFeed.exitUrl);
			break;
		case 'carousel_bg':Enabler.exitOverride('Background Exit Click', Dynamic.get().content.creativeFeed.exitUrl);
			break;
		case 'bg_container':Enabler.exitOverride('Background Exit Click', Dynamic.get().content.creativeFeed.exitUrl);
		break;
		case 'nmpiCarousel':Enabler.exitOverride('Background Exit Click', Dynamic.get().content.creativeFeed.exitUrl);
			break;
		case 'copy_container':Enabler.exitOverride('Background Exit Click', Dynamic.get().content.creativeFeed.exitUrl);
			break;
		case 'button-container':Enabler.exitOverride('Background Exit Click', Dynamic.get().content.creativeFeed.exitUrl);
			break;
		default:

	}

}











//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: U T I L I T I E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

var Utilities = ( function () {

	//
	// ─── QUERY SELECTOR ─────────────────────────────────────────────────────────────
	//

	function selector ( query ) {

		var t = document.querySelectorAll( query );
		return ( t.length === 0 ) ? false : ( t.length === 1 ) ? t[0] : t;

	}

	//
	// ─── TRIGGER CUSTOM EVENT ───────────────────────────────────────────────────────
	//

	function triggerEvent ( element, eventName, data ) {
		if ( document.createEvent ) {
			var event = document.createEvent( 'CustomEvent' );
			event.initCustomEvent( eventName, true, true, data );
		} else {
			// eslint-disable-next-line no-redeclare
			var event = new CustomEvent( eventName, { detail : data } );
		}

		element.dispatchEvent( event );
	}

	function normalizeJson ( str ) {
		return str.replace( /[\s\n\r\t]/gs, '' ).replace( /,([}\]])/gs, '$1' )
			.replace( /([,{\[]|)(?:("|'|)([\w_\- ]+)\2:|)("|'|)(.*?)\4([,}\]])/gs, ( str, start, q1, index, q2, item, end ) => {
				item = item.replace( /"/gsi, '' ).trim();
				if( index ) {index = '"' + index.replace( /"/gsi, '' ).trim() + '"';}
				if( !item.match( /^[0-9]+(\.[0-9]+|)$/ ) && ![ 'true', 'false' ].includes( item ) ) {item = '"' + item + '"';}
				if( index ) {return start + index + ':' + item + end;}
				return start + item + end;
			} );
	}

	function fitText(textElement, minFontSize = 0, maxHeight = Infinity) {
		let containerStyle = window.getComputedStyle(textElement);
		let containerWidth = parseFloat(containerStyle.width);
		let containerHeight = textElement.clientHeight - parseFloat(containerStyle.paddingTop) - parseFloat(containerStyle.paddingBottom);

		let textWidth = textElement.scrollWidth;
		let textHeight = textElement.scrollHeight;

		let fontSize = parseFloat(containerStyle.fontSize);
		let fontSizeNum = fontSize;

		if (maxHeight !== Infinity) {
			textElement.style.maxHeight = maxHeight + 'px';
			containerHeight = textElement.clientHeight - parseFloat(containerStyle.paddingTop) - parseFloat(containerStyle.paddingBottom);
		}

		if ((textWidth > containerWidth || textHeight > containerHeight) && fontSizeNum > minFontSize) {
			function adjustFontSize() {
				textWidth = textElement.scrollWidth;
				textHeight = textElement.scrollHeight;

				if ((textWidth > containerWidth || textHeight > containerHeight) && fontSizeNum > minFontSize) {
					fontSizeNum--;
					textElement.style.fontSize = fontSizeNum + 'px';
					requestAnimationFrame(adjustFontSize);
				}
			}

			adjustFontSize();
		}

		textElement.style.height = 'auto';
	}

	return {
		fitText : fitText,
		selector : selector,
		triggerEvent : triggerEvent,
		normalizeJson : normalizeJson
	};

} )();

// DON'T call this function this is used for Studio setup ONLY!
function studioExits_tmp(){
//frame1
	Enabler.exitOverride('Product-1-Click');
	Enabler.exitOverride('Product-2-Click');
	Enabler.exitOverride('Product-3-Click');
	Enabler.exitOverride('Product-4-Click');
	Enabler.exitOverride('Product-5-Click');
	Enabler.exitOverride('Product-6-Click');
	Enabler.exitOverride('Background Exit Click');

}



/*PRELOADER*/
function preloadImages(imgArray, callbackFunction) {
    var totalImages = imgArray.length,
    loadedImages = 0,
    img = null,
    i;
    for (i = 0; i < totalImages; i++) {
        img = document.createElement("img");
        img.src = imgArray[i];
        img.onload = function () {
            loadedImages++;
            if (loadedImages === totalImages) {
                callbackFunction();
            }
        }
    }
}

function convertStringToNumber(inputString) {
	let numericString = inputString.replace(/[^0-9.-]/g, ''); // Remove non-numeric characters
	let result = parseFloat(numericString); // Convert string to float (you can use parseInt() for integers)
  
	return isNaN(result) ? null : result; // Return null if conversion fails
  }

  function findLeastValue(btn1FS, btn2FS, btn3FS) {
	if (btn1FS < btn2FS && btn1FS < btn3FS) {
	return btn1FS;
	} else if (btn2FS < btn1FS && btn2FS < btn3FS) {
	return btn2FS;
	} else {
	return btn3FS;
	}
	
}	