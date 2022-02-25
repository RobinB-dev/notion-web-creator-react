import React, { useContext, useEffect, useState } from "react"
import styles from './Dashboard.module.css'
import { Heading1, ColorText, Subtitle1 } from '../Blocks/Headings'
import ProjectCard from "./ProjectCard";
import DataContext from "../../contexts/DataContext";
import useDataApi from "../../hooks/useDataApi";

export const ProjectsMain = () => {
    const dataCtx = useContext(DataContext);
    const [isStored, setIsStored] = useState(false);
    const reloadProjects = dataCtx.isLoading.projects
    const url = `${process.env.REACT_APP_BASE_URL_API}/workspace_info?code=5d4c18c3-8247-43d6-8c77-1f12411671bc`
    const [{ data, isLoading }, doFetch] = useDataApi(url, dataCtx.notionPages,);
    const { setIsLoading, setNotionPages, notionPages } = dataCtx;

    useEffect(() => {
        if (reloadProjects) {
            // console.log("dofetch");
            doFetch(url)
        }
    }, [reloadProjects, doFetch, url])

    useEffect(() => {
        if (data.length !== 0) {
            if (JSON.stringify(notionPages) === JSON.stringify(data)) {
                setIsStored(true)
                setIsLoading((prevState: any) => ({
                    ...prevState,
                    projects: false
                }))
            } else {
                console.log("data: ", data);

                setNotionPages(data)
            }
        }
    }, [data, setIsLoading, setNotionPages, notionPages])

    // store the api loading state in the context

    useEffect(() => {
        const apiIsLoading = () => {
            setIsLoading((prevState: any) => ({
                ...prevState,
                api: isLoading
            }))
        }
        apiIsLoading()

    }, [isLoading, setIsLoading])


    return (
        <>
            <div className={styles.textContainer}>
                <Heading1>
                    Let’s start editing !
                </Heading1>
                <Subtitle1>
                    You can find your most recent projects here.
                    If you want to start with a new page, follow the instructions on the <ColorText>right panel</ColorText>.
                </Subtitle1>
                <div className={styles.divider}></div>
            </div>
            <h3 className={styles.colorH3}>Select your project</h3>
            <div className={styles.cardsContainer}>
                <div className={styles.overflowScroll}>
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
                            id={"noData"}
                            state={"empty"}
                            title={"No data fetched"}
                            src={""}
                            emoji={"❌"}
                            date={""} />
                    }
                    {isStored && notionPages.map((block: any) =>
                        block.object === "page" &&
                        <ProjectCard
                            key={block.id}
                            id={block.id}
                            state={"ok"}
                            title={block.title}
                            src={block.cover}
                            emoji={block.emoji}
                            date={block.last_edited_time} />
                    )}
                </div>
            </div>
        </>
    );
};

export const ProjectsToolBar = () => {
    return (
        <>
            <h2 className={styles.colorH2}>Need a hand ?</h2>
            <div className={styles.divider}></div>
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
