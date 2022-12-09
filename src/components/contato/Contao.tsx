import './contato.scss'

export const Contato = ()=> {
    return(
        <section className='contato'>
            <form>
                <input placeholder='E-mail' type='email'></input>
                <input placeholder='Assunto'></input>
                <textarea className='message' placeholder='Message'></textarea>
                <button>Enviar</button>
            </form>
        </section>
    )
} 