class Quadrado{

    constructor(x,y,w,h){
        var opcoes_quadrado={
            restitution : 0.5,
            frictionAir : 0.01
        }
        
        this.body = Bodies.rectangle(x,y,w,h,opcoes_quadrado);
        this.w = w;
        this.h = h;
        World.add(world, this.body);

    }

    show(){
        var pos = this.body.position
        push();
        rectMode(CENTER);
        stroke(0);
        fill(0,0,139);
        rect(pos.x,pos.y,this.w,this.h);
        pop();

    }











}