<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="deHandle({de:5})"/>
      <span>{{count}}</span>
      <input type="button" value="+" @click="addHandle"/>
      <p>{{num2}}</p>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    export default {
//    computed:mapState({//使用mapState可使用下面一些便捷的写法
//    	//num:state => state.count
//    	//num:'count'
////    	num(state){
////    		return state.count+100
////    	}
////				count:'count'
//				
//    }) ,
			computed:{
				abc(){
					return 112
				},
				...mapState(['count']),
				...mapGetters({
					num2: 'filterCount'
				})
				
			},
      methods:{
//    	addHandle(){
//    		//改变状态，提交mutations addIncrement
////    		this.$store.commit('addIncrement',{
////    			n:5
////    		})
//					//触发一个action
//					this.$store.dispatch('addAction')
//
//    	},
				...mapActions({
					addHandle : 'addAction'
				}),
				...mapMutations({
					deHandle : 'deIncrement'
				})
      }
      

    }
</script>
<style>

</style>
