import {
    ActionIcon,
    Avatar,
    Box,
    Center,
    Group,
    rem,
    Switch,
    Text,
    UnstyledButton,
    useMantineColorScheme,
    useMantineTheme,
} from "@mantine/core"
import React, { FC } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { FiSun } from "react-icons/fi"
import { FaRegMoon } from "react-icons/fa"

export const Contact: FC = () => {
    const theme = useMantineTheme()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <>
            <Group position="center" pb={10}>
                {/*<Switch*/}
                {/*    onClick={() => toggleColorScheme()}*/}
                {/*    size={"xl"}*/}
                {/*    // thumbIcon={*/}
                {/*    //     colorScheme === "dark" ? <FiSun /> : <FaRegMoon />*/}
                {/*    // }*/}
                {/*    color={theme.colorScheme === "dark" ? "gray" : "dark"}*/}
                {/*    onLabel={*/}
                {/*        <FiSun size="1rem" color={theme.colors.yellow[4]} />*/}
                {/*    }*/}
                {/*    offLabel={*/}
                {/*        <FaRegMoon size="1rem" color={theme.colors.blue[6]} />*/}
                {/*    }*/}
                {/*>*/}
                {/*    {colorScheme === "dark" ? <FiSun /> : <FaRegMoon />}*/}
                {/*</Switch>*/}
                <ActionIcon
                    variant="subtle"
                    onClick={() => toggleColorScheme()}
                    size={"lg"}
                >
                    {colorScheme === "dark" ? (
                        <FiSun size={22} color={theme.colors.yellow[4]} />
                    ) : (
                        <FaRegMoon size={22} color={theme.colors.blue[6]} />
                    )}
                </ActionIcon>
            </Group>

            {/*<Box*/}
            {/*    sx={{*/}
            {/*        paddingTop: theme.spacing.sm,*/}
            {/*        borderTop: `${rem(1)} solid ${*/}
            {/*            theme.colorScheme === "dark"*/}
            {/*                ? theme.colors.dark[4]*/}
            {/*                : theme.colors.gray[2]*/}
            {/*        }`,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <UnstyledButton*/}
            {/*        sx={{*/}
            {/*            display: "block",*/}
            {/*            width: "100%",*/}
            {/*            padding: theme.spacing.xs,*/}
            {/*            borderRadius: theme.radius.sm,*/}
            {/*            color:*/}
            {/*                theme.colorScheme === "dark"*/}
            {/*                    ? theme.colors.dark[0]*/}
            {/*                    : theme.black,*/}

            {/*            "&:hover": {*/}
            {/*                backgroundColor:*/}
            {/*                    theme.colorScheme === "dark"*/}
            {/*                        ? theme.colors.dark[6]*/}
            {/*                        : theme.colors.gray[0],*/}
            {/*            },*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Group>*/}
            {/*            <Avatar src="Images\Portrait.jpg" radius="xl" />*/}
            {/*            <Box sx={{ flex: 1 }}>*/}
            {/*                <Text size="sm" weight={500}>*/}
            {/*                    Harry Carr*/}
            {/*                </Text>*/}
            {/*                <Text color="dimmed" size="xs">*/}
            {/*                    harrycarr64@hotmail.com*/}
            {/*                </Text>*/}
            {/*            </Box>*/}

            {/*            {theme.dir === "ltr" ? (*/}
            {/*                <BiChevronRight size={rem(18)} />*/}
            {/*            ) : (*/}
            {/*                <BiChevronLeft size={rem(18)} />*/}
            {/*            )}*/}
            {/*        </Group>*/}
            {/*    </UnstyledButton>*/}
            {/*</Box>*/}
        </>
    )
}
