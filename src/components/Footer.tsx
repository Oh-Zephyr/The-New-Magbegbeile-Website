import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/magbagbe-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logoUrl} alt="Mágbagbé-ilẹ̀ logo" className="footer-brand-img" />
              <div>
                <div className="footer-brand-name">Mágbagbé-ilẹ̀</div>
                <div className="footer-brand-sub">Do Not Forget Your Land</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              A cultural preservation movement dedicated to protecting African
              heritage, oral traditions, and ancestral wisdom for future
              generations.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/stories">Stories</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/community">Community</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Our Work</div>
            <ul className="footer-links">
              <li><Link to="/stories">Documentaries</Link></li>
              <li><Link to="/journal">Oral Traditions</Link></li>
              <li><Link to="/journal">Cultural Archive</Link></li>
              <li><Link to="/stories">Elder Voices</Link></li>
              <li><Link to="/about">Heritage Maps</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Movement</div>
            <ul className="footer-links">
              <li><Link to="/community">Join Us</Link></li>
              <li><Link to="/community">Share A Story</Link></li>
              <li><Link to="/community">Support The Mission</Link></li>
              <li><Link to="/contact">Partner With Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 Mágbagbé-ilẹ̀. All rights reserved. A Cultural Preservation
            Movement.
          </div>
          <div className="footer-proverb">Àjọ o lè dá bí ilé</div>
        </div>
      </div>
    </footer>
  );
}
