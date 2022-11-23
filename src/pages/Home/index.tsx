import Button from '../../components/Button'
import Header from '../../components/Header'
import TNYT from '../../assets/the-new-york-times-gray.png'
import CNBC from '../../assets/cnbc-gray.png'
import BI from '../../assets/business-insider.png'
import FORBES from '../../assets/forbes-gray.png'
import Mobile from '../../assets/mobile.png'
import Clock from '../../assets/clock.png'
import Compass from '../../assets/compass.png'
import Engine from '../../assets/engine.png'
import Lamp from '../../assets/lamp.png'
import { AiOutlineRight } from 'react-icons/ai'
import Book from '../../assets/svg/svgexport-8.svg'
import Computer from '../../assets/svg/svgexport-9.svg'
import Umbrella from '../../assets/svg/svgexport-10.svg'
import BackgroundYellow from '../../assets/svg/circle-yellow.svg'
import Item1 from '../../assets/svg/svgexport-2.svg'
import Item2 from '../../assets/svg/svgexport-3.svg'
import Item3 from '../../assets/svg/svgexport-4.svg'
import Item4 from '../../assets/svg/svgexport-5.svg'
import Item5 from '../../assets/svg/svgexport-6.svg'
import Item6 from '../../assets/svg/svgexport-7.svg'
import Badge from '../../assets/svg/Badge icon .svg'
import Star from '../../assets/svg/Star icon.svg'
import Heart from '../../assets/svg/Heart icon.svg'
import Safebox from '../../assets/svg/Assets icon .svg'


import { Container, ContainerIcons, SectionInfo, Section, Subtitle, Title, SectionBenefits, ContainerImages, SectionQuiz, ContainerQuiz, Card, SectionBetter, ContainerBetter, Item, SectionLandscape, ContainerLandscape, LandscapeCard, ContentCards, SectionQuestions, ContainerQuestions, Question } from './styles'
import { StartedButton } from '../../components/Button/styles'

export default function Home() {
    return (
        <>
            <Header />
            <Container>

                <Section>
                    <Title>Investing made better</Title>
                    <Subtitle>Meet the app that gives you the tools, inspiration, and support to help you become a better investor.</Subtitle>
                    <Button />
                    <ContainerIcons className=''>
                        <a href="/">
                            <img src={TNYT} alt="The New York Times" />
                        </a>
                        <a href="/">
                            <img src={CNBC} alt="CNBC" />
                        </a>
                        <a href="/">
                            <img src={BI} alt="Business insider" />
                        </a>
                        <a href="/">
                            <img src={FORBES} alt="Forbes" />
                        </a>
                    </ContainerIcons>
                </Section>
                <div className='image-background'>
                    <picture className='background'>
                        <source srcSet={Mobile} />
                        <img src={Mobile} alt="Betterment" className='background' />
                    </picture>
                </div>
            </Container>

            <SectionInfo>
                <div className='texts'>
                    <h2>Investing built for a better future.</h2>
                    <span>
                        Whether you're starting with $10 or $10M,
                        <br />
                        we’re built to help you reach your financial goals.</span>
                </div>
            </SectionInfo>

            <SectionBenefits>
                <ContainerImages>
                    <div className='card-image'>
                        <img src={Clock} alt="clock" />
                        <p>Easy</p>
                        <span>Get started with as little as $10 and use our top-rated mobile app to invest on the go.</span>
                    </div>
                    <div className='card-image top'>
                        <img src={Engine} alt="engine" />
                        <p>Optimized</p>
                        <span>We put the robots to work for you, with automated tools and strategies that can help unlock your money’s potential.</span>
                    </div>
                    <div className='card-image'>
                        <img src={Compass} alt="compass" />
                        <p>Personalized</p>
                        <span>Customize your account, either as hands on as you want, or with our guidance along the way.</span>
                    </div>
                </ContainerImages>
            </SectionBenefits>

            <SectionQuiz>
                <div className='background-quiz'>
                    <img className='background-quiz-image' src={BackgroundYellow} alt="background-quiz" />
                </div>

                <ContainerQuiz>
                    <img className='lamp-icon' src={Lamp} alt="lamp" />
                    <h2>Want to know how you can make the most of your money? Take our quiz.</h2>
                    <Card>
                        <img className='icon-card' src={Book} alt="Book" />
                        <div className='card-item'>
                            <p>I'm in school</p>
                            <AiOutlineRight size={18} className="arrow-right" />
                        </div>
                    </Card>

                    <Card>
                        <img className='icon-card' src={Computer} alt="Computer" />
                        <div className='card-item'>
                            <p className='card-text'>I'm working or job hunting</p>
                            <AiOutlineRight size={18} className="arrow-right" />
                        </div>
                    </Card>

                    <Card>
                        <img className='icon-card' src={Umbrella} alt="Umbrella" />
                        <div className='card-item'>
                            <p>I'm retired</p>
                            <AiOutlineRight size={18} className="arrow-right" />
                        </div>
                    </Card>
                </ContainerQuiz>
            </SectionQuiz>

            <SectionBetter>
                <h2 className='title-better'>What makes Betterment better?</h2>
                <ContainerBetter>
                    <Item>
                        <img src={Item1} alt="icon" />
                        <div>
                            <p className='title-item'>Built to make investing easy.</p>
                            <span>We'll guide you through portfolio options, risk levels, goal setting, and savings features.</span>
                        </div>
                    </Item>

                    <Item>
                        <img src={Item2} alt="icon" />
                        <div>
                            <p className='title-item'>Diversified investing.</p>
                            <span>We custom-build our portfolios using ETFs or cryptocurrencies to give you better diversification.</span>
                        </div>
                    </Item>

                    <Item>
                        <img src={Item3} alt="icon" />
                        <div>
                            <p className='title-item'>Transparent pricing.</p>
                            <span>We offer lower cost investing options so everyone can decide what’s best for their money.</span>
                        </div>
                    </Item>

                    <Item>
                        <img src={Item4} alt="icon" />
                        <div>
                            <p className='title-item'>Invest with your values.</p>
                            <span>Socially Responsible Investing can help make an impact while putting your money to work for you.</span>
                        </div>
                    </Item>
                    <Item>
                        <img src={Item5} alt="icon" />
                        <div>
                            <p className='title-item'>Limit tax impact.</p>
                            <span>Consider our tax strategies designed to help you limit the tax impact of your investments.</span>
                        </div>
                    </Item>
                    <Item>
                        <img src={Item6} alt="icon" />
                        <div className='content-item'>
                            <p className='title-item'>Track your finances.</p>
                            <span>Connect outside accounts to better inform our advice in one place.</span>
                        </div>
                    </Item>

                </ContainerBetter>
            </SectionBetter>

            <SectionLandscape>
                <ContainerLandscape>
                    <ContentCards>
                        <LandscapeCard>
                            <img src={Badge} alt="badge" />
                            <div>
                                <div className='container-stars'>
                                    <img src={Star} alt="star" />
                                    <img src={Star} alt="star" />
                                    <img src={Star} alt="star" />
                                    <img src={Star} alt="star" />
                                    <img src={Star} alt="star" />
                                </div>
                                <span>4.7 rating - 35,000 reviews</span>
                            </div>
                        </LandscapeCard>

                        <LandscapeCard>
                            <img src={Heart} alt="heart" />
                            <div>
                                <p>730,000+</p>
                                <span>customers</span>
                            </div>
                        </LandscapeCard>

                        <LandscapeCard>
                            <img src={Safebox} alt="safebox" />
                            <div>
                                <p>$30.7 Billion</p>
                                <span>Assets under management</span>
                            </div>
                        </LandscapeCard>
                    </ContentCards>

                    <h2>Be invested.</h2>
                    <Button />
                </ContainerLandscape>
            </SectionLandscape>

            <SectionQuestions>
                <h1>Still have questions?</h1>
                <ContainerQuestions>
                    <Question>
                        <summary>How does Betterment work?</summary>
                        <p>
                            Betterment helps you manage your money through cash management, guided investing, and retirement planning. We are a fiduciary, which means we act in your best interest.
                        </p>
                        <p>
                            We'll ask a bit about you when you sign up. We'll also gather information when you connect your outside accounts. Then, we'll help you set financial goals and set you up with investment portfolios for each goal.
                        </p>
                        <p>
                            For your long-term financial needs (like retirement, next year's vacation, or a down payment), our investment strategy utilizes low-cost ETFs (exchange-traded funds) and an adjustable risk profile based on your goal type and how long you plan to invest.
                        </p>
                        <p>
                            For your daily saving and spending, you can use our cash management products that include Checking (which is offered by nbkc bank, Member FDIC) and Cash Reserve, a high-yield cash account.
                        </p>
                    </Question>

                    <Question>
                        <summary>Will I have access to real humans?</summary>
                        <p>
                            Customer support team members are available five days per week to answer questions about your account.
                        </p>
                        <p>
                            If you want in-depth financial advice, you can talk to a licensed advisor by phone for an additional cost. Our Premium plan provides you with unlimited access and costs an additional 0.15% on your invested balances (with a minimum account balance requirement of $100,000). We also offer advice packages for needs of all kinds, starting at $299.
                        </p>
                    </Question>

                    <Question>
                        <summary>Is my money safe at Betterment?</summary>
                        <p>
                            Betterment helps you manage your money through cash management, guided investing, and retirement planning. We are a fiduciary, which means we act in your best interest.
                        </p>
                        <p>
                            Individual Cash Reserve accounts have FDIC insurance up to $1M and joint Cash Reserve accounts offer up to $2M in FDIC insurance once funds are deposited into our program banks†.
                        </p>
                        <p>
                            Funds deposited into Checking are FDIC-insured up to $250K for individual accounts and up to $250K per depositor for joint accounts, provided by nbkc bank, Member FDIC. Explore further details about FDIC insurance.
                        </p>
                    </Question>

                    <Question>
                        <summary>Who are the experts behind the scenes?</summary>
                        <p>
                            Our team of investing experts make decisions about our portfolio strategies and fund selection with the help of an external committee of economists, PhDs, and industry experts.
                        </p>
                        <p>
                            More than just a portfolio management team, our experts work to develop improvements to our Tax Smart technology, our cash analysis tools, and other advanced strategies.
                        </p>
                    </Question>
                </ContainerQuestions>
            </SectionQuestions>
        </>
    )
}
