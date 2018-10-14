const router = require('koa-router')({
  prefix: '/api'
})

const controllers = require('./controllers')

router.get('/html', controllers.html)

module.exports = router