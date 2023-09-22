import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: 300;
`;

export const NavContent = styled(Nav)`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const NavCollapse = styled(Navbar.Collapse)`
    display: flex;
    justify-content: flex-end;
`;

export const IconOption = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`;

export const Header = styled(Navbar)`
    max-width: 100%;
    height: 6rem;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 2rem;
`;

export const StyledButton = styled(Button)`
    background-color: rgba(0, 0, 0, 0);
    border: none;
`;