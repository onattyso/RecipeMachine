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
		slotMachine1();
		slotMachine2();
		slotMachine3();
});

// // IFTTT Slottt Machine by Jen Hamon
// // jen@ifttt.com
// // github.com/jhamon


// function foodItem (imgURL) {
//     return $('<div>').addClass('slottt-machine-recipe__item')
//                      .css({'background-image': 'url(' + imgURL + ')'})
// }

// function buildSlotContents ($container, imgURLArray) {
//   $items = imgURLArray.map(buildSlotItem);
//   $container.append($items);
// }

// function popPushNItems ($container, n) {
//     $children = $container.find('.slottt-machine-recipe__item');
//     $children.slice(0, n).insertAfter($children.last());

//     if (n === $children.length) {
//       popPushNItems($container, 1);
//     }
// }

// // After the slide animation is complete, we want to pop some items off
// // the front of the container and push them onto the end. This is
// // so the animation can slide upward infinitely without adding
// // inifinte div elements inside the container.
// function rotateContents ($container, n) {
//     setTimeout(function () {
//       popPushNItems($container, n);
//       $container.css({top: 0});
//     }, 300);    
// }

// function randomSlotttIndex(max) {
//   var randIndex = (Math.random() * max | 0);
//   return (randIndex > 10) ? randIndex : randomSlotttIndex(max);
// }

// function animate() {
//   var triggerIndex = randomSlotttIndex(triggers.length);
//   var actionIndex = randomSlotttIndex(actions.length);

//   $trigger.animate({top: -triggerIndex*150}, 500, 'swing', function () {
//      rotateContents($trigger, triggerIndex);
//   });

//   $action.animate({top: -actionIndex*150}, 700, 'swing', function () {
//     rotateContents($action, actionIndex);
//   });
// }

// $(function () {
//   $trigger = $('#trigger_slot .slottt-machine-recipe__items_container');
//   buildSlotContents($trigger, triggers);  
//   $action = $('#action_slot .slottt-machine-recipe__items_container');
//   buildSlotContents($action, actions);
  
//   setInterval(animate, 3500);
// });