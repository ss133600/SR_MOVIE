import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./Pages/home/Home";
import { Detail } from "./Pages/detail/Detail";

const Router = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};

export default Router;
