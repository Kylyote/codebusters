import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './components/LoginModal/modalcss.css'

import App from './App.jsx';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import ResumeBuilder from './pages/ResumeBuilder';
import Profile from './pages/Profile';
import Services from './pages/Services';
import Settings from './pages/Settings';
import FreeSoftware from './pages/FreeSoftware';
import Search from './pages/Search';
import SearchResults from './pages/SearchResults';
import About from './pages/About';
import SearchResultProfile from './pages/SearchResultProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <About />
      }, {
        path: '/success',
        element: <Success />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/products/:id',
        element: <Detail />
      },
      {
        path: '/resume',
        element: <ResumeBuilder />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/free',
        element: <FreeSoftware />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/results',
        element: <SearchResults />
      },
      {
        path: '/home',
        element: <Home />
      },
      { path: '/profile/:id', 
      element: <SearchResultProfile /> },

      {
        path: '*',
        element: <NoMatch />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
