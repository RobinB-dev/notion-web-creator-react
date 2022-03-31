import React, { useContext, useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { Heading1, ColorText, Subtitle1 } from "../Blocks/Headings";
import ProjectCard from "./ProjectCard";
import DataContext from "../../contexts/DataContext";
import useDataApi from "../../hooks/useDataApi";
import { Slide } from "./Slide";
import LoadingIcon from "../Icons/LoadingIcon";

export const ProjectsMain = () => {
  const dataCtx = useContext(DataContext);
  const [isStored, setIsStored] = useState(false);
  const reloadProjects = dataCtx.isLoading.projects;
  // const url = `${process.env.REACT_APP_BASE_URL_API}/workspace_info?code=5d4c18c3-8247-43d6-8c77-1f12411671bc`
  const url = `${process.env.REACT_APP_BASE_UR_HEROKU}/workspace_info`;
  const [{ data, isLoading }, doFetch] = useDataApi(url, dataCtx.notionPages);
  const { setIsLoading, setNotionPages, notionPages } = dataCtx;
  const [activeAnim, setActiveAnim] = useState(true);

  useEffect(() => {
    if (reloadProjects) {
      // console.log("dofetch");
      doFetch(url);
    }
  }, [reloadProjects, doFetch, url]);

  useEffect(() => {
    if (data.length !== 0) {
      if (JSON.stringify(notionPages) === JSON.stringify(data)) {
        setIsStored(true);
        setIsLoading((prevState: any) => ({
          ...prevState,
          projects: false,
        }));
      } else {
        setNotionPages(data);
      }
    }
  }, [data, setIsLoading, setNotionPages, notionPages]);

  // store the api loading state in the context

  useEffect(() => {
    const apiIsLoading = () => {
      setIsLoading((prevState: any) => ({
        ...prevState,
        api: isLoading,
      }));
    };
    apiIsLoading();
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (!dataCtx.isLoading.projects) {
      setActiveAnim(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <>
      <div className={styles.textContainer}>
        <Heading1>Let’s start editing !</Heading1>
        <Subtitle1>
          You can find your most recent projects here. If you want to start with
          a new page, follow the instructions on the{" "}
          <ColorText>right panel</ColorText>.
        </Subtitle1>
        <div className={styles.divider}></div>
      </div>
      <h3 className={styles.colorH3}>Select your project</h3>
      <div className={styles.cardsContainer}>
        <div className={styles.overflowScroll}>
          {
            !isStored && <LoadingIcon />
            // <Slide isActive={false} direction={-1} axe={"x"} distance={50} index={0}>
            //     <ProjectCard
            //         id={"noData"}
            //         state={"empty"}
            //         title={"No data fetched"}
            //         src={""}
            //         emoji={"❌"}
            //         date={""} />
            // </Slide>
          }
          {isStored &&
            notionPages.map(
              (block: any, i: number) =>
                block.object === "page" && (
                  <Slide
                    isActive={activeAnim}
                    direction={-1}
                    axe={"x"}
                    distance={50}
                    index={i}
                    key={i}
                  >
                    <ProjectCard
                      key={block.id}
                      id={block.id}
                      state={"ok"}
                      title={block.title}
                      src={block.cover}
                      emoji={block.emoji}
                      date={block.last_edited_time}
                    />
                  </Slide>
                )
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
      <p>
        Don’t forget to add pages to your workspace before creating a new
        project !
      </p>
      <ol>
        <li>
          <span>
            Go to&nbsp;<a href="https://www.notion.so/">Notion</a>
          </span>
        </li>
        <li>
          <span>
            Create a new page inside your workspace, and add your text and
            images
          </span>
        </li>
        <li>
          <span>Pull your Notion pages from the Selfer app</span>
        </li>
        <li>
          <span>Find your project in the list, and start editing !</span>
        </li>
      </ol>
    </>
  );
};
