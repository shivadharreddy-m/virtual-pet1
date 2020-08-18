
var dog, happyDog, database, foodS, foodStock;

function preload()
{
dog=loadImage("dogImg.png");
dogHappy=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(200,200,20,20);
  dog.loadImage("dogImg.png");

  foodstock=database.ref('food');
  foodstock.on("value",readstock);
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}



  drawSprites();
  Text("")

}
function readstock(data){
stock=data.val();
}
function writeStock(x){
  if(x<=0){
   x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
Food:'x'
})
}


