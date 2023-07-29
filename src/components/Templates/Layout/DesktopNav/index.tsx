import { FC } from "react";
import { headerOptions } from "@public/settings";
import Image from "next/image";
import Logo from "@public/images/logo.png";
import NavSettings from "../NavSettings";

const DesktopNav: FC = () => {
    return(
        <div className="w-full p-3 flex items-center flex-col gap-y-3">
            <div className="flex items-center pb-3 border-b border-b-[#fff]">
                <Image src={Logo} alt="logo" />
                <NavSettings />
            </div>
        </div>
    )
}

export default DesktopNav;