import Home from "./components/Home"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Form from "./components/Form"
function App(){
return(
  <>
  <Nav/>
  <main>
  <Home/>
  <Projects/>
  <Form/>
  <Footer/>
  </main>
  </>
);
}
export default App;


/*import HeaderComp  from "./components/HeaderComp";



function App() {
  return(
    <main>
<HeaderComp/>
    </main>
  )
}
export default App*/