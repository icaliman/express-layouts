/*!
 * Adds layout support in express for Parse
 *
 * @author   Ion Caliman <icaliman92@gmail.com>
 * @license  MIT
 */

module.exports = function (req, res, next) {
  var render = res.render;

  res.render = function (view, options, fn) {
    var layout, self = this, app = req.app,
      defaultLayout = app.get('layout');

    options = options || {};
    if (typeof options === 'function') {
      fn = options;
      options = {};
    }

    if (options.layout === false || ((options.layout || defaultLayout) === false)) {
      render.call(res, view, options, fn);
      return;
    }

    layout = options.layout || defaultLayout;
    if (layout === true || layout === undefined) {
      layout = 'layout';
    }

    render.call(res, view, options, function (err, str) {
      var l, locals;

      if (err) { return fn ? fn(err) : next(err); }

      locals = {
        body: str
      };
      for (l in options) {
        if (options.hasOwnProperty(l) && l !== 'layout' && l !== 'include') {
          locals[l] = options[l];
        }
      }

      render.call(self, layout, locals, fn);
    });
  };
  next();
};
