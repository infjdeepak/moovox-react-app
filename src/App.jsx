// styles
import "./styles/app.scss";
//components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
function App() {
  const { status, error } = useSelector((state) => state.movies);

  //rendrenig components
  if (status === "failed") {
    return (
      <>
        <Nav />
        <h1>{error}</h1>
      </>
    );
  }
  return (
    <>
      <Nav />
      <Home />
    </>
  );
}

export default App;
