import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import MyOrder from './MyOrder';
import MyOrders from './MyOrders';
import MyAccount from './MyAccount';
import NotFound from './NotFound';
import SignIn from './SignIn';
import Navbar from '../components/Navbar';
import ShoppContext from '../Utilities/Context';
import Clothes from './Clothes';
import Electronics from './Electronics';
import Miscellaneous from './Miscellaneous';
import Shoes from './Shoes';

function AppRoutes() {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/MyOrder/last',
      element: <MyOrder />
    },
    {
      path: '/MyOrder/:id',
      element: <MyOrder />
    },
    {
      path: '/MyAccount',
      element: <MyAccount />
    },
    {
      path: '/MyOrders',
      element: <MyOrders />
    },
    {
      path: '/MyOrders/last',
      element: <MyOrders />
    },
    {
      path: 'SignIn',
      element: <SignIn />
    },
    {
      path: 'clothes',
      element: <Clothes />
    },
    {
      path: 'electronics',
      element: <Electronics />
    },
    {
      path: 'miscellaneous',
      element: <Miscellaneous />
    },
    {
      path: 'shoes',
      element: <Shoes />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
  return routes;
}
function App() {
  return (
    <ShoppContext>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppContext>
  );
}

export default App;
