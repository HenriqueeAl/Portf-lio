import { Projeto } from './projeto/projeto'
import './projetos.scss'

export const Projetos = () => {
    return(
        <div className='projetos'>
            <Projeto 
            name='Todolist App'
            repo='https://github.com/HenriqueeAl/Todolist-crud'
            tecnologias={['HTML', 'CSS', 'SASS','JavaScript','TypeScript', 'React', 'Node']}
            site='https://todolist-crud.vercel.app/'
            bg='url(todolist.png)'
            descricao='Um app de que voce pode criar uma conta e adicionar tarefas do seu dia a dia, marcar como concluidas, editalas e deletalas.'
            />
            <Projeto name='Blizzard'
            tecnologias={['HTML', 'CSS', 'SASS', 'React']}
            site='https://blizzard-iota.vercel.app/'
            bg='url(projectbilzzard.png)'
            descricao='Um app de que voce pode criar uma conta e adicionar tarefas do seu dia a dia, marcar como concluidas, editalas e deletalas.'
            />
            <Projeto name='Pizza Time'
            tecnologias={['HTML']}
            site='https://todolist-crud.vercel.app/'
            bg='url(todolist.png)'
            descricao='Um app de que voce pode criar uma conta e adicionar tarefas do seu dia a dia, marcar como concluidas, editalas e deletalas.'
            />
            <Projeto name='Burger Empire'
            tecnologias={['HTML']}
            site='https://todolist-crud.vercel.app/'
            bg='url(todolist.png)'
            descricao='Um app de que voce pode criar uma conta e adicionar tarefas do seu dia a dia, marcar como concluidas, editalas e deletalas.'
            />
        </div>
    )
}