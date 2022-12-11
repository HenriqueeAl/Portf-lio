import { useState } from 'react'
import './App.scss'
import { Contato } from './components/contato/Contao';
import { Habilidades } from './components/habilidades/habilidades';
import { Inicio } from './components/inicio/Inicio';
import { Menuhide } from './components/menuhide/Menuhide'
import { Menushow } from './components/menushow/Menushow'
import { Projetos } from './components/projetos/projetos';
import { Sobre } from './components/sobre/sobre';

function App(props: any) {
  const [menu, setMenu] = useState(true);
  const [area,setArea] = useState('inicio');

  return (
    <div className="App">
      {menu == true ? 
      <Menushow menu={()=>setMenu(!menu)} area={setArea} selecionado={area}></Menushow>
       : 
      <Menuhide menu={()=>setMenu(!menu)} area={setArea} selecionado={area}></Menuhide>
      }

      {area == 'inicio' ? <Inicio></Inicio> : <></>}
      {area == 'sobre' ? <Sobre></Sobre> : <></>}
      {area == 'projetos' ? <Projetos /> : <></>}
      {area == 'habilidades' ? <Habilidades /> : <></>}
      {area == 'contato' ? <Contato></Contato> : <></>}
    </div>
  )
}

export default App
