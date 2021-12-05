import React, { useContext, useEffect } from 'react';
import DataContext from '../../contexts/DataContext';
import { CreateBlock, testObj } from './BlocksNotion/CreateBlock'
import FontPicker from './BlocksNotion/FontPicker'
import ToolText from './ToolBar/ToolText'
import HidePanel from './ToolBar/HidePanel'

import { NotionBlock } from "../../decl/notionPage.decl";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import classes from './Dashboard.module.css'
import 'antd/lib/collapse/style/index.css'

const { Panel } = Collapse;
  
const textDrop = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;


export const CustomizeMain = () => {
  const dataCtx = useContext(DataContext);

  const DataPage = (o: object) => {
    if (testObj(o, "obj") === "page") {
      // const pageName = testObj(o, "name");
      // console.log("name : ", pageName);
      return testObj(o, "childrens")
    }
  }

  const _dataPage = DataPage(dataCtx.notionData)
  
        
    return (
        <>
            <div className={classes.notionPage}>
                {_dataPage.map((block: NotionBlock) => CreateBlock(block))}
            </div>
        </>
    );
};


export const menuToolBar = {
  heading1: "text",
  heading2: "text",
  heading3: "text",
  callout: 'block',
  img: 'image',
};

export const CustomizeToolBar = () => {
  const dataCtx = useContext(DataContext);
  const BlockType:string | undefined = testObj(menuToolBar, testObj(dataCtx.activeBlock, "obj"));
  // const BlockObj = testObj(dataCtx.activeBlock, "obj")


  console.log(typeof BlockType);
  

  useEffect(() => {
  }, [dataCtx.activeBlock])

    return (
        <>
            <h2 className={classes.colorH2}>Customization</h2>
            <div className={classes.divider}></div>
            <p>You can edit the looks of your page here ! <br></br>Click on a category to open it, change the values and see how your page will look in real time !</p>
            <p>{BlockType}</p>
            <div className={classes.collapseContainer}>
                <Collapse
                    bordered={true}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : -90} />}
                    className={classes.myCollapse}
                >
                  <HidePanel display={["text", "block"]}>
                      <Panel header="Theme" key="1" className={classes.collapsePanel}>
                        <FontPicker />
                      </Panel>
                  </HidePanel>
                    <Panel header="Text" key="2" className={classes.collapsePanel}>
                      <p>{textDrop}</p>
                      <ToolText bloctype={BlockType} />
                    </Panel>
                    {BlockType === "text" &&
                      <Panel header="Text" key="3" className={classes.collapsePanel}>
                      <p>{textDrop}</p>
                      </Panel>
                    }
                    {(BlockType === "text" || BlockType === "block") &&
                      <Panel header="Colors" key="4" className={classes.collapsePanel}>
                      <p>{textDrop}</p>
                      </Panel>
                    }
                    {(BlockType === "image" || BlockType === "block") &&
                      <Panel header="Block" key="5" className={classes.collapsePanel}>
                      <p>{textDrop}</p>
                      </Panel>
                    }
                </Collapse>
            </div>
        </>
    );
};
