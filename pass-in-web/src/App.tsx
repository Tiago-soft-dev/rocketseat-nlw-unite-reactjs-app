 interface MeuBtnProps {
  texto : string
 }
 
 function MeuBotao(props: MeuBtnProps){
  return (
  <button className="button">{props.texto}</button>
  )
 }
 
 export function App() {
  

  return (
    <div>
      <MeuBotao texto='Clique Aqui'/>
      <MeuBotao texto='Btn 2'/>
      <MeuBotao texto='Btn3'/>
      <MeuBotao texto='oi' />

    </div>
  )
}


