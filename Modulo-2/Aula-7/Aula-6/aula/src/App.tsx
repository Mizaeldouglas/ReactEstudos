import { Pessoa } from "./components/Pessoa"

const App= () => {

  let lista = [
    {name: 'Mizael',age:27},
    {name: 'Douglas', age:26},
    {name: 'Caroline', age:28},
    {name: 'Pedro', age: 90}
  ];
  return(
    <div>
      <h2>Lista de Presença</h2>
      <ul>
        {lista.map((item, index) =>(
          <Pessoa key={index} data={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;