import { useState } from 'react'
import './App.scss'
import { Inicio } from './components/inicio/Inicio';
import { Menuhide } from './components/menuhide/Menuhide'
import { Menushow } from './components/menushow/Menushow'

function App(props: any) {
  const [menu, setMenu] = useState(true);
  console.log(menu)

  return (
    <div className="App">
      {menu == true ? <Menushow menu={()=>setMenu(!menu)}></Menushow> : <Menuhide menu={()=>setMenu(!menu)}></Menuhide>}
      <Inicio></Inicio>
    </div>
  )
}

export default App
