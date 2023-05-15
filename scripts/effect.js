let rand = function (min, max) {
	return min + Math.random() * (max - min);
};
function timestamp() {
	return window.performance && window.performance.now
		? window.performance.now()
		: new Date().getTime();
}
const Performance = {
	data: { delta: 0, current: 0, last: timestamp(), step: 1 / 60 },
	before: function () {
		this.data.current = timestamp();
		this.data.delta = Math.min(
			1,
			(this.data.current - this.data.last) / 1000
		);
	},
	after: () => (Performance.data.last = Performance.data.current),
};
class Vector {
	constructor(x, y) {
		this.x = x || rand(0, innerWidth);
		this.y = y || rand(0, innerHeight);
		this.speedX = rand(-50, 50);
		this.speedY = rand(-50, 50);
	}
	render(ctx) {
		ctx.fillRect(this.x, this.y, 5, 5);
	}
	relocate(x, y) {
		this.x = x || rand(0, innerWidth);
		this.y = y || rand(0, innerHeight);
	}
	update() {
		if (this.x < 0) {
			this.x = innerWidth;
		} else if (this.x > innerWidth) {
			this.x = 0;
		}
		if (this.y < 0) {
			this.y = innerHeight;
		} else if (this.y > innerHeight) {
			this.y = 0;
		}
		this.x += this.speedX * Performance.data.delta;
		this.y += this.speedY * Performance.data.delta;
	}
}
const distance = function (x1, x2) {
	let x = x1.x - x2.x,
		y = x1.y - x2.y;
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};
const logic = (vectors, ctx) => {
	for (let i = 0; i < vectors.length; i += 1) {
		for (let o = 1; o < vectors.length; o += 1) {
			if (distance(vectors[i], vectors[o]) < 100) {
				ctx.beginPath();
				ctx.moveTo(vectors[i].x + 2.5, vectors[i].y + 2.5);
				ctx.lineTo(vectors[o].x + 2.5, vectors[o].y + 2.5);
				ctx.stroke();
			}
		}
	}
};
const Effect = {
	vectors: [],
	canvas: undefined,
	ctx: undefined,
	id: 0,
	init: function (frame) {
		this.canvas = frame;
		this.ctx = frame.getContext('2d');
		this.canvas.width = innerWidth;
		this.canvas.height = innerHeight;
		this.vectors.push(new Vector());
		this.loop();
		let i = setInterval(() => {
			this.vectors.push(new Vector());
			if (this.vectors.length >= 60) {
				clearInterval(i);
			}
		}, 1000);
	},
	loop: function () {
		Performance.before();
		this.vectors.forEach((v) => v.update());
		this.ctx.clearRect(0, 0, innerWidth, innerHeight);
		this.ctx.fillStyle = '#d3d7cf';
		this.ctx.strokeStyle = '#d3d7cf';
		logic(this.vectors, this.ctx);
		this.vectors.forEach((v) => v.render(this.ctx));
		this.id = window.requestAnimationFrame(() => this.loop());
		Performance.after();
	},
	stop: function () {
		window.cancelAnimationFrame(this.id);
		this.ctx.clearRect(0, 0, innerWidth, innerHeight);
		this.vectors = [];
	},
};
export { Effect };
