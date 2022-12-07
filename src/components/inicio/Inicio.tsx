import './inicio.scss'

export const Inicio = () => {
    return (
        <section className='inicio'>
            <div className='inicio-left'>
                <div className='inicio-name'>
                    <div className='line-name'></div>
                    <h1>Henrique Almeida de Olivera</h1>
                    <p>Full-Stack developer</p>
                </div>
                <div className='inicio-idade'>
                    <div className='line-idade'></div>
                    <h4>Idade: 21</h4>
                </div>
                <div className='inicio-experiencia'>
                    <div className='line-experiencia'></div>
                    <h4>Experiência</h4>
                    <div className='center-experiencia'>
                        <p>Profissional: nenhuma</p>
                        <div className='line-meio-experiencia'></div>
                        <p>Estudando: 1 ano</p>
                    </div>
                </div>
                <div className='inicio-habilidades'>
                    <div className='line-habilidades'></div>
                    <h4>Habilidades</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li><a href='#'>Mostar todos</a></li>
                    </ul>
                </div>
            </div>

            <div className='inicio-description'>
            <p>
                Ola, Me chamo henrique tenho 21 anos sou apaixonado por tecnologia e atualmente estudo
                o ecossistema web a cerca de 1 ano e uso as seguintes tecnologias
                (HTML, CSS , SASS, JavaScript, TypeScript, React, NodeJs, Git), porem entrei nesse mundo
                da programação em 2019 com python.
            </p>
            <a href='#'>Mais</a>
            <button>BAIXAR CV</button>
            </div>
        </section>
    )
}