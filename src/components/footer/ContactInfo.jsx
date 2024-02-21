import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoHome } from "react-icons/io5";
function ContactInfo() {
  return (
    <div className="flex flex-col text-sm font-light">
      <p className="font-semibold  text-left pb-2">CONTACTO</p>
      <div className="flex justify-start items-baseline"><BsFillTelephoneFill/><span className="pl-2">011 6932 0000</span></div>
      <div className="flex justify-start items-baseline"><MdMarkEmailUnread /><span className="pl-2">contacto@tiendageek.com</span></div>
      <div className="flex justify-start items-baseline"><IoHome /><span className="pl-2">Av. Corrientes 2000 C.F. Bs. As</span></div>
    </div>
  )
}

export default ContactInfo