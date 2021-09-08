import React from "react"
import HighlightText from "./HighlightText"

export default {
    component: HighlightText,
    title: "Components/HighlightText",
}

const mockData = require("../../../api/_search.get.json")
const suggestions = mockData.suggestions
const data = suggestions[0]

export const withoutText = () => <HighlightText />
export const withText = () => (
    <HighlightText
        searchWord={"truie"}
        string={data.searchterm}
        number={data.nrResults}
    />
)
