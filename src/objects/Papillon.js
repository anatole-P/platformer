class Papillon extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "papillon");
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.physics.add.collider(scene.player, this);
        this.body.allowGravity = false;
        this.setBodySize(this.body.width,this.body.height-30);
    
        //this.setGravityY(-300);
        this.setVelocityX(-180);
        this.world = scene;
        this.scale = 1;
        this.isAlive = true;
        this.setCollideWorldBounds(true);
        this.setBounceX(1);
        this.body.immovable = true;
        if(this.isAlive=true){
          scene.time.addEvent({ delay: 700, callback: this.shoot, callbackScope: this, loop: true });
        }
        
    }
    
  shoot(){
    if(this.isAlive){
        new Gproj(this.world,this.x, this.y,'oeuf').setVelocityY(200);
        
      
    }
  }

  update(){
    if (this.body.velocity.x > 0){
      this.setFlip(true, false);
    }
    else {
      this.setFlip(false, false);
    }
    if (this.body.touching.up && this.isAlive){
      this.world.player.setVelocityY(-400);
      this.disableBody(true, true);
      this.isAlive = false;
    }
    }
  
}