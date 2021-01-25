class TableauZoo extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('monster-violet', 'assets/monster-violet.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('creeper', 'assets/creeper.png');
        this.load.image('egg', 'assets/oeuf.png');
        this.load.image('aigle', 'Pygargue.png');
        this.load.image();


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

        let groupeVert = this.physics.add.staticGroup();
        let groupeVertical = this.physics.add.staticGroup();
        groupeVert.create(300, 50, 'ground');
        groupeVert.create(325, 200, 'ground');
        groupeVertical.create(300,75, 'ground');
        groupeVertical.create(500,50, 'ground');




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

        
        this.physics.add.collider(this.player, groupeVert);//le joueur rebondit sur les plateformes du goupe vert
        this.physics.add.collider(this.monstre, groupeVert);//l'étoile1 rebondit sur les plateformes du goupe vert
        this.physics.add.collider(this.monstre, groupeVertical);
        this.physics.add.collider(this.player, groupeVertical);
    }

}

