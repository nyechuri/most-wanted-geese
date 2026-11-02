// 🪿 MOST WANTED: GEESE OF THE QUAD (solution)
import { useState } from 'react';

// Step 3 (if time): a component with its own memory.
// Every poster gets its OWN counter, because each SightingButton has its own state.
function SightingButton() {
  const [sightings, setSightings] = useState(0);

  return (
    <button onClick={() => setSightings(sightings + 1)}>
      👀 Spotted! ({sightings} sightings)
    </button>
  );
}

// Step 2: a nested component. It gets its props from WantedPoster,
// which got them from App. That's props going two levels deep.
function Mugshot({ name, size = 80 }) {
  return (
    <div className="mugshot">
      <span style={{ fontSize: size }}>🪿</span>
      <p className="nameplate">Suspect: {name}</p>
    </div>
  );
}

// Step 1: WantedPoster reads its props instead of hardcoding them.
function WantedPoster({ name, crime, bounty, size }) {
  return (
    <div className="poster">
      <p className="wanted">WANTED</p>
      <Mugshot name={name} size={size} />
      <h2>{name}</h2>
      <p><b>Crime:</b> {crime}</p>
      <p className="bounty">Reward: {bounty} breadcrumbs</p>
      <SightingButton />
    </div>
  );
}

export default function App() {
  return (
    <main>
      <h1>Most Wanted: Geese of the Quad</h1>
      <p className="subtitle">If spotted, do not make eye contact.</p>
      <section className="board">
        <WantedPoster
          name="Honkers McGee"
          crime="Stole an entire bagel from a sophomore"
          bounty={5}
        />
        <WantedPoster
          name="Sir Hisses-a-Lot"
          crime="Chased a professor into Suzzallo"
          bounty={12}
          size={100}
        />
        <WantedPoster
          name="Gary"
          crime="Unknown. Nobody will talk."
          bounty={500}
          size={130}
        />
      </section>
    </main>
  );
}
