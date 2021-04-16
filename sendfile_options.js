const path = require('path');
const options = {
    root: path.join(__dirname, 'static'),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
}

module.exports = options;