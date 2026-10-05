import { balance } from "./talents/druid/balance";

// NOTE: the generated talent trees contain 536 talents but only 450 unique names, because some
// names repeat across trees (e.g. Deflection). Duplicate names share a single talentNames key.
// `requires` is only resolved within one tree, so that is safe, but the TODO in errors.ts
// (throw on duplicate talent names) would fire on this data and needs to be reconsidered.
function App() {
  console.log("CURRENT: ", balance.tier1[0]?.getCurrentDescription());
  console.log("NEXT: ", balance.tier1[0]?.getNextDescription());
  return <div className="App">App!</div>;
}

export default App;

// TODO: on initialisation, loop over all talent names, throw error if there are any duplicates.
