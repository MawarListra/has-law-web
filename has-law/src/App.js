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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
