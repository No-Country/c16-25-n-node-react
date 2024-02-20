import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoHome } from "react-icons/io5";
function ContactInfo() {
  return (
    <div>
      <p>CONTACTO</p>
      <p><BsFillTelephoneFill/> 011 6932 0000</p>
      <p><MdMarkEmailUnread />  contacto@tiendageek.com</p>
      <p><IoHome /> Av. Corrientes 2000 C.F. Bs. As</p>
    </div>
  )
}

export default ContactInfo