import React from 'react'
import module from './About.module.css'

const About = () => {
    return (
        <div className={module.about}>
            <h1>About page</h1>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et cum placeat sed id ut magnam maiores repellendus optio voluptatibus, iusto deserunt eaque facere minima eligendi ea nemo rerum incidunt.</div>
        </div>
    );
}

export default About;