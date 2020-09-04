import { AnyAction, Reducer } from 'redux';
import { EffectsCommandMap,router } from 'dva';
import { homeData } from './data.d';
import { fetchData, count } from './service';
import { history } from 'umi';
import { routerRedux } from 'dva/router';

export type Effect = (
    action: AnyAction,
    effects: EffectsCommandMap & { select: <T>(func: (state: homeData) => T) => T },
) => void;

export interface ModelType {
    namespace: string;
    state: homeData;
    effects: {
        fetchDatas: Effect;
        count: Effect;
        jumpDetail: Effect;
    };
    reducers: {
        save: Reducer<homeData>;
        clear: Reducer<homeData>;
    };
}

const initState = {
    listData: [],
    count: 0
};

const Model: ModelType = {
    namespace: 'home',

    state: initState,

    effects: {
        *fetchDatas({ payload }, { call, put }) {
            const response = yield call(fetchData, payload);
            yield put({
                type: 'save',
                payload: {
                    listData: response.data,
                },
            });
        },
        *count({ payload }, { call, put }) {
            const response = yield call(count);
            yield put({
                type: 'save',
                payload: {
                    count: response.data.count
                },
            });
        },
        *jumpDetail({ payload }, { call, put }) {
            yield put({
                type: 'save',
                payload
            });
            const data = JSON.stringify({id:3,value:'lal'})
            yield put(routerRedux.replace(`./detail/${data}`))
        }
    },

    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
        clear() {
            return initState;
        },
    },
};


export default Model;
