const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const hauntsRouter = require('./haunts.js');
const featuresRouter = require('./features.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/haunts', hauntsRouter);

router.use('/areaFeatures', featuresRouter)

router.get('/test', (req, res) => {
  res.send('HELLO?');
});

  
module.exports = router;