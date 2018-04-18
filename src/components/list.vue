<template>
    <ul class="list">
      <li v-for="item in data" @click="getTitleHandle(item.title)" :key='item.index'>{{item.title}}</li>
    </ul>
</template>

<script>
export default {
	computed:{
		data(){
			return this.$store.state.list
		}
	},
  methods:{
    getTitleHandle(title){
      // 改变vuex中状态
      this.$store.commit("changeTitle", {title})
    }
   
  },
  created(){
  	this.$store.dispatch('getListAction')
  }
}
</script>
