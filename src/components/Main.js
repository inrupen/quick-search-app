import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "./Header"
import SearchInput from "./SearchInput"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .search {
        display: flex;
        justify-content: center;
        height: 30rem;
    }
`

export default function Main() {
    const [jsonData, setJsonData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [searchWord, setSearchWord] = useState("")

    useEffect(() => {
        if(searchWord.length === 0 )
        {
            setFilteredData([])
        }else{
        const regex = new RegExp(`.*${searchWord}`, 'gi');
        const url = `/search?q=${searchWord}`
        const fetchData = async () => {
            await fetch(url)
                .then(response => response.json())
                .then(
                    result => {
                        const allSuggestions = result.suggestions
                        const filtered = allSuggestions.filter( item =>{
                            return ( item.searchterm.match(regex))
                        })
                        setFilteredData(filtered)
                    },
                    error => {
                        console.log("error:", error)
                    }
                )
        }
        fetchData()
    }

    }, [searchWord])

    return (
        <Wrapper>
            <Header />
            <div className="search">
                <SearchInput data={filteredData} searchWord={searchWord} setSearchWord={setSearchWord} />
            </div>
        </Wrapper>
    )
}
