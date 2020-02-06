'use strict';

const Service = require('egg').Service;
const uid = require('uid');
class UserService extends Service {
  async registry(body) {
    const { app } = this;
    try{
        const phone = await app.mysql.get('user', { phone: body.phone });
        if(phone){
            return {
                status:422,
                msg:'该用户已存在',
                data:{
                    phone:body.phone
                }
            }
        }
        await app.mysql.insert('user', {...body,id:uid(10)});
        return {
            msg:'注册成功'
        }
    }catch(error){
        return {
            status:500,
            data:error
        }
    }
  }
  async verificationCode(body){
    const { app } = this;
    const phone = await app.mysql.get('user', { phone: body.phone });
    if(!phone){
        return {
            status:400,
            msg:'该手机号没有注册过，请注册',
            data:{
                ...body
            }
        }
    }
  }
  async resetPassword({phone,password}){
    const { app } = this;
    try{
        const users = await app.mysql.get('user', { phone });
        if(users){
            await app.mysql.update('user', {id:users.id,password});
            return {
                msg:'密码重置成功'
            }
        }
        return {
            status:400,
            msg:'该手机号没有注册过，请注册',
            data:{
                phone
            }
        }
    }catch(error){
        return {
            status:500,
            data:error
        }
    }
  }
  async login(body){
    const { app,ctx,config } = this;
    const users = await app.mysql.get('user', {phone:body.phone});
    if(users){
        return {
            msg:'登陆成功',
            data:{
                token:await ctx.helper.signToken({
                    phone:body.phone,
                    logintime:Date.now(),
                    uid:users.id
                },config.keys)
            }
        }
    }
    return {
        status:400,
        msg:'用户名密码输入有误'
    }
  }
}

module.exports = UserService;
