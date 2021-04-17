class Araignee extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    
     constructor(scene, x, y) {
        super(scene, x, y, "araignee");
        this.body.allowGravity=true;

        this.setDisplaySize(64,64);
        this.setVelocityX(-200);
        this.setCollideWorldBounds(true);
        this.setBounce(1,0.2);
        this.setBodySize(this.body.width-20,this.body.height-25);
        this.setOffset(15,10);


    }
    update(){
        if(this.isAlive){
            if (this.world.player.x > this.x - 100 && this.world.player.x < this.x + 100){
              if (this.world.player.y > this.y - 25 && this.world.player.y < this.y + 25){
                this.setVelocityX=-200;
              }
            }
          }
        if (this.body.velocity.x > 0){
          this.setFlip(true, false);
        }
        else {
          this.setFlip(false, false);
        }
      }
  

}