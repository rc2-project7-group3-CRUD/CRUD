import { Sidebar } from "../Sidebar/Sidebar";
import { Panel } from "../Panel/Panel";
import "./Home.css";

export const Home = () => {
  return (
    <main className='mainContainer'>
        <Sidebar />
        
        <Panel />
    </main>
  )
}
