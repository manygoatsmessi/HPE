window.onpagehide = function () {
  window.scrollTo(0, 0);
}

window.onbeforeunload = function () {
    document.getElementById('screen-darkener').classList.add('darken');
}

var prevScrollpos = window.pageYOffset;


window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
  var eighthscreenheight = (screen.height)/8
	var quarterscreenheight = (screen.height)/4
	var halfscreenheight = (screen.height)/2
  
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navigation-bar").style.opacity = "1";
    document.getElementById("navigation-bar").style.visibility = 'visible';
  }	else if (prevScrollpos <= currentScrollPos) {
		document.getElementById("navigation-bar").style.opacity = "0";
    document.getElementById("navigation-bar").style.visibility = "hidden";
  }

  if (prevScrollpos > currentScrollPos && currentScrollPos == 0) {
		document.getElementById("home-header-section").style.opacity = "1";
    document.getElementById("home-header-section").style.height = "100vh";
  }	else if (prevScrollpos < currentScrollPos) {
		document.getElementById("home-header-section").style.opacity = "0";
    document.getElementById("home-header-section").style.height = "0px";
  }
  
  prevScrollpos = currentScrollPos;

  if (currentScrollPos < halfscreenheight) {
		document.getElementById("navigation-bar").style.backgroundColor = "rgba(0,0,0,0)";
	} else {
		document.getElementById("navigation-bar").style.backgroundColor = "rgba(0,0,0,1)";
	}
}