import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../contexts/DataContext';
import { CreateBlock } from './BlocksNotion/CreateBlock'
import ToolText from './ToolBar/Text/ToolText'
import ToolBlock from './ToolBar/Block/ToolBlock'
import ToolColor from './ToolBar/Color/ToolColor'
import { menuToolBar } from '../../decl';

import { NotionBlock } from "../../decl/notionPage.decl";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import styles from './Dashboard.module.css'
import 'antd/lib/collapse/style/index.css'
import { testObj } from '../../decl';
import useDataApi from '../../hooks/useDataApi';
import ToolTheme from './ToolBar/Theme/ToolTheme';
import useCustomStyle from '../../hooks/useCustomStyle';

const { Panel } = Collapse;

// const textDrop = `
// A dog is a type of domesticated animal.
// Known for its loyalty and faithfulness,
// it can be found as a welcome guest in many households across the world.
// `;


export const CustomizeMain = () => {
  const dataCtx = useContext(DataContext);
  const [isStored, setIsStored] = useState(false);
  const reloadCustomize = dataCtx.isLoading.customize
  const url = `${process.env.REACT_APP_BASE_URL_API}/notion_data?code=${"c7cc8faa-366c-4c3d-a77d-1a18ed0cac5f"}`
  const { setIsLoading, setNotionData, notionData } = dataCtx;
  const [{ data, isLoading }, doFetch] = useDataApi(url, notionData,);

  const DataPage = (o: object) => {
    if (testObj(o, "obj") === "page") {
      // const pageName = testObj(o, "name");
      // console.log("name : ", pageName);
      return testObj(o, "childrens")
    }
  }


  const _notionData = DataPage(notionData)


  useEffect(() => {
    // console.log(`fetch : ${process.env.REACT_APP_BASE_URL_API}/notion_data?code=${dataCtx.selectPageId}`);
    if (reloadCustomize) {
      doFetch(url)
    }
  }, [reloadCustomize, doFetch, url])

  useEffect(() => {

    // will be modified
    const handleDataChange = () => {
      if (JSON.stringify(data) === "{}") { return }

      // if data context is empty
      if (JSON.stringify(notionData) === "{}") {
        setNotionData(data[0])
      } else if ((JSON.stringify(notionData) === JSON.stringify(data[0])) ||
        (JSON.stringify(notionData) === JSON.stringify(data))) {
        // if data and data context are the same
        setIsStored(true)
        setIsLoading((prevState: any) => ({
          ...prevState,
          customize: false
        }))
      } else {
        // console.log("fetch end");
      }
    }
    handleDataChange()

  }, [setNotionData, notionData, data, setIsLoading])

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

  // useEffect(() => {
  //   console.log(dataCtx.theme);

  // }, [dataCtx.theme])
  const {
    theme: pageTheme,
  } = useCustomStyle("page", "a0c1294e-page");

  return (
    <div className={`${styles.notionPage} ${styles[pageTheme]}`}>
      {/* {isLoading && <>Is loading</>} */}
      {!isStored && <>No data fetch :(</>}
      {isStored && _notionData.map((block: NotionBlock) => CreateBlock(block))}
    </div>
  )
};




export const CustomizeToolBar = () => {
  const dataCtx = useContext(DataContext);
  let BlockType: string | undefined = testObj(menuToolBar, testObj(dataCtx.activeBlock, "obj"));
  // const BlockObj = testObj(dataCtx.activeBlock, "obj")

  (BlockType === undefined) && (BlockType = "general")

  useEffect(() => {
  }, [dataCtx.activeBlock])

  const checkType = (blockType: any, testType: any) => {
    for (let i = 0; i < testType.length; i++) {
      if (testType[i] === blockType) {
        return true
      }
    };
    return false
  }

  return (
    <>
      <h2 className={styles.colorH2}>Customization</h2>
      <div className={styles.divider}></div>
      <p>You can edit the looks of your page here ! <br></br>Click on a category to open it, change the values and see how your page will look in real time !</p>
      <p>{BlockType}</p>

      {dataCtx.notionData &&
        <div className={styles.collapseContainer}>
          <Collapse
            bordered={true}
            defaultActiveKey={['1', '2']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? -90 : 90} />}
            className={styles.myCollapse}
          >
            <Panel header="Theme" key="1" className={styles.collapsePanel}>
              <ToolTheme bloctype={BlockType} />
            </Panel>
            {checkType(BlockType, ["text", "general"]) &&
              <Panel header="Text" key="2" className={styles.collapsePanel}>
                <ToolText bloctype={BlockType} />
              </Panel>
            }
            {checkType(BlockType, ["text", "block", "general"]) &&
              <Panel header="Colors" key="3" className={styles.collapsePanel}>
                <ToolColor bloctype={BlockType} />
              </Panel>
            }
            {checkType(BlockType, ["image", "block", "general"]) &&
              <Panel header="Block" key="4" className={styles.collapsePanel}>
                <ToolBlock bloctype={BlockType} />
              </Panel>
            }
          </Collapse>
        </div>
      }
    </>
  );
};
