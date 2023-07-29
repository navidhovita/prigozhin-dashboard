import { FC } from "react";

const SearchBar: FC = () => {
    return(
        <div className="border border-ultraLightBlack rounded-sm bg-black text-white">
            <input type="text" placeholder="بگرد..." />
        </div>
    )
}

export default SearchBar;