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
	return document.getElementById("item1").src=item
};

var slotMachine2 = function () {
	var item = foodImages[Math.floor(Math.random()*foodImages.length)]; 
	console.log(item);
	return document.getElementById("item2").src=item
};

var slotMachine3 = function () {
	var item = foodImages[Math.floor(Math.random()*foodImages.length)]; 	
	console.log(item);
	return document.getElementById("item3").src=item
};

$(document).click(function(){
		slotMachine1();
		slotMachine2();
		slotMachine3();
});

$(window).resize(function(){

	$('#container').css({
		position:'absolute',
		left: ($(window).width() - $('#container').outerWidth())/2,
		top: ($(window).height() - $('#container').outerHeight())/2
	});

});

// To initially run the function:
$(window).resize();

// // IFTTT Slottt Machine by Jen Hamon
// // jen@ifttt.com
// // github.com/jhamon


// function buildSlotItem (imgURL) {
//     return $('<div>').addClass('slottt-machine-recipe__item')
//                      .css({'background-image': 'url(' + imgURL + ')'})
// }

function buildSlotContents ($container, imgURLArray) {
  $items = imgURLArray.map(slotMachine1);
  $container.append($items);
}

function popPushNItems ($container, n) {
    $children = $container.find('.item1');
    $children.slice(0, n).insertAfter($children.last());

    if (n === $children.length) {
      popPushNItems($container, 1);
    }
}

// // After the slide animation is complete, we want to pop some items off
// // the front of the container and push them onto the end. This is
// // so the animation can slide upward infinitely without adding
// // inifinte div elements inside the container.
function rotateContents ($container, n) {
    setTimeout(function () {
      popPushNItems($container, n);
      $container.css({top: 0});
    }, 300);    
}

function randomSlotttIndex(max) {
  var randIndex = (Math.random() * max | 0);
  return (randIndex > 1) ? randIndex : randomSlotttIndex(max);
}

function animate() {
  var foodIndex = randomSlotttIndex(foodImages.length);

  $trigger.animate({top: -foodIndex*150}, 500, 'swing', function () {
     rotateContents($trigger, foodIndex);
  });

  // $action.animate({top: -actionIndex*150}, 700, 'swing', function () {
  //   rotateContents($action, actionIndex);
  // });
}

$(function () {
  $trigger = $('#slotMachine1 .item1');
  buildSlotContents($trigger, foodImages);  
  // $action = $('#action_slot .slottt-machine-recipe__items_container');
  // buildSlotContents($action, actions);
  
  setInterval(animate, 3500);
});