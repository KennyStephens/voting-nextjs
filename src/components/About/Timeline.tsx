import React from "react";

export default function Timeline() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 mb-10 sm:text-4xl">
        Our Timeline
      </h2>
      <ol className="relative border-l border-gray-200 mx-6">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            June 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">Awareness</h3>
          <p className="mb-4 text-base font-normal text-gray-400">
            Start promoting the site through various channels including Reddit
            and Twitter to gauge interest in the project.
          </p>
          {/* An example button that we could use to link to other pages */}
          {/* <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Learn more{" "}
            <svg
              className="w-3 h-3 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a> */}
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            July 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">Fundraising</h3>
          <p className="text-base font-normal text-gray-400">
            Create the Kickstarter page to begin raising funds; continue raising
            awareness throughout the community.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            September 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">
            Team Formation
          </h3>
          <p className="text-base font-normal text-gray-400">
            Assuming previous steps have been completed, the goal is to have the
            team formed and ready by the end of September, 2023.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            December 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">
            Team Registration
          </h3>
          <p className="text-base font-normal text-gray-400">
            Register the team and begin open qualifiers. If the team fails to
            pass, all funds are refunded to contributors.
          </p>
        </li>
      </ol>
    </div>
  );
}
