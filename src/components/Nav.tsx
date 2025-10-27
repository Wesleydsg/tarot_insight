const links = [{ label: "Home", href: "/" }];

export function DesktopNav() {
  return (
    <nav className="max-lg:hidden bg-zinc-800 text-zinc-50 top-0 sticky px-4 items-center h-16 flex">
      <span>Tarot Insight (logo)</span>
      <div className="grow-1"></div>
      <ul className="flex gap-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export function MobileNav() {
  return (
    <>
      <div className="lg:hidden h-16"></div>
      <div className="lg:hidden bottom-0 fixed w-full">
        <nav className="h-16 bg-zinc-800 text-zinc-50 w-auto px-4 items-center center justify-center rounded-t-lg flex">
          <ul className="flex gap-2">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
