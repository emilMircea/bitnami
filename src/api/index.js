const rootEndpoint = "http://localhost:8080/vms";

const fetchAllVM = () => {
  return fetch(`${rootEndpoint}`).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

const getVmState = (vmId) => {
  return fetch(`${rootEndpoint}/${vmId}`).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

const launchVM = async (vmId) => {
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  return fetch(`${rootEndpoint}/${vmId}/launch`, config).then(
    async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
};

const stopVM = async (vmId) => {
  const config = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${rootEndpoint}/${vmId}/stop`, config).then(
    async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
};

const deletVM = async (vmId, vmStatus) => {
  const config = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  if (vmStatus === "stopped") {
    return fetch(`${rootEndpoint}/${vmId}/`, config).then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
  }
  return "VM has to be stopped before deleting it!";
};

export { fetchAllVM, launchVM, stopVM, deletVM, getVmState };
