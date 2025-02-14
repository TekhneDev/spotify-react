import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/artists" element={<Artists></Artists>}></Route>
        <Route path="/artist/:id" element={<Artist></Artist>}></Route>
        <Route path="/songs" element={<Songs></Songs>}></Route>
        <Route path="/song/:id" element={<Song></Song>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
