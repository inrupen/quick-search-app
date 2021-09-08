import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import HighlightText from "./HighlightText"

const mockData = require("../../../api/_search.get.json")
const suggestions = mockData.suggestions
const data = suggestions[0]

let HighlightWithoutText
let HighlightWithText

beforeEach(() => {
    HighlightWithoutText = render(<HighlightText />)
    HighlightWithText = render(
        <HighlightText
            searchWord={"truie"}
            string={data.searchterm}
            number={data.nrResults}
        />
    )
})

afterEach(() => {
    HighlightWithoutText.unmount()
    HighlightWithText.unmount()
})

describe("highlight text component", () => {
    it("renders no highlighted text-when no props", () => {
        const { container  } = render( <HighlightText /> )
        expect(HighlightWithoutText).toMatchSnapshot()
        expect(container).not.toContainHTML("strong")

    })

    it("renders highlighted text-with props", () => {
        const { container } = render(
            <HighlightText
                searchWord={"truie"}
                string={data.searchterm}
                number={data.nrResults}
            />
        )
        expect(HighlightWithText).toMatchSnapshot()
        expect(container).toContainHTML("strong")
    })
})
