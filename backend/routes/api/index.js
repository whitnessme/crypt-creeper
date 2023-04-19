const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const hauntsRouter = require('./haunts.js');
const featuresRouter = require('./features.js')
const bookingsRouter = require('./bookings.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/haunts', hauntsRouter);

router.use('/features', featuresRouter);

router.use('/bookings', bookingsRouter);

// router.get('/test', (req, res) => {
//   res.send('HELLO?');
// });

  
module.exports = router;