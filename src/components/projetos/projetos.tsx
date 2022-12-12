import { Projeto } from './projeto/projeto'
import './projetos.scss'

export const Projetos = () => {
    return(
        <div className='projetos'>
            <Projeto 
            name='Todolist App'
            repo='https://github.com/HenriqueeAl/Todolist-crud'
            tecnologias={['HTML', 'CSS', 'SASS','JavaScript','TypeScript', 'React', 'Node', 'Prisma']}
            site='https://todolist-crud.vercel.app/'
            bg='url(todolist.png)'
            descricao='Um app que voce pode criar uma conta e adicionar tarefas do seu dia a dia, marcar como concluidas, editalas e deletalas.'
            />
            <Projeto name='Blizzard'
            tecnologias={['HTML', 'CSS', 'SASS', 'JavaScript','TypeScript', 'React']}
            repo='https://github.com/HenriqueeAl/blizzard'
            site='https://blizzard-iota.vercel.app/'
            bg='url(projectbilzzard.png)'
            descricao='Um app de que voce pode criar uma conta e adicionar tarefas do seu dia a dia, marcar como concluidas, editalas e deletalas.'
            />
            <Projeto name='Pizza Time'
            tecnologias={['HTML', 'CSS', 'SASS', 'JavaScript','TypeScript', 'React']}
            repo='https://github.com/HenriqueeAl/Pizza-Time'
            site='https://pizza-time-five.vercel.app/'
            bg='url(pizzatimebg.png)'
            descricao='Um app de que voce pode criar uma conta e adicionar tarefas do seu dia a dia, marcar como concluidas, editalas e deletalas.'
            />
            <Projeto name='Burger Empire'
            tecnologias={['HTML', 'CSS', 'SASS', 'JavaScript','TypeScript', 'React']}
            repo='https://github.com/HenriqueeAl/Empire-Burger---BRChallenges'
            site='https://empire-burger-brchallenges.vercel.app/'
            bg='url(empireburgerbg.png)'
            descricao='Um app de que voce pode criar uma conta e adicionar tarefas do seu dia a dia, marcar como concluidas, editalas e deletalas.'
            />
        </div>
    )
}