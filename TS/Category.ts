
export class Category {
	
	public id: number;
	public name: string;

	constructor( id: number , name: string){
		this.id = id;
		this.name = name;

	}

	displayNav(  $parent: JQuery<HTMLElement> ){

		let link: string = '<a href="#' + this.name + '" class="category-link"><li>' + this.name + '</li></a>';
	
		$parent.append( $(link) );
	}

	disMain( $parent: JQuery<HTMLElement> ){

		let div: string = '<section id="' + this.name + '" class=" page block container ' + this.name + '"  draggable="true"> <h2>' + this.name.toUpperCase() + '</h2></section>';

		$parent.append( $(div) );

	}

	dispMenu( $parent: JQuery<HTMLElement> ){
		let div: string = '<a href="#' + this.name + '" class="category-link"><div" class="button ' + this.name + '"> <h2>' + this.name + '</h2></div></a>';

		$parent.append( $(div) );
	}

	




}