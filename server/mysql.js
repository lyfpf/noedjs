var mysql = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1', // IP地址
    user : 'root', // 数据库用户名
    password : '', // 数据库密码（我的没用设置密码的所以为空）
    database : 'cauth' // 连接到的数据库的名字
  }
});

module.exports = { mysql }