export default {
    namespaced: true,
    state: {
      todoslist: [],
      isshowlist: "isall"
    },
    mutations: {
      addtodoslist(state, value) {
        let id = state.todoslist.length === 0 ? 100 : state.todoslist[state.todoslist.length - 1].id + 1
        state.todoslist.push({
          id:id,
          name:value,
          isDone:false,
        });
      },
      deltodoslist(state, id) { 
        // state.todoslist = state.todoslist.filter((ele) => {
        //   return ele !== value;
        // })
        let index = state.todoslist.findIndex((ele)=>{
          return ele.id == id;
        })
        state.todoslist.splice(index, 1)
      },
      // 全选控制小选项
      changeAll(state, value) {
        state.todoslist.forEach((ele)=>{
          ele.isDone = value
        })
      },
      // 清除已完成
      clearfn(state){
        state.todoslist = state.todoslist.filter((ele)=>{
          return ele.isDone == false 
        })
      },
      // 修改状态控制数据切换
      isshowlistfn(state,value) { 
        state.isshowlist = value
      }
    },
    actions: {
    },
    getters: {
      // 控制页面切换
      showtodos(state) {
        if (state.isshowlist == 'no') {
          return state.todoslist.filter((ele) => !ele.isDone )
        }else if (state.isshowlist == 'yes') {
          return state.todoslist.filter((ele) => ele.isDone )
        }else{
          return state.todoslist
        }
      }
    }
  }