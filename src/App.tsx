import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import EmployeeDetail from "./pages/EmployeeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
