class Rat extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "rat");
        this.body.allowGravity=true;

        this.setDisplaySize(64,64);
        this.setVelocityX(-100);
        this.setCollideWorldBounds(true);
        this.setBounce(1,0);
        this.setBodySize(this.body.width,this.body.height-30);
        this.setOffset(0,7);

    }

    update(){
        if (this.body.velocity.x > 0){
          this.setFlip(true, false);
        }
        else {
          this.setFlip(false, false);
        }
        
      }

}