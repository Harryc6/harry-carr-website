import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core"
import "./App.css"
import { Home } from "./Pages/Home"
import { Layout } from "./Layout/Layout"

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark")
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{
                    colorScheme: colorScheme,
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            {/*<Route path="contact" element={<Contact />} />*/}
                            {/*<Route path="*" element={<NoPage />} />*/}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App
