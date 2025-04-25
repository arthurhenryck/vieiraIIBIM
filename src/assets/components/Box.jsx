import './Box.css'

function Box( {produto} ) {
    return (
        <>
            <div className='Box'>
                <div className='Pessoa'>
                    <div className='circulo'></div>
                    <h2 className='pessoatxt'> Pessoa/Usuario</h2>
                </div>
                <div className='Texto'>
                    <p> {produto} </p>
                </div>
                <div className='datahora'><p><strong> 12/04/2025 12:02 </strong></p></div>
            </div>
        </>
    )
}

export default Box