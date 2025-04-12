import React from 'react'

const CoinInfo = ({amount}) => {
  return (
<div className='flex gap-2 items-baseline'> {/* Use baseline alignment */}
  <div className='text-4xl font-semibold border-b-2 border-[#B48261] pb-0.5'>
    {amount}
  </div>
  <span className='text-sm text-[#4e4e4e]'>points</span>
</div>

// {/* <div className='flex gap-2 items-baseline'> {/* Use baseline alignment */}
//   <div className='text-xl font-semibold border-b-2 border-[#B48261] pb-0.5'>
    // {amount}
//   </div>
//   <span className='text-sm text-[#4e4e4e]'>points</span>
// </div> */}

  )
}

export default CoinInfo