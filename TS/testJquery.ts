// function de test des elements jquery
export function Dom( selector:string ):JQuery{
	let elementJquery:JQuery = $( selector );
	if(elementJquery.length < 1 ){
		throw new Error( "L'élément " + selector + " n'existe pas dans votre html !" );
	}
	return elementJquery;
}

// to test replace the "$" of jquery by "Dom" and import function next view in console if there is an error