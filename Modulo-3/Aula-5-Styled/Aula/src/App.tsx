import * as C from './AppStyles'

const App = () => {
  return (
      <C.Container bgColor="#00f0ff">



        <span>Texto do Component</span>
        <a href="#" className='link'> Link qualquer</a>


        <C.Botao bg="#ff0000">
          Grande
        </C.Botao>
        <C.Botao bg="#00ff00" small>
          Pequeno
        </C.Botao>
      </C.Container>
  )
}

export default App
