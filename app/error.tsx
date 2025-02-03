"use client"

import WrapperPageStates from "./components/WrapperPageStates"

const errorPage = ({ error }: { error: Error }) => {
  return (
    <WrapperPageStates>
      <div className="text-red-500 text-center">error: {error.message}</div>
    </WrapperPageStates>
  )
}

export default errorPage