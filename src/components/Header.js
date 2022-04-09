import React, {useState} from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Stack, useMediaQuery, Text, Heading, Link,  Divider, Code, Button } from '@chakra-ui/react';
import resume from '../pdfs/resume2022.pdf'
function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [ isBigScreen ] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
        
        <Box mt={isBigScreen ? "0" : "5"} mb={isBigScreen ? "10" : "15"}>
                  <div>
                    <Text fontSize={isBigScreen ? "6xl" : "4xl"} fontWeight="bold" mt={isBigScreen ? "0" : "6"}>Hi 👋 I'm</Text>
                    <Heading fontSize={isBigScreen ? "6xl" : "4xl"} fontWeight={"bold"} bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip={"text"}>Carter Belisle</Heading>
                  </div>
                
                  <Code p={"3"} fontSize={isBigScreen ? "2xl" : "1l"} fontWeight="light" mt={"6"} as="mark">I'm an engineering student interested in backend development, algorithms, and investing.</Code>
                  <Divider mt={"10"}/>
                  <Text fontSize={isBigScreen ? "2xl" : "xl"} fontWeight="light" mt={"6"}>🎓 B.S. Comp Sci @ <Link decoration="underline" href="https://www.cs.umn.edu"><Text as='u' fontWeight="medium">UMN '23</Text></Link> </Text>
                  <Text fontSize={isBigScreen ? "2xl" : "xl"} fontWeight="light" mt={"6"}>💻 Prev. @ <Link decoration="underline" href="https://www.amazon.com"><Text as='u' fontWeight="medium">Amazon</Text></Link> </Text>
                  <Text fontSize={isBigScreen ? "2xl" : "xl"} fontWeight="light" mt={"6"}>🚀 Incoming @ <Link decoration="underline" href="https://www.instagram.com"><Text as='u' fontWeight="medium">Instagram</Text></Link> & <Link decoration="underline" href="https://www.google.com"><Text as='u'  fontWeight="medium">Google</Text></Link></Text>
                  <Text fontSize={isBigScreen ? "2xl" : "xl"} fontWeight="light" mt={"6"}>&nbsp;📍&nbsp;&nbsp;Living in <Text as='em'  fontWeight="medium">Minneapolis, MN</Text> & <Text as='em'  fontWeight="medium">San Francisco, CA</Text> </Text>
          
                  <Text mt={"50"}fontSize={isBigScreen ? "2xl" : "1l"} fontWeight="medium">View my <Link href={resume}><Text as="u" color="cyan.400">resume</Text></Link> or <Link href="mailto:belis044@umn.edu"><Text as="u" color="cyan.400">contact me.</Text></Link></Text>
        </Box>
      
    </Stack>
  )
}

export default Header