'use strict';

const Controller = require('egg').Controller;
const getVerificationCode = (length)=>{
    const codetext = '1234567890';
    let str = '';
    while(str.length < length){
        str += codetext[Math.floor(Math.random()*codetext.length)]
    }
    return str;
}
class RegistryController extends Controller {
  async create() {
    const { ctx,service } = this;
    try{
        ctx.validate({ 
            phone:'phone',
            username:'string',
            password:'password'
        })
        const data = await service.user.registry(ctx.request.body);
        ctx.sendRes(ctx,data);
    }catch({errors}){
        ctx.sendRes(ctx,{
            status:406,  
            data:errors
        })
    }
  }
  async update(){
    const { ctx,service } = this; 
    try{
        ctx.validate({ 
            phone:'phone',
            password:'password',
            vCode:'vcode'
        })
        const vCode = ctx.cookies.get('verificationCode');
        //vCode没有做验证
        const res = await service.user.resetPassword(ctx.request.body);
        ctx.sendRes(ctx,res);
    }catch({errors}){
        ctx.sendRes(ctx,{
            status:406,  
            data:errors
        })
    }
  }
  async verificationCode(){
    const { ctx,service } = this; 
    try{
        ctx.validate({ 
            phone:'phone'
        })
        const data = await service.user.verificationCode(ctx.request.body);
        if(data){
            ctx.sendRes(ctx,data);
            return;
        }
        const verificationCode = getVerificationCode(6);
        ctx.cookies.set('verificationCode', verificationCode, {
            encrypt: false, // 加密传输
            maxAge: 1 * 1000
        });
        ctx.sendRes(ctx,{
            msg:'验证码发送成功'
        });
    }catch({errors}){
        ctx.sendRes(ctx,{
            status:406,  
            data:errors
        })
    }
  }
}

module.exports = RegistryController;
