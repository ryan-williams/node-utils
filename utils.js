
var myrepl = require('repl').start({useGlobal:true});

exports = {
  'Array.prototype.exists': function(fn) {
    for (var i = 0; i < this.length; ++i) if (fn(this[i])) return true;
    return false;
  },
  'Array.prototype.forall': function(fn) {
    for (var i = 0; i < this.length; ++i) if (!fn(this[i])) return false;
    return true;
  },
  'Array.prototype.sum': function() {
    return this.reduce(function(x,y) { return x+y; });
  }

};

for (k in exports) {
  var segments = k.split('.');
  var context =
      segments
          .slice(0, segments.length - 1)
          .reduce(function(context, segment) {
            return context[segment];ildgen
          }, myrepl.context);

  context[segments[segments.length - 1]] = exports[k];
}
