import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/routes';

function App() {

  return (
    <div className='container p-2 mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>

  );
}

export default App;
