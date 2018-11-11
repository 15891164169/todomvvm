// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router/router.config'

import { Input, Button, Row, Col, Table, TableColumn, Container, Header, Main, Icon, Popover, Tag } from 'element-ui'

// import { Button } from 'mint-ui'

import '@/assets/css/common.css'
import '@/assets/css/reset.css'

Vue.use(Input)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Icon)
Vue.use(Popover)
Vue.use(Tag)
// Vue.component(Button.name, Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
