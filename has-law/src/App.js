import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ExpertsDetail from "./components/Experts/Detail";
import ContentExpertsDetail from "./components/Experts/Detail/contentDetails";
import ServicesDetail from "./components/Services/Detail";
import ContentServicesDetail from "./components/Services/Detail/contentDetails";
import PublicationsDetail from "./components/Publications/Detail";
import ContentPublicationsDetail from "./components/Publications/Detail/contentDetails";
import { Achievements, Careers, ProBono } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        {/* experts */}
        <Route
          path="/experts"
          element={
            <Homepage>
              <ExpertsDetail />
            </Homepage>
          }
        />
        <Route
          path="/experts-detail/:id"
          element={
            <Homepage>
              <ContentExpertsDetail />
            </Homepage>
          }
        />
        {/* services */}
        <Route
          path="/services"
          element={
            <Homepage>
              <ServicesDetail />
            </Homepage>
          }
        />
        <Route
          path="/services-detail/:id"
          element={
            <Homepage>
              <ContentServicesDetail />
            </Homepage>
          }
        />
        {/* publications */}
        <Route
          path="/publications"
          element={
            <Homepage>
              <PublicationsDetail />
            </Homepage>
          }
        />
        <Route
          path="/publications-detail/:id"
          element={
            <Homepage>
              <ContentPublicationsDetail />
            </Homepage>
          }
        />
        {/* probono */}
        <Route
          path="/pro-bono"
          element={
            <Homepage>
              <ProBono />
            </Homepage>
          }
        />
        {/* careers */}
        <Route
          path="/careers"
          element={
            <Homepage>
              <Careers />
            </Homepage>
          }
        />
        {/* acievements */}
        <Route
          path="/achievements"
          element={
            <Homepage>
              <Achievements />
            </Homepage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
