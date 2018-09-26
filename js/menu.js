var menuState = {
	create: function() {
		
		this.stage.backgroundColor = '#000000';
		var menuBg = game.add.image(500, 375, 'menu');
		menuBg.anchor.set(0.5,0.5);
		var startLabel = game.add.text(500, 500, 'press the spacebar to start',
			{font: '25px Arial', fill: '#ffffff', align: 'center'});
			startLabel.anchor.set(0.5,0.5);
			
		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		spaceKey.onDown.addOnce(this.start, this);
	},
	
	start: function() {
		game.state.start('play');
	},
};