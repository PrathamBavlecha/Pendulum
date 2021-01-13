class Bob{
    constructor(x,y){
        var option = {
            isStatic: false,
            density: 2
        }
        this.body = Bodies.circle(x,y,50,option)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push ()
        ellipseMode(RADIUS)
        translate (pos.x,pos.y)
        rotate (angle)
        ellipse(0,0,50,50)
        pop ()
    }
}