var granimInstance = new Granim({
	element: document.getElementById("canvas-topo"),
	direction: 'left-right',
	isPausedWhenNotInView: true,
	states : {
		"default-state": {
			gradients: [
				['#ff9966', '#ff5e62'],
				['#00F260', '#0575E6']
			],
			loop: true
		}
	}
});
	/*onGradientChange: function(colorDetails){
		console.log('Granim: onGradientChange, details: ');
		console.log(colorDetails);
	},
	onEnd: function() {
		console.log('Granim: onEnd');
	}*/

/*document.getElementById("canvas-gradient").onmouseover = function (){
	granimInstance.play();
};
document.getElementById("canvas-gradient").onmouseout = function (){
	granimInstance.changeState('default-state');
	granimInstance.pause();
};*/