import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1650px;
    overflow-x: hidden;
    background: var(--yellow);
    padding: 2rem;
    
    .image-background {
        position: absolute;
        right: -200px;
        top: 200px;
    }
    
    .background {
        width: 800px;
    }
`

export const Section = styled.section`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding: 2rem 0rem;
`

export const Title = styled.h1`
    font-size: 5rem;
    letter-spacing: .1rem;
    color: var(--black);
    line-height: 4.8rem;
    padding-right: 4rem;
`

export const Subtitle = styled.span`
    color: var(--black);
    margin: 1.4rem 0;
    line-height: 2rem;
    font-size: 1.2rem;
`

export const ContainerIcons = styled.div`
    width: 100%;
    max-width: 600px;
    margin-top: 3rem;

    a {
        display: inline-block;
        text-align: center;
        margin-right: 1.8rem;
    }

    img {
        display: block;
        max-height: 1.8rem;
    }
`

export const SectionInfo = styled.div`
    height: 700px;
    background: var(--blue-dark);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    
    .texts {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        width: 500px;
        text-align: center;

        h2 {
            font-size: 2.4rem;
            font-weight: 600;
            margin: 1rem;
            max-width: 340px;
        }
    
        span {
            width: 100%;
            line-height: 2rem;
            font-size: 1.2rem;
        }

    }
`

export const SectionBenefits = styled.section`
    height: 500px;
    `

export const ContainerImages = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    
    .card-image {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-top: -100px;
        
        &.top {
            margin-top: -200px;
        }

        img {
            max-width: 350px;

        }

        p {
            margin: 1rem 0rem;
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--black);
        }

        span {
            padding: 0 1rem;
            text-align: center;
            color: var(--black);
        }
    }
`

export const SectionQuiz = styled.section`
    background: var(--yellow-dark);
    padding-bottom: 10rem;

    .background-quiz {
        width: 100%;
        background: white;
    }

    .background-quiz-image {
    display: block;
    bottom: -20px;
    height: auto;
    margin: auto;
    max-width: 100%;
    position: relative;
    transition: all .8s ease-in-out;
    }
`

export const ContainerQuiz = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .lamp-icon {
        margin: 1rem;
        max-width: 8rem;
    }

    h2 {
        width: 100%;
        max-width: 600px;
        font-size: 1.4rem;
        font-weight: 600;
        text-align: center;
        letter-spacing: .1rem;
        
        color: var(--black);
        margin-bottom: 1rem;
    }
`

export const Card = styled.div`
    width: 100%;
    height: 5rem;
    max-width: 600px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 1rem;
    padding: 1rem;
    background: white;
    border-radius: .5em;
    border: 1px solid rgba(0,0,0, 0.3);
    box-shadow: 0px 6px 6px 0px rgba(0,0,0, 0.7);
    cursor: pointer;
    transition: .3s;
    
    &:hover {
        border: 1px solid var(--black);

        .card-text, .card-item .arrow-right {
            color: var(--blue);
        }
    }

    .icon-card {
        width: 2rem;
        margin-left: .5rem;
    }
    
    .card-item {
        display: flex;
        align-items: center;
        padding: 1rem;
        width: 100%;
        justify-content: space-between;

        
        p {
            font-size: 1.2rem;
            color: var(--black);
            
        }

        &:hover {
            p {
                color: var(--blue);
            }
        }

    }

    .arrow-right {
        color: var(--black);
    }
`

export const SectionBetter = styled.section`
    background: var(--blue-dark);
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    .title-better {
        margin: 2rem;
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        padding: 2rem 0;
    }
`

export const ContainerBetter = styled.div`
    width: 100%;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-bottom: 10rem;

    @media(max-width:700px){
        display: flex;
        flex-direction: column;
    }
`

export const Item = styled.div`
    max-width: 300px;
    padding: .5rem;

    @media(max-width:700px){
        display: flex;
        flex-direction: row;
        max-width: 100%;

        img {
            margin-right: 1rem;
        }
    }

    .title-item {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 1rem 0;
    }
`

export const SectionLandscape = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 200px;

    background-image: url("https://resources.betterment.com/hubfs/Graphics/webpage-graphics/Landscapes/Landscape-Clouds-Day-01_desktop.svg");
`

export const ContainerLandscape = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;


    h2 {
        margin-top: 10rem;
        padding: 2rem;
        font-size: 2.2rem;
        font-weight: bold;
        color: var(--black)
    }
`

export const ContentCards = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: -150px;
`


export const LandscapeCard = styled.div`
    width: 350px;
    height: 6rem;

    display: flex;
    align-items: center;

    border-radius: .25rem;
    border: 1px solid rgba(0,0,0, 0.3);
    box-shadow: 0px 6px 6px 0px rgba(0,0,0, 0.7);
    background: white;

    p, span {
        color: var(--black);
    }

    p {
        font-weight: bold;
        letter-spacing: .08rem;
        font-size: 1.4rem;
    }

    span {
        font-size: .8rem;
        margin-top: .5rem;
    }
`

export const SectionQuestions = styled.section`
    width: 100%;
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: var(--blue-dark);
    
    h1 {
        letter-spacing: .1rem;
        font-size: 2rem;
        font-weight: bold;
    }
`

export const ContainerQuestions = styled.div`
    width: 100%;
    display: grid;
`

export const Question = styled.details`
    padding: 2rem 1rem;
    border-bottom: 1px solid white;
    font-size: 1.2rem;
    
    p {
        line-height: 1.6rem;
        font-size: 1.1rem;
        margin: 2rem 1rem;
    }
`