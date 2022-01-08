// const menu = document.querySelector('.icon-menu');

// menu.addEventListener('click', AbrirMenu);

// function AbrirMenu() {

// }


// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu(event) {
    this.classList.toggle('is-active');
    document.querySelector(".menuppal").classList.toggle("is_active");
    event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/



function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let variable = getParameterByName('ok')

if(variable == 'ok'){
	alert('el mensaje se ha enviado pronto le responderemos')
}else if(variable == 'e1'){
	alert('no se envio intente de nuevo')
}else if(variable == 'e2'){
	alert('esto no devio haber pasado esta seguro de que itento enviar un mensaje?')
}