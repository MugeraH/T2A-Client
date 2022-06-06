import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

type Props = {};
const DarkmodeSwitch: React.FC<Props> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};
export default DarkmodeSwitch;
