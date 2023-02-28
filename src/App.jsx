// styles
import "./styles/app.scss";
//components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
function App() {
  const { status, error } = useSelector((state) => state.movies);
  return (
    <>
      <Nav />
      {status === "failed" ? <h1>{error}</h1> : <Home />}
    </>
  );
}

export default App;
