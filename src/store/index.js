import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
// 定义一个容器

let store = new Vuex.Store({
    state: {
      count: 100,
      title:'',
      list:[]
    },
    mutations:{
    	addIncrement(state,payload){
    			state.count += payload.n ? payload.n : 1 ;
    	},
    	deIncrement(state,payload){
    		state.count -= payload.de ? payload.de : 1 ;
    	},
    	changeTitle(state,payload){
    		state.title = payload.title
    	},
			changeList(state,payload){
				state.list = payload.list
			}
   
    },
    getters:{
    	filterCount(state){
    		return state.count >=120 ? 120 : state.count
    	}
    },
    actions:{
    	addAction(context){
    		//console.log(context)
    		setTimeout( () => {
    			context.commit({
    				type:'addIncrement',
    				n:5
    			})
    			context.dispatch('textAction',{
    				text:'测试'
    			})
    		},300)
    	},
    	textAction(context,obj){
    		console.log(obj)
    	},
    	getListAction(context){//发送ajax请求
    		axios.get('https://www.easy-mock.com/mock/5ad6de9ed349343cd0a2255a/lists/')
    			.then( (data) => {
    				console.log(data)
    				context.commit({
    					type:'changeList',
    					list:data.data.data
    				})
    			})
    			.catch((error) => {
    				console.log(error)
    			})
    	}
    }
    
})

export default store

