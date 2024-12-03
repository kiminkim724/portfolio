import React from 'react';
import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';

const About: React.FC = () => {
    return (
        <Box h="80vh" p={5} maxW={{ base: "80%", "2xl": "60%" }} mx="auto" alignContent={"center"}>
            <Stack direction={{ base: 'column', xl: 'row' }} gap={[8, 16]} align="center">
                <Image
                    borderRadius="xl"
                    boxSize="450px"
                    src="/profile.JPEG"
                    alt="Profile Image"
                />
                <Box>
                    <Heading as="h2" size="3xl" mb={2}>
                        About Me
                    </Heading>
                    <Text fontSize="xl" textAlign={['center', 'left']} lineHeight={2}>
                        I currently work as a Lead Front-end Developer at the Data Lab in Tech Impact, creating dashboards and data visualizations for various non-profit and government organizations. I am also volunteering at Code for Boston on the MAPLE project as a Lead Back-end Developer. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
                    </Text>
                </Box>
            </Stack>
        </Box>
    );
};

export default About;