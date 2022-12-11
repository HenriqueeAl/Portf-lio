import './habilidade.scss'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { SiTypescript, SiJavascript, SiPrisma } from 'react-icons/si';
import { DiCss3, DiSass, DiReact, DiNodejsSmall } from 'react-icons/di';

interface habilidade{
    hab: string
}

export const Habilidade = (props: habilidade) => {
    return (
        <div className='box'>
            {props.hab == 'HTML' ? <AiFillHtml5 className='icon'></AiFillHtml5> : <></>}
            {props.hab == 'CSS' ? <DiCss3 className='icon'></DiCss3> : <></>}
            {props.hab == 'SASS' ? <DiSass className='icon'></DiSass> : <></>}
            {props.hab == 'React' ? <DiReact className='icon'></DiReact> : <></>}
            {props.hab == 'Node' ? <DiNodejsSmall className='icon'></DiNodejsSmall> : <></>}
            {props.hab == 'TypeScript' ? <SiTypescript className='icon'></SiTypescript> : <></>}
            {props.hab == 'JavaScript' ? <SiJavascript className='icon'></SiJavascript> : <></>}
            {props.hab == 'Github' ? <AiFillGithub className='icon'></AiFillGithub> : <></>}
            {props.hab == 'Prisma' ? <SiPrisma className='icon'></SiPrisma> : <></>}
            <p>{props.hab}</p>
        </div>
    )
} 