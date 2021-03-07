class Soldat extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
     constructor(scene, x, y) {
        super(scene, x, y, "soldat");
        //pas de gravité
        this.body.allowGravity=true;
        this.setCollideWorldBounds(true);
        //gestion de la taille...car attention notre png est très grand (et c'est maaaaal car pas optimisé)
        this.setDisplaySize(64,64);
        this.setBounceX(1);
        //on réduit un peu la zone de hit
        this.setBodySize(this.body.width,this.body.height);
        //this.setOffset(150, 250);

        //définir les propriété que l'on va utiliser dans notre animation

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