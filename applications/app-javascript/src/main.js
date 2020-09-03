// import routes from './routes';

// export default {
//   name: 'javascript',
//   routes,
//   beforeEach(from, to, next) {
//     console.log('javascript:', from.path, to.path);
//     next();
//   },
//   init() { },
// }
import Vue from 'vue';
import routes from './routes';

// 动态添加子项目的 route-list
Vue.__share_pool__.router.addRoutes(routes);