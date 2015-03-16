# parse-express-layouts

Layout support in express for Parse

## Usage

Put 'express-layouts.js' file in your cloud/modules folder.

## Example

app.js

```js
var express = require('express'),
    expressLayouts = require('cloud/modules/express-layouts.js'),
    app = express();

app.set('views', 'cloud/views');
app.set('view engine', 'ejs');
app.set('layout', 'my-default-layout'); // defaults to 'layout'
app.use(expressLayouts);

app.get('/', function(req, res) {
  res.render('index'); // will use 'my-default-layout'
});

app.get('/hello', function(req, res) {
  res.render('hello', {
    layout: 'home-layout', // use another layout
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
