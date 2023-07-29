import { FC } from "react";
import { ReactNode } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavSettings from "./NavSettings";
import ContainerHeader from "./ContainerHeader";

interface Props{
    children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return(
        <div className="h-screen flex items-start justify-between">
            <div className="hidden lg:block">
                <DesktopNav />
                <NavSettings />
            </div>
            <div className="block lg:hidden">
                <MobileNav />
                <NavSettings />
            </div>
            <div className="w-full">
                <ContainerHeader />
                <div className="mt-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;