import './menushow.scss'
import { AiFillCaretLeft, AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin, AiFillHome, AiOutlineRead, AiFillFolderOpen } from 'react-icons/ai';
import { GiSkills } from "react-icons/gi";
import { BiMessageDetail } from "react-icons/bi";
import { useRef, useEffect } from 'react';

export const Menushow = (props: any) => {
    const code =  '</>'
    
    const inicio = useRef<HTMLLIElement>(null)
    const sobre = useRef<HTMLLIElement>(null)
    const projetos = useRef<HTMLLIElement>(null)
    const habilidades = useRef<HTMLLIElement>(null)
    const contato = useRef<HTMLLIElement>(null)

    useEffect(()=>{
        if(props.selecionado === 'inicio'){
            inicio.current?.classList.remove('select')
            sobre.current?.classList.add('select')
            projetos.current?.classList.add('select')
            habilidades.current?.classList.add('select')
            contato.current?.classList.add('select')
        }else if(props.selecionado === 'sobre'){
            inicio.current?.classList.add('select')
            sobre.current?.classList.remove('select')
            projetos.current?.classList.add('select')
            habilidades.current?.classList.add('select')
            contato.current?.classList.add('select')
        }else if(props.selecionado === 'projetos'){
            inicio.current?.classList.add('select')
            sobre.current?.classList.add('select')
            projetos.current?.classList.remove('select')
            habilidades.current?.classList.add('select')
            contato.current?.classList.add('select')
        }else if(props.selecionado === 'habilidades'){
            inicio.current?.classList.add('select')
            sobre.current?.classList.add('select')
            projetos.current?.classList.add('select')
            habilidades.current?.classList.remove('select')
            contato.current?.classList.add('select')
        }else if(props.selecionado === 'contato'){
            inicio.current?.classList.add('select')
            sobre.current?.classList.add('select')
            projetos.current?.classList.add('select')
            habilidades.current?.classList.add('select')
            contato.current?.classList.remove('select')
        }
    }, [props.selecionado])


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
                            <a href='#' onClick={()=>props.area('inicio')}><li ref={inicio} className='select'>
                                <AiFillHome className='icons-nav-header'></AiFillHome>
                                <div></div>
                                <p>Inicio</p>
                            </li></a>
                            <a href='#'><li onClick={()=>props.area('sobre')} ref={sobre} className='select'>
                                <AiOutlineRead className='icons-nav-header'></AiOutlineRead>
                                <div></div>
                                <p>Sobre</p>
                            </li></a>
                            <a href='#'><li onClick={()=>props.area('projetos')} ref={projetos} className='select'>
                                <AiFillFolderOpen className='icons-nav-header'></AiFillFolderOpen>
                                <div></div>
                                <p>Projetos</p>
                            </li></a>
                            <a href='#'><li onClick={()=>props.area('habilidades')} ref={habilidades} className='select'>
                                <GiSkills className='icons-nav-header'></GiSkills>
                                <div></div>
                                <p>Habilidades</p>
                            </li></a>
                            <a href='#'><li onClick={()=>props.area('contato')} ref={contato} className='select'>
                                <BiMessageDetail className='icons-nav-header'></BiMessageDetail>
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