import { isArray } from "./utils";
import "./assets/css/index.css"
import image from "./assets/image/test.png";
import { Cache } from "./cache"
import Vue from 'vue'
import App from './App.vue'

let img = new Image();
img.src = image;
// document.querySelector('.box').appendChild(img)


let caches = new Cache()

console.log(isArray(caches), caches.constructor == Cache);

new Vue({
    render: h => h(App)
}).$mount('#app')