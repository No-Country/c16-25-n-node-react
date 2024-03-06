
function TitleLine({ title }) {
  return (
    <div className="m-2 p-2 flex items-end">
      <h1 className="mr-6 text-[#430199] text-3xl font-semibold">{title}</h1>
      <div className="flex-grow h-0.5 bg-[#430199]"></div>
    </div>
  )
}

export default TitleLine