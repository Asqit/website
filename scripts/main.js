'use strict';
import { Effect } from './effect.js';

let isEffectOn = false;

function main(e) {
	const button = document.createElement('button');
	button.id = 'play';
	button.innerHTML = '[ cool! js effect ]';

	if (innerWidth >= 768) {
		document.body.appendChild(button);
		button.onclick = (e) => {
			const FRAME = document.querySelector('.frame');

			if (!isEffectOn) {
				Effect.init(FRAME);
				isEffectOn = true;
			} else {
				Effect.stop();
				isEffectOn = false;
			}
		};
	}
}

window.addEventListener('load', main, false);
