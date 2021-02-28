class Mure extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "Mure");
        this.setOrigin(0,0);
        this.setDisplaySize(32,300);
        this.setCollideWorldBounds(true);
        this.body.allowGravity=false;
        this.setBounce(1);
        this.setVelocityY(75);
        //this.physics.add.overlap(this.player, this.mure, this.hitSpike, null, this);

        this.setImmovable(true);


    }
}