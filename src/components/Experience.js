import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import kubernetesImg from '../assets/img/technologies/kubernetes.png';
import gcpImg from '../assets/img/technologies/gcp.png';
import terraformImg from '../assets/img/technologies/terraform.png';
import nginxImg from '../assets/img/technologies/nginx.png';
import golangImg from '../assets/img/technologies/golang.png';
import mysqlImg from '../assets/img/technologies/mysql.png';
import datadogImg from '../assets/img/technologies/datadog.png';
import elasticsearchImg from '../assets/img/technologies/elasticsearch.png';
import rubyImg from '../assets/img/technologies/ruby.png';
import graphqlImg from '../assets/img/technologies/graphql.png';
import reactImg from '../assets/img/technologies/react.png';
import typescriptImg from '../assets/img/technologies/typescript.png';
import cssImg from '../assets/img/technologies/css.png';
import wiresharkImg from '../assets/img/technologies/wireshark.png';
import bashImg from '../assets/img/technologies/bash.png';
import linuxImg from '../assets/img/technologies/linux.png';

export const Experience = () => {

  const experience = [
    {
      title: "Business Startup",
      description: "Design & Development",
      technologies: [],
      technologies_imgs: [],
    },
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <section className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Experience</h2>
                  <section className="experience_section">
                    <h3>Shopify | Infrastructure Engineer Intern</h3>
                    <h4>Jan 2023 - Aug 2023 (8 months)</h4>
                    <p>Developed HTTPS L7 routing infrastructure with Google Kubernetes Engine, involving updating custom NGINX
    middleware written in Lua, provisioning SSL certificates and firewall rules, traffic management, handling 20 million RPM</p>
                    <p>Built observability tooling with Prometheus metrics and integrated request latency dashboards with alerts</p>
                    <p>Implemented automated memory deletion for Kubernetes controller in Golang, reducing resources used</p>
                    <p>Upgraded Kubernetes cluster fleet in Terraform with custom developer tools, improving infrastructure security</p>
                    <p>Reduced latency between two major services by 75% using Kubernetes load testing</p>
                    <p>Skills: Kubernetes, Google Cloud Platform (GCP), Terraform, NGINX, Golang</p>
                    <img className="kubernetes" src={kubernetesImg} alt="kubernetes"></img>
                    <img className="gcp" src={gcpImg} alt="gcp"></img>
                    <img className="terraform" src={terraformImg} alt="terraform"></img>
                    <img className="nginx" src={nginxImg} alt="nginx"></img>
                    <img className="golang" src={golangImg} alt="golang"></img>
                  </section>

                  <section className="experience_section">
                    <h3>Shopify | Backend Developer Intern</h3>
                    <h4>May 2022 - December 2022 (8 months)</h4>
                    <p>Prepared project experiment to add a new server-driven section to the store screen of the Shop app, including
developing Ruby data loader ingesting MySQL data into client-ready GraphQL APIs with Redis caching</p>
                    <p>Integrated Elasticsearch templates adding a new sort option for products, ingesting 2 million records</p>
                    <p>Added monitoring to key backend services with StatsD metrics and linked metrics to Datadog monitors</p>
                    <p>Championed project deep-dive into improving store section performance, discovering extraneous logic and
coordinated action items for the team, resulting in 10% average reduction in latency across all services</p>  
                    <p>Skills: GraphQL, MySQL, Elasticsearch, Ruby, DataDog</p>
                    <img className="graphql" src={graphqlImg} alt="graphql"></img>
                    <img className="mysql" src={mysqlImg} alt="mysql"></img>
                    <img className="elasticsearch" src={elasticsearchImg} alt="elasticsearch"></img>
                    <img className="ruby" src={rubyImg} alt="ruby"></img>
                    <img className="datadog" src={datadogImg} alt='datadog"'></img>
                  </section>

                  <section className="experience_section">
                    <h3>Shopify | Software Engineer Intern</h3>
                    <h4>May 2021 - Apr 2022 (1 year)</h4>
                    <p>Designed and integrated report editing buttons into a internal data platform website, creating
                        React components, enabling archiving and locking reports for over 1000 developers and data scientists
                    </p>
                    <p>Fixed CSS styling errors, resulting in correct links and improved flex layout for superior user experience</p>
                    <p>Developed Ruby GraphQL APIs to allow authenticated users to access restricted functionalities and datasets</p>
                    <p>Owned pages of a major data discovery website revamp, drafting Figma designs, creating React components,
transforming GraphQL queries with Typescript, resulting in improved UI navigation for over 4000 employees
</p>
                    
                    <p>Skills: React, Typescript, GraphQL, Ruby, CSS</p>
                    <img className="react" src={reactImg} alt="react"></img>
                    <img className="typescript" src={typescriptImg} alt="typescript"></img>
                    <img className="graphql" src={graphqlImg} alt="graphql"></img>
                    <img className="ruby" src={rubyImg} alt="ruby"></img>
                    <img className="css" src={cssImg} alt="css"></img>
                  </section>

                  <section className="experience_section">
                    <h3>Nokia | Future Tech Intern</h3>
                    <h4>Jul 2019 - Aug 2019 (2 months)</h4>
                    <p>Analyzed network traffic with Wireshark to find malware indicators</p>
                    <p>Developed and shipped malware signatures into a system that blocks malignant requests</p>
                    <p>Learned fundamentals of the OSI model, TCP/IP, network security, bash, linux</p>
                    
                    <p>Skills: Bash, Wireshark, Linux </p>
                    <img className="bash" src={bashImg} alt="bash"></img>
                    <img className="wireshark" src={wiresharkImg} alt="wireshark"></img>
                    <img className="linux" src={linuxImg} alt="linux"></img>
                  </section>
                </section>
                
              } 
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}