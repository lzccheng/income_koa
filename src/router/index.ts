import Router from '@koa/router'
import controller from '../controller'

const router = new Router()

const routes = [
    {
        path: '/',
        method: 'get',
        controller: controller.home.index
    },
    {
        path: '/api/list',
        method: 'get',
        controller: controller.income.list
    },
    {
        path: '/api/add_income',
        method: 'post',
        controller: controller.income.add
    },
    {
        path: '/api/del_income',
        method: 'post',
        controller: controller.income.del
    }
]

routes.forEach(i => {
    const { method, path, controller } = i
    router[method](path, controller)
})

export default router