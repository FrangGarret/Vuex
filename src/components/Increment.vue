<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" />
      <span>{{num}}</span>
      <input type="button" value="+" />
      <p></p>
    </div>
  </div>
</template>

<script>
//  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    export default {
      computed: {
       num(){
       	return this.$store.state.count
       }
      }
      

    }
</script>
<style>

</style>
