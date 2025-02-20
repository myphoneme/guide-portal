
// import Header from "../Header/BlogNavbar"
import Footer from "../Footer/Footer"
import BlogNavbar from "../Header/BlogNavbar"
import styles from '../ui/AppLayout.module.css'
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <>
        {/* <div className={`d-grid bg-white ${styles.pageRight}`}> 
            <Header />
            <main className="p-4">
                <Outlet />
            </main>
            <Footer />
        </div> */}
      <div>
        {/* <BlogNavbar /> */}
        <BlogNavbar/>
        <Outlet />  {/* This renders child routes */}
        <Footer />
    </div>
    </>
  )
}

export default AppLayout