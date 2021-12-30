import { MainRounte } from "./routes/MainRounte";

const App = () => {
  
  return (
    <div className="p-5">
        <header>
          <h1>Titulo do site</h1>
        </header>
      <hr />
      <div className="py-4">
        <MainRounte />
      </div>
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  )
}

export default App
