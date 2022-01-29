import React, { useContext, useEffect, useState } from "react"
import classes from './Dashboard.module.css'
import { Heading1, ColorText, Subtitle1 } from '../Blocks/Headings'
import ProjectCard from "./ProjectCard";
import DataContext from "../../contexts/DataContext";
import useDataApi from "../../hooks/useDataApi";

export const ProjectsMain = () => {
    const dataCtx = useContext(DataContext);
    const [isStored, setIsStored] = useState(false);
    const reloadProjects = dataCtx.isLoading.projects
    const url = `${process.env.REACT_APP_BASE_URL}/workspace_info?code=5d4c18c3-8247-43d6-8c77-1f12411671bc`
    const [{ data, isLoading }, doFetch] = useDataApi(url, dataCtx.notionPage,);

    useEffect(() => {
        if (reloadProjects) {
            console.log("dofetch");
            doFetch(url)
        }
    }, [reloadProjects])

    const _dataPage = dataCtx.notionPage

    useEffect(() => {
        if (data.length !== 0) {
            if (JSON.stringify(_dataPage) === JSON.stringify(data)) {
                setIsStored(true)
                dataCtx.setIsLoading((prevState: any) => ({
                    ...prevState,
                    projects: false
                }))
            } else {
                dataCtx.setNotionPage(data)
            }
        }
    }, [dataCtx.notionPage, data])


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
            {isLoading && <>Is loading</>}
            <div className={classes.cardsContainer}>
                <div className={classes.overflowScroll}>
                    {/* {isLoading &&
                        <ProjectCard
                            state={"loading"}
                            title={"Is loading"}
                            src={""}
                            emoji={"🔄"}
                            date={""} />
                    } */}
                    {!isStored &&
                        <ProjectCard
                            state={"empty"}
                            title={"No data fetched"}
                            src={""}
                            emoji={"❌"}
                            date={""} />
                    }
                    {isStored && _dataPage.map((block: any) =>
                        block.object === "page" &&
                        <ProjectCard
                            key={block.id}
                            state={"ok"}
                            title={block.title}
                            src={block.cover}
                            emoji={block.emoji}
                            date={block.last_edited_time} />
                    )}
                    {/* <ProjectCard
                        title="My super site"
                        src="https://picsum.photos/300/300"
                        date="string" />
                    <ProjectCard
                        title="My super site"
                        src="https://picsum.photos/200/500"
                        date="string" /> */}
                </div>
            </div>
        </>
    );
};

export const ProjectsToolBar = () => {
    return (
        <>
            <h2 className={classes.colorH2}>Need a hand ?</h2>
            <div className={classes.divider}></div>
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
