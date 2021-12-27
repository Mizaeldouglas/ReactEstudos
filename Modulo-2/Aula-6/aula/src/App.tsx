import { Botao } from './components/Botao';



const App= () => {
  const botaoEventAction = (txt: string) =>{
    alert('Frase do app: '+txt)
  }

  return(
    <div>
      <Botao text="clicar no botão" clickFn={botaoEventAction} />

    </div>
  );
};

export default App;