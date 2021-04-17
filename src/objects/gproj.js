class Gproj extends ObjetEnnemi{

    constructor(scene, x, y,) {
        super(scene, x, y, 'oeuf');

		scene.add.existing(this);
    scene.physics.add.existing(this);
		scene.physics.add.overlap(scene.player, this, scene.restart, null, scene);
    this.body.allowGravity = true;
    this.scale = 0.5;

    }

}