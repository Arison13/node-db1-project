const Accounts = require('./accounts-model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Accounts.getAll()
    res.json(accounts)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Accounts.getById(req.params.id)
    res.json(account)
  } 
  catch (err) {
    next({err})
  }
})

router.post ('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    console.log('post accounts')
  } 
  catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    console.log('update accounts')
  } 
  catch (err) {
    next(err)
  }
});

router.delete('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    console.log('delete accounts')
  } 
  catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router;
