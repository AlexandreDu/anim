import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/layout";

import { Home } from "./pages";
import { About } from "./pages/about";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
