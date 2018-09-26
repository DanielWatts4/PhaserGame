var loadState = {
	preload: function() {
		var loadingLabel = game.add.text(80, 150, 'loading...',
			{font: '30px Courier', fill: '#ffffff'});
			
		game.load.pack('level', 'assets/pack.json');
		game.load.image('bullet', 'assets/images/Arrow.png');
		game.load.image('fireSpell', 'assets/images/fireblast1.png');
		game.load.image('finger', 'assets/images/finger.png');
		game.load.image('menu', 'assets/images/menuScreen.png');
		
	},
	
	create: function() {
		game.state.start('menu');
	}
};