import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const Content = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    border-radius: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
`;

export const Pad = styled.div`
    padding: 1rem;
`;

export const Input = styled.input`
    padding: 1rem;
    width: 100%;
    font-size: 1.5rem;
    border-radius: 1rem;
`;

export const Output = styled.div`
    min-width: 60%;
    padding: 1rem;
    margin-bottom: .2rem;
    font-size: 1.5rem;
    border-radius: 1rem;
    background-color: white;
`;

export const Message = styled.div`
    width: 30%;
    margin: 2rem;
    padding: 1rem;
    margin-bottom: .2rem;
    font-size: 1.5rem;
    border-radius: 1rem;
`;

export const Describe = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
`;

export const SubDescribe = styled.h2`
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-start;
    width: 58%;
    align-items: flex-start;
    font-weight: 500;    
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
`;