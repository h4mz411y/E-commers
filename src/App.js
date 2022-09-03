import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from "../src/components/Redux/store/store";
import { Provider } from 'react-redux';
import { Catagory_Provider } from "./context-api/catagory-context";
import Navbar from "./components/navbar/Navbar";
import Main_page from "./components/categories/mainPage";
import './App.css';

const queryClient = new QueryClient();

const App=()=>{
    return(
        <div className="main">
        <Catagory_Provider>
                <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                                <BrowserRouter >
                                        <Routes>
                                                <Route path="/" element={<><Navbar/> <Main_page/> </>}/>
                                        </Routes>
                                </BrowserRouter>
                </Provider>
                </QueryClientProvider>
        </Catagory_Provider>
        </div>
    )
}



export default App