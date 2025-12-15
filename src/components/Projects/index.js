import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have experience working on a wide range of projects, including AWS cloud applications and DevOps automation solutions.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'AWS app' ?
            <ToggleButton active value="AWS app" onClick={() => setToggle('AWS app')}>AWS APP'S</ToggleButton>
            :
            <ToggleButton value="AWS app" onClick={() => setToggle('AWS app')}>AWS APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Devops app' ?
            <ToggleButton active value="Devops app" onClick={() => setToggle('Devops app')}>DEVOPS APP'S</ToggleButton>
            :
            <ToggleButton value="Devops app" onClick={() => setToggle('Devops app')}>DEVOPS APP'S</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects