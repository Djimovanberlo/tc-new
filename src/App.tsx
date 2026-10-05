import { balance } from "./talents/druid/balance";

function App() {
  console.log("CURRENT: ", balance.tier1[0]?.getCurrentDescription());
  console.log("NEXT: ", balance.tier1[0]?.getNextDescription());
  return <div className="App">App!</div>;
}

export default App;

// TODO: on initialisation, loop over all talent names, throw error if there are any duplicates.
