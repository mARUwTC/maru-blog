var md = require('markdown-it')().use(require('markdown-it-ruby'));

md.render('{ruby base|rubytext}')