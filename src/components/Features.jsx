import { FaCarRear } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
export default function Features() {
  return (
    <>
      {/*          <!-- Component: Feature item with icon and text --> */}
      <div className="flex justify-around items-center bg-[#430199] w-3/4 min-w-[400px] h-20 p-2 mx-auto mb-6 responsive-features">

        <div className="flex w-1/3 items-center justify-center space-x-2 text-white responsive-features-elements py-2">
          <div className="flex items-center justify-center mx-auto space-x-2">
            <GrSecure />
            <span className="font-medium responsive-features-text">
              COMPRA SEGURA
            </span>
          </div>
        </div>

        <div className="flex w-1/3 items-center text-white responsive-features-elements py-2">
          <div className="flex items-center justify-center mx-auto space-x-2">
            <FaCreditCard />
            <span className="font-medium responsive-features-text">
              OPCIONES DE PAGO
            </span>
          </div>
        </div>

        <div className="flex w-1/3 items-center text-white responsive-features-elements py-2">
          <div className="flex items-center justify-center mx-auto space-x-2">
            <FaCarRear />
            <span className="font-medium responsive-features-text">
              ENVÍOS A TODO EL PAIS
            </span>
          </div>
        </div>

      </div>
    </>
  )
}