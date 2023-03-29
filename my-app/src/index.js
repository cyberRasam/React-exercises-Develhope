import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = createRoot(document.getElementById('root'));

root.render(<App />);

//ReactDOM.render method is no longer supported so i used createRoot instead
