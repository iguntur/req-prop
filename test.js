import test from 'ava';
import m from './';

test(`setting.app.name === 'unicorn'`, t => {
	const config = m('setting', './fixtures/setting');
	t.is(config.get('setting.app.name'), 'unicorn');
	t.true(config.get('setting.app.name') === 'unicorn');
});

test(`assign item`, t => {
	const config = m('setting', './fixtures/setting');
	config.extend('setting.app.name', 'lux');
	config.extend('setting.app.baz', 'quux');
	config.extend('setting.foo', 'bar');
	t.deepEqual(config.get('setting'), {
		app: {
			name: 'lux',
			baz: 'quux'
		},
		foo: 'bar'
	});
});

test(`clear item`, t => {
	const config = m('setting', './fixtures/setting');
	config.clear();
	t.deepEqual(config.get(), {});
});
