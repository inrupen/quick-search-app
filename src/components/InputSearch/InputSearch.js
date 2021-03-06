import React from "react"
import styled from "styled-components"
import search from "../../assets/icon-search.png"
import cancel from "../../assets/icon-cancel.png"
import HighlightText from "../HighlightText/HighlightText"

const Wrapper = styled.div`
    margin: 1rem;
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    box-shadow: -6px 5px 20px 0px #d0d0d0;
    cursor: pointer;
    transition: 0.2s;
    padding: 0.7rem;

    .delete-icon {
        display: none;
    }

    @-moz-document url-prefix() {   /* input-search cancel-button-webkit not working for firefox */
        .delete-icon {
            display: inline;
            position: relative;
            right: 20.7%;
            color: #4c4c4c;
            height: 13px;
            width: 14px;
            cursor: pointer;
        }
    }
`
const Input = styled.input`
    width: 18rem;
    font-size: 15px;
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
        cursor: pointer;
    }
`

export default function InputSearch({
    searchWord,
    setSearchWord,
    filteredData,
}) {
    function handleChange(event) {
        setSearchWord(event.target.value)
    }
    function clear() {
        setSearchWord("")
    }

    return (
        <Wrapper>
            <Input
                type="search"
                id="search"
                data-testid="search"
                placeholder="Zoeken"
                aria-label="Search through sites content"
                onChange={handleChange}
                value={searchWord}
                maxLength="20"
            />
            {searchWord && (
                <img
                    data-testid="delete-icon"
                    className="delete-icon"
                    onClick={clear}
                    alt="clear all"
                    src={cancel}
                ></img>
            )}

            {searchWord &&
                filteredData.map((item, i) => (
                    <div key={i}>
                        <HighlightText
                            searchWord={searchWord}
                            string={item.searchterm}
                            number={item.nrResults}
                        />
                    </div>
                ))}
        </Wrapper>
    )
}
