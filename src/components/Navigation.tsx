import { useEffect, useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import logoUrl from "@/assets/magbagbe-logo.png";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => setOpen(false));
    return unsub;
  }, [router]);

  const close = () => setOpen(false);

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <Link to="/" className="nav-logo" onClick={close}>
          <img src={logoUrl} alt="Mágbagbé-ilẹ̀ logo" className="nav-logo-img" />
          <span className="nav-logo-text">
            <span className="nav-logo-main">Mágbagbé-ilẹ̀</span>
            <span className="nav-logo-sub">Do Not Forget Your Land</span>
          </span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stories">Stories</Link></li>
          <li><Link to="/journal">Journal</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>

        <Link to="/community" className="nav-cta">Join The Movement</Link>

        <div
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          role="button"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <Link to="/" onClick={close}>Home</Link>
        <Link to="/stories" onClick={close}>Stories</Link>
        <Link to="/journal" onClick={close}>Journal</Link>
        <Link to="/about" onClick={close}>About</Link>
        <Link to="/community" onClick={close}>Community</Link>
        <Link to="/community" className="mobile-menu-cta" onClick={close}>
          Join The Movement
        </Link>
      </div>
    </>
  );
}
