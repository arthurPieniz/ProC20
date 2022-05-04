class Bola{

    constructor(x,y,w){
        var opcoes_bola={
            restitution : 0.6,
            frictionAir : 0.0
        }
        
        this.body = Bodies.circle(x,y,w,opcoes_bola);
        this.w = w;
        
        World.add(world, this.body);
    
    }

    show(){
        var pos = this.body.position
        push();
        ellipseMode(RADIUS);
        stroke(0);
        fill(0,0,139);
        ellipse(pos.x,pos.y,this.w);
        pop();
    }
    }