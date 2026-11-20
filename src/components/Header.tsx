import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Box px={{ base: 4, md: 8 }} w="100%">
            <Flex h="var(--header-height)" alignItems="center" gap={4}>
                <Link to="/">
                    <Heading size={{ base: "2xl", sm: "4xl", md: "6xl" }} fontWeight="bold" color="white" whiteSpace="nowrap">
                        Kimin Kim
                    </Heading>
                </Link>
                <Spacer />
                <Flex gap={{ base: 2, md: 4 }}>
                    <Link to="/about">
                        <Button size={{ base: "sm", md: "xl" }} colorScheme="teal" variant="outline">
                            About
                        </Button>
                    </Link>
                    <Link to="/projects">
                        <Button size={{ base: "sm", md: "xl" }} colorScheme="teal" variant="outline">
                            Projects
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
