export default function Nav() {
  return (
    <nav className="bg-zinc-800 px-4 items-center h-16 flex">
      <span>Tarot Insight (logo)</span>
      <div className="grow-1"></div>
      <ul className="flex gap-2">
        <li>Home</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
