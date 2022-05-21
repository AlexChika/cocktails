import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../utils/utils";
const Header = ({ headerBackground }) => {
  const [show, setShow] = useState(false);
  const listContainerRef = useRef(null);
  useEffect(() => {
    const listContainer = listContainerRef.current;
    const list = listContainer.firstChild;
    const rect = list.getBoundingClientRect();
    if (show) {
      listContainer.style.height = rect.height + "px";
    } else {
      listContainer.style.height = 0;
    }
  }, [show]);
  return (
    <Nav bg={headerBackground}>
      <div className="logo-con f">
        <div className="logo f">
          <img src={require("../Assets/cocktail.png")} alt="logo" />
          <h2>Cocktail...</h2>
        </div>
        <button
          onClick={() => setShow(!show)}
          className={`nav-toggle ${show ? "show" : ""}`}
        >
          <i className="bi bi-list"></i>
          <i className="bi bi-x"></i>
        </button>
      </div>
      <div ref={listContainerRef} className="nav-list-con">
        <ul className="list">
          {navigation.map((nav) => (
            <NavLink key={nav.name} to={nav.url}>
              {nav.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </Nav>
  );
};
export default Header;
const Nav = styled.nav`
  /* classes */
  .active {
    transition: all 0.25s linear;
    color: skyblue;
    position: relative;
    border: 1px solid skyblue !important;
    font-weight: 700 !important;
  }
  .logo-con {
    padding: 5px;
    justify-content: space-between;
    font-family: "Lobster", cursive;
    .logo {
      align-items: flex-end;
      color: #ffc966;
      h2 {
        text-shadow: 1px 1px 2px black;
      }
      img {
        height: 50px;
      }
    }
    button {
      width: 50px;
      position: relative;
      color: orange;
      margin-right: 5px;
      font-size: 30px;
      transition: all 0.3s linear;
    }
    button i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: inherit;
      transition: all 0.3s linear;
      height: 30px;
    }
    button i:first-of-type {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
    button i:last-of-type {
      opacity: 0;
      transform: translateX(-50%) translateY(-50%) scale(0);
    }
    button.show i:first-of-type {
      opacity: 0;
      transform: translateX(-50%) translateY(-50%) scale(0);
    }
    button.show i:last-of-type {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
  .nav-list-con {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    transition: all 0.4s linear;
    height: 0;
    overflow: hidden;
    color: #ffc966;
    .list {
      flex: 1;
      padding-left: 10px;
      a {
        transition: all 0.25s linear;
        display: block;
        width: max-content;
        line-height: 2em;
        cursor: pointer;
        padding: 0 10px;
        border: 1px solid transparent;
        font-weight: 500;
      }
    }
  }
  ${(props) => props.bg};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 5px #99737a;
  padding-bottom: 5px;
  @media screen and (min-width: 546px) {
    flex-direction: row;
    .logo-con {
      button {
        display: none;
      }
    }
    .nav-list-con {
      flex: 1;
      height: auto !important;
      .list {
        justify-content: space-around;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
  @media screen and (min-width: 650px) {
    .nav-list-con {
      .list {
        flex: 0.8;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .nav-list-con {
      .list {
        flex: 0.6;
      }
    }
  }
  @media screen and (min-width: 1025px) {
    .nav-list-con {
      .list {
        flex: 0.5;
      }
    }
  }
`;
