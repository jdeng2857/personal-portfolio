import React, { useState } from 'react';

const ExperienceSection = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <section 
            className={`experience_section ${hovered ? 'hovered' : ''}`}
            onClick={toggleExpanded}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h3>{props.headings.title}</h3>
            <h4>{props.headings.period}</h4>
            {props.images.map((image, index) => (
            <img
                key={index}
                className={image.classname}
                src={image.src}
                alt={image.classname}
            />
            ))}
          
            {expanded && (
                <section className={`${expanded ? 'expanded' : ''}`}>
                    {props.descriptions.map((description, index) => (
                        <p key={index}>{description}</p>
                    ))}
                </section>
            )}
        </section>
    );
    
};

export default ExperienceSection;