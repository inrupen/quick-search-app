import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "./Header"
import SearchCard from "./SearchCard"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .alignCard {
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
                        const filter = allSuggestions.filter( item =>{
                            return ( item.searchterm.match(regex))
                        })
                        setFilteredData(filter)
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

            <div className="alignCard">
                {/* { CardGrid } */}
                <SearchCard data={filteredData} setSearchWord={setSearchWord} />
            </div>
        </Wrapper>
    )
}
