import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Card from "./card.jsx"
import Students from "./students.jsx"
import UserGreetings from "./greetings.jsx"
import Btn from "./buttons.jsx"
import ColorPicker from "./colorPicker.jsx"


function App() {

  return(

    <div>
        <ColorPicker/>
    </div>
    // <div>
    //   <Btn/>
    // </div>

    // <div>
    //     <Header/>
    //     <UserGreetings isloggedin={true} name="Hridayansh"/>
    //     <UserGreetings isloggedin={false} name="Aman"/>
    //     <Footer/>
    // </div>


    // <div>
    //   <Header/>
    //   <Students name="Hridayansh Awasthi" age="18" course="Software Engineer" admission={true}/>
    //   <Students name="Rudra Vinayak" age="17" course="Software Engineer" admission={false}/>
    //   <Students name="Kalash Rastogi" age="17" course="Software Engineer" admission={true}/>
    //   <Footer/>
    // </div>

    // <>
    //   <Header />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Footer />
    // </>
  )
}

export default App
