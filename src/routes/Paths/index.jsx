import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import SiteLayout from "../../SiteLayout";
import Catalog from "../../pages/catalog";
import Deals from "../../pages/deals";
import Account from "../../pages/Account";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="deals" element={<Deals />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
