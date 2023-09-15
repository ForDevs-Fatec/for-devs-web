import {styled} from "styled-components";
import { Link } from "react-router-dom";

interface NavbarProps {
  isActive?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
}

export const Container = styled.aside<NavbarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 6.75rem;
  height: 100%;
  padding: 2rem 0rem;
  
  background: ${({ theme }) => theme.colors.grey_background};

  position: fixed;
  z-index: 1000 !important;

  transition: width 0.3s ease;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Navbar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding-top: 2rem;
`;

export const NavbarLink = styled(Link)<NavbarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ isActive }) => (isActive ? "#00b4f1" : "#7c7c8a")};
  border-bottom: ${({ isActive }) => (isActive ? "2px solid #00b4f1" : "none")};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.blue_300};
  }
`;

export const NavbarSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.grey_placeholder};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.blue_300};
  }

`;

export const Logo = styled.img`
  width: 6.75rem;
  height: 6.75rem;
`;