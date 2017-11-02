import {App} from "App";

var app = new App();

// ################################## login
$( "form" ).submit(function( event ){
	
	event.preventDefault();

	var vendorName = String( $( "#vendorName" ).val() );
	var vendorPass = String( $( "#vendorPassword" ).val() );

	app.connection( vendorName, vendorPass );
});


// ################################## navigation

$( "#lastPage" ).click( function() {
	
	app.precedent();

});

$( "#hamb" ).click( function( event ){

	event.stopPropagation();

	let navStatus = $( "#nav" ).css( "display" );

	if ( navStatus == "block" ){

		$( "#nav" ).slideUp();
	}
	else if( navStatus == "none" ){

		$( "#nav" ).slideDown();
	}

});

$( window ).click(function(){

	$( "#nav" ).slideUp();

});



$( document ).on("click", ".category-link", function( event ){

	event.preventDefault();
	var linkId = $(this).attr("href");

	let vendorId = app.getVendorId();
	let type = linkId.substring(1);
	let wines = app.getWinesOfVendorAndTypes( vendorId, type, linkId );
	
} );



$( document ).on( "click", ".item", function(){

	let id= parseInt( $( this ).attr( "id" ).substring( 1 ) );

	app.detail( id );

} );



$( "#quit" ).click( function( event ){
	
	event.preventDefault();
	
	app.quit();
} );





$(function(){
	// Bind the swipeHandler callback function to the swipe event on div.box
	$( "section" ).on( "swipe", swipeHandler );

	// Callback function references the event target and adds the 'swipe' class to it
	function swipeHandler( event :any ){

		if( $(this).attr( "id" ) != "login" ){

			$( event.target ).addClass( "swipe" );

			var swipestart = event.swipestart;
			var swipestop = event.swipestop;

			app.precedentMobile( $( this ) , swipestart , swipestop );
		
		} 
		
	}
});