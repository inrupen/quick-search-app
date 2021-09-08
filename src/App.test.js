import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "./App"

let AppWrapper

beforeEach(() => {
    AppWrapper = render(<App />)
})

afterEach(() => {
    AppWrapper = render(<App />)
})

describe("root app", () => {
    it("App renders successfully", () => {
        expect(AppWrapper).toMatchSnapshot();
    })
})
