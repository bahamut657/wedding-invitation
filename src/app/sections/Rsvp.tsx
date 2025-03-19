'use client'

import { useEffect, useState } from "react";

import RsvpForm from "./RsvpForm";

export const experimental_ppr = true

const Loader = () => <div className="section flex flex-1 flex-col grow bg-light size-1vw">
  <div className="mx-auto w-full rounded-md border p-4">
    <div className="flex animate-pulse space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 rounded bg-gray-200 py-5"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-gray-200 py-5"></div>
            <div className="col-span-1 h-2 rounded bg-gray-200 py-5"></div>
          </div>
          <div className="h-2 rounded bg-gray-200 py-5"></div>
        </div>
      </div>
    </div>
  </div>
</div>;

const Rsvp = () => {
  const [doRender, setDoRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDoRender(true);
    }, 5000)
  }, [])
  if (!doRender) {
    return <Loader />
  }
  return <RsvpForm />
}


export default Rsvp;