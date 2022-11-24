import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 100vw;
    background: var(--yellow);

    display: flex;
    justify-content: center;
    padding: 2rem;

    .todo {
        width: 100%;
        max-width: 500px;
    }

    .warning {
        margin: 1rem;
        width: 100%;
        max-width: 400px;
        height: 3.4rem;

        text-align: center;
        font-weight: 600;

        padding: 1rem;
        background: var(--yellow-dark);
        color: white;
        border-radius: .25rem;
    }

    @media (max-width: 1020px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        .todo {
            margin: 1rem;
        }
    }
`