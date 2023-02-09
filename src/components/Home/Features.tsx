import React from "react";
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <div className="container mx-auto">
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-600">
              Power To The Players
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don&apos;t waste money on other teams
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Support your favorite players directly while pushing for change in
              the community.
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <GlobeAltIcon />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    Support the players
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Help division two players make it big with your
                    contributions directly to the team.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <ScaleIcon />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    1:1 Voting Power
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    The more you donate to the team, the higher your voting
                    power will be.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <BoltIcon />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    Money back guaruntee
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    If the team doesn&apos;t make it past the open qualifiers,
                    all money gets refunded.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <DevicePhoneMobileIcon />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    True transparency
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    We publish team bank statements every month so you know
                    right where your money goes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
