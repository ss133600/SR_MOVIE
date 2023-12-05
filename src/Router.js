import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./Pages/home/Home";
import { Detail } from "./Pages/detail/Detail";
import { Search } from "./Pages/search/Search";
import { PageNotFound } from "./Pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Login } from "./Pages/login/Login";
import { Signup } from "./Pages/signup/Signup";

const Router = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<Signup />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};

export default Router;
