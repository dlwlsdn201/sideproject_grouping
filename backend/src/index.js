/* Koa 의 장점 
   미들웨어 사용 간편화
   기본 형태
   app.use((ctx, next) => {
      next(); 
   }) 
   미들웨어 필요 시 사용
   p608~616
*/

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Lisenting');
});
