"use client"

const errorPage = ({ error }: { error: Error }) => {
  return (
    <div>{error.message}</div>
  )
}

export default errorPage