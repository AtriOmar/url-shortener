import { ScissorsIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-55px)]">
      <div className="flex items-center gap-6">
        <div className="text-center">
          <h3 className="font-bold text-purple text-6xl">Ooops!</h3>
          <p className="mt-5 font-medium text-slate-700 text-xl">
            The link that you have accessed is not valid!
          </p>
          <p className="mt-3 font-semibold text-slate-950 text-xl">
            Wanna create a short link with that alias ?
          </p>
          <Link
            to="/"
            className="flex justify-center items-center w-fit h-[40px] mx-auto mt-8 px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-700 ring-offset-1 bg-purple hover:bg-purple-dark shadow text-white duration-200"
          >
            <div className="flex items-center gap-3">
              <span>Start shortening URLs</span>
              <ScissorsIcon className="size-5" />
            </div>
          </Link>
        </div>
        <div>
          <img src="/app/logo.png" alt="" className="size-48" />
        </div>
      </div>
    </div>
  );
}
