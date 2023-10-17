import 'modern-normalize/modern-normalize.css';
import './App.css';

import {useState} from "react";

import Level01 from "./levels/Level01.jsx";
import Level02 from "./levels/Level02.jsx";


function App() {

    const [showLevel2, setShowLevel2] = useState(false);
  function acceptLevel1(accept) {
    setShowLevel2(accept);
  }

  return (
    <>
        <Level01 sendMessage={acceptLevel1}></Level01>
        { showLevel2 ? <Level02></Level02> : '' }
    </>
  )
}

export default App
