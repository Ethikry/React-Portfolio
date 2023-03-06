function Footer() {
  return (
    <footer className="bg-gray-800 bottom-0 z-10">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <p>©Ethan Gayton 2023</p>
        <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a className="px-4" href="https://github.com/Ethikry">
            <img
              src="https://user-images.githubusercontent.com/113566829/223079664-ccaca5b6-af72-4371-a1e3-59f2f7f2b08d.png"
              alt="github logo"
              width="40"
            />
          </a>
          <a
            className="px-4"
            href="https://www.linkedin.com/in/ethan-gayton-962504157/"
          >
            <img
              src="https://user-images.githubusercontent.com/113566829/223119791-6788bc3f-2146-46a6-a4c9-a2939c5f3246.png"
              alt="linkedin logo"
              width="100"
            />
          </a>
          <a className="px-4" href="https://twitter.com/JoeBiden?s=20">
            <img
              src="https://user-images.githubusercontent.com/113566829/223120327-fe1687d3-70f3-440f-b18b-d3b5801059d4.png"
              alt="Twitter logo"
              width="35"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
