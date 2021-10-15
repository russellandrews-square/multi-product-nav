$(document).ready(function(){
	$("div.payment-product-list ul li h3").click(function(){
		$(this).toggleClass("active");

		var productArray = [];

		var squarepointofsale = [
			"Reports",
			"Transactions",
			"Balance",
			"Customers"
		];

		var squareforrestaurants = [
			"Reports",
			"Transactions",
			"Balance",
			"Customers",
			"Menus",
			"Devices",
			"Team"
		];

		var squareforretail = [
			"Reports",
			"Transactions",
			"Balance",
			"Customers",
			"Items",
			"Devices",
			"Team"
		];

		var appointments = [
			"Appointments",
			"Reports",
			"Transactions",
			"Balance",
			"Customers",
		];

		var invoices = [
			"Invoices",
			"Reports",
			"Transactions",
			"Balance",
			"Customers",
		];

		var virtualterminal = [
			"Virtual Terminal",
			"Reports",
			"Transactions",
			"Balance",
			"Customers",
		];

		var online = [
			"Online",
			"Orders",
			"Reports",
			"Transactions",
			"Balance",
			"Customers",
		];

		var onlinecheckout = [
			"Online Checkout",
			"Reports",
			"Transactions",
			"Balance",
			"Customers",
		];

		$("div.payment-product-list ul li h3.active").each(function(){

			var thisText = $(this).text();

			if ( thisText == "Square Point of Sale" ){
				for ( var i of squarepointofsale){
					productArray.push(i);
				}
			} else if ( thisText == "Square for Restaurants" ){
				for ( var i of squareforrestaurants){
					productArray.push(i);
				}
			} else if ( thisText == "Square for Retail" ){
				for ( var i of squareforretail){
					productArray.push(i);
				}
			} else if ( thisText == "Appointments" ){
				for ( var i of appointments){
					productArray.push(i);
				}
			} else if ( thisText == "Invoices" ){
				for ( var i of invoices){
					productArray.push(i);
				}
			} else if ( thisText == "Virtual Terminal" ){
				for ( var i of virtualterminal){
					productArray.push(i);
				}
			} else if ( thisText == "Online" ){
				for ( var i of online){
					productArray.push(i);
				}
			} else if ( thisText == "Online Checkout" ){
				for ( var i of onlinecheckout){
					productArray.push(i);
				}
			}
		});

		var newArray = productArray.filter(function(elem, index, self) {
	    	return index === self.indexOf(elem);
	  	});
	  	
	  	$("section.my-products ul li:not(.home)").remove();

		$.each(newArray, function(){

			var text = this;
			var string = text.toString();
			var noDash = string.replace(/\s+/g, '-');

			$("section.my-products ul").append("<li><div class='product-icon' style='background-image: url(assets/product-icons/"+ noDash + ".svg)'></div><p class='emphasis-30'>"+ text + "</p></li>");
		})


		var num = $("div.payment-product-list ul li h3.active").length;

		if (num > 0 ){
			$("div#select-payment-products").addClass("completed");
			$("div.take-payment").removeClass("hidden");
		} else if ( num == 0){
			$("div#select-payment-products").removeClass("completed");
			$("div.take-payment").addClass("hidden");
		}

		$("div.payment-product-list ul li h3").each(function(){

			var thisText = $(this).text();

			if ( thisText == "Square Point of Sale" ){
				if ( $(this).hasClass("active") ){
					$("div#download-SPOS").removeClass("hidden");
				} else {
					$("div#download-SPOS").addClass("hidden");
				}
			} else if ( thisText == "Square for Restaurants" ){
				if ( $(this).hasClass("active") ){
					$("div#download-RST").removeClass("hidden");
					// $("div#choose-team-plan").removeClass("hidden");
				} else {
					$("div#download-RST").addClass("hidden");
					// $("div#choose-team-plan").addClass("hidden");
				}
			} else if ( thisText == "Square for Retail" ){
				if ( $(this).hasClass("active") ){
					$("div#download-RTL").removeClass("hidden");
					// $("div#choose-team-plan").removeClass("hidden");
				} else {
					$("div#download-RTL").addClass("hidden");
					// $("div#choose-team-plan").addClass("hidden");
				}
			} else if ( thisText == "Appointments" ){
				if ( $(this).hasClass("active") ){
					$("div#schedule-appointment").removeClass("hidden");
				} else {
					$("div#schedule-appointment").addClass("hidden");
				}
			} else if ( thisText == "Invoices" ){
				if ( $(this).hasClass("active") ){
					$("div#create-invoice").removeClass("hidden");
				} else {
					$("div#create-invoice").addClass("hidden");
				}
			} else if ( thisText == "Virtual Terminal" ){
				if ( $(this).hasClass("active") ){
					$("div#send-vt-payment").removeClass("hidden");
				} else {
					$("div#send-vt-payment").addClass("hidden");
				}
			} else if ( thisText == "Online" ){
				if ( $(this).hasClass("active") ){
					$("div#create-website").removeClass("hidden");
				} else {
					$("div#create-website").addClass("hidden");
				}
			} else if ( thisText == "Online Checkout" ){
				if ( $(this).hasClass("active") ){
					$("div#create-checkout-link").removeClass("hidden");
				} else {
					$("div#create-checkout-link").addClass("hidden");
				}
			}

			if ( $("h3.square-for-restaurants").hasClass("active") || $("h3.square-for-retail").hasClass("active") ){
				$("div#choose-team-plan").removeClass("hidden");
			} else{
				$("div#choose-team-plan").addClass("hidden");
			}
		});
	})
	
	var num = 1;
	
	$("div.take-payment").click(function(){
		$("div.setup-guide").toggleClass("smaller");

		if (num == 1){
			$(this).children("h3").text("Untake a payment");
			$("div.setup-guide h2").text("Notifications");
			num = 0;
		} else if (num == 0){
			$(this).children("h3").text("Take a payment");
			$("div.setup-guide h2").text("Welcome to Square");
			num = 1;
		}
	})

});


