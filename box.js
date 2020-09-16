class Box {
    constructor(x,y,w,h){

        var options={
            'restitution':0.8,
            'friction':0.5,
            'density':0.001
        }

        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;
        this.colour=color(random(125,255),random(125,255),random(125,255));
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body);
        this.Visibilty=255;
    }
    
    display(){
        var BoxPos=this.body.position; 
        if(this.body.speed<3){
        push();
        translate(BoxPos.x,BoxPos.y);
        rectMode(CENTER);
        fill(this.colour);
        strokeWeight(4);
        rect(0,0,this.w,this.h);
        pop();
        }else{
         World.remove(world,this.body);
         this.Visibilitty=this.Visibility-5
         tint (255,this.Visibilty);
         rect(0,0,this.w,this.h);

          }
    }

    score(){
        if(this.Visibility<0 && this.Visibilty >-150){
            score++
        }


    }
}