import { Logo } from "./Icon"
import { Center, Title, useMantineColorScheme } from "@mantine/core"
import React, { FC } from "react"

export const Brand: FC = () => {
    const { colorScheme } = useMantineColorScheme()

    return (
        <Center style={{ display: "block", textAlign: "center" }}>
            <>
                <Logo size={150} colorScheme={colorScheme} />
                <Title
                    order={1}
                    ff={"viburmedium"}
                    className={colorScheme === "dark" ? "glow" : ""}
                >
                    Harry
                </Title>
                <Title
                    order={5}
                    ff={"viburmedium"}
                    className={colorScheme === "dark" ? "glow" : ""}
                >
                    Full Stack Developer
                </Title>
            </>
        </Center>
    )
}
