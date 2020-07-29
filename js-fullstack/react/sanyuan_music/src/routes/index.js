// 路由的本质是什么？
// 路由级别的页面
// 二级路由 
// /path Component 放在相应的地方<Route />
// 嵌套
import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';
// import Recommend from '../application/Recommend/';
const RecommendComponent = lazy(() => import("../application/Recommend/"))
const SingersComponent = lazy(() => import("../application/Singers/"))
const SingerComponent = lazy(() => import("./../application/Singer/"));
const SearchComponent = lazy(() => import("./../application/Search/"));
const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}>
      </Component>
    </Suspense>
  )
}

export default [{
  component: BlankLayout,
  routes: [
    {
      path: "/",
      component: HomeLayout,
      routes: [
        {
          path: '/',
          exact: true,
          render: () => <Redirect to={"/recommend"} />
        },
        {
          path: '/recommend',
          component: SuspenseComponent(RecommendComponent)
        },
        {
          path: '/singers',
          component: SuspenseComponent(SingersComponent),
          key: "singers",
          routes: [
            {
              path: "/singers/:id",
              component: SuspenseComponent(SingerComponent)
            }
          ]
        },
        // {
        //   path: '/rank',
        //   component: RankComponent
        // },
        {
          path: "/search",
          exact: true,
          key: "search",
          component: SuspenseComponent(SearchComponent)
        }
      ]
    }
  ]
}]



// export default [
//   {
//     component: BlankLayout,
//     routes: [
//       {
//         path: "/",
//         component: HomeLayout,
//         routes: [
//           {
//             path: "/",
//             exact: true,
//             render: () => <Redirect to={"/recommend"} />
//           },
//           {
//             path: "/recommend",
//             component: SuspenseComponent(RecommendComponent),
//             routes: [
//               {
//                 path: "/recommend/:id",
//                 component: SuspenseComponent(AlbumComponent)
//               }
//             ]
//           },
//           {
//             path: "/singers",
//             component: SuspenseComponent(SingersComponent),
//             key: "singers",
//             routes: [
//               {
//                 path: "/singers/:id",
//                 component: SuspenseComponent(SingerComponent)
//               }
//             ]
//           },
//           {
//             path: "/rank/",
//             component: SuspenseComponent(RankComponent),
//             key: "rank",
//             routes: [
//               {
//                 path: "/rank/:id",
//                 component: SuspenseComponent(AlbumComponent)
//               }
//             ]
//           },
//           {
//             path: "/album/:id",
//             exact: true,
//             key: "album",
//             component: SuspenseComponent(AlbumComponent)
//           },
//           {
//             path: "/search",
//             exact: true,
//             key: "search",
//             component: SuspenseComponent(SearchComponent)
//           }
//         ]
//       }
//     ]
//   }
// ];