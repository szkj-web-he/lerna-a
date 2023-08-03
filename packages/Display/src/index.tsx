/**
 * @file
 * @date 2023-08-03
 * @author xuejie.he
 * @lastModify xuejie.he 2023-08-03
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from "react";
import Button from "he-button";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 展示的内容
   */
  children?: React.ReactNode;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({ children }) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [show, setShow] = useState(false);
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className="wrapper">
      <span
        onClick={() => {
          setShow((pre) => !pre);
        }}
      >
        <Button>点我</Button>
      </span>
      <div style={show ? undefined : { display: "none" }}>{children}</div>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
