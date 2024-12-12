const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow"></main>
      <footer className="footer p-10 bg-stone-500 shadow-md flex flex-col">
        <nav className="flex gap-7 justify-center items-center text-white">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Tickets</a>
          <a className="link link-hover">Tracking</a>
          <a className="link link-hover">Shipping</a>
        </nav>
        <aside className="flex justify-center items-center text-black mt-4">
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
