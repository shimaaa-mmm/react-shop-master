import './App.css'
// import {QueryClient, QueryClientProvider} from "react-query";
import {AppRouter} from "./route/index.jsx";

function App() {
    // const client = new QueryClient()
    return (
        // <QueryClientProvider client={client}>
        <AppRouter/>
        // </QueryClientProvider>
    )
}

export default App
