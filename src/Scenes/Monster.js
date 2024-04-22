class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.sKey = null;
        
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.arm1X = 400;
        this.arm1Y = 400;
        this.arm2X = 200;
        this.arm2Y = 400;
        this.headX = 300;
        this.headY = 250;
        this.leg1X = 380;
        this.leg1Y = 500;
        this.leg2X = 200;
        this.leg2Y = 500;
        this.eye2X = 300;
        this.eye2Y = 200;
        this.antX = 300;
        this.antY = 120;
        this.mouX = 300;
        this.mouY = 250;
        this.fangX = 300;
        this.fangY = 250;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenA.png");
        my.sprite.righthand= this.add.sprite(this.arm1X, this.arm1Y, "monsterParts", "arm_blueB.png");
        my.sprite.lefthand = this.add.sprite(this.arm2X, this.arm2Y, "monsterParts", "arm_blueB.png");
        my.sprite.lefthand.flipX = true;
        my.sprite.head= this.add.sprite(this.headX, this.headY, "monsterParts", "body_greenE.png");
        my.sprite.rightleg= this.add.sprite(this.leg1X, this.leg1Y, "monsterParts", "leg_blueB.png");
        my.sprite.leftleg = this.add.sprite(this.leg2X, this.leg2Y, "monsterParts", "leg_blueB.png");
        my.sprite.leftleg.flipX = true;
        my.sprite.lefteye = this.add.sprite(this.eye2X, this.eye2Y, "monsterParts", "eye_yellow.png");
        my.sprite.mouth = this.add.sprite(this.mouX, this.mouY, "monsterParts", "mouthA.png");
        my.sprite.antenna = this.add.sprite(this.antX, this.antY, "monsterParts", "detail_blue_antenna_small.png");
        my.sprite.fang = this.add.sprite(this.fangX, this.fangY, "monsterParts", "mouthF.png");
        my.sprite.mouth.visible = false;
        my.sprite.fang.visible = false;
    }   

    update() {
        let my = this.my;
        if (this.sKey.isDown){
            my.sprite.fang.visible = false;
            my.sprite.mouth.visible = true;
        } else if (this.fKey.isDown){
            my.sprite.fang.visible = true;
            my.sprite.mouth.visible = false;
        } 
        if (this.aKey.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= 1;
            }
        }
        if (this.dKey.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += 1;
            }
        }

    }
}
    