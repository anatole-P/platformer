class Soldat extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
     constructor(scene, x, y) {
        super(scene, x, y, "soldat");
        this.body.allowGravity=true;

        this.setDisplaySize(64,64);
        this.setVelocityX(100);
        this.setCollideWorldBounds(true);
        this.setBounce(1,0);
        

    }
    update(){
        if (this.body.velocity.x > 0){
          this.setFlip(false, false);
        }
        else {
          this.setFlip(true, false);
        }
      }
  

}