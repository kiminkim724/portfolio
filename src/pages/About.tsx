import React from 'react';
import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';

const About: React.FC = () => {
    return (
        // Full viewport height with the header space inside it (padding, not margin),
        // so the page is exactly one screen tall when the content fits.
        <Box
            minH="100dvh"
            pt="var(--header-height)"
            pb={{ base: 6, md: 10 }}
            px={{ base: 4, md: 5 }}
            alignContent={"center"}
        >
            <Box maxW={{ base: "100%", md: "80%", "2xl": "1200px" }} mx="auto">
                <Stack direction={{ base: 'column', xl: 'row' }} gap={{ base: 8, xl: 12 }} align="center">
                    <Image
                        borderRadius="xl"
                        w="100%"
                        maxW={{ base: "450px", xl: "400px" }}
                        aspectRatio={1}
                        objectFit="cover"
                        flexShrink={0}
                        src="/profile.JPEG"
                        alt="Profile Image"
                    />
                    <Box>
                        <Heading as="h2" size={{ base: "2xl", md: "3xl" }} mb={2} textAlign={{ base: 'center', md: 'left' }}>
                            About Me
                        </Heading>
                        <Text fontSize={{ base: "md", md: "lg", "2xl": "xl" }} textAlign={{ base: 'center', md: 'left' }} lineHeight={1.8}>
                            I am currently a student at Tufts University. Previously, I worked as a Lead Front-end Developer at the Data Lab in Tech Impact, creating dashboards and data visualizations for various non-profit and government organizations. I am also volunteering at Code for Boston on the MAPLE project as a Lead Back-end Developer. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
                        </Text>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default About;
