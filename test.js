import test from 'ava';
import m from './';

test(`app.name === 'unicorn'`, t => {
	const setting = m('./fixtures/setting');
	t.is(setting.get('app.name'), 'unicorn');
	t.true(setting.get('app.name') === 'unicorn');
});

test(`assign item`, t => {
	const setting = m('./fixtures/setting');
	setting.extend('app.name', 'lux');
	setting.extend('foo', 'bar');
	t.deepEqual(setting.get(), {
		app: {name: 'lux'},
		foo: 'bar'
	});
});

test(`clear item`, t => {
	const setting = m('./fixtures/setting');
	setting.clear();
	t.deepEqual(setting.get(), {});
});
