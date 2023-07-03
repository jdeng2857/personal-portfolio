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
        <section className="experience_section">
          <section
            className={`subsection ${hovered ? 'hovered' : ''}`}
            onClick={toggleExpanded}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3>Shopify | Infrastructure Engineer Intern</h3>
            <h4>Jan 2023 - Aug 2023</h4>
            {props.images.map((image, index) => (
            <img
                key={index}
                className={image.classname}
                src={image.src}
                alt={image.classname}
            />
            ))}
          </section>
          {expanded && (
            <section>
              <p>
                Developed HTTPS L7 routing infrastructure with Google Kubernetes Engine, involving updating custom NGINX
                middleware written in Lua, provisioning SSL certificates and firewall rules, traffic management, handling 20 million RPM.
              </p>
              <p>
                Built observability tooling with Prometheus metrics and integrated request latency dashboards with alerts.
              </p>
              <p>Implemented automated memory deletion for Kubernetes controller in Golang, reducing resources used.</p>
              <p>Upgraded Kubernetes cluster fleet in Terraform with custom developer tools, improving infrastructure security.</p>
              <p>Reduced latency between two major services by 75% using Kubernetes load testing.</p>
              <p>Skills: Kubernetes, Google Cloud Platform (GCP), Terraform, NGINX, Golang</p>
            </section>
          )}
        </section>
    );
    
};

export default ExperienceSection;