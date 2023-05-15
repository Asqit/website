'use strict';

function tagScrollEffect(e) {
	let pageTop = document.documentElement.scrollTop || document.body.scrollTop;
	let tags = document.querySelectorAll('.tag');
	const LENGTH = tags.length;

	for (let i = 0; i < LENGTH; i++) {
		const current = tags[i];

		if (current.getBoundingClientRect().top <= pageTop) {
			current.classList.add('visible');
		} else {
			current.classList.remove('visible');
		}
	}
}

/**
 * **Description:** This function will prepare every element with class of .tag
 * this way, we can achieve the scrolling effect with javascript and not lose content
 * when no javascript.
 */
function prepareAllTags() {
	/** @type {HTMLElement[]} */
	const tags = document.querySelectorAll('.tag');

	tags.forEach((tag) => {
		tag.classList.add('tagEffect');
	});
}

function main(e) {
	prepareAllTags();
	window.addEventListener('scroll', tagScrollEffect);
}

window.addEventListener('load', main);
