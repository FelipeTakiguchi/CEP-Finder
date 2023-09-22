import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const Content = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    border-radius: 1rem;
    background-color: #E6E6EA;
    margin-top: 3%;
    width: 100%;
`;

export const Pad = styled.div`
    padding: 1rem;
`;

export const Input = styled.input`
    min-width: 12rem;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 1rem;
`;

export const Output = styled.div`
    min-width: 22rem;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 1rem;
    background-color: white;
`;

export const Describe = styled.h1`

`;