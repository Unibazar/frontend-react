import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import styles from "./dashboard.module.css"


export default function DashboardLayout({ children }) {
    return (
        <>
            <div className="dashboard-layout main flex h-screen w-full">
                <div className={`sidebar min-w-[7%] md:flex-1 overflow-y-scroll ${styles.sidebar}`}>
                    <Sidebar />
                </div>
                <div className={`main-content flex-[4] overflow-y-scroll relative ${styles.mainContainer}`}>
                <Navbar />
                <div className="bg-zinc-100 h-full">
                    {children}
                </div>
                </div>
            </div>
        </>
    );
}