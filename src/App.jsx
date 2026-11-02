// 🪿 MOST WANTED: GEESE OF THE QUAD
//
// Right now every poster is identical. Same goose, same crime, same reward.
// In lab we'll fix that by giving WantedPoster some props.

function WantedPoster() {
  return (
    <div className="poster">
      <p className="wanted">WANTED</p>
      <div className="mugshot">
        <span style={{ fontSize: 80 }}>🪿</span>
      </div>
      <h2>Honkers McGee</h2>
      <p><b>Crime:</b> Stole an entire bagel from a sophomore</p>
      <p className="bounty">Reward: 5 breadcrumbs</p>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <h1>Most Wanted: Geese of the Quad</h1>
      <p className="subtitle">If spotted, do not make eye contact.</p>
      <section className="board">
        <WantedPoster />
        <WantedPoster />
        <WantedPoster />
      </section>
    </main>
  );
}
