class Creeper extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    
    constructor(scene, x, y) {
        super(scene, x, y, "creeper.png");
        this.creeper=this.physics.add.sprite(400,100,"creeper");
        this.creeper.setOrigin(0,0);
        this.creeper.setDisplaySize(84,100);
        this.creeper.setCollideWorldBounds(true);
        this.creeper.body.allowGravity=true;
        this.creeper.setBounceX(1);
        this.creeper.setBounceY(0.5);
        this.creeper.setVelocityX(80);
        this.physics.add.overlap(this.player, this.creeper, this.hitSpike, null, this);
    }


}