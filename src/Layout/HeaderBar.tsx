import { Logo } from "./Icon"
import {
    ActionIcon,
    Group,
    Header,
    Title,
    useMantineColorScheme,
} from "@mantine/core"
import React, { FC } from "react"
import { FiSun } from "react-icons/fi"
import { FaRegMoon } from "react-icons/fa"

export const HeaderBar: FC = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <Header height={60} p="xs">
            <Group sx={{ height: "100%" }} px={20} position="apart">
                <Title order={2}>Welcome</Title>
                <ActionIcon
                    variant="default"
                    onClick={() => toggleColorScheme()}
                    size={30}
                >
                    {colorScheme === "dark" ? <FiSun /> : <FaRegMoon />}
                </ActionIcon>
            </Group>
        </Header>
    )
}
