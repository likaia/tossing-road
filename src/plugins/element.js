import Vue from 'vue'
import {Button, Input,Carousel,CarouselItem,Rate,Message} from 'element-ui'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.use(Button);
Vue.use(Input);
Vue.component(CollapseTransition.name, CollapseTransition);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Rate);
Vue.prototype.$message = Message;
