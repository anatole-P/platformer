class Tableau00A extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('sky-2', 'assets/sky-2.jpg');
        //this.load.image('ploatform','assets/platform.png');
    }
    create() {
        super.create();
        this.sky=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'sky-2'
        );
        this.sky.setOrigin(0,0);
        //fait passer les éléments devant le ciel
        //this.groupeVert.setDepth(10)
        //this.stars.setDepth(10)
        this.player.setDepth(10)
        

        let groupeVert = this.physics.add.staticGroup();
        groupeVert.create(300, 250, 'ground');
        groupeVert.create(350, 260, 'ground');
        groupeVert.create(400, 270, 'ground');
        groupeVert.create(450, 280, 'ground');
        groupeVert.create(500, 290, 'ground');
        groupeVert.create(700, 300, 'ground');

        //pour chacun des enfants du groupe
        groupeVert.children.iterate(function (child) {
            //child.setTintFill(0x00FF00); //applique une couleur verte
            child.setDisplaySize(40,50);//taille de l'objet
            child.setOrigin(0,0);//pour positionner plus facilement
            child.refreshBody();//dit au groupe d'appliquer les changements
        });

        //des étoiles
       /* for(let i=0;i<500;i++){
            this.star.create(i,0,"star").setCollideWorldBounds(true).setBounce(0.4);
            
        }*/
        this.stars=this.physics.add.group();
        for (let i = 0; i < 50; i++) {
            this.stars.create(i*75,0,"star");
            
        }

        this.stars.children.iterate(function (child) {
            child.setCollideWorldBounds(true);
            child.setBounce(1);
        });

        //quand le joueur touche une étoile on appelle la fonction ramasserEtoile
        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);
        
        this.physics.add.collider(this.player, groupeVert);//le joueur rebondit sur les plateformes du goupe vert
        this.physics.add.collider(this.stars, groupeVert);//l'étoile1 rebondit sur les plateformes du goupe vert

        
        let me=this;
        this.stars.children.iterate(function(child){
            me.tweens.add(
                {
                    targets:child,
                    rotation:Phaser.Math.DegToRad(360),
                    duration:10000,
                    repeat:-1
                }
            )
        })
    }
    update(){
        super.update();
        this.sky.tilePositionX++;
    }
}

