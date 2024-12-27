import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage"; // Make sure to import these components
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
