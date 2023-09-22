import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header, IconOption, Title, NavCollapse, NavContent, NavLink, StyledButton } from "./styled";
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { DarkModeContext } from "../../context/darkMode";


export default function NavBar() {
    const { setMode, mode, primaryColor, secondaryColor, terciaryColor } = useContext(DarkModeContext);

    return (
        <>
            <Header expand="lg" style={{background: secondaryColor}}>
                <Container>
                    <Title style={{color: primaryColor}}>CEP Finder</Title>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavCollapse id="basic-navbar-nav">
                        <NavContent style={{color: primaryColor}}>
                            <IconOption>
                                <FontAwesomeIcon icon={icon({ name: 'home' })} />
                                <NavLink to="/" style={{color: primaryColor}}>Home</NavLink>
                            </IconOption>
                            <IconOption>
                                <FontAwesomeIcon icon={icon({ name: 'circle-info' })} />
                                <NavLink to="/about" style={{color: primaryColor}}>About</NavLink>
                            </IconOption>
                            <IconOption>
                                <FontAwesomeIcon icon={mode == "light" ? icon({ name: 'moon' }) : icon({ name: 'sun' })} />
                                <StyledButton style={{color: primaryColor}} onClick={() => mode == "light" ? setMode("dark") : setMode("light")}>Theme</StyledButton>
                            </IconOption>
                        </NavContent>
                    </NavCollapse>
                </Container>
            </Header>
            <Outlet />
        </>
    )
}