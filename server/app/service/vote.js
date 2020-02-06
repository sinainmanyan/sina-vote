'use strict';

const Service = require('egg').Service;
const uid = require('uid');
class VoteService extends Service {
  async create(info) {
    const { app } = this;
    try{
        await app.mysql.insert('vote', {...info,id:uid(10)});
        return {
            msg:'创建成功'
        }
    }catch(error){
        return {
            msg:'服务器连接数据库失败',
            status:400
        };
    }    
    
  }
}

module.exports = VoteService;
