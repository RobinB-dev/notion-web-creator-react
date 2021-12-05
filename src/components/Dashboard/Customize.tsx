import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../contexts/DataContext';
import CreateBlock from './BlocksNotion/CreateBlock'

import { NotionBlock } from "../../decl/notionPage.decl";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import classes from './Dashboard.module.css'
import 'antd/lib/collapse/style/index.css'

const { Panel } = Collapse;
function callback(key: any) {
    console.log(key);
  }
  
const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;


export const CustomizeMain = () => {
    const dataCtx = useContext(DataContext);

  // objSearchFromKey
  function testObj (o: object, search: string) {
    for (const [key, value] of Object.entries(o)) {
      // console.log(`${key} => ${value}`);
      if (key === search) {
        return value
      }
      
    }
  }

  const DataPage = (o: object) => {
    if (testObj(o, "obj") === "page") {
      const pageName = testObj(o, "name");
      console.log("name : ", pageName);
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

export const CustomizeToolBar = () => {
    return (
        <>
            <h2 className={classes.colorH2}>Customization</h2>
            <div className={classes.divider}></div>
            <p>You can edit the looks of your page here ! <br></br>Click on a category to open it, change the values and see how your page will look in real time !</p>
            <div className={classes.collapseContainer}>
                <Collapse
                    bordered={true}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : -90} />}
                    className={classes.myCollapse}
                >
                    <Panel header="Theme" key="1" className={classes.collapsePanel}>
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Text" key="2" className={classes.collapsePanel}>
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Colors" key="3" className={classes.collapsePanel}>
                    <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        </>
    );
};
