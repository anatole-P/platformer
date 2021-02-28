class TableauZoo extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('monster-violet', 'assets/monster-violet.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('creeper', 'assets/creeper.png');
        this.load.image('egg', 'assets/oeuf.png');
        this.load.image('Aigle', 'assets/Pygargue.png');
        this.load.image('Mure','assets/platform2.png');

//test
    }
    create() {
        super.create();
        
        //quelques étoiles
        let largeur=64*2;
        this.stars=this.physics.add.group();
        for(let posX=largeur/2;posX<largeur*7;posX+=largeur){
            this.stars.create(posX ,0,"star");
        }
        this.stars.children.iterate(function (child) {
            child.setBounce(1);
            child.setGravity(1);
            child.setCollideWorldBounds(true);
            child.setVelocity( 0,Phaser.Math.Between(-100, 100));
            child.setMaxVelocity(0,500);
        });
        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);

        //notre monstre
        this.monstre=this.physics.add.sprite(350,100,"monster-violet");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(50);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);


        //Aigle qui lancera des bombes
       /* this.aigle=this.physics.add.sprite(30,this.sys.canvas.height-250,"aigle");
        this.aigle.setOrigin(0,0);
        this.aigle.setDisplaySize(90,60);
        this.aigle.setCollideWorldBounds(true);
        this.aigle.body.allowGravity=false;
        this.aigle.setBounce(1);
        this.aigle.setVelocityX(200);
        this.physics.add.overlap(this.player, this.aigle, this.hitSpike, null, this);*/
        
        new Aigle(this,30,250);

        //Monstre qui tuera avec animation explosion avec un petit délai
        this.creeper=this.physics.add.sprite(400,100,"creeper");
        this.creeper.setOrigin(0,0);
        this.creeper.setDisplaySize(84,100);
        this.creeper.setCollideWorldBounds(true);
        this.creeper.body.allowGravity=true;
        this.creeper.setBounceX(1);
        this.creeper.setBounceY(0.5);
        this.creeper.setVelocityX(80);
        this.physics.add.overlap(this.player, this.creeper, this.hitSpike, null, this);

        //piques ou murs qui écrasent le joueur si il se fait toucher
        /*this.mure=this.physics.add.sprite(50,100,"plat");
        this.mure.setOrigin(0,0);
        this.mure.setDisplaySize(32,300);
        this.mure.setCollideWorldBounds(true);
        this.mure.body.allowGravity=false;
        this.mure.setBounce(1);
        this.mure.setVelocityY(50);
        this.physics.add.overlap(this.player, this.mure, this.hitSpike, null, this);
        this.mure.setImmovable(true);*/
        new Mure (this, 50, 100) ;

        console.log("a")

        let groupeVertical = this.physics.add.staticGroup();
        groupeVertical.create(300,75, 'ground');
        groupeVertical.create(500,50, 'ground');

        let groupeVert = this.physics.add.staticGroup();
        groupeVert.create(300, 50, 'ground');
        groupeVert.create(325, 200, 'ground');
        groupeVert.children.iterate(function (child) {
            //child.setTintFill(0x00FF00); //applique une couleur verte
            child.setDisplaySize(200,25);//taille de l'objet
            child.setOrigin(0,0);//pour positionner plus facilement
            child.refreshBody();//dit au groupe d'appliquer les changements
        });

        groupeVertical.children.iterate(function (child) {
            //child.setTintFill(0x00FF00); //applique une couleur verte
            child.setDisplaySize(25,150);//taille de l'objet
            child.setOrigin(0,0);//pour positionner plus facilement
            child.refreshBody();//dit au groupe d'appliquer les changements
        });

        
       // this.physics.add.collider(this.player, groupeVert);//le joueur rebondit sur les plateformes du goupe vert

        this.physics.add.collider(this.player, groupeVertical);
        this.physics.add.collider(this.player, groupeVert);
        this.physics.add.collider(this.monstre, groupeVert);//l'étoile1 rebondit sur les plateformes du goupe vert
        this.physics.add.collider(this.monstre, groupeVertical);
        //this.physics.add.collider(this.mure, groupeVert);
        //this.physics.add.collider(this.mure, groupeVertical);
        this.physics.add.collider(this.creeper, groupeVertical);
        //this.physics.add.collider(this.aigle, groupeVertical);
        this.physics.add.collider(this.creeper, groupeVert);
        //this.physics.add.collider(this.aigle, groupeVert);
        this.physics.add.collider(this.monstre, groupeVert);//l'étoile1 rebondit sur les plateformes du goupe vert
        this.physics.add.collider(this.aigle, this.mure);

    }

}

