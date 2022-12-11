import './projeto.scss'

interface projeto{
    name: string;
    descricao: string;
    repo?: string;
    site: string;
    bg: string
    tecnologias: Array<string>;
}

export const Projeto = (props : projeto) => {
    return(
        <div className='projeto'>
            <div className='w80'>
                <h3>{props.name} {props.repo ? <a href={props.repo} target='_blank'>- respositorio</a> : <></>}</h3>
                <div className='texts'>
                    <div className='descricao'>
                        <h5>Descricao:</h5>
                        <p>{props.descricao}</p>
                    </div>
                    <div className='tecnologias'>
                        <h5>Tecnologias:</h5>
                        <ul>
                            {props.tecnologias.map((e:string)=>{
                                return <li>{e}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <a className='bg-projeto' style={{backgroundImage: props.bg}} href={props.site} target='_blank'></a>
        </div>
    )
}