import './menuhide.scss'
import { AiFillCaretRight, AiFillHome, AiOutlineRead, AiFillFolderOpen, AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { GiSkills } from "react-icons/gi";
import { BiMessageDetail } from "react-icons/bi";
import { useRef,useEffect } from 'react';


export const Menuhide = (props: any) => {

    const inicio = useRef<HTMLLIElement>(null)
    const sobre = useRef<HTMLLIElement>(null)
    const projetos = useRef<HTMLLIElement>(null)
    const habilidades = useRef<HTMLLIElement>(null)
    const contato = useRef<HTMLLIElement>(null)

    useEffect(()=>{
        console.log(props.selecionado)

        if(props.selecionado === 'inicio'){
            inicio.current?.classList.remove('select')
            sobre.current?.classList.add('select')
            projetos.current?.classList.add('select')
            habilidades.current?.classList.add('select')
            contato.current?.classList.add('select')
            console.log(props.selecionados)
        }else if(props.selecionado === 'sobre'){
            inicio.current?.classList.add('select')
            sobre.current?.classList.remove('select')
            projetos.current?.classList.add('select')
            habilidades.current?.classList.add('select')
            contato.current?.classList.add('select')
            console.log(props.selecionados)
        }else if(props.selecionado === 'projetos'){
            inicio.current?.classList.add('select')
            sobre.current?.classList.add('select')
            projetos.current?.classList.remove('select')
            habilidades.current?.classList.add('select')
            contato.current?.classList.add('select')
            console.log(props.selecionados)
        }else if(props.selecionado === 'habilidades'){
            inicio.current?.classList.add('select')
            sobre.current?.classList.add('select')
            projetos.current?.classList.add('select')
            habilidades.current?.classList.remove('select')
            contato.current?.classList.add('select')
            console.log(props.selecionados)
        }else if(props.selecionado === 'contato'){
            inicio.current?.classList.add('select')
            sobre.current?.classList.add('select')
            projetos.current?.classList.add('select')
            habilidades.current?.classList.add('select')
            contato.current?.classList.remove('select')
            console.log(props.selecionados)
        }
    }, [props.selecionado])


    return (
        <header className='header-close'>
            <div className='open-header'>
                <AiFillCaretRight className='icon-open' onClick={props.menu}></AiFillCaretRight>
            </div>
            <nav className='nav-hide'>
                <ul>
                    <a href='#'><li ref={inicio} onClick={()=>props.area('inicio')}>
                        <AiFillHome className='icons-header-hide'></AiFillHome>
                    </li></a>
                    <a href='#'><li ref={sobre} onClick={()=>props.area('sobre')}>
                        <AiOutlineRead className='icons-header-hide'></AiOutlineRead>
                    </li></a>
                    <a href='#'><li ref={projetos} onClick={()=>props.area('projetos')}>
                        <AiFillFolderOpen className='icons-header-hide'></AiFillFolderOpen>
                    </li></a>
                    <a href='#'><li ref={habilidades} onClick={()=>props.area('habilidades')}>
                        <GiSkills className='icons-header-hide'></GiSkills>
                    </li></a>
                    <a href='#'><li ref={contato} onClick={()=>props.area('contato')}>
                        <BiMessageDetail className='icons-header-hide'></BiMessageDetail>
                    </li></a>
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