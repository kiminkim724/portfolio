import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Box px={8} w="100vw">
            <Flex h={36} alignItems="center">
                <Link to="/">
                    <Heading size={{ base: "4xl", md: "6xl" }} fontWeight="bold" color="white">
                        Kimin Kim
                    </Heading>
                </Link>
                <Spacer />
                <Flex >
                    <Link to="/about">
                        <Button size="xl" colorScheme="teal" variant="outline" mr={4}>
                            About
                        </Button>
                    </Link>
                    <Link to="/projects">
                        <Button size="xl" colorScheme="teal" variant="outline">
                            Projects
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;