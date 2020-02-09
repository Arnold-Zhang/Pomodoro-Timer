import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import './css/bootstrap-datetimepicker.min.css'
import './css/pomodoro.css'
import 'moment/min/moment.min.js'
import './js/bootstrap-datetimepicker.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
