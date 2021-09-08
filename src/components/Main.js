import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "./Header/Header"
import InputSearch from "./InputSearch/InputSearch"

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
    const [filteredData, setFilteredData] = useState([])
    const [searchWord, setSearchWord] = useState("")

    useEffect(() => {
        if (searchWord.length <= 1 || searchWord === "") {
            setFilteredData([])
        }
        if (searchWord.length >= 2) {
            const regex = new RegExp(`.*${searchWord}`, "gi")
            const url = `/search?q=${searchWord}`
            fetch(url)
                .then(response => response.json())
                .then(
                    result => {
                        const allSuggestions = result.suggestions
                        const filtered = allSuggestions.filter(item => {
                            return item.searchterm.match(regex)
                        })
                        setFilteredData(filtered)
                    },
                    error => {
                        console.log("error:", error)
                    }
                )
        }
    }, [searchWord])

    return (
        <Wrapper>
            <Header />
            <div className="search">
                <InputSearch
                    filteredData={filteredData}
                    searchWord={searchWord}
                    setSearchWord={setSearchWord}
                />
            </div>
        </Wrapper>
    )
}
