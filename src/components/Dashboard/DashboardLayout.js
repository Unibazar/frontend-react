import { useEffect, useState } from "react";
import DashboardNavbar from "./Layout-Components/DashboardNavbar";
import DashboardSidebar from "./Layout-Components/DashboardSidebar";
import styles from "./dashboard.module.css"


export default function DashboardLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(true);


    useEffect(() => {
        if(window.innerWidth < 400){
            setShowSidebar(false);
          }
        // Function to check and update the state based on screen width
        const handleResize = () => {
          if(window.innerWidth < 400){
            setShowSidebar(false);
          }
        };

        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <>
            <div className="dashboard-layout main flex h-screen w-full relative">
                <div className={`sidebar overflow-y-scroll ease-linear duration-200 absolute z-[100] md:static bg-white  ${showSidebar?"max-[370px]:w-full w-3/4 sm:w-3/5 md:w-2/5 lg:w-1/3":"w-0"} ${styles.sidebar}`}>
                    <DashboardSidebar setShowSidebar={setShowSidebar}/>
                </div>
                <div className={`main-content overflow-y-scroll ease-linear duration-200 w-full ${styles.mainContainer}`}>
                    <DashboardNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>    
                    <div className="bg-zinc-100 min-h-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}