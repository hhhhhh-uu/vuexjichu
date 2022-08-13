export default {
    namespaced: true,
    state: {
      isSel: 'all'
    },
    mutations: {
      // 控制样式
      isselected(state , value) {
        state.isSel = value;
      }
    },
    actions: {
      
    }
  }