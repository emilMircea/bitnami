/* eslint-disable no-undef */
import { within } from "@testing-library/react";
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
///<reference types="cypress"/>

describe("User interacts with a VM", function () {
  it("should wake or put to sleep a VM", function () {
    cy.visit("http://localhost:3000");
    // cy.login(this.users.email, this.users.password);
    const firstVM = cy.get('[data-test="virtual-machine"]').first();
    // eslint-disable-next-line no-unused-expressions
    expect(firstVM).to.exist;

    firstVM.within(() => {
      const stateRow = cy.get('[data-testid="state"]');
      stateRow.within(() => {
        const stateSpec = cy.get('[data-test="state-spec"]');
        stateSpec.invoke("text").then((previousState) => {
          const toggleButton = cy.get('[data-test="toggle-button"]');
          toggleButton.click();
          cy.wait(1000);

          cy.get('[data-test="state-spec"]')
            .invoke("text")
            .should((actualState) => {
              expect(previousState).not.to.eq(actualState);
            });
        });
      });
    });
  });
});
