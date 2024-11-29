import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import AppPreview from "./pages/finoraApp/AppPreview";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={<AppPreview />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};

export default App;
