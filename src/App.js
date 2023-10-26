import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navaigation/navigation.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component.jsx";

const Shop = function () {
  return (
    <div>
      <div>
        <h1>This is shop page</h1>;
      </div>
    </div>
  );
};
const App = function () {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
