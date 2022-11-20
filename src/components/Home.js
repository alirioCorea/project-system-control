//Utilidades
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

//Iconos e imagenes
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import Logo1 from "@assets/img/Logo-vertical-azul-blanco.svg";
import Logo2 from "@assets/img/Logo-vertical.svg";

const navigation = [
  { name: "Proyectos", href: "#" },
  { name: "Tecnologías", href: "#" },
  { name: "Servidores", href: "#" },
  { name: "Usuarios", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-black h-screen sm:h-full">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link href={"/"} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={Logo1} alt="Company Logo" className="w-40" />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <ImMenu className="h-6 w-6" aria-hidden="true" color="white" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-white hover:text-blue-1000"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <Link
                href="/auth/login"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ring-1 ring-blue-1000 hover:ring-white hover:bg-blue-1000"
              >
                Log in
              </Link>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Image src={Logo2} alt="Company Logo" className="w-40" />
                  </Link>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <ImCross className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/auth/login"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-blue-1000 hover:ring-white">
                  <span className="text-gray-600">
                    Como funciona nuestra sitio web.{" "}
                    <Link href="#" className="font-semibold text-blue-1000">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-stone-50">
                  Crea, modifica, elimina y consulta tus proyectos
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center ">
                  Sitio web que contiene una serie de herramientas para la
                  gestión de proyectos gratuitos en materia de desarrollo de
                  software. Puedes ver los diferentes estados de los proyectos,
                  crear nuevos proyectos, modificarlos y eliminarlos.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    href="#"
                    className="inline-block rounded-lg bg-blue-1000 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-white hover:bg-blue-1000 hover:ring-blue-1000 hover:text-black"
                  >
                    Get started
                    <span className="text-black" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                  <Link
                    href="/auth/login"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-blue-1000 hover:ring-white"
                  >
                    Log in
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
