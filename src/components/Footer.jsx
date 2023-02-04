function Footer() {
  return (
    <footer className="flex flex-col text-sm text-center bg-poke-red text-white py-2">
      <p className="text-sm">
        Send feedback or contribute at{" "}
        <a
          className="text-white font-bold"
          href="https://github.com/lChrisjm/poke-game"
          target="_blank"
        >
          GitHub
        </a>
      </p>
      <p className="text-xs">Images from © Nintendo</p>
    </footer>
  );
}
export default Footer;
