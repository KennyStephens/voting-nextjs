import React from "react";
import Image from "next/image";

export default function Products() {
  return (
    <div className="container mx-auto">
      <div className="bg-white">
        <div className="mx-auto items-center py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Do It
            </h2>
            <p className="mt-4 text-gray-500">
              This project wouldn&apos;t work without community support and
              thats why the community always comes first in decisions.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Fund Gathering</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Funds will be gathered through Kickstarter as a way of
                  insurance. If the funding goals are not reached, all funds are
                  automatically returned to users who donated.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Player Hiring</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  The search for players will be community driven and voted on.
                  The admin of the team will handle extending offers and adding
                  them to the team as well as team registration.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Voting</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  A user is awarded one vote per dollar they contribute to the
                  team. Voting power will be assigned to users upon funding
                  completion and team acceptance into the DPC.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Player Representation
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Players have a right to have a say in their future; while
                  active on the team roster, players will gain an amount of
                  votes equal to 8% of the total for use in polls.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Transparency</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Monthly statements of accounts will be available every month
                  and include copies of transactions with explanations so that
                  you know where your money is going to help the scene.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Obligations</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Funds inside the account are not allowed to drop below the
                  amount to pay out all current obligations.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
