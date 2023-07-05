import { SettingFilled } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

type Props = {
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

export default function ThemeSwitch({ setTheme }: Props) {
    const theme = useContext(ThemeContext);

    const onClick = () => {
        setTheme(theme === "light"? "dark" : "light");
    };

    return (
        <Tooltip placement="left" title="Switch Theme" >
            <Button onClick={onClick} icon={<SettingFilled />} style={{ position: "absolute", right: "20px", top: "20px" }}/>
        </Tooltip>
    );
}