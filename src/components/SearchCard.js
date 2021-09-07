import React, { useEffect, useState } from "react"
import styled from "styled-components"
import search from "../assets/icon-search.png"
import cancel from "../assets/icon-cancel.png"

const Wrapper = styled.div`
    margin: 1rem;
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    box-shadow: -6px 5px 20px 0px #d0d0d0;
    cursor: pointer;
    transition: 0.2s;
    padding: 0.7rem;


`
const Input = styled.input`
width: 18rem;
    border: 1.3px solid #e2e2e2;
    border-radius: 2px;
    padding: 0.4rem;
    background-image: url(${search});
    background-size: 13px;
    background-repeat: no-repeat;
    background-position: center right 5%;

    &:focus {
        outline: none;
        border: 1.3px solid #4c4c4c;
    }

    &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        position: absolute;
        right: 15%;
        color: #4c4c4c;
        height: 13px;
        width: 14px;
        content: url(${cancel});
    }
`

export default function SearchCard({ setSearchWord, data, ...props }) {
    function handleChange(event) {
        console.log("searchword:", event.target.value)
        setSearchWord(event.target.value)
    }

    return (
        <Wrapper>

                <Input
                    type="search"
                    placeholder="Zoeken"
                    aria-label="Search through sites content"
                    onChange={handleChange}
                ></Input>

            <div className="dropdown">
                
                    {data.map((item, i) => (
                        <div key={i}>
                            searchterm={item.searchterm} ({item.nrResults})
                        </div>
                    ))}
                
            </div>
        </Wrapper>
    )
}
