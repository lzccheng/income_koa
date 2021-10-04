export default () => {
    return async (ctx, next) =>{
        ctx.back = (data, msg, code) =>{
            ctx.body = {
                code: code || 200,
                data: data || {},
                msg: msg || '成功'
            }
        }
        await next()
    }
}