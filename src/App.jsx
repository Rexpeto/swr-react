import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "@/layout";
import { Route } from "react-router-dom";
import { publicRoutes } from "@/models";
import { NotUsingSWR, UsingSWR } from "@/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={publicRoutes.NOTUSINGSWR} element={<NotUsingSWR />} />
          <Route path={publicRoutes.USINGSWR} element={<UsingSWR />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
