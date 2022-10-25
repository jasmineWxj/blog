'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');

class HomeController extends Controller {
  // 注册
  async index() {
    const { ctx, app } = this;
    // const post = await app.mysql.get('egg', { id: 11 });
    // const row ={
    //   user:'qinxiaolis',
    //   password:'123456'
    // }
    // const result = await app.mysql.insert('egg', ctx.query); // 更新 posts 表中的记录
    // console.log(result);
    const res = await ctx.service.index.index(ctx.params());
    ctx.body = res;
  }

  // 登陆
  async login() {
    const { ctx } = this;
    const res = await ctx.service.index.login(ctx.params());
    ctx.body = res;
  }

  // 添加评论
  async setmessagelist() {
    const { ctx } = this;
    const res = await ctx.service.index.setmessage(ctx.params());
    ctx.body = res;
  }

  // 获取时间
  async getmessage() {
    const { ctx } = this;
    const res = await ctx.service.index.getmessage(ctx.params());
    ctx.body = res;
  }

  // 删除评论
  async delmessage() {
    const { ctx } = this;
    const res = await ctx.service.index.delmessage(ctx.params());
    ctx.body = res;

  }
  async getmd() {
    const { ctx } = this;
    const res = await ctx.service.index.getmd(ctx.params());
    ctx.body = res;
  }
  async postmd() {
    const { ctx } = this;
    const res = await ctx.service.index.postmd(ctx.params());
    ctx.body = res;
  }

  // 添加图片
  async postimg() {
    const { ctx } = this;
    const file = ctx.params().files;
    const imgtype = file.match(/data:image\/(png|jpep|jpg|JPG|gif|webp);/)[1];
    const filename = `${Math.floor(Math.random() * 10000000000)}.${imgtype}`;
    const publi = `//${ctx.request.header.host}/public/updataImg/${filename}`;
    const filepath = path.join(`${__dirname}/../public`, `updataImg/${filename}`);
    const fileBuffer = Buffer.from(file.replace(/^data:image\/(png|jpep|jpg|gif|webp);base64,/, ''), 'base64');
    console.log(publi, 123);
    fs.writeFileSync(filepath, fileBuffer);
    // ctx.body = JSON.stringify({
    //   code: 0,
    //   data: {
    //     path: publi,
    //   },
    // });

  }
}

module.exports = HomeController;
