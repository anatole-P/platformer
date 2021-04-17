
let width=14*64; //896;
let height=7*64; //448;ui

let config = {
    type: Phaser.AUTO,


    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100*3},
            debug: true,
        }
    },
    scene: [
        new Ui(),

<<<<<<< Updated upstream
=======
<<<<<<< HEAD

        new TableauTest("triple layers"),
        new TableauTiled("Test Tilted Towers"),
=======
>>>>>>> Stashed changes
        
        new TableauTest("triple layers"),
        new TableauTiled("Test Tilted Towers"),
        new TableauTiled("Test Tilted Towers"),
<<<<<<< Updated upstream
=======
>>>>>>> a1957ca265673b4a64e398b820e3eeab84c4624f
>>>>>>> Stashed changes
        new TableauZoo("J'adore les animals"),
        new Tableau00A("JCVD"),
        new Tableau00("Des étoiles"),
        new Tableau01("Des plateformes"),
        new Tableau02("Plein d'étoiles"),
        new Tableau03("Des plateformes qui bougent"),
        new Tableau04("Jouer avec les groupes"),
        new Tableau05("Extend un tableau"),
        new Tableau06("Un monstre!"),
        new Tableau07("Un monstre volant!"),
        new Tableau08("Un plateau qui sort du cadre"),

    ],
    width: width,
    height: height,
    scale: {
        mode: Phaser.Scale.FIT,
        orientation:Phaser.Scale.LANDSCAPE,
        parent: 'game',
        width: width,
        height: height,
        min: {
            width: 0,
            height: 0
        },
        max: {
            width: width*1.5,
            height: height*1.5
        },
        autoCenter:Phaser.Scale.Center.CENTER_BOTH

    },
    autoRound: false
};
let game;
function resize() {
    /*
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if(windowWidth<width || windowHeight<height){
        if(windowRatio < gameRatio){
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        }
        else {
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }
    }else{
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    }

     */

}
window.onload = function() {
    game=new Phaser.Game(config);
    window.addEventListener("resize", resize, false);
    window.addEventListener("scroll", resize, false);
}
