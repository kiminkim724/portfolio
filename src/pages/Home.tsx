import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <Box h="100dvh" pt="var(--header-height)" alignContent={"center"}>
            <Hero />
        </Box>
    );
}
export default Home;