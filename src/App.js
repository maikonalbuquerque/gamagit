import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App(props) {
  const [usuario, setUsuario] = useState("");
  return (
        <>  
            <p>{ usuario }</p>
            <input className="usuarioInput" placeholder="usuário" onChange = {e => setUsuario(e.target.value)}/>
            <button type="button">Pesquisar</button>
        </>
  );
}

export default App;
