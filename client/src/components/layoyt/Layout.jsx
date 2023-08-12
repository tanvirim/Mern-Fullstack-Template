/* eslint-disable react/prop-types */
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div className="content">
        {children}

    </div>
    <Footer/>
    
      
    </>
  )
}

export default Layout
