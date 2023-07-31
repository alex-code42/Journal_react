
import './App.css'
import './index.css'
import { Footer } from './components/EntryForm/Main/Footer'
import { Header } from './components/EntryForm/Main/Header'
import { Main } from './components/EntryForm/Main/Body_Main'
import { EntryForm } from './components/EntryForm/Main/Entry_Form'
import { Children } from 'react'



function App() {
 

  return (
    <>
      <Header></Header>
      <Main>
        <EntryForm>{Children}</EntryForm>
      </Main>
      <Footer></Footer>

    </>
  )
}

export default App
