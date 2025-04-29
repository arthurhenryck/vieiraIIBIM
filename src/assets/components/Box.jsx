import './Box.css'

function Box( {comentario, Nome, DataHora}) {
    return (
        <>
            <div className='Box'>
                <div className='Pessoa'>
                    <div className='circulo'></div>
                    <h2 className='pessoatxt'> {Nome}</h2>
                </div>
                <div className='Texto'>
                    <p> {comentario} </p>
                </div>
                <div className='datahora'><p><strong> {DataHora} </strong></p></div>
            </div>
        </>
    )
}

export default Box