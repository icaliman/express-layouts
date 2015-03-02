# parse-express-layouts

Layout support in express for Parse

## Usage

Put 'express-layouts.js' file in your cloud/ folder.

## Example

app.js

```js
var express = require('express'),
    expressLayouts = require('cloud/express-layouts.js'),
    app = express();

app.set('views', 'cloud/views');
app.set('view engine', 'myDefaultLayout');
app.set('layout', 'my-layout'); // defaults to 'layout'
app.use(expressLayouts);

app.get('/', function(req, res) {
  res.render('hello', {
    layout: 'home-layout',
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
    <h1>Layout example</h1>
    <%- body %>
  </body>
</html>
```

hello.ejs

```html
<p><%= message %></p>
```
