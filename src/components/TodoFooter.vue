<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{total}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected : isSel === 'all'}" href="javascript:;" @click="showtodo('all')">全部</a>
      </li>
      <li>
        <a :class="{selected : isSel === 'no'}" href="javascript:;" @click="showtodo('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected : isSel === 'yes'}" href="javascript:;" @click="showtodo('yes')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  computed:{
    total(){
      return this.$store.state.TodoMain.todoslist.filter(ele=>!ele.isDone).length
    },
    isSel(){
      return this.$store.state.TodoFooter.issele
    },
    ...mapGetters("TodoMain",["showtodos"]),
    ...mapMutations("TodoMain",["isshowlistfn"])
  },
  methods: {
    showtodo(val){
      // console.log(val);
      // 控制样式
      this.$store.commit('TodoFooter/isselected',val)
      // 样式页面数据
      this.$store.commit('TodoMain/isshowlistfn',val)
    },
    clear(){
      this.$store.commit('TodoMain/clearfn')
    }
  }
}
</script>
