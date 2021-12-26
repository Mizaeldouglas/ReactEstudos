/*const App =()=>{
  let name:string = "Mizael"
  
  return (
  <div>
    Olá {name},Tudo bem?
  </div>
  );
};
*/

const App= () => {
  let n1:number =10
  let n2:number = 20

  function somar(n1:number,n2:number):number{
    return n1 * n2;
  }

  return(
    <div>
      Multiplicaçao: {somar(n1,n2)}
    </div>
  );
};
export default App;