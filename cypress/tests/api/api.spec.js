/// <reference types="cypress" />
describe("VM API", function () {
  const rootEndpoint = "http://localhost:8080";
  const vmId = 1;

  it("gets a list of vms", function () {
    cy.request("GET", `${rootEndpoint}/vms`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });
  it("gets one vm by id", function () {
    cy.request("GET", `${rootEndpoint}/vms/${vmId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });

  it("starts a vm by id", function () {
    cy.request("PUT", `${rootEndpoint}/vms/${vmId}/launch`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });

  it("stops a vm by id", function () {
    cy.request("PUT", `${rootEndpoint}/vms/${vmId}/stop`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });
});
