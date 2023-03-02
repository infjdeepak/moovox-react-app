// styles
import "./styles/app.scss";
//components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import StatusMessage from "./components/StatusMessage";
//redux
import { useSelector } from "react-redux";
//react router
import { Route, Routes } from "react-router-dom";

function App() {
  const { status, error } = useSelector((state) => state.movies);
  if (status === "failed") {
    return <StatusMessage message={error} />;
  }
  return (
    <>
      <Nav />
      <Routes>
        <Route path="*" element={<StatusMessage message={"not Found"} />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
