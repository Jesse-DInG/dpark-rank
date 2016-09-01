import Vue from 'vue'
import App from './App'


let w = window.innerWidth;
document.querySelector('html').style.fontSize= w/8 + 'px';
//按800宽度设计,10px;
window.onresize = ()=>{
	let w = window.innerWidth;
	document.querySelector('html').style.fontSize= w/8 + 'px';
}

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
