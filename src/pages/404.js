import Link from "next/link";
import Image from "next/image";
import Logo from "@assets/img/back-home.svg";

export default function Custom404() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
            Error 404
          </p>
          <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
            Oops! The page you are looking for is not here.
          </h1>
          <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
            You might have the wrong address, or the page may have moved.
          </p>
          <Link
            href="/"
            className="w-full mb-2 btn btn-lg btn-light sm:w-auto sm:mb-0 text-blue-1000 font-extrabold hover:text-black"
          >
            Back to homepage
          </Link>
        </div>
        <div>
          <div className="w-full h-full py-12">
            <Image src={Logo} alt="Logo from back home" />
          </div>
        </div>
      </div>
    </section>
  );
}
