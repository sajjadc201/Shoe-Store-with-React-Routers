import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Men } from "./components/mensshoes/Men";
import { Women } from "./components/womenshoes/Women";
import { Kids } from "./components/kidsshoes/Kids";
import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./components/NoMatch";
import { MenShoeDetail } from "./components/mensshoes/MenShoeDetail";
import { WomenShoeDetail } from "./components/womenshoes/WomenShoeDetail";
import { KidsShoeDetail } from "./components/kidsshoes/KidsShoeDetail";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/men">
          <Men />
        </Route>
        <Route path="/men/:val">
          <MenShoeDetail />
        </Route>
        <Route path="/women">
          <Women />
        </Route>
        <Route path="/women/:val">
          <WomenShoeDetail />
        </Route>
        <Route path="/kids">
          <Kids />
        </Route>
        <Route path="/kids/:val">
          <KidsShoeDetail />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Routes>
    </div>
  );
};
