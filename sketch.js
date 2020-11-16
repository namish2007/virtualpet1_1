//Create variables here
var dog, happyDog,dogsprite,database, foodS, foodStock;
function preload()
{
  var dog = loadImage("dogImg.png");
  var happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dogsprite = createSprite(200,450);
  dogsprite.addImage(dog,"dogImg.png");
  dogsprite.addImage(happyDog);
database = firebase.database();
foodStock = databse.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
textSize(10);
fill("white");
stroke("black");
text("Note: Press UP_ARROW Key to feed Drago Milk");

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  databse.ref('/').update({
    Food:x
  })
}



