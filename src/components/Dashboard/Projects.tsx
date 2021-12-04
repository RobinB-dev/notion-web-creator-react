import React, { useState, useEffect } from "react"
import classes from './Dashboard.module.css'
import ResizePanel from "react-resize-panel-ts";
import { useNavigate } from "react-router-dom"
import { Heading1, ColorText, Subtitle1 } from '../Blocks/Headings'
import ProjectCard from "./ProjectCard";

export const ProjectsMain = () => {

      useEffect(() => {
        // fetchPages()
      }, [])

    return (
        <>
        <div className={classes.textContainer}>
            <Heading1>
            Let’s start editing !
            </Heading1>
            <Subtitle1>
            You can find your most recent projects here.
            If you want to start with a new page, follow the instructions on the <ColorText>right panel</ColorText>.  
            </Subtitle1>
            <div className={classes.divider}></div>
        </div>
        <h3 className={classes.colorH3}>Select your project</h3>
        <div className={classes.cardsContainer}>
            <div className={classes.overflowScroll}>
                <ProjectCard
                    title="My super site"
                    src="https://picsum.photos/200/300"
                    date="string" />
                <ProjectCard
                    title="My super site"
                    src="https://picsum.photos/300/300"
                    date="string" />
                <ProjectCard
                    title="My super site"
                    src="https://picsum.photos/200/500"
                    date="string" />
            </div>
        </div>
    </>
    );
};

export const ProjectsToolBar = () => {
    return (
        <>
            <h2 className={classes.colorH2}>Need a hand ?</h2>
            <p>Don’t forget to add pages to your workspace before creating a new project !</p>
            <ol>
                <li><span>Go to&nbsp;<a href="https://www.notion.so/">Notion</a></span></li>
                <li><span>Create a new page inside your workspace, and add your text and images</span></li>
                <li><span>Pull your Notion pages from the Selfer app</span></li>
                <li><span>Find your project in the list, and start editing !</span></li>
            </ol> 
        </>
    );
};
