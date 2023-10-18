import './App.css'
import React, { useEffect, useState } from 'react'
import Editor from './components/editor.jsx'
import useLocalStorage from './components/hooks.jsx'


export default function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [java, setJava] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
  <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${java}</script>
    </html> 
  `)
    },250)
    return()=> clearTimeout(timeout)
  },[html, css, java])

  return (
    <div>
      <section className='editor-div'>
        <Editor language="xml" displayname="HTML" code={html} onChange={setHtml} />
        <Editor language="css" displayname="CSS" code={css} onChange={setCss} />
        <Editor language='javascript' displayname="JavaScript" code={java} onChange={setJava} />
      </section>
      <section className='output-div'>
        <p>Output</p>
        <iframe
          className='output-iframe'
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'>
        </iframe>
      </section>
    </div>
  )
}