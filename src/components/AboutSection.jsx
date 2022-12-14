import styled from 'styled-components';
import { useTheme } from '../context/themeContext';
import projectManagement from '../assets/images/analytics.png';
import bhetiImage from '../assets/images/bheti-img.jpg';
import giveMoney from '../assets/images/give-money.png'
import boxImg from '../assets/images/dots.png';

const AboutSection = () => {
    const theme = useTheme();
    return (
        <AboutSectionStyled  theme={theme}>
            <div className='left-about'>
                <h3 className='title'>
                    Nos solutions pour les entrepreneurs
                </h3>
                <div className='about-info'>
                    <div className='about-info-item'>
                        <div className='icon'>
                            <img src={projectManagement} className='project-img' alt='Project-Management' />
                        </div>
                        <div className='text-container'>
                            <h5>
                                Accompagnement pour la recherche de financement
                            </h5>
                            <p>
                                Nous vous proposons un accompagnement, sur mesure, qui permet de maitriser et optimiser votre recherche de financement. 
                                Grâce à un mix entre Intelligence Artificiel et expertise en financement de projet, nous offrons Bheti Connect Base, un outil clé en main, pour préparer votre levée de fonds et trouver des investisseurs.
                            </p>
                        </div>
                        <div className='icon'>
                            <img src={giveMoney} className='project-img' alt='Project-Management' />
                        </div>
                        <div className='text-container'>
                            <h5>
                                Trouvez le financement qui vous correspond
                            </h5>
                            <p>
                                Notre équipe d’expert en financement de projet analyse votre dossier et vérifie votre capacité à obtenir du financement. 
                                Nous identifions les investisseurs dont les critères de financement correspondent à votre projet pour vous fournir une liste exhaustive de solutions de financement adaptées à vos besoins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-about'>
                <img src={boxImg} className='box-img' alt='box-image' />
                <img src={bhetiImage} className='about-img' alt='bheti-image' />
            </div>
        
        </AboutSectionStyled>
        )
}

const AboutSectionStyled = styled.section`
    display: grid;
    background: ${props => props.theme.colorBlack};
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding-top: 10rem !important;
    @media only screen and (max-width: 2560px) and (min-width: 1800px) {
            height: 800px;
        }
    @media only screen and (max-width: 1800px) and (min-width: 1440px) {
            height: 800px;
        }
    .left-about{
        width: 90%;
        margin-left: 10%;
        h3{
            color: ${props => props.theme.colorWhite};
        }
        p{
            padding: 1.5rem 0;
            font-size: 17.7px;
            color: ${props => props.theme.colorGrey5};
            @media only screen and (max-width: 525px) and (min-width: 425px){
                padding: 1rem 0;
                font-size: 14px;
                margin-left: 35px;
            }
        }
        
        .title{
            margin-left: 10%;
            margin-bottom: 3%;
            font-size: 1.6rem;
            @media only screen and (max-width: 2560px){
                font-size: 2.7rem;
            }
            @media only screen and (max-width: 1800px){
                font-size: 2.4rem;
                margin-bottom: 5%;
            }
            @media only screen and (max-width: 1440px){
                font-size: 1.7rem;
                margin-bottom: 9%;
            }
            @media only screen and (max-width: 1350px){
                font-size: 1.8rem;
                margin-bottom: 9%;
            }
            @media only screen and (max-width: 1024px){
                font-size: 1.9rem;
                width: 600px;
                margin-bottom: 6%;
                margin-top: -20%;
                margin-left: 250px;
            }
            @media only screen and (max-width: 960px){
                font-size: 1.9rem;
                margin-bottom: 8%;
                margin-top: -25%;
                margin-left: 60px;
            }
            @media only screen and (max-width: 768px){
                font-size: 1.9rem;
                margin-bottom: 5%;
                margin-top: -10%;
                margin-left: 50px;
            }
            @media only screen and (max-width: 425px){
                font-size: 1.2rem;
                margin-bottom: 5%;
                margin-top: -2900%;
                width: 350px;
                margin-left: -2px;
            }
            @media only screen and (max-width: 375px){
                font-size: 1.2rem;
                margin-bottom: 5%;
                margin-top: -2900%;
                width: 350px;
                margin-left: -2px;
            }
            @media only screen and (max-width: 320px){
                font-size: 1rem;
                margin-bottom: 5%;
                margin-top: -2900%;
                width: 300px;
                margin-left: -2px;
            }
        }
        .about-info{
            .about-info-item{
                display: grid;
                grid-template-columns: 120px auto;
                margin-bottom: 1.5rem;
                p{
                    padding: .7rem 0;
                }
                h5{
                    font-size: 1.3rem;
                    color: ${props => props.theme.colorWhite};
                    @media only screen and (max-width: 525px) and (min-width: 425px){
                        font-size: 16.3px;
                        margin-top: 30px;
                    }
                    @media only screen and (max-width: 425px){
                        display: none;
                    }
                }
                .icon{
                    background-color: ${props => props.theme.colorWhite};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    align-self: flex-start;
                    margin-right: 1rem;
                    padding: 1rem;
                    border-radius: 7px;
                    .project-img{
                        width: 60px;
                    }
                }
                .text-container p{
                    text-align: justify;
                    text-justify: inter-word;
                    @media only screen and (max-width: 2560px) and (min-width: 1800px){
                        padding-bottom: 10%;
                    }
                    @media only screen and (max-width: 1800px) and (min-width: 1440px){
                        padding-bottom: 10%;
                    }
                    @media only screen and (max-width: 768px) {
                        width: 500px;
                    }
                    @media only screen and (max-width: 425px){
                        font-size: 15px;
                        width: 250px;
                        margin-left: -50px;
                    }
                    @media only screen and (max-width: 320px){
                        font-size: 12.1px;
                        width: 200px;
                        margin-left: -50px;
                    }
                }
                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    margin-top: 70px;
                }
                @media only screen and (max-width: 2560px) {
                    margin-left: 80px;
                }
                @media only screen and (max-width: 1024px) {
                    width: 650px;
                    margin-left: 30%;
                    .icon {
                        width: 70px;
                        height: 65px;
                        margin-top: 30%;
                        .project-img{
                            width: 60px;
                            margin-top: 10%;
                        }
                    }
                }
                @media only screen and (max-width: 960px) {
                    width: 600px;
                    margin-left: 70px;
                }
                @media only screen and (max-width: 768px) {
                    width: 400px;
                    margin-left: 10px;
                }
                @media only screen and (max-width: 425px) {
                    width: 300px;
                }
                @media only screen and (max-width: 320px) {
                    width: 280px;
                }

                @media only screen and (max-width: 525px) and (min-width: 425px) {
                    .icon {
                        width: 50px;
                        height: 55px;
                        margin-top: 30%;
                        .project-img{
                            width: 40px;
                            margin-top: 10%;
                        }
                    }
                    .text-container {
                        display: contents;
                    }
                }
                @media only screen and (max-width: 425px){
                    .icon{
                        width: 50px;
                        height: 55px;
                        margin-top: 30%;
                        .project-img{
                            width: 40px;
                            margin-top: 10%;
                        }
                    }
                    .text-container {
                        margin-top: 10%;
                        display: contents;
                    }
                }
            }
        }
        @media only screen and (max-width: 2560px) and (min-width: 1800px) {
            width: 100%;
            bottom: 5rem;
        }
        @media only screen and (max-width: 1800px) and (min-width: 1440px) {
            width: 100%;
            bottom: 5rem;
        }
        @media screen and (max-width: 376px) {
                width: 330px;
                margin-left: 5%;
	            }
        @media only screen and (max-width: 768px){
            width: 160%;
            bottom: 5rem;
        }
        @media only screen and (max-width: 425px){
            width: 1%;
            bottom: 5rem;
        }
        
    }

    .right-about{
        position: relative;
        display: flex;
        justify-content: flex-end;
        @media only screen and (max-width: 2560px) and (min-width: 1800px) {
            bottom: 5%;
        }
        .about-img{
            width: 90%;
            object-fit: cover;
            height: 500px;
            border-top-left-radius: 70px;
            border-bottom-right-radius: 70px;
            border-top-right-radius: 3px;
            border-bottom-left-radius: 3px;
            transition: all .3s ease-in-out;
            &:hover{
                transform: scale(1.05);
            }
            @media only screen and (max-width: 2560px) and (min-width: 1800px){
                    margin-right: 10%;
                    width: 700px;
                    height: 550px;
            }
            @media only screen and (max-width: 1800px) and (min-width: 1440px){
                    margin-right: 10%;
                    width: 550px;
                    height: 460px;
            }
            @media only screen and (max-width: 1440px) and (min-width: 1350px){
                    margin-right: 15%;
                    width: 490px;
                    height: 400px;
            }
            @media only screen and (max-width: 1350px) and (min-width: 1250px){
                    margin-right: 12%;
                    width: 500px;
                    height: 430px;
            }
            @media only screen and (max-width: 1250px) and (min-width: 1024px){
                    margin-right: 12%;
                    width: 430px;
                    height: 550px;
            }
            @media only screen and (max-width: 1024px) {
                display: none;
            }
        }
        .box-img{
            position: absolute;
            width: 80px;
            left: 3%;
            top: -8%;
            animation: scaleUp 8s infinite;
            @keyframes scaleUp {
                0%{
                    transform: scale(1);
                }
                50%{
                    transform: scale(1.2);
                }
                100%{
                    transform: scale(1);
                }
            }
            @media only screen and (max-width: 2560px) and (min-width: 1800px){
                    margin-left: 10%;
                    
            }
            @media only screen and (max-width: 1800px) and (min-width: 1440px){
                    margin-left: 20%;
                    
            }
            @media only screen and (max-width: 1440px) and (min-width: 1350px){
                    margin-left: 8%;
                    
            }
            @media only screen and (max-width: 1350px) and (min-width: 1250px){
                    margin-left: 7%;
                    
            }
            @media only screen and (max-width: 1250px) and (min-width: 1024px){
                    margin-left: 6.5%;
            }
            @media only screen and (max-width: 1024px){
                    display: none;
            }
        }
        @media only screen and (max-width: 1250px) and (min-width: 1024px){
                    margin-left: 6.5%;
            }
    }
    
`;

export default AboutSection