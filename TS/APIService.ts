
export class APIService {

	private static instance: APIService = null;
	//test local
	private url: string = "http://localhost/courses_typescript/vendor_products/API/";
	// mobile
	// private url: string = "http://192.168.10.52/courses_typescript/vendor_products/API/";
	// design patern singleton
	static getService():APIService {

		if(!APIService.instance){
			APIService.instance = new APIService();
		}
		return APIService.instance;
	}

	constructor(){};

	getWines(): Promise <any> {

		return new Promise( (resolve:any , reject:any): any => {

			$.ajax({
				url: this.url + "wines",
				dataType : "json",
				success: function(wines: {}){
					resolve( wines ); 
				},
				error: function( wines:{} ){
					reject( wines );
				}

			})
		})
	}


	getWinesVendorCategory( vendorId:number, type:number ): Promise <any> {
		
		return new Promise( (resolve:any , reject:any): any => {

			$.ajax({
				url: this.url + "wines/" + vendorId + "/" + type ,
				dataType : "json",

				success: function(wines: {}){
					resolve( wines ); 
				},
				error: function( wines:{} ){
					reject( wines );
				}

			})
		})
	}

	getVendor( name:string, pass: string): Promise <any> {
		return new Promise( ( resolve:any , reject:any ):any =>{

			$.ajax({
				url: this.url + "vendorLogin/" + name + "/" + pass,
				dataType: "json",

				success:function( vendor:{} ){
					resolve( vendor );
				},
				error:function( vendor:{} ){
					reject( vendor );
				}
			})
		} )
	}

	

}


