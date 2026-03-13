import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Main_route from './Router/Main_route';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<Main_route/>
  </BrowserRouter>
)
