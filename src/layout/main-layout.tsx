import { ReactElement, ReactNode } from "react"
import Navbar from "./navbar"


export const MainLayout = ({ children }: any) => {
    return (
        <div className="">
            <Navbar />
            {children}
        </div>
    )
}
export default MainLayout