// 路由的本质是什么？
// 路由级别的页面
// 二级路由 
// /path Component 放在相应的地方<Route />
// 嵌套
import React from 'react';
import { Redirect } from 'react-router-dom';
import Recommend from '../application/Recommend/';
import BlankLayout from '../layouts/BlankLayout';

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={"/recommend"} />
      },
      {
        path: '/recommend',
        component: Recommend,
        // routes: [
        //   {
        //     path: '/recommend/:id',
        //     component: AlbumComponent
        //   }
        // ]
      }
    ]
  }
]