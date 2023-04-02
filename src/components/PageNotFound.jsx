import { GoTelescope } from "react-icons/go";

import LinkButton from "./util_comp/LinkButton";

export default function PageNotFound() {
  return (
    <article className="h-screen bg-green-50 flex justify-center items-center text-center">
      <div className="text-lg">
        <div className="flex justify-center">
          <GoTelescope className="text-8xl text-green-600" />
        </div>
        <h1 className="text-6xl font-bold my-5">Whoops!</h1>
        <p>The page requested is not found.</p>
        <LinkButton btn_content={"Back to Home"} />
      </div>
    </article>
  );
}
