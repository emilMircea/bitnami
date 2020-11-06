import { StyledWrapper } from "./components/StyledComponents/StyledWrapper";
import { StyledSidebar } from "./components/StyledComponents/StyledSidebar";
import { StyledMain } from "./components/StyledComponents/StyledMain";
import { StyledMainNav } from "./components/StyledComponents/StyledMainNav";
import VirtualMachine from "./components/VirtualMachine";
import { fetchAllVM } from "../api";
import { useQuery } from "react-query";

const Dashboard = () => {
  const { data } = useQuery("vmList", fetchAllVM, {
    refetchAllOnWindowFocus: false,
  });

  return (
    <StyledWrapper>
      <StyledSidebar>Sidebar</StyledSidebar>
      <StyledMain>
        <StyledMainNav>
          <h6>Welcome User123</h6>
        </StyledMainNav>
        <h1>Virtual Machines</h1>
        {data &&
          Object.entries(data).map(([key, value]) => (
            <VirtualMachine key={key} vmId={key} vm={value} />
          ))}
      </StyledMain>
    </StyledWrapper>
  );
};

export default Dashboard;
