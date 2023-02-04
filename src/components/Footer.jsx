function Footer() {
  return (
    <footer className="flex flex-col text-sm text-center md:text-xl bg-poke-red text-white py-2 md:py-6">
      <p className=" md:text-xl text-sm">
        Send feedback or contribute at{" "}
        <a
          className="text-white font-bold"
          href="https://github.com/lChrisjm/poke-game"
          target="_blank"
        >
          GitHub
        </a>
      </p>
      <p className="text-xs  md:text-xl ">Images from © Nintendo</p>
    </footer>
  );
}
export default Footer;
