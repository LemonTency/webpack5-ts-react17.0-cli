import React from 'react'
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom'
//同步加载的组件
import Loading from '@components/Loading'
import NotFound from '@components/NotFound'
import Test from '@components/Test'
import FCPage from '@components/FCPage/FCPage'
import FruitPages from '@components/FruitsPage/FruitPage'
import Home from '@components/Home/home'
import UseRef from '@components/FCPage/UseRef'
import AntPage from '@components/AntPage/AntPage'
// import { string } from "prop-types";
const { lazy, Suspense } = React

//异步加载的组件
const Demo = lazy(() =>
  import(/* webpackChunkName:"demo" */ '@components/App/index')
)
const BookPages = lazy(() =>
  import(/* webpackChunkName:"demo" */ '@components/BooksPage/BookPage')
)
// const FruitPages = lazy(() =>
//   import(
//     /* webpackChunkName:"demo" */ '@components/FruitsPage/FruitPage'
//   )
// )

interface YDProps extends RouteProps {
  path: string
  exact: boolean
  // component: React.ReactNode
  // children?: ChildProps[]
}

interface ChildProps{
  path: string
  exact: boolean
  component: React.ReactNode
}

export const routes: YDProps[] = [
  {
    path: '/',
    exact: true,
    component: Demo
  },
  {
    path: '/test',
    exact: true,
    component: Test
  },
  {
    path: '/fruit',
    exact: true,
    component: FruitPages
  },
  {
    path: '/books',
    exact: true,
    component: BookPages
  },
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/demo',
    exact: true,
    component: FCPage,
  },
  {
    path: '/ant',
    exact: true,
    component: AntPage,
  }
]

// 对状态属性进行监听
const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((r, index) => {
        console.log('🐂', r)
        const { path, exact, component } = r
        const LazyCom = component
        return (
          <Route
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            path={path}
            exact={exact}
            // eslint-disable-next-line no-nested-ternary
            render={props => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <LazyCom {...props} />
            )}
          />
        )
      })}
      <Route component={NotFound} />
    </Switch>
  </Suspense>
)

export default Routes
