const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const response = require('./response.js')
const app = new Koa()

// 使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyparser())

const router = require('./routes')
app.use(router.routes())

// 启动程序，监听端口
app.listen(8888, () => {
  console.log('服务器启动成功')
})