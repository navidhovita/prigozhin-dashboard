import { FC } from "react";
import { ReactNode } from "react";

interface Props{
    children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return(
        <>
            {children}
        </>
    )
}

export default Layout;