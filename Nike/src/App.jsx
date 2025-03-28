
import './App.css'
import Head from './components/Head'
import MainShow from './components/MainShow'
import Contents1 from './components/contents/contents1'
import Contents2_ar_shoes from './components/contents/Contents2_ari_shoes'
import ContentsText from './components/contents/ContentsText'
import Footer from './components/footer'

function App() {
  
  return (
    <>
      <section className='bg-background-dark
        min-h-screen box-border m-0 p-0 '>
        <Head />
        <MainShow />
        <Contents1 />
        <ContentsText img="TEXT.png"/>
        <Contents2_ar_shoes tit="All-Air arrivals" name="Nike Air Max DN8" />
        <Footer/>
      </section>
    </>
  )
}

export default App
