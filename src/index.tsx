import "./index.css"

import ApolloClient from "apollo-boost"

import React from "react"
import { render as Render } from "react-dom"

import App from "./App"

const client = new ApolloClient({
    uri: "https://demo.vendure.io/shop-api",
})

Render(
    <App />,
    document.getElementById("root"),
)

// https://demo.vendure.io/shop-api
