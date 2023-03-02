//redux
import { useDispatch } from "react-redux";
import { clearSearchState } from "../redux/slice/moviesSlice";
//router
import { Link } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="logo">
        <Link to="/" onClick={() => dispatch(clearSearchState())}>
          MoovoX
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
