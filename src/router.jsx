import { createHashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import Learn from './pages/Learn';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import Help from './pages/Help';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: 'learn', element: <Learn /> },
      { path: 'practice', element: <Practice /> },
      { path: 'progress', element: <Progress /> },
      { path: 'help', element: <Help /> }
    ]
  }
]);