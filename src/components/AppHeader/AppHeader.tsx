import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../SVGs/DarkLogoIcon";
import MenuIcon from "../../SVGs/MenuIcon";
import { useState } from "react";
import CloseIcon from "../../SVGs/CloseIcon";
import AppButton from "../AppButton/AppButton";
import { motion, AnimatePresence } from "framer-motion";
import AppIcon from "../AppIcon/AppIcon";
import GithubIcon from "../../SVGs/GithubIcon";
import SunIcon from "../../SVGs/SunIcon";

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
    <header className="flex justify-between items-center select-none max-w-[1440px] w-full">
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
        className="hidden md:flex gap-2"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {linkList.map((link, i) => (
          <motion.div
            key={`route-${i}`}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-full cursor-pointer transition-all  ${
              path.pathname === link.to
                ? "bg-primary text-appWhite"
                : "hover:bg-grayHover"
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
        className="hidden md:flex gap-2"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <AppIcon icon={<GithubIcon />} handleClick={() => {}} />
        <AppIcon icon={<SunIcon />} handleClick={() => {}} />
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
        <ul className=" h-full flex flex-col gap-3">
          {linkList.map((link, i) => (
            <motion.li
              initial={{ y: "200%", x: "50%", opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{ delay: i / 20, duration: 0.25 }}
              className={`p-3 rounded ${
                path.pathname === link.to
                  ? "border border-appBorder bg-interactive "
                  : "hover:bg-blue-100"
              }`}
              key={`route-${i}`}
              onClick={() => {
                navigate(link.to);
                setOpenMenu(false);
              }}
            >
              {link.label}
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ y: "50%", x: 0, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="border-appBorder flex justify-center items-center border p-3 rounded bg-primary text-appWhite"
        >
          Dark mode
        </motion.div>
      </motion.div>
    </header>
  );
};

export default AppHeader;
