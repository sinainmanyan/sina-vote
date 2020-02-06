'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');
class AuthController extends Controller {
  async sendCode() {
    const {ctx,config} = this;
    const {code} = ctx.request.body;
    const { clientID , clientSecret } = config.auth;
    try{ 
        const res = await axios({
            method: 'post',
            url: 'https://github.com/login/oauth/access_token?' +
              `client_id=${clientID}&` +
              `client_secret=${clientSecret}&` +
              `code=${code}`,
            headers: {
              accept: 'application/json'
            }
        })
        const {access_token} = res.data;
        const result = await axios({
            method: 'get',
            url: `https://api.github.com/user`,
            headers: {
              accept: 'application/json',
              Authorization: `token ${access_token}`
            }
        });
        ctx.sendRes(ctx,{
          msg:'获取身份信息成功,请',
          data:result.data
        });
    }catch(error){
        ctx.sendRes(ctx,{
          stauts:400,
          msg:'拉取身份信息失败',
          data:error
        })
    }
    
  }
}

module.exports = AuthController;
