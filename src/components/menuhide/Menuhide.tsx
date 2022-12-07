import './menuhide.scss'
import { AiFillCaretRight, AiFillHome, AiOutlineRead, AiFillFolderOpen, AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { GiSkills } from "react-icons/gi";
import { BiMessageDetail } from "react-icons/bi";


export const Menuhide = (props: any) => {
    return (
        <header className='header-close'>
            <div className='open-header'>
                <AiFillCaretRight className='icon-open' onClick={props.menu}></AiFillCaretRight>
            </div>
            <nav className='nav-hide'>
                <ul>
                    <a><li style={{backgroundColor: '#1B1F24'}}>
                        <AiFillHome className='icons-header-hide' style={{color: '#2D3039'}}></AiFillHome>
                    </li></a>
                    <a><li><AiOutlineRead className='icons-header-hide'></AiOutlineRead></li></a>
                    <a><li><AiFillFolderOpen className='icons-header-hide'></AiFillFolderOpen></li></a>
                    <a><li><GiSkills className='icons-header-hide'></GiSkills></li></a>
                    <a><li><BiMessageDetail className='icons-header-hide'></BiMessageDetail></li></a>
                </ul>
            </nav>
            <div className='sociais-header-close'>
                <a href='https://linkedin.com/in/henrique-almeida-de-oliveira' target='_blank'><AiOutlineLinkedin className='icons-sociais-header-close'></AiOutlineLinkedin></a>
                <a href='https://github.com/HenriqueeAl' target='_blank'><AiOutlineGithub className='icons-sociais-header-close'></AiOutlineGithub></a>
                <a href='https://www.instagram.com/' target='_blank'><AiOutlineInstagram className='icons-sociais-header-close'></AiOutlineInstagram></a>
            </div>
        </header>
    )
}