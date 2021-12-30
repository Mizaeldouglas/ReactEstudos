import style from './style.module.css'

export const Botao = () => {
    return(
        <div className={style.square}>
        <button className={style.botao}>Texto Qualque</button>
        <p className={style.legend}>Legenda</p>
        </div>
    
    )

}