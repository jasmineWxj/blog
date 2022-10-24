'use strict';

const Service = require('egg').Service;

class Testdb extends Service {
  // 注册
  async index(params) {
    const { app } = this;
    console.log(params);
    try {
      await app.mysql.insert('login', params);
      // console.log(res.affectedRows);
      return {
        msg: '成功',
        statc: 200,
      };
    } catch (e) {
      // sqlMessage
      return {
        msg: e.sqlMessage,
        static: 400,
      };
    }
  }
  // 登陆
  async login(params) {
    const { app } = this;
    try {
      const res = await app.mysql.select('login', {
        where: { name: params.name, password: params.password },
        // columns: [ 'name', 'object' ],
      });
      if (res.length >= 1) {
        return {
          msg: '登陆成功',
          status: 200,
          list: res,
        };
      }
      try {
        await app.mysql.insert('login', params);
        // console.log(res.affectedRows);
        return {
          msg: '注册成功',
          statc: 200,
        };
      } catch (e) {
        // sqlMessage
        return {
          msg: e.sqlMessage,
          static: 400,
        };
      }
    } catch (e) {
      return {
        msg: e,
        status: 400,
      };
    }
  }

  // 添加评论
  async setmessage(params) {
    const { app } = this;
    try {
      await app.mysql.insert('massage', params);
      return {
        msg: '成功',
        status: 200,
      };

    } catch (error) {
      return error;
    }

  }

  // 获取评论
  async getmessage(params) {
    const { app } = this;
    try {
      const res = await app.mysql.select('massage', {
        where: { status: 0 },
      });
      return {
        res,
        status: 200,
      };
    } catch (error) {
      return error;
    }
  }

  // 删除评论
  async delmessage(params) {
    const { app } = this;
    try {
      const result = await this.app.mysql.update('massage', params); // 更新 posts 表中的记录
    } catch (error) {
      return error;
    }
  }
}


module.exports = Testdb;
