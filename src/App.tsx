import { balance } from "./talents/druid/balance";

// NOTE: some talent names repeat across classes (e.g. Deflection), so talentNames is nested per
// class (talentNames.druid.improvedWrath) to keep every key unique. Names are unique within a
// class, so `requires` and the duplicate-name TODO in errors.ts only need to check within one class.
function App() {
  console.log("CURRENT: ", balance.tier1[0]?.getCurrentDescription());
  console.log("NEXT: ", balance.tier1[0]?.getNextDescription());
  return <div className="App">App!</div>;
}

export default App;

// TODO: on initialisation, loop over all talent names, throw error if there are any duplicates.
