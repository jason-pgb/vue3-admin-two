/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/9496d91c0cdc682b59c51ac1399cd655/api'
    },
    test: {
        baseApi: '//test.futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/9496d91c0cdc682b59c51ac1399cd655/api'
    },
    prod: {
        baseApi: '//futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/9496d91c0cdc682b59c51ac1399cd655/api'
    }
}
export default {
    env,
    mock: true,
    namespace: 'manager',
    ...EnvConfig[env]
}