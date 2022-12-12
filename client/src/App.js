import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useRoutes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Footer, Loader, Navbar } from "./components";
import { Events, Home, Products } from "./pages";
function App() {
  const [load, setLoad] = useState(true);
  const { isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    let timer = setTimeout(() => setLoad(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="app">
      {(load || isLoading) && <Loader />}
      {!load && (
        <>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="Products" element={<Products />} />
              <Route path="Events" element={<Events />} />
            </Route>
          </Routes>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      )}
    </div>
  );
}

export default App;
