import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Page, List } from './features';

const routes = createBrowserRouter([{
  path: '/',
  element: <h1>HelloRouter</h1>
}]);

function App() {
  return <RouterProvider router={routes} />
}

export default App;
