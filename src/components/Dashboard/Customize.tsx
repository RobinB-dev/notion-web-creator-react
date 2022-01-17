import React, { useContext, useEffect } from 'react';
import DataContext from '../../contexts/DataContext';
import { CreateBlock } from './BlocksNotion/CreateBlock'
import ToolText from './ToolBar/Text/ToolText'
import ToolBlock from './ToolBar/Block/ToolBlock'
import ToolColor from './ToolBar/Color/ToolColor'
import { menuToolBar } from '../../decl';

import { NotionBlock } from "../../decl/notionPage.decl";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import classes from './Dashboard.module.css'
import 'antd/lib/collapse/style/index.css'
import { testObj } from '../../decl';

const { Panel } = Collapse;

const textDrop = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;


export const CustomizeMain = () => {
  const dataCtx = useContext(DataContext);
  const isLoading = dataCtx.isLoading.customize

  const DataPage = (o: object) => {
    if (testObj(o, "obj") === "page") {
      // const pageName = testObj(o, "name");
      // console.log("name : ", pageName);
      return testObj(o, "childrens")
    }
  }

  const _dataPage = DataPage(dataCtx.notionData)

  useEffect(() => {
  }, [dataCtx.notionData, isLoading])

  return (
    <div className={classes.notionPage}>
      {isLoading && <>Is loading</>}
      {(!isLoading && !dataCtx.notionData) && <>No data fetch :(</>}
      {(!isLoading && dataCtx.notionData) && _dataPage.map((block: NotionBlock) => CreateBlock(block))}
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
      <h2 className={classes.colorH2}>Customization</h2>
      <div className={classes.divider}></div>
      <p>You can edit the looks of your page here ! <br></br>Click on a category to open it, change the values and see how your page will look in real time !</p>
      <p>{BlockType}</p>

      {dataCtx.notionData &&
        <div className={classes.collapseContainer}>
          <Collapse
            bordered={true}
            defaultActiveKey={['1', '2']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? -90 : 90} />}
            className={classes.myCollapse}
          >
            <Panel header="Theme" key="1" className={classes.collapsePanel}>
              <p>{textDrop}</p>
            </Panel>
            {checkType(BlockType, ["text", "general"]) &&
              <Panel header="Text" key="2" className={classes.collapsePanel}>
                <ToolText bloctype={BlockType} />
              </Panel>
            }
            {checkType(BlockType, ["text", "block", "general"]) &&
              <Panel header="Colors" key="3" className={classes.collapsePanel}>
                <ToolColor bloctype={BlockType} />
              </Panel>
            }
            {checkType(BlockType, ["image", "block", "general"]) &&
              <Panel header="Block" key="4" className={classes.collapsePanel}>
                <ToolBlock bloctype={BlockType} />
              </Panel>
            }
          </Collapse>
        </div>
      }
    </>
  );
};
