'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '前端真好玩';
  }
}

module.exports = HomeController;
