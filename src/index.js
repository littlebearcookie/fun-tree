/******************************************/
/** Created by berton_hsu on 2020/10/12. **/
/******************************************/
import FunTree from '@/components/FunTree.vue'

FunTree.install = function (Vue) {
  Vue.component(FunTree.name, FunTree)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(FunTree);
}

export default FunTree