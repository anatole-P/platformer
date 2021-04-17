class Helicopter extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
     constructor(scene, x, y) {
        super(scene, x, y, "helico");
        this.setDisplaySize(128,64);
        this.setBodySize(this.body.width-20,this.body.height-20);
        this.setOffset(10, 10);
        this.setBounce(1);
        this.setCollideWorldBounds(true);
        this.setVelocityX(300);
        this.setDepth(10);
        this.body.allowGravity=false;

 // X
 this.originalX=x;
 this.minX=x-200;
 this.maxX=x+200;



 // on applique les propriétés du début de l'animation
 this.x=this.minX;
 this.alpha=0;
 let me=this;

 //on fait apparaitre notre objet avec un petit delay, puis on lance l'animation
 //ceci a pour effet de décaler les animations pour ce même objet
 scene.tweens.add({
         targets:this,
         duration:200,
         delay:Math.random()*1000,
         alpha:{
             startDelay:Math.random()*5000,
             from:0,
             to:1,
         },
         rotation: 0.2,
         onComplete: function () {
             me.start();
         }
     })

}

start(){
 this.scene.tweens.add({
     targets: this,
     x: {
         from: this.minX,
         to:this.maxX,
         duration: 10*500,
         ease: 'Sine.easeInOut',
         yoyo: -1,
         repeat:-1,
         
         flipX:true,
     },
 });
}

}