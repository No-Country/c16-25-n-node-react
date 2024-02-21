import VisaSvg from '../../assets/visa.svg'
import MasterCardSvg from '../../assets/mastercard.svg'
import MPSvg from '../../assets/mercadopago-icon.svg'

function PayMethods() {
  return (
    <div>
      <p className='font-semibold text-sm'>Medios de pago</p>
      <div className='flex items-center'>
        <span><img className='w-10 h-[1.8em]' src={VisaSvg} alt='visa' /></span>
        <span><img className='w-10 h-[1.3em]' src={MasterCardSvg} alt='mastercard' /></span>
        <span><img className='w-10 h-[2em]' src={MPSvg} alt='mercado pago' /></span>
      </div>
    </div>
  )
}

export default PayMethods