/**
 * Created by admin on 2017/1/12.
 */
import * as types from './mutation_type';
import axios from 'axios';
export default {
    /**
     * 增加todo
     * @param commit
     * @param mobile
     */
    addTodo({ commit } , todoText){
        commit(types.ADD_TODO , todoText);
    },
    doneTodo({ commit } , id){
        commit(types.DONE_TODO , id);
    },
    selectType({ commit } , type){
        commit(types.SELECT_TYPE , type);
    },
    addTest({commit},num){
        axios.get('../../../static/a.json').then(res=> {
            console.log(res.data.a)
            commit(types.ADD_TEST,res.data.a*1);
        });
    }


};
