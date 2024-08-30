import { useState } from "react";
import DashboardNavbar from "./Layout-Components/DashboardNavbar";
import DashboardSidebar from "./Layout-Components/DashboardSidebar";
import styles from "./dashboard.module.css"


export default function DashboardLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(true);
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