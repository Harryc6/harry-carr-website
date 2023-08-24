import { Navbar } from "@mantine/core"
import React, { FC } from "react"
import { Brand } from "./Brand"
import { MainLinks } from "./MainLinks"
import { Contact } from "./Contact"

export const NavigationBar: FC = () => {
    return (
        <Navbar p="xs" width={{ base: 300 }}>
            <Navbar.Section mt="xs">
                <Brand />
            </Navbar.Section>
            <Navbar.Section grow mt="md">
                <MainLinks />
            </Navbar.Section>
            <Navbar.Section>
                <Contact />
            </Navbar.Section>
        </Navbar>
    )
}
