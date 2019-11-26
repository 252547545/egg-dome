'use strict';

const Controller = require('egg').Controller;
const moment = require('moment');

class ArticleController extends Controller {
  async create() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
      createTime: moment().format('YY-MM-DD HH:mm:ss'),
    };
    const result = await ctx.service.article.create(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '发布失败！',
      };
    }
  }

  async lists() {
    const { ctx } = this;
    const result = await ctx.service.article.lists();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取列表失败！',
      };
    }
  }

  async detail() {
    const { ctx } = this;
    const result = await ctx.service.article.detail(ctx.params.id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询失败！',
      };
    }
  }
}

module.exports = ArticleController;
