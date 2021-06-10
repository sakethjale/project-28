class L{
    constructor(bodyA,point){
        var options = {
            bodyA: bodyA,
           pointB: point,
            stiffness: 0.1,
            length: 10
        }
        this.pointB=point;
        this.pp = Constraint.create(options);
        World.add(world, this.pp);
    }

    attach(body){
        this.pp.bodyA=body;
    }
    p(){
        this.pp.bodyA=null
    }

    display(){
       if(this.pp.bodyA){
        var pointA = this.pp.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    
}