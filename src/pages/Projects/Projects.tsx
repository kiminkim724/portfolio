import React, { useRef } from 'react';
import { motion, useTransform, useScroll, useSpring, MotionValue } from 'framer-motion';
import "./styles.css"
import { Box } from '@chakra-ui/react';
import projects from "./Projects.json"
import { Link } from 'react-router-dom';

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
}

function Project({ project }: { project: Project }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section>
            <div ref={ref}>
                <Link to={project.link} target='_blank'>
                    <img src={`/${project.image}`} alt={project.title} />
                </Link>
            </div>
            <motion.h2 style={{ y }}>{project.title}</motion.h2>
            <motion.p style={{ y }}>{project.description}</motion.p>
        </section>
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