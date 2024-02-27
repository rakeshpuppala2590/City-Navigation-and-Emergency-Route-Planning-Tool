import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for navigation
export const Nav = styled.nav`
  background: #555;
  height: 85px; // Slightly reduced for a sleeker look
  display: flex;
  justify-content: space-between;
  padding: 0 5%; // Responsive padding instead of a fixed calculation
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out; // Smooth transition for hover

  &.active {
    color: #969595;
  }

  &:hover {
    background-color: #4a4a4a; // Background color on hover
    border-radius: 8px; // Rounded corners on hover
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #555;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #4a4a4a;
  padding: 10px 22px;
  color: #FFFFFF; // Better contrast and readability
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out; // Smooth transition for both background and text color
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    background: #FFFFFF;
    color: #808080;
  }
`;
