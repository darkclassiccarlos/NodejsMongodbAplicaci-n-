const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Index');
});

router.get('/about', (req, res) => {
    res.send('About');
});

module.exports = router;