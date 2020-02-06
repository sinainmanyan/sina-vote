'use strict';

const Controller = require('egg').Controller;

class VoteController extends Controller {
  async add() {
    const {ctx,service} = this;
    try{
        ctx.validate({ 
            title:'string',
            select:'string',
            endtime:'datetime'
        })
        const {title,select,endtime} = ctx.request.body;
        const {uid} = ctx.userinfo;
        const res = await service.vote.create({
          title,select,endtime,uid
        })
        ctx.sendRes(ctx,res);
    }catch({errors}){
        ctx.sendRes(ctx,{
            status:406,  
            data:errors
        })
    }
  }
}

module.exports = VoteController;
