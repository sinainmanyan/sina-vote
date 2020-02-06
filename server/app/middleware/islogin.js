module.exports = ()=>async (ctx,next)=>{
    try{
        const userinfo = await ctx.helper.verifyToken(ctx.get('authorization'),ctx.app.config.keys);
        ctx.userinfo = userinfo;
        await next();
    }catch({message}){
        ctx.sendRes(ctx,{
            status:401,
            msg:'用户信息过期或被篡改'
        })
    }  
}