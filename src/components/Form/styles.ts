import styled from 'styled-components';

export const TodoForm = styled.form`
    width: 100%;
    max-width: 600px;
    
    display: flex;
    justify-content: center;
`


export const TodoInput = styled.input`
    border: 1px solid rgba(0,0,0, 0.3);
    background: white;
    height: 3.6rem;
    margin-right: .5rem;
    padding: 1rem;
    border-radius: .25rem;
    box-shadow: 0px 0px 4px 4px rgba(0,0,0, 0.1);
`

export const SubmitButton = styled.button`
    height: 3.6rem;
    width: 8rem;
    padding: .25rem;
    border-radius: .25rem;
    border: none;
    background: var(--blue);

    transition: background-color .3s;

    &:hover {
        background: var(--blue-dark);
    }

    @media (max-width: 600px) {
        width: 100px;
    }
`

export const TextButton = styled.p`
    color: white;
    font-weight: 600;
    cursor: pointer;

`
