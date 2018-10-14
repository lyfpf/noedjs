const {mysql} = require('../mysql')

module.exports = async (ctx) => {
  
  const top = await mysql('books').limit(3)

  ctx.state.data = {
    top
  }
}