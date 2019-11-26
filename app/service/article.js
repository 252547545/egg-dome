'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async create(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('article', params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async lists() {
    const { app } = this;
    try {
      const result = await app.mysql.select('article');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async detail(id) {
    const { app } = this;
    if (!id) {
      console.log('ID不能为空！');
      return null;
    }
    try {
      const result = await app.mysql.get('article', { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = ArticleService;
