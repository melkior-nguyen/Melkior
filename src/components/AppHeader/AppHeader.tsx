import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/SVGs/LogoIcon";

const linkList = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/services",
    label: "Services",
  },
  {
    to: "/projects",
    label: "Prjects",
  },
  {
    to: "/about",
    label: "About",
  },
];

const AppHeader = () => {
  const path = useLocation();
  return (
    <header className="flex justify-between items-center border mb-3">
      <div>
        <Logo />
      </div>
      <nav className="flex gap-3">
        {linkList.map((link, i) => (
          <Link
            to={link.to}
            className={`px-2 py-1 rounded-full ${
              path.pathname === link.to ? "bg-blue-400" : "hover:bg-blue-100"
            }`}
            key={`route-${i}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div>dark mode</div>
    </header>
  );
};

export default AppHeader;
