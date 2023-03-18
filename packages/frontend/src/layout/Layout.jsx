import { useState } from 'react';
import './Layout.scss';
import logo from '../assets/images/logo.svg';
import { CONFIG } from '../config';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const navigate = useNavigate();

  return (
    <section className="layout" id="layout">
      <aside>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          {CONFIG.dashboardConfig.map(({ id, title, logo, link }) => {
            return (
              <div
                className="nav-selection"
                key={id}
                onClick={() => {
                  setSelectedPage(id);
                  navigate(link);
                }}
              >
                <img src={logo} alt={title} key={id} />
                <p
                  to={link}
                  className="nav-selection-link"
                  style={selectedPage === id ? { color: 'var(--blue)' } : {}}
                >
                  {title}
                </p>
              </div>
            );
          })}
        </nav>
      </aside>
      <section className="page-content">
        <header></header>
        <main>{children}</main>
      </section>
    </section>
  );
};

export default Layout;
