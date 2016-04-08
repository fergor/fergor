var express = require('express'),
    router = express.Router();

router.get('/api', function(req, res) {
    res.write('{"key": "value"}');
    res.end();
});

module.exports = router;

