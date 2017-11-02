import { Wine } from "Wine";
import { Category } from "Category";
import { Vendor } from "Vendor";
// import { BddWine } from "BddWine";
import { BddVendors } from "BddVendors";
import { BddCategory } from "BddCategory";
import { APIService } from "APIService";

export class App {
	
	

	private catergory: { id: number, name: string}[];
	private wines: { [key:string]: any }[];

	private errors: string[];

	private lastPage: [ JQuery<HTMLElement> ];

	private vendor: { [key:string]: any };
	private connected: boolean;

	private tempArray: {}[];
	private tempArray1: {}[];
	
	public $nav: JQuery<HTMLElement>;
	public $vendorButton: JQuery<HTMLElement>;
	public $vendorspace: JQuery<HTMLElement>;
	public $vendors: JQuery<HTMLElement>;
	public $wines: JQuery<HTMLElement>;
	
	
	constructor(){
		
		// structural elements

		this.catergory = [];
		this.wines = [];

		this.errors = [];
		
		this.lastPage = [ null ];
	
		this.vendor = {};

		// dom elements
		this.$nav = $( "#nav" );
		this.$vendors = $( "#vendors");
		this.$wines = $( "#wines" );
		
		// functions
		this.initCategory();
		this.init();
		// this.initmobile();

	}

	init(): void {

		$( "#hamb" ).hide(); 
		$( "#lastPage" ).hide();
		$( "section" ).hide();
		$( "#login" ).show();

	}

	// initmobile(): void {

	// 	var mobile = [
	// 		/Android/i,
	// 		/webOS/i,
	// 		/iPhone/i,
	// 		/iPad/i,
	// 		/iPod/i,
	// 		/BlackBerry/i,
	// 		/Windows Phone/i
	// 	];
		
	// 	mobile.forEach(element => {
	// 		if( navigator.userAgent.match( element ) ){

	// 			$( ".page" ).attr( "data-role" , "page" )


	// 		}
	// 	});
	// }

	connection( name:string, pass:string):void {
		

		if( name == null && pass == null ){
			this.errors.push( "Vendeur non renseigné !" );
		}
		else if( (name == null) !== (pass == null) ) {
			if( name == null ){
				this.errors.push( "Vendeur non renseigné !" );
			}
			if( pass == null ){
				this.errors.push( "Mot de passe non renseigné !" );
			}
		}
		else {
			
			let elements:APIService = new APIService();

			let wines:Promise<any> = elements.getVendor( name, pass );
			let success = false;

			wines
				.then( ( data )=>{
					if( data.success == true ){
						this.vendor = data.data;
						success = true;
						this.initVendor();
						$( "#login" ).hide();
						$( "#hamb" ).show();
						$( "#lastPage" ).show();
						$( "#menu-category" ).show();
					}
					else {
						this.errors.push( data.errors );
						this.displayError();
					}

					
					// return success;
				})
				.catch(function(error){
					// console.log(error);
				});

		}
		
		this.pageGestion( $( "#menu-category" ) );
	}

	initVendor():void {
		
		$( "#vendor" ).html( this.vendor.name );
	}


	initWhine( value: {} ): void {

		// this.wine = 
	
	}

	initCategory(): void {

		let iterator = 0;

		for( let category of BddCategory ){
			let newCategory = new Category(category.id as number, category.name as string);

			this.catergory.push( newCategory );

			newCategory.displayNav( $( "#nav #nav-category" ) );

			newCategory.disMain( $( "main" ) );

			newCategory.dispMenu( $( "main #menu-category" ) );
			iterator ++;
		}

		var vHeight = 100 / iterator;

		this.$wines.children().css( "height", vHeight +"%" );
	}

	

	getWinesOfVendorAndTypes( vendorId: number , type: string , link: any):void {

		let typeId = this.getCategoryId( type );

		let elements:APIService = new APIService();
		let wines:Promise<any> = elements.getWinesVendorCategory( vendorId, typeId );

		let that = this;
		wines
			.then( function( data ){
				
				if( that.wines != null ){

					that.wines = [];
				}

				for( let item of data ){

					let newWine:Wine = new Wine( item.name, item.color, item.year, item.designation, item.id, item.categoryId );

					newWine.display( $( "#" + type ) );
					
					that.wines.push( newWine );
				}
				
			})
			.catch(function(error){
		
			});
		
		$( ".page" ).hide();
		$( link ).fadeIn();

		this.pageGestion( $( link ) );
	}

	getCategory(): {}[] {
		return this.catergory;
	}

	getVendorId():number {

		return this.vendor.id;
	}

	getCategoryId( nameCat: string ):number {

		let id = 0;

		this.catergory.forEach( element => {

			if(element.name == nameCat ){

				id =  element.id;
			}
		});

		return id;
	}

	displayError(): void {
		
		this.errors.forEach(element => {

			let p = "<p>" + element + "</p>";

			$( "#errors" ).append( p );

		});

		$( "#errors" ).fadeIn(800, function(){

			$( this ).fadeOut(800, function(){

				$( this ).children().remove();
			});

		});
	}

	detail( wineId: number ): void {

		this.wines.forEach(element => {

			if( wineId == element.id ){

				let wine = new Wine( element.name, element.color, element.year, element.designation, element.id, element.categoryId );

				wine.displayDetail( $( "#detail" ) );

				$( "#detail" ).slideDown();
				$( "#"+ element.color ).hide();
				this.pageGestion( $( "#detail" ) );
			}
		});

	}

	pageGestion( page: JQuery<HTMLElement> ): void {

		if( this.lastPage[0] == null ){

			this.lastPage.splice( 0, 1);
			

		}

		this.lastPage.push( page );

	}

	precedent(): void{

		let index = this.lastPage.length ;
		let page = this.lastPage[ index - 2 ];
		let curentPage = $( "section:visible" );

		if( index >= 2 ){

			curentPage.hide();
			

			if( curentPage.hasClass( "container" ) ){
				// console.log("containerback");
				curentPage.children(".item").remove();
				curentPage.children( ".vindetail" ).remove();

			}
			
			
			page.show();

			if( page == $( "#menu-category") ){

				this.lastPage[0] = null;

			}
			else {

				this.lastPage.splice( index - 1 , 1 );

			}
		}
		
	}

	precedentMobile( page: JQuery<HTMLElement>, swipestart : any , swipestop : any ):void {

		
		// console.log(swipestart);
		// console.log(swipestop);
		if( swipestart.coords[0] < swipestop.coords[0]){
			this.precedent();
		}

	};

	quit(){

		$( "#login" ).show();
		$( "#hamb" ).hide(); 
		$( "#menu-category" ).hide();

		this.vendor = {};
		$( "#vendor" ).html( "" );
	}

}