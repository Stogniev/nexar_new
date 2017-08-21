var header = document.getElementById("header");
window.onscroll = function (e) {
    if((window.scrollY) > 100) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
}

	var menuElem = document.querySelector('.header-nav');
    var btElem = document.querySelector('.show-menu');

    btElem.onclick = function() {
    menuElem.classList.toggle('open');
	  btElem.classList.toggle('open');
	};
	
	var btMenu = document.querySelector(".nav > li > a:before");
	btMenu.onclick = function() {
      if (btMenu.nextSibling()) { 
		    btMenu.nextSibling.classList.toggle('open')
		}
	};
	
