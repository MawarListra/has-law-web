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
          path="/experts-detail"
          element={
            <Homepage>
              <ContentExpertsDetail />
            </Homepage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
