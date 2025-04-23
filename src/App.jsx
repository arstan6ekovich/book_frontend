import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import HomePage from "./components/pages/HomePage";
import Basket from "./components/pages/basket";
import Admin from "./components/pages/Admin";
import Details from "./components/pages/Details";
import Footer from "./components/layout/footer";

const App = () => {
  let newlink = [
    {
      id: 1,
      path: "/",
      element: <HomePage />,
    },
    {
      id: 2,
      path: "/basket",
      element: <Basket />,
    },
    {
      id: 3,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 4,
      path: "/details/:id",
      element: <Details />,
    },
  ];
  return (
    <div className="App">
      <Header />
      <Routes>
        {newlink.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
