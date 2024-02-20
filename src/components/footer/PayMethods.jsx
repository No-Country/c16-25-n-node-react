import VisaSvg from '../../assets/visa.svg'

function PayMethods() {
  return (
    <div>
      <p>Medios de pago</p>
      <span><img height={'5px'} src={VisaSvg} alt='visa' /></span>
      <span><img height={'5px'} src={VisaSvg} alt='visa' /></span>
      <span><img height={'5px'} src={VisaSvg} alt='visa' /></span>
    </div>
  )
}

export default PayMethods