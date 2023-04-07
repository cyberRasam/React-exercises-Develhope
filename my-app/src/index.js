import { createRoot } from 'react-dom/client';
import { Router } from './components/BrowserRouter';


const root = createRoot(document.getElementById('root'));

root.render(<Router/>);

//ReactDOM.render method is no longer supported so i used createRoot instead
