import React from "react"
import {
    Group,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineColorScheme,
} from "@mantine/core"
import { FiGithub } from "react-icons/fi"
import { BiLogoLinkedin } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"

interface MainLinkProps {
    icon: React.ReactNode
    colorLight: string
    colorDark: string
    label: string
    url: string
}

function MainLink({ icon, colorDark, colorLight, label, url }: MainLinkProps) {
    const { colorScheme } = useMantineColorScheme()

    return (
        <UnstyledButton
            sx={(theme) => ({
                display: "block",
                width: "100%",
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[0]
                        : theme.black,

                "&:hover": {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0],
                },
            })}
            onClick={() => window.open(url, "_blank", "noreferrer")}
        >
            <Group position={"center"}>
                <ThemeIcon
                    color={colorScheme === "dark" ? colorDark : colorLight}
                    variant={colorScheme === "dark" ? "outline" : "light"}
                >
                    {icon}
                </ThemeIcon>
                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    )
}

const data = [
    {
        icon: <FiGithub size="1rem" />,
        colorLight: "dark",
        colorDark: "gray",
        label: "GitHub",
        url: "https://github.com/Harryc6",
    },
    {
        icon: <BiLogoLinkedin size="1rem" />,
        colorLight: "blue",
        colorDark: "cyan",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/harry-carr-53a943122/",
    },
    {
        icon: <HiOutlineMail size="1rem" />,
        colorLight: "red",
        colorDark: "pink",
        label: "Email",
        url: "mailto:harrycarr64@hotmail.com",
    },
]

export function MainLinks() {
    const links = data.map((link) => <MainLink {...link} key={link.label} />)
    return <div>{links}</div>
}
