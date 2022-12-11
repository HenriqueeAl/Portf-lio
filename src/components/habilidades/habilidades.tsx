import { Habilidade } from './habilidade/habilidade'
import './habilidades.scss'

export const Habilidades = () => {
    return (
        <div className='habilidades'>
            <Habilidade hab='HTML'/>
            <Habilidade hab='CSS'/>
            <Habilidade hab='SASS'/>
            <Habilidade hab='JavaScript'/>
            <Habilidade hab='TypeScript'/>
            <Habilidade hab='React'/>
            <Habilidade hab='Node'/>
            <Habilidade hab='Github'/>
            <Habilidade hab='Prisma'/>
        </div>
    )
} 