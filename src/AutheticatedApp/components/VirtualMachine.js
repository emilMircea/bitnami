import React, { useReducer, useEffect } from "react";
import { ToggleButton } from "./toggle";
import { StyledVMWrapper } from "./StyledComponents/StyledVMWrapper";
import { StyledTitle } from "./StyledComponents/StyledTitle";
import { StyledVMRow } from "./StyledComponents/StyledVMRow";
import { StyledVMRowTitle } from "./StyledComponents/StyledVMRowTitle";
import { StyledVMRowDescription } from "./StyledComponents/StyledVMRowDescription";
import { StyledSpec } from "./StyledComponents/StyledSpec";
import { vmReducer, initialState } from "../../reducers/vmReducer";
import { SET_INITIAL } from "../../reducers/vmReducer";

const VirtualMachine = ({ vm, vmId }) => {
  const { vcpus, clock, ram, storage, network, state } = vm;
  const [{ virtualState }, dispatch] = useReducer(vmReducer, initialState);

  useEffect(() => {
    dispatch({ type: SET_INITIAL, value: state });
  }, [state]);
  return (
    <StyledVMWrapper data-test="virtual-machine">
      <StyledTitle>Virtual Machine {vmId} </StyledTitle>
      <StyledVMRow data-testid="cpu">
        <StyledVMRowTitle>CPU</StyledVMRowTitle>
        <StyledVMRowDescription>Processors</StyledVMRowDescription>
        <StyledSpec>{vcpus}</StyledSpec>
      </StyledVMRow>
      <StyledVMRow data-testid="clock">
        <StyledVMRowTitle>Clock</StyledVMRowTitle>
        <StyledVMRowDescription>Frequency</StyledVMRowDescription>
        <StyledSpec>{clock} Mgz</StyledSpec>
      </StyledVMRow>
      <StyledVMRow data-testid="ram">
        <StyledVMRowTitle>RAM</StyledVMRowTitle>
        <StyledVMRowDescription>Memory</StyledVMRowDescription>
        <StyledSpec>{ram} Mb</StyledSpec>
      </StyledVMRow>
      <StyledVMRow data-testid="storage">
        <StyledVMRowTitle>Storage</StyledVMRowTitle>
        <StyledVMRowDescription>Hard disk</StyledVMRowDescription>
        <StyledSpec>{storage} Tb</StyledSpec>
      </StyledVMRow>
      <StyledVMRow data-testid="network">
        <StyledVMRowTitle>Network</StyledVMRowTitle>
        <StyledVMRowDescription>Speed</StyledVMRowDescription>
        <StyledSpec>{network} Gbs</StyledSpec>
      </StyledVMRow>
      <StyledVMRow data-testid="state">
        <StyledVMRowTitle>State</StyledVMRowTitle>
        <ToggleButton
          virtualState={virtualState}
          dispatch={dispatch}
          vmId={vmId}
        />
        <StyledSpec
          data-test="state-spec"
          color={
            virtualState === "Stopped"
              ? "gray"
              : virtualState === "Pending"
              ? "yellow"
              : null
          }
        >
          {virtualState}
        </StyledSpec>
      </StyledVMRow>
      <p>
        <b>Starting</b> a VM requires on average 10 seconds while
        <b> Stopping</b> it takes around 5 seconds. Please be patient.
      </p>
    </StyledVMWrapper>
  );
};

export default VirtualMachine;
