import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import InputSearch from "./InputSearch"

let InputSearchWrapper

beforeEach(() => {
    InputSearchWrapper = render(<InputSearch />)
})

afterEach(() => {
    InputSearchWrapper.unmount()
})

describe("input component", () => {
    it("renders successfully", () => {
        expect(InputSearchWrapper).toMatchSnapshot()
    })
})
