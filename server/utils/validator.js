module.exports = app=>{
    const phone = /^1[356789]\d{9}$/;
    app.validator.addRule('phone', (rule, value) => {
        if(!phone.test(value)){
            return '手机号输入有误！'
        }
    });
    const vcode = /^\d{6}$/;
    app.validator.addRule('vcode', (rule, value) => {
        if(!vcode.test(value)){
            return '验证码输入有误！'
        }
    });
}