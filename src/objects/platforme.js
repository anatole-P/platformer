class plateforme extends ObjetEnnemi{
    /** 
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "mure");
        
        //this.mure=this.physics.add.sprite(50,100,"plat");
        this.mure.setOrigin(0,0);
        this.mure.setDisplaySize(32,300);
        this.mure.setCollideWorldBounds(true);
        this.mure.body.allowGravity=false;
        this.mure.setBounce(1);
        this.mure.setVelocityY(50);
        this.physics.add.overlap(this.player, this.mure, this.hitSpike, null, this);
        this.mure.setImmovable(true);
    }
}