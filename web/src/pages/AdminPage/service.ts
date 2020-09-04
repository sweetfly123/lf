import request from '@/utils/request';

interface params {
    get: string
}
export async function count() {
    return request(`/server/auth/service/count`,
        {
            method: 'get',
        })
}
export async function fetchData(params: params) {
    return request(`/server/auth/service/list?${params.get}`,
        {
            method: 'get',
        })
}
