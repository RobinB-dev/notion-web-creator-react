import React from "react";
import styles from "./Tooltip.module.css";

type DataBlockProps = {
  children: React.ReactNode;
  content: string;
  position: string;
};

const Tooltip = ({ children, content, position }: DataBlockProps) => {
  return (
    <div className={styles.relative}>
      {children}
      <div className={styles.tooltip} style={{ [position]: "-0.8rem" }}>
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
