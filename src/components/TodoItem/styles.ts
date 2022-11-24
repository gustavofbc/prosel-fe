import styled from 'styled-components';

export const ListItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    padding: .5rem 1rem;
    margin-bottom: 1rem;
    color: var(--black);
    background: white;
    box-shadow: 0px 0px 4px 4px rgba(0,0,0, 0.2);
    border-radius: .25rem;

    .deleteIcon {
        width: 2.4rem;
        height: 2.4rem;
        padding: .25rem;
        margin-left: .5rem;
        border: 1px solid var(--red);
        border-radius: .25rem;
        cursor: pointer;
        color: var(--red);
        transition: .3s;

        &:hover {
            background: var(--red);
            color: white;
        }
    }

    @media (max-width: 600px) {
        width: 340px;
    }
`

export const TitleItem = styled.p`
    min-width: 400px;
    font-size: 1.2rem;
    word-break: break-word;

    @media (max-width: 600px) {
        min-width: 200px;
    }
`

