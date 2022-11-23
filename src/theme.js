import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import "@fontsource/plus-jakarta-sans";

const fonts = { ...chakraTheme.fonts, body: "Plus Jakarta Sans" };

const theme = extendTheme({ fonts });

export default theme;