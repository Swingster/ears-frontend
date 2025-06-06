import ReactDOM  from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <MantineProvider>
            <App/>
        </MantineProvider>
    </BrowserRouter>
)
