var c = document.createElement('canvas');
c.width = prompt('Canvas Width: (numbers only)', '200');
c.height = prompt('Canvas Height: (numbers only)', '200');
c.style.border = '1px solid black';
c.style.position = 'absolute';
c.style.top = '0px';
c.style.left = '0px';
c.style.zIndex = 100000;
var ctx = c.getContext('2d');
var time = prompt('Speed: (in milliseconds)');
var x = 0;
var y = 0;
var done = false;

function start() {
	document.body.appendChild(c);
	ctx.fillStyle = '#FF0000';
	drawButton();
}

function drawButton() {
	ctx.fillRect(x, y, 1, 1);
	setTimeout(() => {
		if(x !== c.width) {
			x += 1;
		} else {
			x = 0;
			if (y !== c.height) {
				y += 1;
			} else {
				y = 0;
				done = true;
			}
		}
		if (done === false) {
			drawButton();
		} else {
			ctx.fillStyle = '#FFFFFF';
			ctx.font = c.width / 3 + 'pt Monospace';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText('NO', c.width / 2, c.height / 2)
		}
	}, time);
}

start();