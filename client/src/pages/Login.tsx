import LoginForm from "@/components/auth/login/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-55px)]">
      <main className="w-full max-w-[400px] overflow-hidden mx-1 my-2 border rounded-lg bg-white">
        <div className="px-4 py-10 bg-purple text-center">
          <div className="w-fit mx-auto rounded-lg bg-slate-100">
            <img
              src="/logo.png"
              width={60}
              height={60}
              alt=""
              sizes="100px"
              className="bg-contain"
            />
          </div>
          <h3 className="mt-2 font-bold text-white text-lg">
            Let's Get Started With URLShortener
          </h3>
          <p className="text-slate-200 text-sm">
            Sign in to continue to URLShortener
          </p>
        </div>
        <div className="py-10">
          <LoginForm />
          <p className="mt-4 font-medium text-[13px] text-center">
            Don't have an account ?{" "}
            <Link
              to="/auth/register"
              className="text-purple hover:text-purple-dark duration-200"
            >
              Register
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
