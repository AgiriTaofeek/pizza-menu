import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";
import Username from "../features/user/username";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase bg-yellow-400 border-b border-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
