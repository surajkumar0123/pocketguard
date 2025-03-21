import React from "react"
import ReactDOM from "react-dom/client"
import axios from "axios"
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from "./contexts/ContextProvider"

import App from "./App"
import "./index.css"

 axios.defaults.baseURL = "https://pocketguard-e7u9.onrender.com"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ContextProvider>
	</React.StrictMode>
)
