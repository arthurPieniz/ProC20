
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var retangulo,bola,quadrado,chao;






function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	quadrado = new Quadrado(100,50,50,50)
	bola = new Bola(700,50,50)
	retangulo = new Quadrado(370,50,100,50)	
		var opcoes_chao={
		isStatic : true
		}

		
	//Crie os Corpos Aqui.
	

	chao = Bodies.rectangle(400,690,800,20,opcoes_chao)
	World.add(world,chao)
		rectMode(CENTER);
		ellipseMode(RADIUS)

	
  
}


function draw() {
  
  
  background(0);
  Engine.update(engine)

	
	rect(chao.position.x,chao.position.y,800,20)
	quadrado.show()
	retangulo.show()
	bola.show()
  drawSprites();
 
}



