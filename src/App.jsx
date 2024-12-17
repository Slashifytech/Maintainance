import { Route, Routes } from "react-router-dom";
import Maintanance from "./pages/Maintanance";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Maintanance />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
