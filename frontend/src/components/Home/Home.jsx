import { Sidebar } from "../Sidebar/Sidebar";
import { Panel } from "../Panel/Panel";

export const Home = () => {
  return (
    <main className='mainContainer'>
        <Sidebar />
        
        <Panel />
    </main>
  )
}
