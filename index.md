# express-layouts

Simple Layout Support for [Express](http://expressjs.com/)

## Installation

> npm install express-layouts --save

## Usage Example

app.js

```js
var express = require('express'),
    expressLayouts = require('express-layouts'),
    app = express();

app.use(expressLayouts);

app.set('views', 'cloud/views');
app.set('view engine', 'ejs');
app.set('layout', 'my-default-layout'); // defaults to 'layout'

app.get('/', function(req, res) {
  res.render('index'); // will use 'my-default-layout'
});

app.get('/hello', function(req, res) {
  res.render('hello', {
    layout: 'home-layout', // use home-layout
    message: 'Hello world!'
  });
});

app.listen();
```

home-layout.ejs

```html
<html>
  <head>
    <title>Sample App</title>
  </head>
  <body>
    <h1>Home layout example</h1>
    <%- body %>
  </body>
</html>
```

hello.ejs

```html
<p><%= message %></p>
```
