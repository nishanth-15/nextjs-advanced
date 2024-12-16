import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

export default function Navbar() {
  console.log("navbar rendered");

  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
}
