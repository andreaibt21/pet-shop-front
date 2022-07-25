import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Basket from "./Pages/Basket";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Product from "./Components/Product";
import Select from "./Components/Select";
import Perfil from "./Components/Perfil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/reducer";
import { reducer } from "./context/reducer";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/store" element={<Store />}>
                <Route path="main" element={<Select />}></Route>
                <Route path=":id" element={<Product />}></Route>
              </Route>
              <Route path="/basket" element={<Basket />}></Route>
              <Route path="/auth" element={<Login />}></Route>
              <Route path="/perfil" element={<Perfil />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
