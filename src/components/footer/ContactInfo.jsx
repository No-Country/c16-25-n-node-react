import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoHome } from "react-icons/io5";
function ContactInfo() {
  return (
    <div className="flex flex-col text-sm font-light md:m-0 mb-3 md:w-1/4 w-auto">
      <p className="font-semibold  md:text-left text-center pb-2">CONTACTO</p>
      <div className="flex md:justify-start justify-center items-baseline"><div className="shrink-0"><BsFillTelephoneFill/></div><span className="pl-2 text-nowrap">011 6932 0000</span></div>
      <div className="flex md:justify-start justify-center items-baseline"><div className="shrink-0"><MdMarkEmailUnread /></div><span className="pl-2 text-nowrap">contacto@tiendageek.com</span></div>
      <div className="flex md:justify-start justify-center items-baseline"><div className="shrink-0"><IoHome /></div><span className="pl-2 text-nowrap">Av. Corrientes 2000 C.F. Bs. As</span></div>
    </div>
  )
}

export default ContactInfo