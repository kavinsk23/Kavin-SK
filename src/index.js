import React from 'react';
import {createRoot} from "react-dom/client";
// import App from './App';
import "./styles.css"
import Header from "./Header";
import Home from "./Home";

function App() {
    return (
        <div>
            <Header />
            <Home />
        </div>
    )
}
const container = document.getElementById('root');
const root = createRoot(container)
root.render(<App />)

