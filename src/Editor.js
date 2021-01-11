import {useEffect, useRef} from "react"
import Muya from "./muya/lib"

import "./styles/editorBase.css"
import "./styles/one-dark.theme.css"
import "./styles/one-dark.prismjs.theme.css"
// import "./styles/scattered.css"
import TablePicker from './muya/lib/ui/tablePicker'
import QuickInsert from './muya/lib/ui/quickInsert'
function Editor() {
  const editorRef = useRef(null)
  useEffect(
    ()=>{
      // console.log(editorRef)
      Muya.use(TablePicker)
      Muya.use(QuickInsert)
      const muya = new Muya(editorRef.current)
      // editorRef.current.focus()
      // window.muya = muya
      muya.init()
    },
    []
  )
  return (
    <div className="editor" ref={editorRef}>
    
    </div>
  );
}

export default Editor;
