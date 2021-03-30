var dog,sadDog,happyDog;
var foodObj,foodObjImg
var database;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
 
}

function setup() {
  createCanvas(1000,400);
 
  database= firebase.database();
  console.log(database);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj=new Food(100,200);
 

feed = createButton("Feed the dog")
feed.position(700,95);
feed.mousePressed(feedDog);

addFood = createButton("Add food")
addFood.position(800,95);
addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  
  foodObj.display();


  drawSprites();
}

//function to read food Stock
function readFoodStock(){
  
}

//function to update food stock and last fed time
function feedDog(){
dog.addImage(happyDog)
dog.y-=115;
dog.x-=650;
if(foodObj.getFoodStock()<= 0){
  foodObj.updateFoodStock(foodObj.getFoodStock()*0)

}else{
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
}
}

//function to add food in stock
function addFoods(){
foods++;
database.ref('/').update({
Food:foods
})
}