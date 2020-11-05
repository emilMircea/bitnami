import React from "react";
import { render, screen, within } from "@testing-library/react";
// import App from "./App";
import { checkVMRows } from "./test-utils";
// import AuthenticatedApp from "./AutheticatedApp/AuthenticatedApp";
import VirtualMachine from "./AutheticatedApp/components/VirtualMachine";

const vm = {
  vcpus: 1,
  clock: 1500,
  ram: 4096,
  storage: 128,
  network: 1000,
  state: "Stopped",
};

// REFACTOR THESE TESTS!!! THEY REPEAT!!! 🥴🥴🥴

test("vm has a title", () => {
  render(<VirtualMachine vm={vm} vmId={0} />);
  const title = screen.getByText(/virtual machine 0/i);
  expect(title).toBeInTheDocument();
});

test("vm has a cpu spec", () => {
  render(<VirtualMachine vm={vm} vmId={0} />);
  const cpuRow = screen.getByTestId(/cpu/i);
  const description = within(cpuRow).getByText(/processors/i);
  expect(description).toBeInTheDocument();
  const value = within(cpuRow).getByText("1");
  expect(value).toBeInTheDocument();
});

test("vm has a clock spec", () => {
  render(<VirtualMachine vm={vm} vmId={0} />);
  const cpuRow = screen.getByTestId(/clock/i);
  const description = within(cpuRow).getByText(/frequency/i);
  expect(description).toBeInTheDocument();
  const value = within(cpuRow).getByText(/1500 mgz/i);
  expect(value).toBeInTheDocument();
});

test("vm has a memory spec", () => {
  render(<VirtualMachine vm={vm} vmId={0} />);
  const cpuRow = screen.getByTestId(/ram/i);
  const description = within(cpuRow).getByText(/memory/i);
  expect(description).toBeInTheDocument();
  const value = within(cpuRow).getByText(/4096 mb/i);
  expect(value).toBeInTheDocument();
});

test("vm has a storage spec", () => {
  render(<VirtualMachine vm={vm} vmId={0} />);
  checkVMRows(/storage/i, /hard disk/i, /128 tb/i);
});

test("vm has a network speed spec", () => {
  render(<VirtualMachine vm={vm} vmId={0} />);
  checkVMRows(/network/i, /speed/i, /1000 gbs/i);
});

test("vm has a vm state spec", () => {
  render(<VirtualMachine vm={vm} vmId={0} />);
  const cpuRow = screen.getByTestId(/state/i);
  const value = within(cpuRow).getByText(/stopped/i);
  expect(value).toBeInTheDocument();
});
