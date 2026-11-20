import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import "./styles.css"
import { Box, Image, Stack, useBreakpointValue } from '@chakra-ui/react';
import projects from "./Projects.json"
import { Link } from 'react-router-dom';

type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

// Header height at lg+ (matches --header-height in index.css). Parallax only runs at lg+.
const DESKTOP_HEADER_HEIGHT = 144;

function Project({ project }: { project: Project }) {
    const ref = useRef(null);
    // Progress runs from the previous snap point (section top at viewport bottom) to the
    // next one (section bottom just under the header), so it is exactly 0.5 — and the
    // text sits at y = 0 — when this section is snapped into view.
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", `end ${DESKTOP_HEADER_HEIGHT}px`],
    });
    const y = useParallax(scrollYProgress, 300);

    // Use the parallax effect only at 'lg' or larger breakpoints
    const motionStyle = useBreakpointValue({
        base: {}, // No parallax effect for smaller breakpoints
        lg: { y }, // Apply parallax effect for 'lg' and larger
    });


    return (
        <Stack as="section" direction={{ base: "column", lg: "row" }} ref={ref}>
            <Box width={{ base: "100%", md: "80%", lg: "1/2" }} alignSelf="center">
                <Link to={project.link} target='_blank' rel="noopener noreferrer">
                    <Image src={`/${project.image}`} alt={project.title} fit="contain" w="100%" />
                </Link>
            </Box>
            <Box width={{ base: "100%", md: "80%", lg: "1/2" }} alignSelf="center">
                <motion.h2 style={motionStyle}>{project.title}</motion.h2>
                <motion.p style={motionStyle}>{project.description}</motion.p>
            </Box>
        </Stack>
    );
}



const Projects: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <Box className='projects-container'>
            {projects.map((project) => (
                <Project key={project.title} project={project} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </Box>
    );
};

export default Projects;