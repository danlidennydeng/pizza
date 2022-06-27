// import Featured from "./Featured"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <>
    
      <Navbar />
      {children}
      {/* <Featured /> */}
      <Footer />
  
    </>
  )
}

export default Layout