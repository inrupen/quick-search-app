import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    color: #6d6d6d;
    font-size: 15px;
    padding: 0.4rem;
    display: block;
    text-align: left;
    border-right: 1.3px solid #e2e2e2;
    border-left: 1.3px solid #e2e2e2;
    border-bottom: 1.3px solid #e2e2e2;

    strong {
        color: #000000;
        font-weight: 700;
    }
`

export default function Highlight({ searchWord, string, number }) {
    function strongString(input) {
        return `<strong class="strong">${input}</strong>`
    }
    function highlightString() {
        let finalString = ""
        if (string && number) {
            if (searchWord && string.includes(searchWord)) {
                const searchString = string
                const searchThisInString = searchWord
                const splitString = searchString.split(searchThisInString)
                if (searchString.startsWith(searchThisInString)) {
                    finalString =
                        searchThisInString + strongString(splitString[1])
                } else if (searchString.endsWith(searchThisInString)) {
                    finalString =
                        strongString(splitString[0]) + searchThisInString
                } else {
                    finalString =
                        strongString(splitString[0]) +
                        searchThisInString +
                        strongString(splitString[1])
                }
            } else {
                finalString = `<strong class="strong">${string}</strong>`
            }
            finalString += ` (${number})`
        }
        return finalString
    }

    return <Div dangerouslySetInnerHTML={{ __html: highlightString() }} />
}
