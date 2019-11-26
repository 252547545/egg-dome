'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    ctx.body = 'hi, egg';
    // const res = await ctx.service.product.index();
    const res = await app.mysql.select('article');
    console.log(res);
    ctx.body = 'hi egg';
    // await ctx.render('index.html', {
    //   res,
    //   lists: ['a', 'b', 'c', 'd'],
    // });
  }
}

module.exports = HomeController;
