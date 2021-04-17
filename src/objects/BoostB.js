class BoostB extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y,) {
        super(scene, x, y, 'boostB');

        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.physics.add.collider(scene.player, this);
        this.setCollideWorldBounds(true);
        this.body.immovable = true;


        this.setBodySize(this.body.width-15,this.body.height-9);
        this.setGravityY(5000)
        this.world = scene;
        this.scale = 1;
        this.isAlive = true;
        this.dir = 1;

    }

    update(){
      if ((this.body.touching.right && (this.world.player.body.touching.right || this.world.player.body.touching.left))
    || (this.body.touching.left && (this.world.player.body.touching.right || this.world.player.body.touching.left)) 
    || (this.body.touching.up && (this.world.player.body.touching.down)) && this.isAlive){
      this.world.player.setScale(3);
      this.world.time.addEvent({ delay: 1000, callback: this.boost, callbackScope: this, loop: false });

      this.isAlive = false;
      this.disableBody(true, true);
      }
    }

    boost(){
      this.world.player.setScale(1);
    }
}