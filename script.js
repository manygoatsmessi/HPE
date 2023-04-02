window.onpagehide = function () {
  window.scrollTo(0, 0);
}

window.onbeforeunload = function () {
    document.getElementById('screen-darkener').classList.add('darken');
}


var prevScrollpos = window.pageYOffset;

function displaywheel(e){
  var evt=window.event || e //equalize event object
  var currentScrollPos = window.pageYOffset;
  var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta //check for detail first so Opera uses that instead of wheelDelta
  if (delta >= 0) {
		document.getElementById("navigation-bar").style.opacity = "1";
    document.getElementById("navigation-bar").style.visibility = 'visible';
  }	else if (delta < 0) {
		document.getElementById("navigation-bar").style.opacity = "0";
    document.getElementById("navigation-bar").style.visibility = "hidden";
  }
  // if (delta > 1 && currentScrollPos == 0) {
	// 	document.getElementById("home-header-section").style.opacity = "1";
  //   document.getElementById("home-header-section").style.height = "100vh";
  //   document.getElementById("body").style.overflow = 'hidden';
  // }	else if (delta < 1) {
	// 	document.getElementById("home-header-section").style.opacity = "0";
  //   document.getElementById("home-header-section").style.height = "0px";
  //   document.getElementById("body").style.overflow = 'visible';
  // }
  if (delta < 1) {
		document.getElementById("home-header-section").style.opacity = "0";
    document.getElementById("home-header-section").style.height = "0px";
    document.getElementById("body").style.overflow = 'visible';
  } else if (delta > 1 && currentScrollPos == 0) {
    document.getElementById("home-header-section").style.opacity = "1";
    document.getElementById("home-header-section").style.height = "100vh";
    document.getElementById("body").style.overflow = 'hidden';
  }
  prevScrollpos = currentScrollPos;
}

var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

if (document.attachEvent) //if IE (and Opera depending on user setting)
  document.attachEvent("on"+mousewheelevt, displaywheel)
else if (document.addEventListener) //WC3 browsers
  document.addEventListener(mousewheelevt, displaywheel, false)


window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
  var eighthscreenheight = (screen.height)/8
	var quarterscreenheight = (screen.height)/4
	var halfscreenheight = (screen.height)/2

  if (prevScrollpos >= currentScrollPos && currentScrollPos == 0) {
		document.getElementById("home-header-section").style.opacity = "1";
    document.getElementById("home-header-section").style.height = "100vh";
    document.getElementById("body").style.overflow = 'hidden';
  }

  prevScrollpos = currentScrollPos;

  if (currentScrollPos == 0) {
		document.getElementById("navigation-bar").style.backgroundColor = "rgba(0,0,0,0)";
	} else {
		document.getElementById("navigation-bar").style.backgroundColor = "rgba(0,0,0,1)";
	}
}