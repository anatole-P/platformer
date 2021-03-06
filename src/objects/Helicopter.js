class helicopter extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "helicopter");
        //pas de gravité
        this.body.allowGravity=false;
        this.setVelocityX(-35);
        //gestion de la taille
        this.setDisplaySize(64,64);


       



    }



}