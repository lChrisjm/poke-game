function Header() {
  return (
    <header className="flex py-3 bg-poke-red px-2 text-white items-center justify-between">
      <span className="font-start">Poke-Quest</span>
      <a href="https://github.com/lChrisjm/poke-game" target="_blank">
        <img className="invert" src="/img/icon-gb.svg" alt="Ícono Github" />
      </a>
    </header>
  );
}
export default Header;
