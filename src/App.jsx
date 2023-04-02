import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import Registration from "./components/Registration";
import CreatePassword from "./components/CreatePassword";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Dashboard from "./components/Dashboard";
import Chatroom from "./components/Chatroom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpwd" element={<CreatePassword />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="friend/:id" element={<Chatroom />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
