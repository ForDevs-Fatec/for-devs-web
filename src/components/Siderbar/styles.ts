import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavbarLinkProps {
  isActive?: boolean;
}

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 6.75rem;
  height: 100%;
  padding: 2rem 0rem;
  
  background: ${({ theme }) => theme.colors.gray_background};

  position: fixed;
  z-index: 1000 !important;

  box-shadow: 5px 0px 20px rgba(204, 204, 204, 0.1);
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

export const NavbarLink = styled(Link)<NavbarLinkProps>`
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
    color: #00b4f1;
  }
`;

export const NavbarSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #7c7c8a;
  text-decoration: none;

  &:hover {
    color: #00b4f1;
  }
`;



export const Logo = styled.img`
  width: 6.75rem;
  height: 6.75rem;
`;