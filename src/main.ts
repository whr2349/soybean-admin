/*
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-17 09:25:28
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-08-17 14:11:06
 * @FilePath: \soybean-admin\src\main.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createApp } from 'vue';
import './plugins/assets';
import { setupAppVersionNotification, setupDayjs, setupIconifyOffline, setupLoading, setupNProgress } from './plugins';
import { setupStore } from './store';
import { setupRouter } from './router';
import { setupI18n } from './locales';
import App from './App.vue';

async function setupApp() {
  setupLoading();

  setupNProgress();

  setupIconifyOffline();

  setupDayjs();

  // app
  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);

  setupI18n(app);

  setupAppVersionNotification();

  app.mount('#app');
}

setupApp();
