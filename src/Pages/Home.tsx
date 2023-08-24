import { FC } from "react"
import {
    createStyles,
    Title,
    Text,
    Button,
    Container,
    rem,
    useMantineColorScheme,
} from "@mantine/core"

export const Home: FC = () => {
    const { colorScheme } = useMantineColorScheme()

    return (
        <>
            <div id="city-at-night">
                <div
                    className={
                        colorScheme === "dark"
                            ? "night-container"
                            : "day-container"
                    }
                >
                    <div className="river"></div>
                    <div
                        className="river-float"
                        style={{
                            animationDelay: "1s",
                            left: "200px",
                        }}
                    ></div>
                    <div
                        className="river-float"
                        style={{
                            animationDelay: "2s",
                            left: "700px",
                        }}
                    ></div>
                    <div
                        className="river-float"
                        style={{
                            animationDelay: "3s",
                            left: "1300px",
                        }}
                    ></div>
                    <div className="building-rowOne">
                        <div className="track"></div>
                        <div className="train-container">
                            <div className="train"></div>
                        </div>
                        <div className="further-train">
                            <div className="train"></div>
                        </div>
                        <div className="windows"></div>
                    </div>
                    <div className="reflection">
                        <div className="building-rowOne">
                            <div className="track"></div>
                            <div className="train-container">
                                <div className="train"></div>
                            </div>
                            <div className="windows"></div>
                        </div>
                    </div>
                    <div className="building-rowTwo">
                        <div className="banner"></div>
                        <div className="windows-rowTwo"></div>
                    </div>
                    <div className="building-rowThree"></div>
                </div>
            </div>
            {/*<h1>Welcome</h1>*/}
        </>
    )
}
