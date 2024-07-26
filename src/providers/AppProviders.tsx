import Layout from "../layout";
import Routing from "../routing";
import RoutesProvider from "./RoutesProvider";

function AppProviders() {
  return (
    <RoutesProvider>
      <Layout>
        <Routing/>
      </Layout>
    </RoutesProvider>
  );
}

export default AppProviders;
