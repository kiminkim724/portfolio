import { Box, Heading, Text, HStack, IconButton, Link } from '@chakra-ui/react';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const FADE_DOWN = {
        show: { opacity: 1, y: 0, transition: { type: 'spring' } },
        hidden: { opacity: 0, y: 18 },
    };

    const TypingEffect = ({ text = 'Typing Effect' }: { text: string }) => {
        return <>
            {text.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.1, delay: index * 0.03 }}
                >
                    {letter}
                </motion.span>
            ))}
        </>
    }

    return (
        <Box
            as="section"
            color="white"
            textAlign="center"
            h="100%"
        >
            <Box maxW="90%" mx="auto" h="100%"
                alignContent={"center"} ref={ref}>
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'show' : ''}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    <motion.div variants={FADE_DOWN}>
                        <Heading size={{ base: "4xl", md: "6xl" }} fontWeight="bold" mb={4}>
                            Hi, I'm Kimin Kim
                        </Heading>
                    </motion.div>
                </motion.div>
                <Text fontSize={{ base: "lg", md: "2xl" }} mt={{ base: 6, md: 8 }}>
                    <TypingEffect text="A Passionate Software Developer." /><br /><br />
                    <TypingEffect text="Currently a student at Tufts University." /><br />
                    <TypingEffect text="Previously a Lead Front-end Developer for the Data Lab at Tech Impact." />
                </Text>

                <motion.div
                    initial="hidden"
                    animate={isInView ? 'show' : ''}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    <motion.div variants={FADE_DOWN}>
                        <HStack gap={4} justify="center" mt={{ base: 6, md: 10 }}>
                            <Link href="https://github.com/kiminkim724" target="_blank">
                                <IconButton
                                    aria-label="GitHub"
                                    size="2xl"
                                    variant="ghost"
                                    colorScheme="teal">
                                    <FaGithub />
                                </IconButton>
                            </Link>
                            <Link href="https://www.linkedin.com/in/kimin-kim/" target="_blank">
                                <IconButton
                                    aria-label="LinkedIn"
                                    size="2xl"
                                    variant="ghost"
                                    colorScheme="teal"
                                >
                                    <FaLinkedin />
                                </IconButton>
                            </Link>
                            <Link href="/resume.pdf" target="_blank">
                                <IconButton
                                    aria-label="Resume"
                                    size="2xl"
                                    variant="ghost"
                                    colorScheme="teal"
                                >
                                    <FaFileAlt />
                                </IconButton>
                            </Link>
                        </HStack>
                    </motion.div>
                </motion.div>
            </Box>
        </Box >
    );
};

export default Hero;