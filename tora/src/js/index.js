$("#toggle").click(function() {
  $("#burger-menu").toggleClass("open");
  $("#toggle").toggleClass("open");
  $("#menu").toggleClass("open");
});

$(function() {
  $(".burger-box,.sliding-panel-fade-screen,.sliding-panel-close").on(
    "click touchstart",
    function(e) {
      e.preventDefault();
      $(".burger-box").toggleClass("is-open");
      $(".sliding-panel-content,.sliding-panel-fade-screen").toggleClass(
        "is-visible"
      );
    }
  );
});

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};




var tooltiptext;
  $(".tooltip").mouseenter(function () {
    var thisStat = $(this);
    var thisTooltip = thisStat.find(".tooltiptext");
    var thisTooltipInner = thisTooltip.find("span");
    // Get data attributes:
    var dataPercentage = thisStat.attr("data-stat");
    var dataSoftware = thisStat.attr("data-soft");
    var dataColor = thisStat.attr("data-color");
    // Rewrite tooltip:
    thisTooltipInner.text(dataSoftware + " " + dataPercentage + "%");
    thisTooltip.css({"background": dataColor, "color": dataColor});
  });

var path = document.querySelector('.stat-path');
var dashLength = path.getTotalLength();
//Set Stat Path: Initial styles:
  $('.stat-path').css({
    "stroke-dasharray": dashLength,
    "stroke-dashoffset": dashLength
  });

$(document).mouseenter(function () {
  triggerStats();
});

function triggerStats() {
  //Add transition:
  $(".stat-path").css({"transition": "1.2s cubic-bezier(0.35, 2, 0.35, 0.3)"});
  //Loop items:
  $(".stat-item").each(function () {
    //This item select:
    var thisStat = $(this);
    var thisPath = $(this).find("svg .stat-path");
    //Get this Stat Item data percentage attribute:
    var dataPercentage = thisStat.attr("data-stat");
    //Convert "dataPercentage" to absolute length:
    var statLength = (dataPercentage / 100) * dashLength;
    //Set Stat Path (new styles):
    thisPath.css({
      "stroke-dasharray": dashLength,
      "stroke-dashoffset": (dashLength - statLength)
    });
  });
};


$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    effect: 'cube',
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 1,
      shadowScale: 0.8,
    },
    grabCursor: true
  })
});