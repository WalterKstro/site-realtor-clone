import { FC } from 'react'

interface IProps {
  banner:string
}
const Banner:FC<IProps> = ({banner}) => {
  return (
    <img src={banner} alt="banner locked" className='rounded w-full lg:w-1/2 lg:grow' loading='lazy'/>
  )
}

export default Banner