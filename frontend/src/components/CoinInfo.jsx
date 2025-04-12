import React from 'react'

const CoinInfo = ({amount}) => {
  return (
    <div className='w-fit flex justify-evenly items-center gap-3 p-3 px-7 rounded-full bg-white'>
      <div className=' w-3 h-3 rounded-full bg-secondary'></div>
  <div className='text-md font-semibold border-b-2 border-[#B48261] pb-0.5'>
    {amount}
  </div>
  <span className='text-sm text-[#4e4e4e]'>points</span>
</div>
  )
}

export default CoinInfo