

import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
            {/* sidber personal info */}
            <Sidebar />

            <div className="col-span-12 lg:col-span-8">
                <Header />
                {children}
            </div>
        </div>
    );
}