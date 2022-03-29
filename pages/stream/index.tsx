import type { NextPage } from "next";

const Live: NextPage = () => {
  return (
    <div className="py-10 divide-y-2 space-y-4">
      {[1, 1, 1, 1, 1].map((_, i) => (
        <div className="pt-4 px-4" key={i}>
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video"></div>
          <h3 className="text-gray-700 text-lg mt-2">
            Let&rsquo;s try potatos
          </h3>
        </div>
      ))}
      <button className="fixed hover:bg-orange-500 transition-colors cursor-pointer bottom-24 right-5 shadow-xl bg-orange-400 rounded-full p-4 text-white">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Live;
