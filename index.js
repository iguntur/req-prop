'use strict';
const dotProp = require('dot-prop');
const resolveFrom = require('resolve-from');

const init = () => Object.create(null);
let obj = init();

const config = {
	destroy: key => {
		dotProp.delete(obj, key);
	},
	clear: () => {
		obj = init();
	},
	get: key => dotProp.get(obj, key),
	has: key => dotProp.has(obj, key),
	extend: (key, value) => {
		if (typeof key !== 'string' && typeof key !== 'object') {
			throw new TypeError(`Expected \`key\` to be of type \`string\` or \`object\`, got ${typeof key}`);
		}

		if (typeof key === 'string') {
			dotProp.set(obj, key, value);
		} else {
			for (const k of Object.keys(key)) {
				dotProp.set(obj, k, key[k]);
			}
		}
	}
};

module.exports = moduleId => {
	moduleId = resolveFrom('.', moduleId);
	moduleId = require(moduleId);

	config.extend(moduleId);

	return config;
};
