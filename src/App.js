import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import MemberPage from "./pages/MemberPage";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/member" element={<MemberPage/>}/>
      </Routes>
  );
};

export default App;