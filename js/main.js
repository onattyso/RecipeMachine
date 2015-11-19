var recipename = "";
var fruit;

var foodImages = [
	"img/apple.jpg",
	"img/cheezit.jpg",
	"img/cheezitwhite.jpg",
	"img/dang.jpg",
	"img/granola.jpg",
	"img/jerky.jpg",
	"img/seaweed.jpg",
	"img/skippy.jpg",
	"img/tillamoo.jpg"
];


var slotMachine1 = function () {
	var item = foodImages[Math.floor(Math.random()*foodImages.length)];
	console.log(item);
	return $('#slotItem1').addClass('item1').css({'background-image':'url(' + item + ')'});
};

var slotMachine2 = function () {
	var item = foodImages[Math.floor(Math.random()*foodImages.length)]; 
	console.log(item);
	return $('#slotItem2').addClass('item2').css({'background-image':'url(' + item + ')'});
};

var slotMachine3 = function () {
	var item = foodImages[Math.floor(Math.random()*foodImages.length)]; 	
	console.log(item);
	return $('#slotItem3').addClass('item3').css({'background-image':'url(' + item + ')'});
};

$(document).click(function(){

	// startAnimation();
	// animate();

	var imageArray = foodImages[Math.floor(Math.random()*foodImages.length)];
	// $( "#slotItem1" ).startAnimation( 300 ).delay( 800 ).stopAnimation( 400 );
	$("#slotItem1").animate({top: -imageArray*150}, 3, 'swing', function() {
		rotateContents($trigger, imageArray);
	});
});



function randomSlotttIndex(max) {
  var randIndex = (Math.random() * max | 0);
  return (randIndex > 1) ? randIndex : randomSlotttIndex(max);
}

function startAnimation(){
	setInterval(animate, 3);
}

function stopAnimation(){
	setInterval(animate, 300);
}

function animate() {

	slotMachine1();
	slotMachine2();
	slotMachine3();

  // var imageArray = randomSlotttIndex(foodImages.length);
  var imageArray = foodImages[Math.floor(Math.random()*foodImages.length)];

  $trigger.animate({top: -imageArray*150}, 500, 'swing', function () {
     rotateContents($trigger, imageArray);
  });

}

function rotateContents ($container, n) {
    setTimeout(function () {
      popPushNItems($container, n);
      $container.css({top: 0});
    }, 300);    
}

$(function () {
  $trigger = $('#slotItem1 .item1');
  buildSlotContents($trigger, foodImages);  
  
  
});


function buildSlotContents ($container, imgURLArray) {
  $items = imgURLArray.map(slotMachine1);
  $container.append($items);
}

function popPushNItems ($container, n) {
   // $children = $container.find('.slottt-machine-recipe__item');
    $children = $container.find('.item1');
    $children.slice(0, n).insertAfter($children.last());

    if (n === $children.length) {
      popPushNItems($container, 1);
    }
}



