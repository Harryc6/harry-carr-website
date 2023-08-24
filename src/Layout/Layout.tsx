import React, { FC } from "react"
import { AppShell } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"

export const Layout: FC = () => {
    return (
        <AppShell
            layout={"alt"}
            padding="md"
            navbar={<NavigationBar />}
            // header={<HeaderBar />}
            styles={(theme) => ({
                main: {
                    padding: "0px",
                    paddingLeft: "300px",
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                    background:
                        "linear-gradient(90deg, " +
                        (theme.colorScheme === "dark"
                            ? "#FFFFFF0C"
                            : "#0000000C") +
                        " 1px, transparent 1px)," +
                        "linear-gradient(" +
                        (theme.colorScheme === "dark"
                            ? "#FFFFFF0C"
                            : "#0000000C") +
                        " 1px, transparent 1px)," +
                        "linear-gradient(90deg, " +
                        (theme.colorScheme === "dark"
                            ? "#FFFFFF0C"
                            : "#0000000C") +
                        " 1px, transparent 1px)," +
                        "linear-gradient(" +
                        (theme.colorScheme === "dark"
                            ? "#FFFFFF0C"
                            : "#0000000C") +
                        " 1px, transparent 1px)," +
                        (theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0]),
                    backgroundSize:
                        "5px 5px," +
                        "5px 5px," +
                        "100px 100px," +
                        "100px 100px",
                },
            })}
        >
            <Outlet />
        </AppShell>
    )
}
