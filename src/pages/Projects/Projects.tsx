import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import "./styles.css"
import { Box, Image, Stack } from '@chakra-ui/react';
import projects from "./Projects.json"
import { Link } from 'react-router-dom';

type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
}

function Project({ project }: { project: Project }) {
    return (
        <Stack as="section" direction={{ base: "column", lg: "row" }}>
            <Box width={{ base: "80%", md: "1/2" }} alignSelf="center" justifySelf="center">
                <Link to={project.link} target='_blank'>
                    <Image src={`/${project.image}`} alt={project.title} fit="contain" />
                </Link>
            </Box>
            <Box width={{ base: "90%", lg: "1/2" }} alignSelf="center" >
                <motion.h2>{project.title}</motion.h2>
                <motion.p>{project.description}</motion.p>
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