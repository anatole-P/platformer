
class Player extends Phaser.Physics.Arcade.Sprite{
    
    constructor(scene, x, y) {
        super(scene, x, y, "player")
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.V=160;
        this.setCollideWorldBounds(true)
        this.setBounce(0.3);
        this.setGravityY(700)
        this.setFriction(1,1);
        this.setScale(1);

        this.setBodySize(this.body.width-6,this.body.height-10);
        this.setOffset(3, 10);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'player', frame: 4 } ],
            frameRate: 20
        });

        this._directionX=0;
        this._directionY=0;


        //dash
        this.dashAvailable = true;
        this.dashBasic = 1500
        this.delayDash = this.dashBasic;

    }

    set directionX(value){
        this._directionX=value;
    }
    set directionY(value){
        this._directionY=value;
    }

    /**
     * arrête le joueur
     */
    stop(){
        this.setVelocityX(0);
        this.setVelocityY(0);
        this.directionY=0;
        this.directionX=0;
    }

    /**
     * Déplace le joueur en fonction des directions données
     */
    move(V){

        switch (true){
            case this._directionX<0:
                this.setVelocityX(-V);
                this.anims.play('left', true);
                break;
            case this._directionX>0:

                this.setVelocityX(V);
                this.anims.play('right', true);
                break;
            default:
                this.setVelocityX(0);
                this.anims.play('turn');
        }

        if(this._directionY<0){
            if(this.body.blocked.down || this.body.touching.down){
                this.setVelocityY(-550);
            }
        }

    }

      powerUp(scene, time, delta){
        //console.log(scene);
        //console.log(time, delta);
        this.dashUse = scene.input.keyboard.addKey('SPACE');

            //dash
            if (this.dashUse.isDown){
                if(this.dashAvailable){
                    //console.log("coucou"); //On fait un truc
                    this.dash();
                    this.dashAvailable = false;
                }
                else {
                    //console.log("Sort non utilisable"); //on peut rien faire
                }
                }
        
                if (this.dashAvailable == false){
                //console.log("recharge"); //on attends
                this.delayDash -= delta;
                if (this.delayDash < 0){
                    //console.log("Sort recup"); //on recup
                    this.dashAvailable = true;
                    this.delayDash = this.dashBasic;
                }
                }
            
        }

        dash(){ // la vitesse est la pour le dash //target est la cible du dash
            var posX = this.x / 64;
            posX = Math.trunc(posX);
            console.log("Ca dashhhhhhh");
            var target;
            if (this._directionX > 0){
              target = posX + 8;
            }
            else if (this._directionX < 0){
              target = posX - 8;
            }
            else {
              target = posX;
            }
    
              if (target > posX){
                this.setVelocityX(8000);
              }
              else if (target < posX){
                this.setVelocityX(-8000);
            }
          }

}