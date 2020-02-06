'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx,service } = this;
    try{
        ctx.validate({ 
            phone:'phone',
            password:'password'
        })
        const data = await service.user.login(ctx.request.body);
        ctx.sendRes(ctx,data);
    }catch(errors){
        ctx.sendRes(ctx,{
            status:406,  
            data:errors
        })
    }
  }
}

module.exports = LoginController;
