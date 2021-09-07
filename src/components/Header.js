import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
`

export default function Header() {
    return <Wrapper data-testid="header">Search app</Wrapper>
}
