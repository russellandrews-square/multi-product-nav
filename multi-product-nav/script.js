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

		// if ( ($(this).text() == "Square Point of Sale") && ( $(this).hasClass("active") == true ) ){
		// 	newArray = productArray.concat(squarepointofsale);
		// } 

		// if ( ($(this).text() == "Square for Restaurants") && ( $(this).hasClass("active") == true ) ){
		// 	newArray = productArray.concat(squareforrestaurants);
		// } 

		$("div.payment-product-list ul li h3.active").each(function(){
			console.log("hey");

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

			var string = this;
			var text = string.toString();
			var noDash = text.replace(/\s+/g, '-');


			$("section.my-products ul").append("<li><div class='product-icon' style='background-image: url(assets/product-icons/"+ noDash + ".svg)'></div><p class='emphasis-30'>"+ string + "</p></li>");
		})


	})

});

function updateNav(){
	var num = 0;

	var squarepointofsale = ["Reports", "Transactions", "Balance", "Customers"];
	var squareforrestaurants = ["Reports", "Transactions", "Balance", "Customers", "Menus", "Devices"];

	var productArray = [squarepointofsale, squareforrestaurants];


	$("div.payment-product-list ul li h3.active").each(function(){

		var string = $(this).text();
		var text = string.replace(/ /g,'');
		var paymentProductString = text.toLowerCase();

		$.each(productArray, function(){
			$("section.my-products ul").append(
				$.each(this,function(){
					if(paymentProductString == this){
					"<p>" + this + "</p>"
				}
				})
			);
			console.log("hey");
		})

		console.log(paymentProductString);
	})

}


