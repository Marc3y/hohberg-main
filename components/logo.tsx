import Image from 'next/image'
import logoBigImg from '../public/logo_big.png'
export function Logo() {
  return (
    <div className="flex flex-col items-center">
      <Image src={logoBigImg} alt="Logo" width={500} />
    </div>
  )
}
