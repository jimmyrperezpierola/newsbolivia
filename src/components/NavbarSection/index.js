import React, { useState } from "react";

import {
    NavbarContainer,
    Nav,
    NavLogo,
    NavbarMenu,
    NavbarItem,
    NavbarLink,
    NavbarSearch,
    SearchLogo,
    SearchBar,
    BtnWrapper,
    NavBtn
} from './navbarElements';

const Navbar = () => {
    const [open, setOpen] = useState(false);
  
    const toggleOpen = () => {
      setOpen(!open);
    };
  
// export default function NavbarSection() {
    return (
        <>
                <NavbarContainer active={open}>
                <Nav>
                    <NavLogo to="/home">NewsBolivia</NavLogo>
                    <NavbarMenu>
                        <NavbarItem>
                            <NavbarLink to="/games">Games</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/category">Category</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/news">News</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/about">About</NavbarLink>
                        </NavbarItem>

                        <BtnWrapper>
                            <NavBtn>
                                Registrarse
                            </NavBtn>
                        </BtnWrapper>
                    </NavbarMenu>   
                    <NavbarSearch>
                        <SearchLogo/>
                        <SearchBar type="text" placeholder="Enter Games"/>
                    </NavbarSearch>                 
                </Nav>
            </NavbarContainer>
        </>
    );
};

export default Navbar;

