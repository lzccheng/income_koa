import Koa from 'koa'
import KoaBody from 'koa-body'
import router from './router'
import CtxExtend from './middleware/ctx_extend'

const port = 9000

const app = new Koa()

app.use(CtxExtend())
app.use(KoaBody())
app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
    console.log('running on http://localhost:' + port)
})
