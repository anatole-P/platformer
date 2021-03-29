class TableauTest extends Tableau{
//layers
    preload() {
        super.preload();
        this.load.image('soldat','assets/soldat.png');
        this.load.image('helico','assets/helicopter.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('1ereCouche', 'assets/1ereCouche.png');
        this.load.image('2eCouche','assets/2eCouche.png');
        this.load.image('3eCouche','assets/3eCouche.png');
        //this.load.image('ciel','assets/ciel.png');
        this.load.image('sol','assets/sol.png');
    }
    create() {
        super.create();

        //on définit la taille du tableau
        let largeurDuTableau=4000;
        let hauteurDuTableau=600; //la hauteur est identique au cadre du jeu
        this.cameras.main.setBounds(0, 0, largeurDuTableau, hauteurDuTableau);
        this.physics.world.setBounds(0, 0, largeurDuTableau,  hauteurDuTableau);

        this.cameras.main.startFollow(this.player, false, 0.05, 0.05);

        //quelques étoiles et plateformes qui vont avec
        this.stars=this.physics.add.group();
        this.platforms=this.physics.add.staticGroup();
        for(let posX=20;posX<largeurDuTableau;posX+=150){
            let etoileY=350+Math.sin(posX)*100;
            let star=this.stars.create(posX ,etoileY,"star");
            star.body.allowGravity=false;
            let plate=this.platforms.create(posX ,etoileY+50,"ground");
            plate.setDisplaySize(60,10);
            plate.refreshBody();
        }
        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);
        this.physics.add.collider(this.player,this.platforms);


        /*this.sky10=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'ciel'
        );
        this.sky10.setOrigin(0,0);
        this.sky10.setScrollFactor(1);*/

        this.sky3=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            '3eCouche'
        );
        this.sky3.setScrollFactor(0);
        this.sky3.setOrigin(0,0);



                //on ajoute une deuxième couche de ciel
        this.sky2=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            '2eCouche'
        );
        this.sky2.setScrollFactor(0);
        this.sky2.setOrigin(0,0);
        //this.sky2.alpha=0.2;
        //on change de ciel, on fait une tileSprite ce qui permet d'avoir une image qui se répète
        this.sky=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            '1ereCouche'
        );
        this.sky.setOrigin(0,0);
        this.sky.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra


        //this.sky.tileScaleX=this.sky.tileScaleY=0.8;

        //on ajoute une deuxième couche de ciel


        this.sky99=this.add.tileSprite(
            0,
            hauteurDuTableau-220,
            this.sys.canvas.width,
            this.sys.canvas.height*0.16,
            'sol'
        );
        this.sky99.setOrigin(0,0);
        this.sky99.setScrollFactor(0);
        
        //fait passer les éléments devant le ciel
        this.platforms.setDepth(10);
        this.stars.setDepth(10);
        this.player.setDepth(10);

        this.soldat1 = new Soldat(this,600,height-30);
        this.soldat2 = new Soldat(this,1400,height-64);

        this.helico1 = new Helicopter(this,800,200);
        this.helico2 = new Helicopter(this,1300,200);
    }

    update(){
        super.update();
        //le ciel se déplace moins vite que la caméra pour donner un effet paralax
        this.sky.tilePositionX=this.cameras.main.scrollX*0.6;
        //this.sky.tilePositionY=this.cameras.main.scrollY*0.2;
        //le deuxième ciel se déplace moins vite pour accentuer l'effet
        this.sky2.tilePositionX=this.cameras.main.scrollX*0.3+500;
        //this.sky2.tilePositionY=this.cameras.main.scrollY*0.1+30;
        //this.sky10.tilePositionX=this.cameras.main.scrollX*0;
        this.sky3.tilePositionX=this.cameras.main.scrollX*0.2;
        //this.sky3.tilePositionY=this.cameras.main.scrollY*0.05;
        this.sky99.tilePositionX=this.cameras.main.scrollX;
        //this.helico1.rotation = 0.2;
    }



}

