import React, { useState } from 'react'
import {Search as SearchIcon, ArrowBack} from '@material-ui/icons'

import './Search.css'

function Search() {

    const [value, setValue] = useState("")
    const [isSelected, setIsSelected] = useState(false)


    const SearchField = () => {
        const className = isSelected ? "searchIcon selected" : "searchIcon"
        return isSelected ? <ArrowBack className={className} /> : <SearchIcon className={className} />
    }

    return (

        <div className="search">
            <form>
                <SearchField />
                <input
                    type="text"
                    placeholder="Pesquisar ou começar uma nova conversa"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onSelect={e => setIsSelected(true)}
                    onBlur={e => setIsSelected(false)}
                />
            </form>
        </div>
    )
}

export default Search
