import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import "./toggle.css";
import styled from "@emotion/styled";
import { stopVM, launchVM } from "../../api";
import { SET_PENDING, TOGGLE_VM } from "../../reducers/vmReducer";

const StyledToggleLabel = styled.label`
  display: flex;
  align-items: center;
  & > span {
    margin-left: 1rem;
  }
`;

export const ToggleButton = ({ virtualState, dispatch, vmId }) => {
  const [toggleBtn, setToggleBtn] = useState(false);

  useEffect(() => {
    setToggleBtn(virtualState === "Running" ? true : false);
  }, [virtualState]);

  function changeVMState() {
    virtualState === "Running" ? setToggleBtn(true) : setToggleBtn(false);
    if (virtualState === "Running") {
      dispatch({ type: SET_PENDING, value: "Pending" });
      setTimeout(async () => {
        const updatedVM = await stopVM(vmId);
        const { state } = await updatedVM;
        dispatch({ type: TOGGLE_VM, value: state });
        setToggleBtn(false);
      }, 5000);
    } else if (virtualState === "Stopped") {
      dispatch({ type: SET_PENDING, value: "Pending" });
      setTimeout(async () => {
        const updatedVM = await launchVM(vmId);
        const { state } = await updatedVM;
        dispatch({ type: TOGGLE_VM, value: state });
        setToggleBtn(true);
      }, 10000);
    } else {
      console.log(`Virtual State is: ${virtualState}`);
    }
  }

  return (
    <StyledToggleLabel data-test="toggle-button">
      <Toggle
        icons={false}
        onChange={changeVMState}
        checked={toggleBtn}
        disabled={virtualState === "Pending" ? true : false}
      />
      <span>Open / Close</span>
    </StyledToggleLabel>
  );
};
