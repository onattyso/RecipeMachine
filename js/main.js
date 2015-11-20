var recipename = "";
var fruit;
var go = true; 
var counter = 0; 
var interval1; 
var interval2;
var interval3;
var foodItem1;
var foodItem2;
var foodItem3;

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
	foodItem1 = item;
	return $('#slotItem1').addClass('item1').css({'background-image':'url(' + item + ')'});
};

var slotMachine2 = function () {
	var item = foodImages[Math.floor(Math.random()*foodImages.length)]; 
	foodItem2 = item;
	return $('#slotItem2').addClass('item2').css({'background-image':'url(' + item + ')'});
};

var slotMachine3 = function () {
	var item = foodImages[Math.floor(Math.random()*foodImages.length)]; 	
	foodItem3 = item;
	return $('#slotItem3').addClass('item3').css({'background-image':'url(' + item + ')'});
};

$(document).click(function(){
	
	// set a bool here to make sure that we don't restart the animation while it's animating (go is set to true only after 3rd animation stops) 
	if (go)
	startAnimation();

	setTimeout(stopAnimation1, 2000);
	setTimeout(stopAnimation2, 2500);
	setTimeout(stopAnimation3, 3000);

	// counter++;
	// console.log(counter);

});


function startAnimation(){

	interval1 = setInterval(animate1, 30);
	interval2 = setInterval(animate2, 30);
	interval3 = setInterval(animate3, 30);
	console.log("start Animation");
};

function stopAnimation1(){
	clearInterval(interval1);
}

function stopAnimation2(){
	clearInterval(interval2);
}

function stopAnimation3(){

	counter++;
 	
	console.log(foodItem1 + " " + foodItem2 + " " +  foodItem3);

 	if (foodItem1 == foodItem2 && foodItem2 == foodItem3){
 		console.log("MATCH!");
 	}
 	else{
 		console.log("no match");
 		
 	}

 	clearInterval(interval3);
 	console.log("animation " + counter + " stopped");

 	go = true;
	
};

function animate1() {
	slotMachine1();
	go = false;
}
function animate2() {
	slotMachine2();
}
function animate3() {
	slotMachine3();
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



