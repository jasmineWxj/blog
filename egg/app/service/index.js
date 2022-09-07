'use strict';

const Service = require('egg').Service;

class Testdb extends Service {
  // 注册
  async index(params) {
    const { app } = this;
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
        where: { status: '1', u_name: params.u_name, u_pwd: params.u_pwd },
        columns: [ 'u_name', 'object' ],
      });
      if (res.length >= 1) {
        return {
          msg: '登陆成功',
          status: 200,
          list: res,
        };
      }
      return {
        msg: '用户名或密码错误',
        status: 400,
      };
    } catch (e) {
      return {
        msg: e,
        status: 400,
      };
    }
  }

  // 添加时间
  async settimelist(params) {
    const { app } = this;
    try {
      await app.mysql.insert('time_list', params);
      return {
        msg: '成功',
        status: 200,
      };

    } catch (error) {
      return error;
    }

  }

  // 查找时间列表
  async gettimelist(params) {
    const { app } = this;
    try {
      const res = await app.mysql.select('time_list', {
        where: { status: '1', t_name: params.t_name },
      });
      return {
        res,
        status: 200,
      };
    } catch (error) {
      return error;
    }
  }
}


module.exports = Testdb;
