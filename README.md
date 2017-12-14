# Authentication Server

Node.js API Created from scratch

### After Clonning

```
> npm install
> npm run dev
``` 

### Misc

Will require to install MongoDB in your OS

Create a db call auth:
```
> use auth
```


Then create a collection called users:
```
> db.createCollection('users')
```

U must create a **config.js** file wich exports your secret in ur root directory. For security reasons I keep this file ignored into repository and I advise you to do so. Here is an example:

```javascript
module.exports = {
    secret: 'yormaderinballs'
};
```
