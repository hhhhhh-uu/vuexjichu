<template>
  <ul class="todo-list">
    <!-- 2.2 循环任务-关联选中状态-铺设数据 -->
    <!-- completed: 完成的类名 -->
    <li
    v-for="item in showtodos" 
    :key="item.id" 
    :class="{ completed: item.isDone }">
      <div class="view" >
        <input class="toggle" type="checkbox" v-model="item.isDone"/>
        <label >{{item.name}}</label>
        <button class="destroy" @click="deltodo(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'

export default {
  data(){
    return {
    }
  },
  methods: {
    ...mapMutations("TodoMain",["deltodoslist"]),
    deltodo(id){
      this.deltodoslist(id)
      console.log(id);
    }
  },
  computed: {
    ...mapGetters("TodoMain",["showtodos"]),
  }
}
</script>