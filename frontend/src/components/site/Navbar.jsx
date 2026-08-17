import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_WHITE } from "@/data/site";
import { scrollToId } from "@/hooks/useLenis";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1C1C1C]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10 h-[72px] md:h-[92px] grid grid-cols-3 items-center">
        <div className="hidden md:flex items-center gap-9">
          {LINKS.slice(0, 2).map((l) => (
            <NavLink key={l.id} {...l} onClick={() => go(l.id)} />
          ))}
        </div>

        <button
          data-testid="nav-logo"
          onClick={() => go("home")}
          className="justify-self-start md:justify-self-center col-start-1 md:col-start-2"
        >
          <img
            src={LOGO_WHITE}
            alt="Delta Moto"
            className="h-14 md:h-[70px] w-auto" />
        </button>

        <div className="hidden md:flex items-center gap-9 justify-self-end">
          {LINKS.slice(2).map((l) => (
            <NavLink key={l.id} {...l} onClick={() => go(l.id)} />
          ))}
        </div>

        <button
          data-testid="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden justify-self-end col-start-3 text-white"
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#1C1C1C] border-t border-white/5 px-5 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <NavLink key={l.id} {...l} suffix="-mobile" onClick={() => go(l.id)} />
          ))}
        </div>
      )}
    </header>
  );
};

const NavLink = ({ label, onClick, suffix = "" }) => (
  <button
    data-testid={`nav-link-${label.toLowerCase()}${suffix}`}
    onClick={onClick}
    className="text-[13px] font-medium uppercase tracking-[0.22em] text-white/80 hover:text-[#C9A227] transition-colors"
  >
    {label}
  </button>
);
