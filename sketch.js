//Create variables here
var dog,dog1, happyDog, database, foodS, foodStock;
var database;
function preload()
{
  //load images here
   
  dog = loadImage("Dog.png");
  happyDog=loadImage("happyDog.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog1 = createSprite(300,300);
  dog1.addImage("dog",dog);
  dog1.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  
 
}


function draw() {  
  background("lightblue")
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog1.addImage(happyDog)
    
  }

  drawSprites();
  //add styles here
  fill ("black")
  textSize(20);
  text("FoodStock",200,200)
}
function readStock (data){
foodS=data.val();
}
function writeStock (x){
if(x<=0){
  x=0;
}else{

  x=x-1;
}
  database.ref('/').update({
  Food:x


  })

  
  }