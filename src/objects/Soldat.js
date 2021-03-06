class Soldat extends ObjetEnnemi{

    constructor(scene, x, y) {
        super(scene, x, y, "soldat");

        
        this.setOrigin(0,0);
        this.setDisplaySize(64,64);
        this.setCollideWorldBounds(true);
        this.setBounce(0);
        this.setVelocityX(50);
        this.physics.add.overlap(this.player, this.Soldat, this.hitSpike, null, this);
        

        
    }

    update(){
        //fait changer de sens notre soldat
        if(this.body){
            if(this.body.velocity.x<0){
                this.flipX=true;
            }else{
                this.flipX=false;
            }
        }
    
    }
}