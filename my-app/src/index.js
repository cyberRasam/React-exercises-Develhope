import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(<App />);

//ReactDOM.render method is no longer supported so i used createRoot instead
