import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../SVGs/LogoIcon";
import MenuIcon from "../../SVGs/MenuIcon";
import { useState } from "react";
import CloseIcon from "../../SVGs/CloseIcon";
import AppButton from "../AppButton/AppButton";
import { motion, AnimatePresence } from "framer-motion";

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
    label: "Projects",
  },
  {
    to: "/about",
    label: "About",
  },
];

const menuVariants = {
  hidden: {
    x: "100%",
    transition: { ease: [0.9, -0.1, 0.01, 0.6] },
  },
  show: {
    x: 0,
    transition: { ease: [0.6, 0.01, -0.1, 0.9] },
  },
};

const AppHeader = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center mb-3 select-none">
      <motion.div
        className="cursor-pointer"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        onClick={() => {
          navigate("/");
        }}
      >
        <Logo />
      </motion.div>

      <motion.nav
        className="hidden md:flex gap-3"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {linkList.map((link, i) => (
          <motion.div
            key={`route-${i}`}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-full cursor-pointer transition-all  ${
              path.pathname === link.to ? "bg-appWhite text-primary" : ""
            }`}
            style={{ height: "max-content" }}
            onClick={() => {
              navigate(link.to);
            }}
          >
            {link.label}
          </motion.div>
        ))}
      </motion.nav>

      <motion.div
        className="hidden md:flex"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        dark mode
      </motion.div>

      {/* mobile menu icon */}
      {!openMenu && (
        <AnimatePresence>
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            className="md:hidden"
          >
            <AppButton
              icon={<MenuIcon />}
              tailwindClass=" text-appWhite "
              label=""
              handleClick={() => {
                setOpenMenu(true);
              }}
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Menu - only mobile */}
      <motion.div
        className=" md:hidden fixed w-full h-full max-w-sm bg-white right-0 bottom-0 shadow-2xl p-3 flex flex-col"
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
      >
        <div className=" h-[40px] w-full flex items-center justify-end">
          <AppButton
            icon={<CloseIcon />}
            label=""
            tailwindClass="text-white"
            handleClick={() => setOpenMenu(false)}
          />
        </div>
        <div className=" h-full flex flex-col gap-3">
          {linkList.map((link, i) => (
            <Link
              to={link.to}
              className={`p-3 rounded ${
                path.pathname === link.to
                  ? "border border-appBorder bg-interactive "
                  : "hover:bg-blue-100"
              }`}
              key={`route-${i}`}
              onClick={() => setOpenMenu(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="border-appBorder flex justify-center items-center border p-3 rounded bg-primary text-appWhite">
          Dark mode
        </div>
      </motion.div>
    </header>
  );
};

export default AppHeader;
