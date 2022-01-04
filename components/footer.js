import { Box } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Dian Ananda. All Rights Reserved.
    </Box>
  )
}
