var textY = 0;
var count = 0;
var patrolDistance = 25;
var bulletDistance = 500;
var jumpHeight = -250;
var spaceBar;
var weapon;
var fireButton;
var enemyAccuracy = 0;
var speedIncrease = 0;
var _text;
var _text1; 

var playState = {

	create: function() {
		this.keyboard = game.input.keyboard;
		
		console.log(playerDeaths);
		
		this.initScene();
	
		this.add.sprite(-485, -534, 'Background');
	
		this.add.sprite(2912, -532, 'Background');
		
		this.add.sprite(6309, -538, 'Background');
		
		this.add.sprite(9710, -538, 'Background');
		
		var _collisionLayer = this.add.physicsGroup(Phaser.Physics.ARCADE);
		_collisionLayer.position.setTo(-13, 374);
		
		var _collisionTIle_png = this.add.tileSprite(19, 340, 597, 144, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png.scale.setTo(1.0, 0.988031957832946);
		
		var _collisionTIle_png2 = this.add.tileSprite(1020, 605, 597, 144, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png2.scale.setTo(0.4270096599793312, -0.37633004851804336);
		
		var _collisionTIle_png5 = this.add.sprite(149, 341, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png5.scale.setTo(4.816000373081679, 1.0);
		
		var _collisionTIle_png6 = this.add.sprite(743, 455, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png6.scale.setTo(2.187999303831606, 1.0);
		
		var _collisionTIle_png1 = this.add.sprite(1042, 549, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png1.scale.setTo(3.2002010843020887, 1.0);
		
		var _collisionTIle_png4 = this.add.sprite(1349, 491, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png4.scale.setTo(1.2488327608754997, 0.8949998215757661);
		
		var _collisionTIle_png7 = this.add.sprite(1462, 436, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png7.scale.setTo(2.7107200945169647, 1.2488317528126107);
		
		var _collisionTIle_png8 = this.add.sprite(1722, 388, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png8.scale.setTo(5.663393816726356, 1.1244160308813747);
		
		var _collisionTIle_png9 = this.add.sprite(2421, 518, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png9.scale.setTo(13.517153631835749, 1.3836157332693242);
		
		var _collisionTIle_png10 = this.add.sprite(2080, 225, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png10.scale.setTo(1.1288351180801566, 0.7749992985594255);
		
		var _collisionTIle_png11 = this.add.sprite(2189, 190, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png11.scale.setTo(1.1288351180801566, 0.7749992985594255);
		
		var _collisionTIle_png12 = this.add.sprite(2299, 153, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png12.scale.setTo(1.1288351180801566, 0.7749992985594255);
		
		var _collisionTIle_png13 = this.add.sprite(2406, 117, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png13.scale.setTo(1.1288351180801566, 0.7749992985594255);
		
		var _collisionTIle_png14 = this.add.sprite(2308, 439, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png14.scale.setTo(1.1288351180801566, 0.7749992985594255);
		
		var _collisionTIle_png15 = this.add.sprite(2608, 9, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png15.scale.setTo(13.517153631835749, 1.3836157332693242);
		
		var _collisionTIle_png16 = this.add.sprite(3952, 194, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png16.scale.setTo(10.4067506619102, 1.3836157332693242);
		
		var _collisionTIle_png17 = this.add.sprite(4715, 130, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png17.scale.setTo(2.5285136607686076, 1.1897193168865952);
		
		var _collisionTIle_png18 = this.add.sprite(3937, 127, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png18.scale.setTo(2.5285136607686076, 1.1897193168865952);
		
		var _collisionTIle_png3 = this.add.sprite(5178, 140, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png3.scale.setTo(2.5285136607686076, 1.5266790966980077);
		
		var _collisionTIle_png19 = this.add.sprite(5730, 463, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png19.scale.setTo(2.5285136607686076, 1.5266790966980077);
		
		var _collisionTIle_png20 = this.add.sprite(6268, 466, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png20.scale.setTo(2.5285136607686076, 1.5266790966980077);
		
		var _collisionTIle_png21 = this.add.sprite(6564, 636, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png21.scale.setTo(2.5285136607686076, 1.5266790966980077);
		
		var _collisionTIle_png22 = this.add.sprite(6977, 475, 'tileset', 'collisionTIle.png', _collisionLayer);
		_collisionTIle_png22.scale.setTo(6.235071778749543, 1.5266790966980077);
		
		if (playerDeaths == 0) {
			_text = this.add.text(6, 591, 'Use A and D to move left and right.', {"font":"bold 20px Arial"});
			_text.scale.setTo(0.9378092100602295, 1.1502605313212921);
			_text1 = this.add.text(1078, 775, 'Use W to jump', {"font":"bold 20px Arial"});
			_text1.scale.setTo(1.067611520484361, 1.0751302236089735);
		} else {};

		var _fallDeath = this.add.sprite(-1267, 1173, 'tileset', 'collisionTIle.png');
		_fallDeath.scale.setTo(102.22851642096776, 1.0);
		
		var _Object_4_png = this.add.sprite(3485, 832, 'tileset', 'Object_4.png');
		_Object_4_png.scale.setTo(0.2518443931968381, 0.22530243418739826);
		this.game.physics.arcade.enable(_Object_4_png);
		_Object_4_png.body.skipQuadTree = true;
		
		var _scenery = this.add.group();
		_scenery.position.setTo(-13, 374);
		
		var _Tile_13_png1 = this.add.sprite(2078, 169, 'tileset', 'Tile_13.png', _scenery);
		_Tile_13_png1.scale.setTo(0.4374999595199286, 0.5050000128334509);
		
		var _Tile_13_png2 = this.add.sprite(2187, 137, 'tileset', 'Tile_13.png', _scenery);
		_Tile_13_png2.scale.setTo(0.4374999595199286, 0.5050000128334509);
		
		var _Tile_13_png3 = this.add.sprite(2298, 98, 'tileset', 'Tile_13.png', _scenery);
		_Tile_13_png3.scale.setTo(0.4374999595199286, 0.5050000128334509);
		
		var _Tile_13_png4 = this.add.sprite(2405, 61, 'tileset', 'Tile_13.png', _scenery);
		_Tile_13_png4.scale.setTo(0.4374999595199286, 0.5050000128334509);
		
		var _Tile_13_png5 = this.add.sprite(2306, 385, 'tileset', 'Tile_13.png', _scenery);
		_Tile_13_png5.scale.setTo(0.4374999595199286, 0.5050000128334509);
		
		this.add.sprite(2341, 406, 'tileset', 'Tile_10.png', _scenery);
		
		this.add.sprite(2595, 403, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(2846, 403, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(3087, 402, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(3338, 402, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(3559, 403, 'tileset', 'Tile_12.png', _scenery);
		
		this.add.sprite(2520, -105, 'tileset', 'Tile_10.png', _scenery);
		
		this.add.sprite(2774, -105, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(3025, -105, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(3266, -105, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(3522, -105, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(3778, -106, 'tileset', 'Tile_12.png', _scenery);
		
		this.add.sprite(3957, 78, 'tileset', 'Tile_2.png', _scenery);
		
		this.add.sprite(4201, 79, 'tileset', 'Tile_2.png', _scenery);
		
		this.add.sprite(4447, 79, 'tileset', 'Tile_2.png', _scenery);
		
		this.add.sprite(4691, 79, 'tileset', 'Tile_2.png', _scenery);
		
		this.add.sprite(3930, 2, 'tileset', 'Tile_13.png', _scenery);
		
		this.add.sprite(-64, 231, 'tileset', 'Tile_10.png', _scenery);
		
		this.add.sprite(192, 231, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(754, -42, 'tileset', 'Object_20.png', _scenery);
		
		var _Object_1_png = this.add.sprite(304, 175, 'tileset', 'Object_1.png', _scenery);
		_Object_1_png.scale.setTo(0.7131248474543919, 0.6850000128024378);
		
		this.add.sprite(441, 231, 'tileset', 'Tile_12.png', _scenery);
		
		this.add.sprite(718, 346, 'tileset', 'Tile_13.png', _scenery);
		
		this.add.sprite(1620, 536, 'tileset', 'Tile_4.png', _scenery);
		
		this.add.sprite(1619, 282, 'tileset', 'Tile_1.png', _scenery);
		
		this.add.sprite(1870, 536, 'tileset', 'Tile_5.png', _scenery);
		
		this.add.sprite(1685, -112, 'tileset', 'Object_17.png', _scenery);
		
		this.add.sprite(1870, 280, 'tileset', 'Tile_2.png', _scenery);
		
		this.add.sprite(1399, 296, 'tileset', 'Object_9.png', _scenery);
		
		this.add.sprite(2117, 536, 'tileset', 'Tile_6.png', _scenery);
		
		this.add.sprite(2116, 281, 'tileset', 'Tile_3.png', _scenery);
		
		this.add.sprite(944, 550, 'tileset', 'Tile_4.png', _scenery);
		
		this.add.sprite(1200, 550, 'tileset', 'Tile_6.png', _scenery);
		
		var _Tile_11_png1 = this.add.sprite(1347, 387, 'tileset', 'Tile_11.png', _scenery);
		_Tile_11_png1.scale.setTo(1.0, 0.9381250169300653);
		
		this.add.sprite(1460, 326, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(1412, 552, 'tileset', 'Tile_5.png', _scenery);
		
		this.add.sprite(1577, 552, 'tileset', 'Tile_6.png', _scenery);
		
		this.add.sprite(1210, 551, 'tileset', 'Tile_4.png', _scenery);
		
		this.add.sprite(1189, 550, 'tileset', 'Tile_5.png', _scenery);
		
		var _Object_5_png = this.add.sprite(428, 218, 'tileset', 'Object_5.png', _scenery);
		_Object_5_png.scale.setTo(0.4600000737980924, 0.4825000205795713);
		
		this.add.sprite(1021, 311, 'tileset', 'Object_2.png', _scenery);
		
		this.add.sprite(4715, 11, 'tileset', 'Tile_13.png', _scenery);
		
		this.add.sprite(5169, 26, 'tileset', 'Tile_13.png', _scenery);
		
		this.add.sprite(5723, 344, 'tileset', 'Tile_13.png', _scenery);
		
		this.add.sprite(6559, 525, 'tileset', 'Tile_13.png', _scenery);
		
		this.add.sprite(6896, 367, 'tileset', 'Tile_10.png', _scenery);
		
		this.add.sprite(7152, 367, 'tileset', 'Tile_11.png', _scenery);
		
		this.add.sprite(7406, 367, 'tileset', 'Tile_12.png', _scenery);
		
		this.add.sprite(6256, 349, 'tileset', 'Tile_13.png', _scenery);
		
		var _pyromaniacOrc = this.add.sprite(1850, 650, 'pyromaniacOrc', 0);
		_pyromaniacOrc.scale.setTo(1.849971232167875, 1.9946469263728686);
		_pyromaniacOrc.anchor.setTo(0.5, 0.0);
		this.game.physics.arcade.enable(_pyromaniacOrc);
		_pyromaniacOrc.body.skipQuadTree = true;
		_pyromaniacOrc.animations.add('idleAI', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 6, true);
		_pyromaniacOrc.animations.add('walkAI', [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 8, true);
		_pyromaniacOrc.animations.add('deathAI', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 6, true);
		_pyromaniacOrc.animations.add('attackAI', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 9, true);
		
		
		
		var _NobleRanger = this.add.sprite(103, 571, 'NobleRanger', 0);
		_NobleRanger.scale.setTo(1.849971232167875, 1.9946469263728686);
		_NobleRanger.anchor.setTo(0.5, 0.0);
		this.game.physics.arcade.enable(_NobleRanger);
		_NobleRanger.body.skipQuadTree = true;
		this.game.camera.follow(_NobleRanger);
		_NobleRanger.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 8, true);
		_NobleRanger.animations.add('walk', [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 6, true);
		_NobleRanger.animations.add('attack', [31, 32, 33, 34, 35, 36, 37, 38, 39], 20, true);
		_NobleRanger.animations.add('death', [41, 42, 43, 44, 45, 46, 47, 48, 49], 8, false);
		
		_collisionLayer.setAll("body.immovable", true);
		_collisionLayer.setAll("body.allowGravity", false);
		_collisionLayer.setAll("renderable", false);
		
		weapon = this.game.add.weapon(1, 'bullet');
		weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
		weapon.bulletKillDistance = 600;
		
		aiWeapon = this.game.add.weapon(1, 'fireSpell');
		aiWeapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
		aiWeapon.bulletKillDistance = 1000; 
		
		// public fields
		this.fPickupChest = _Object_4_png;
		this.fCollisionLayer = _collisionLayer;
		this.fNobleRanger = _NobleRanger; 
		this.fPyroOrc = _pyromaniacOrc;
	},
	
	initScene: function() {
		this.game.world.setBounds(0,0,10000,1250);
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.cursors = this.input.keyboard.createCursorKeys();
    
		this.game.physics.arcade.gravity.y = 450;
	},
	
	update: function() {
		if(this.fNobleRanger.y >1300){
			this.killPlayer();
		}
		this.game.physics.arcade.overlap(this.fNobleRanger, this.fPickupChest, this.chestPickup, null, this);
		this.physics.arcade.collide(aiWeapon.bullets, this.fNobleRanger, this.killPlayer, null, this); 
		this.physics.arcade.collide(weapon.bullets, this.fPyroOrc, this.collideFunction, null, this);
		this.physics.arcade.collide(this.fNobleRanger, this.fPyroOrc, this.killPlayer, null, this);
		this.physics.arcade.collide(this.fNobleRanger, this.fCollisionLayer);
		this.physics.arcade.collide(this.fPyroOrc, this.fCollisionLayer);
		this.physics.arcade.collide(this.fPickupChest, this.fCollisionLayer);
		
		
		if(this.fNobleRanger.x - this.fPyroOrc.x <200 && this.fNobleRanger.x - this.fPyroOrc.x > -200){
			 if(this.fNobleRanger.x - this.fPyroOrc.x >= 0){
				 this.fPyroOrc.body.velocity.x = 40;
				 this.fPyroOrc.scale.setTo(1.849971232167875, 1.9946469263728686);
				 this.fPyroOrc.play("walkAI");
			 }else{
			this.fPyroOrc.body.velocity.x = -40;
			this.fPyroOrc.scale.setTo(-1.849971232167875, 1.9946469263728686);
			this.fPyroOrc.play("walkAI");
			 }
		}
		if(this.fNobleRanger.x - this.fPyroOrc.x >= 200 || this.fNobleRanger.x - this.fPyroOrc.x <= -200){
			this.fPyroOrc.body.velocity.x = 0;
			this.fPyroOrc.play("idleAI");
			
		}
		if (this.fNobleRanger.x - this.fPyroOrc.x <400+enemyAccuracy && this.fNobleRanger.x - this.fPyroOrc.x > -400-enemyAccuracy && this.fNobleRanger.y - this.fPyroOrc.y > (-100+(2*enemyAccuracy))  && this.fNobleRanger.y - this.fPyroOrc.y < (50-enemyAccuracy)){
			aiWeapon.bulletAngleOffset = 0;
			aiWeapon.bulletSpeed = 400+speedIncrease; 
			aiWeapon.x = this.fPyroOrc.x + 10;
			aiWeapon.y = this.fPyroOrc.y + 20;
			aiWeapon.bulletGravity.y = -450;
			if(this.fNobleRanger.x < this.fPyroOrc.x){
				aiWeapon.fireAngle = Phaser.ANGLE_LEFT;
			}else{
				aiWeapon.fireAngle = Phaser.ANGLE_RIGHT;
			}
			aiWeapon.fire();
		}
		
		if (this.keyboard.isDown(Phaser.Keyboard.A)) {
			this.fNobleRanger.body.velocity.x = -150;
			this.fNobleRanger.play("walk");
			weapon.fireAngle = Phaser.ANGLE_LEFT;
			this.fNobleRanger.scale.setTo(-1.849971232167875, 1.9946469263728686);
		} else if (this.keyboard.isDown(Phaser.Keyboard.D)) {
			this.fNobleRanger.body.velocity.x = 150;
			this.fNobleRanger.play("walk");
			weapon.fireAngle = Phaser.ANGLE_RIGHT;
			this.fNobleRanger.scale.setTo(1.849971232167875, 1.9946469263728686);
		} else {
			this.fNobleRanger.body.velocity.x = 0;
			this.fNobleRanger.play("idle");
		}
		
		var touching = this.fNobleRanger.body.touching.down;
		if (touching && this.keyboard.isDown(Phaser.Keyboard.W)) {
			this.fNobleRanger.body.velocity.y=jumpHeight;
		}
		
		if (this.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			weapon.bulletSpeed = 900;
			weapon.bulletAngleOffset = 0; 
			weapon.x = this.fNobleRanger.x+10;
			weapon.y = this.fNobleRanger.y + 20;
			weapon.bulletGravity.y = -450;
			weapon.fire();
			this.fNobleRanger.play("attack");
		}
	
},
	
	collideFunction: function(){
		var _AIDeath = this.add.sprite(this.fPyroOrc.x, this.fPyroOrc.y,'pyromaniacOrc',0);
		_AIDeath.scale.setTo(1.849971232167875, 1.9946469263728686);
		_AIDeath.anchor.setTo(0.5, 0.0);
		_AIDeath.animations.add('death', [41, 42, 43, 44, 45, 46, 47, 48, 49], 8, false);
		_AIDeath.play("death");
		this.fPyroOrc.kill();
		count+=1;
		enemyAccuracy += 3;
		speedIncrease += 20;
		if(count == 1){
		this.fPyroOrc.x = 2600;
		this.fPyroOrc.y = 750;
		this.fPyroOrc.revive();
		}
		else if(count == 2){
			this.fPyroOrc.x = 1900;
			this.fPyroOrc.y = 650;
			this.fPyroOrc.revive();
		}
		else if (count == 3){
			this.fPyroOrc.x = 2450;
			this.fPyroOrc.y = 400;
			this.fPyroOrc.revive();
		}
		else if (count == 4){
			this.fPyroOrc.x = 3000;
			this.fPyroOrc.y = 250;
			this.fPyroOrc.revive();
		}
		else if (count == 5){
			this.fPyroOrc.x = 2900;
			this.fPyroOrc.y = 100;
			this.fPyroOrc.revive();
		}
		else if (count == 6){
			this.fPyroOrc.x = 2800;
			this.fPyroOrc.y = 100;
			this.fPyroOrc.revive();
		}
		else if (count == 7){
			this.fPyroOrc.x = 2900;
			this.fPyroOrc.y = -400;
			this.fPyroOrc.revive();
		}
		else if (count == 8){
			this.fPyroOrc.x = 4495;
			this.fPyroOrc.y = -478;
			this.fPyroOrc.revive();
		}
		else if (count == 9){
			this.fPyroOrc.x = 6358;
			this.fPyroOrc.y = -761;
			this.fPyroOrc.revive();
		}
		else if (count == 10){
			this.fPyroOrc.x = 7448;
			this.fPyroOrc.y = -789;
			this.fPyroOrc.revive();
		}
		else if (count == 11){
			this.fPyroOrc.x = 7050;
			this.fPyroOrc.y = -789;
			this.fPyroOrc.revive();
		}else if (count == 12){
			this.fPyroOrc.x = 7250;
			this.fPyroOrc.y = -789;
			this.fPyroOrc.revive();
		}else if(count > 12){}
		
		console.log(count);
	},
		
	chestPickup: function(){
		jumpHeight = -400;
		this.fPickupChest.kill();
		if (playerDeaths == 0) {
			this.game.add.text(3250, 750,'You picked up some enchanted boots, try jumping now.', {"font":"bold 20px Arial"});
		} else {};
		this.fPickupChest.revive();
},
	
	killPlayer: function(){
		var _NobleRangerDeath = this.add.sprite(this.fNobleRanger.x, this.fNobleRanger.y,'NobleRanger',0);
		_NobleRangerDeath.scale.setTo(1.849971232167875, 1.9946469263728686);
		_NobleRangerDeath.anchor.setTo(0.5, 0.0);
		_NobleRangerDeath.animations.add('death', [41, 42, 43, 44, 45, 46, 47, 48, 49], 8, false);
		_NobleRangerDeath.play("death");
		this.fNobleRanger.kill();
		playerDeaths+=1;
		
		game.state.start('death');
	},

	
	Win: function() {
		if (count > 12) {
			game.state.start('win');
		}
	}
}