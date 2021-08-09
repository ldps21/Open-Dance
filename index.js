//let salsa = document.getElementByClassName("salsa");
function aulaReset(){
    let reset = document.getElementsByClassName('aula-style');
    for(let i = 0; i < reset.length; i++){
		reset[i].style.backgroundColor = '#fff';
        reset[i].style.border = 'none';
	}
}
function aulaHighlighting(string){
    aulaReset();
    let elements = document.getElementsByClassName(string);
    for(let i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = 'rgba(0, 255, 255, 0.15)';
        elements[i].style.border = '3px solid #00ffff';
	}
}
function aulasPrivadas(){
    document.getElementById("info-aulas-privadas").style.textDecoration = 'underline 2px solid #00ffff';
}