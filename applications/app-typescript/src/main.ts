// import routes from './routes';

// export default {
//   name: 'typescript',
//   routes,
//   beforeEach(from: any, to: any, next: any) {
//     console.log('typescript:', from.path, to.path);
//     next();
//   },
//   init() { },
// }
import Vue from 'vue';
import routes from './routes';

// 动态添加子项目的 route-list
Vue.__share_pool__.router.addRoutes(routes);
