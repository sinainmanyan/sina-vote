import request from '@/utils/request';
import { baseUrl } from '@/config';
import { getSession } from '@/utils';

export function createVote(params) {

    return request.post("/vote/create", {
        ...params
    }, {
        headers: {
            authorization: getSession("authrization")
        },
    })
}