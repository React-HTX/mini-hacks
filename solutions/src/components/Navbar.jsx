import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h1 className="logo">useState</h1>
          </Link>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li>
              <Link className="link" to="/one">
                one
              </Link>
            </li>
            <li>
              <Link className="link" to="/two">
                two
              </Link>
            </li>
            <li>
              <Link className="link" to="/three">
                three
              </Link>
            </li>
            <li>
              <Link className="link" to="/four">
                four
              </Link>
            </li>
            <li>
              <Link className="link" to="/five">
                five
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
