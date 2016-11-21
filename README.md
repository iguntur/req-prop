# req-prop [![Build Status](https://travis-ci.org/iguntur/req-prop.svg?branch=master)](https://travis-ci.org/iguntur/req-prop)

> Easy require property from `cwd`. Get, extend, destroy property using dot-notation


## Install

```
$ npm install --save req-prop
```


## Usage

> Imagine the folder structure like this.

```
├── code
│   └── dev-app
│   │   ├── config/setting.js
│   │   ├── lib/database/api/v1/index.js
│   │   ├── index.js
│   │   └── package.json
```

```js
// ~/code/dev-app/config/setting.js
module.exports = {
    app: {
        name: 'unicorn'
    }
};
```

```js
// ~/code/dev-app/lib/database/api/v1/index.js
const reqProp = require('req-prop');

const setting = reqProp('./config/setting');

console.log(setting.get('app.name'));
```

```bash
# ~/code/dev-app
$ node lib/database/api/v1/index.js
# 'unicorn'
```


## API

### reqProp(moduleId)

#### moduleId

- Type `string`
- Required: `true`

Set Module path


### Instance

> Also See [dot-prop](https://www.npmjs.com/package/dot-prop#api) API


#### .extend(key, value)

Extend an item.

#### .extend(object)

Extend multiple items at once.

#### .get(key)

Get an item.

#### .has(key)

Check if an item exists.

#### .destroy(key)

Delete an item.

#### .clear()

Delete all items.


## License

MIT © [Guntur Poetra](http://guntur.starmediateknik.com)
