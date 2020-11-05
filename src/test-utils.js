import { screen, within } from "@testing-library/react";

export async function checkVMRows(rowTitle, rowDescription, rowValue) {
  const cpuRow = screen.getByTestId(rowTitle);
  const description = within(cpuRow).getByText(rowDescription);
  expect(description).toBeInTheDocument();
  const value = within(cpuRow).getByText(rowValue);
  expect(value).toBeInTheDocument();
}
