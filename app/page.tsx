import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className=" ">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#282929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Explore Dropbox . <br />
            <br />
            <p className="text-4xl">
            Unified Storage Hub for All Your Personal and Business Essentials.
            </p>
          </h1>

          <p>
            Boost your storage capabilities with Dropbox, providing a
            streamlined and effective method to upload, arrange, and retrieve
            files from any location. Safely store crucial documents and media,
            and enjoy the convenience of seamless file organization and sharing
            within a unified solution.
          </p>

          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-4 w-fit"
          >
            Try it for free !
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This webapp clone of Dropbox is made for practicing purposes only. I do not own or
        affiliate with Dropbox or/and any of its subsidaries in any form.
        Copyright Disclaimer under the section 107 of the copyright act 1976,
        allowance is made or fair use of this project for educational purposes
        only.
      </p>
    </main>
  );
}
