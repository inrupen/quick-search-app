import React from "react"
import InputSearch from "./InputSearch"

export default {
    component: InputSearch,
    title: "Components/InputSearch",
}

const mockData = require("../../../api/_search.get.json")
const suggestions = mockData.suggestions

export const InputWithoutText = () => <InputSearch />
export const InputWithText = () => (
    <InputSearch searchWord={"truie"} data={suggestions} />
)
