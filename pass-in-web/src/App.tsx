import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"

 interface MeuBtnProps {
  texto : string
 }
 
 function MeuBotao(props: MeuBtnProps){
  return (
  <button className="bg-orange-400 h-10 px-3 rounded ">{props.texto}</button>
  )
 }
 
 export function App() {
  

  return (
    <div className="flex gap-2">
      <Header />
      <AttendeeList />

    </div>
  )
}


