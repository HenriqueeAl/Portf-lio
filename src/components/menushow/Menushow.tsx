import './menushow.scss'
import { AiFillCaretLeft, AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin, AiFillHome, AiOutlineRead, AiFillFolderOpen } from 'react-icons/ai';
import { GiSkills } from "react-icons/gi";
import { BiMessageDetail } from "react-icons/bi";

export const Menushow = (props: any) => {
    const code =  '</>'
    return (
        <div>
            <header>
                <div className='header-top'>
                    <h3>{code}</h3>
                    <AiFillCaretLeft className='arrow-left' onClick={props.menu}></AiFillCaretLeft>
                </div>
                <div className='content'>
                    <nav>
                        <ul>
                            <a href='#'><li>
                                <AiFillHome className='icons-nav-header'></AiFillHome>
                                <div></div>
                                <p>Inicio</p>
                            </li></a>
                            <a href='#'><li style={{backgroundColor: 'transparent'}}>
                                <AiOutlineRead className='icons-nav-header' style={{color: '#1B1F24'}}></AiOutlineRead>
                                <div></div>
                                <p>Sobre</p>
                            </li></a>
                            <a href='#'><li style={{backgroundColor: 'transparent'}}>
                                <AiFillFolderOpen className='icons-nav-header' style={{color: '#1B1F24'}}></AiFillFolderOpen>
                                <div></div>
                                <p>Projetos</p>
                            </li></a>
                            <a href='#'><li style={{backgroundColor: 'transparent'}}>
                                <GiSkills className='icons-nav-header' style={{color: '#1B1F24'}}></GiSkills>
                                <div></div>
                                <p>Habilidades</p>
                            </li></a>
                            <a href='#'><li style={{backgroundColor: 'transparent'}}>
                                <BiMessageDetail className='icons-nav-header' style={{color: '#1B1F24'}}></BiMessageDetail>
                                <div></div>
                                <p>Contato</p>
                            </li></a>
                        </ul>
                    </nav>
                    <div className='sociais-header'>
                        <a href='https://linkedin.com/in/henrique-almeida-de-oliveira' target='_blank'><AiOutlineLinkedin className='icons-sociais'></AiOutlineLinkedin></a>
                        <a href='https://github.com/HenriqueeAl' target='_blank'><AiOutlineGithub className='icons-sociais'></AiOutlineGithub></a>
                        <a href='https://www.instagram.com/' target='_blank'><AiOutlineInstagram className='icons-sociais'></AiOutlineInstagram></a>
                    </div>
                </div>
            </header>
        </div>
    )
}