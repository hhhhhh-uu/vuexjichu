<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="value"
      @keyup.enter="addtodo(value)"
    />
  </header>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  data(){
    return {
      value: ''
      
    }
  },
  methods: {
    ...mapMutations("TodoMain",["addtodoslist","changeAll","changeitem"]),
    addtodo(value){
      if (!value.trim()) return alert('任务名不能为空')
      this.$store.commit('TodoMain/addtodoslist',value)
      this.value = ''
    },
    inputa(e){
      console.log(e)
    },
  },
  computed:{
    ...mapState("TodoMain",["todoslist"]),
    isAll:{
      // 在isAll的set里影响小选框
      set(val){
        // this.todoslist.forEach((ele)=>{
        //   ele.isDone = val
        // })
        this.$store.commit('TodoMain/changeAll',val)
      },
      //isAll的get里统计小选框最后状态, 影响isAll – 影响全选状态
      get(){
        return this.todoslist.every((ele)=>{return ele.isDone} )
      }
    }
  }
}
</script>