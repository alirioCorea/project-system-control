import AuthLayout from "@layouts/AuthLayout";
import Link from "next/link";
import ImageBackground from "@assets/img/login-imagen.jpg";
import Image from "next/image";
import LogoVertical from "@assets/img/logo-vertical-azul.png";
import { useAuth } from "@hooks/useAuth";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CircularIndeterminate from "@components/CircularIndeterminate";
import BasicAlerts from "@components/Alert";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(true);
  const auth = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    auth.signIn(enteredEmail, enteredPassword).then(() => {});
  };

  return (
    <AuthLayout
      title={"Ingresar a la web"}
      description={
        "Ingresa con tu cuenta de DevCorea para empezar a gestionar tus proyectos"
      }
    >
      <section className="grid grid-cols-1 gap-0 lg:grid-cols-12 h-screen">
        <div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-4 xl:p-12 sm:w-2/4 lg:w-full">
          <Link
            href="/"
            title="Kutty Home Page"
            className="flex items-center justify-start"
          >
            <Image src={LogoVertical} alt="LogoAuth" width={200} />
          </Link>
          <h1 className="mt-6 mb-4 text-xl font-light text-left text-gray-800">
            Log in to your account
          </h1>
          <form className="pb-1 space-y-4" onSubmit={submitHandler}>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-blue-1000">
                Your Email
              </span>
              <input
                className="form-input w-full rounded border-2 h-10 hover:border-blue-1000 pl-4 focus:outline-none"
                type="email"
                placeholder="Ex. james@bond.com"
                inputMode="email"
                required
                ref={emailRef}
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-blue-1000">
                Your Password
              </span>
              <div className="relative">
                <input
                  className="form-input w-full rounded border-2 h-10 hover:border-blue-1000 pl-4 focus:outline-none"
                  type={showPassword ? "password" : "text"}
                  placeholder="••••••••"
                  required
                  ref={passwordRef}
                />
                <button
                  type="button"
                  className="absolute top-2/4 -translate-y-2/4 w-5 h-full right-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
                  Remember me
                </span>
              </label>
              <input
                type="submit"
                value="Login"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-1000 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-750 focus:outline-none focus:ring-2 focus:ring-orange-1000 focus:ring-offset-2"
              />
            </div>
          </form>
          <div className="my-6 space-y-2">
            <p className="text-xs text-gray-600">
              Don&apos;t have an account?
              <Link
                href="/auth/register"
                className="text-blue-1000 hover:text-black"
              >
                Create an account
              </Link>
            </p>
            <Link
              href="#"
              className="block text-xs text-blue-1000 hover:text-black"
            >
              Forgot password?
            </Link>
            <Link
              href="#"
              className="block text-xs text-blue-1000 hover:text-black"
            >
              Privacy & Terms
            </Link>
          </div>
          <div className="flex justify-center">
            {auth.loading && <CircularIndeterminate />}
            {auth.errorMessage && (
              <BasicAlerts
                message={auth.errorMessage}
                setError={auth.setErrorMessage}
              />
            )}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-8">
          <Image
            src={ImageBackground}
            alt="2 people working on a project"
            className="object-cover w-full h-64 min-h-full bg-gray-100"
            priority
          />
        </div>
      </section>
    </AuthLayout>
  );
}
