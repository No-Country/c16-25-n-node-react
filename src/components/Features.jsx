import { FaCarRear } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
export default function Features() {
    return (
      <>
        {/*          <!-- Component: Feature item with icon and text --> */}
        <div className="flex max-w-3xl p-2 bg-[#430199] h-20 mx-auto">
        <div className="flex w-1/3 p-2 items-center gap-4 text-white">
          <div className="flex items-center">
          <GrSecure />          </div>
          <div className="flex w-full  min-w-0 flex-col items-start justify-center gap-0 text-base">
            <p className="text-white">
              <strong className="font-medium">
                Compra Segura
              </strong>
            </p>
          </div>
        </div>
        <div className="flex w-1/3 p-2 items-center gap-4 text-white">
          <div className="flex items-center">
            <FaCreditCard />
          </div>
          <div className="flex w-full min-w-0 flex-col items-start justify-center gap-0 text-base">
            <p className="text-white">
              <strong className="font-medium">
                OPCIONES DE PAGO
              </strong>
            </p>
          </div>
        </div>
        <div className="flex w-1/3 p-2 items-center gap-4 text-white">
          <div className="flex items-center">
<FaCarRear />
          </div>
          <div className="flex w-full min-w-0 flex-col items-start justify-center gap-0 text-base">
            <p className="text-white">
              <strong className="font-medium">
                ENVÍOS A TODO EL PAIS
              </strong>
            </p>
          </div>
        </div>
        


        {/*          <!-- End Feature item with icon and text --> */}
        
        </div>
      </>
    )
  }