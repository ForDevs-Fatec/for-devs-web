import {
  DoorOpen,
  LayoutDashboard,
  Search
} from "lucide-react";

import {
  Container,
  Header,
  NavbarLink,
  Logo,
  NavbarSpan,
  Navbar
} from "./styles";

import logo from '../../assets/logoVertical.svg'

export function Sidebar() {

  return (
      <Container>
        <Header>
          <Logo src={logo} alt="fordevs logo" />
        </Header>
        <Navbar>
          <NavbarLink to="/dashboard">
            <LayoutDashboard size={24} />
            Dashboard
          </NavbarLink>

          <NavbarLink to="/dashboard">
            <Search size={24} />
            Pesquisa
          </NavbarLink>
        </Navbar>
        <NavbarSpan>
          <DoorOpen size={24} />
          Sair
        </NavbarSpan>
      </Container>
  );
}