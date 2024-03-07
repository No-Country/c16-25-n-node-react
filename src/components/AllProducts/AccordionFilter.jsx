import { useState } from "react";
import flechaSvg from "../../assets/Icon Sube-Baja.svg"


function AccordionFilter({ title, list, handleChange, type }) {
  const [filterTitle] = useState(title)
  const [filterList] = useState(list)
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div className="flex justify-between text-lg mb-6 z-10" onClick={handleClick}>
        <button className="h-full w-full p-0 flex justify-between items-center focus-visible:border-0 focus-visible:outline-none
        focus:ring-0 focus:border-0 focus:outline-none" id={filterTitle}>
          <label className="cursor-pointer" htmlFor={filterTitle}>{filterTitle}</label>
          <img className={`transition-all duration-300 ease-out ${(visible ? "rotate-180" : "rotate-0")}`} src={flechaSvg} />
        </button>
      </div>
      <div className={`transform transition-all duration-500 ease-out relative ${(visible ?
        "h-44 opacity-100 [&>div]:translate-x-0" :
        "h-0 opacity-50 [&>div]:-translate-x-[30em]")}`}>
        {/* "h-44 [&_input]:h-4 [&_input]:w-4 [&_input]:border-2 opacity-100 [&_label]:text-[0.875rem] [&>div]:left-0" :
        "h-0 [&_input]:h-0 [&_input]:w-0 [&_input]:border-0 opacity-50 [&_label]:text-[0px] [&>div]:-left-40")}`}> */}
        <div className="absolute transform transition-all duration-300 ease-in-out">
          {filterList.map((filter, i) => (
            <div key={i} className="flex justify-start items-center mb-3">
              <input className="ml-1 mr-4 appearance-none
            checked:text-[#430199] checked:bg-white checked:border-[#430199]
            checked:hover:border-[#430199] checked:hover:bg-white
            checked:focus:border-[#430199] checked:focus:border-2 
            focus:ring-[#430199] focus:border-[#430199] focus:border-2 
            border-[#430199] border-2 shrink-0 h-4 w-4 rounded-sm"
                type={type} name={type} id={filter} onChange={() => handleChange(i)} />
              <label htmlFor={filter} className="font-bold text-sm select-none">{filter}</label>

            </div>
          ))}
        </div>
      </div>

    </div>

  )
}

export default AccordionFilter