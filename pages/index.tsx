import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details>
        <summary className="select-none cursor-pointer">What is my fav. food.</summary>
        {/* <span className="selection:bg-indigo-600 selection: text-white">김치</span> */}
        <span className="">김치</span>
      </details>

      <input type="file" className="file:border-0 file:px-5 file:rounded-xl file:bg-purple-400" />
    </div>
  );
};

export default Home;
