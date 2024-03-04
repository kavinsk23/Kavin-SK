import React from 'react';
import {createRoot} from "react-dom/client";
// import App from './App';
import "./styles.css"
import Header from "./Header";

function App() {
    return (
        <div>
            <Header />
        </div>
    )
}
const container = document.getElementById('root');
const root = createRoot(container)
root.render(<App />)

