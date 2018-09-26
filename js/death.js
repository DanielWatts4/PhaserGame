var deathState = {
	create: function() {
		var textGroup = game.add.group();
		
		this.stage.backgroundColor = '#780000';
		if (playerDeaths < 5) {
			var deadLabel = game.add.text(500, 150, 'You Died', { font: '50px Arial', fill: '#ffffff', align: 'center'}, textGroup);
		} else {
			var deadLabel = game.add.text(500, 150, 'You seem to be dying, A LOT.', { font: '50px Arial', fill: '#ffffff', align: 'center'}, textGroup);
		}
		var deathCount = game.add.text(500, 225, 'Death Count:' + playerDeaths, { font: '30px Arial', fill: '#ffffff', align: 'center'}, textGroup);
		var restartLabel = game.add.text(500, 500, 'press spacebar to restart', {font: '25px Arial', fill: '#ffffff', align: 'center'}, textGroup);
		var menuLabel = game.add.text(500, 600, 'press Q to return to the menu', {font: '25px Arial', fill: '#ffffff', align: 'center'}, textGroup);		
	
		deadLabel.anchor.set(0.5,0.5);
		deathCount.anchor.set(0.5,0.5);
		restartLabel.anchor.set(0.5,0.5);
		menuLabel.anchor.set(0.5,0.5);
		
		textGroup.alpha = 0.1;		
			
		game.add.tween(textGroup).to( { alpha: 1 }, 3000, "Linear", true);
		
		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		var qKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
		
		spaceKey.onDown.addOnce(this.start, this);
		qKey.onDown.addOnce(this.menu, this);
	},
	
	start: function() {
		game.state.start('play');
	},
	
	menu: function() {
		game.state.start('menu')
	},
}