import React from 'react'
import './ProgressBar.css'

export default function ProgressBar({pv}) {
  return (
    <div className='ProgressBar'>
        <div className='ProgressBarNumericValue'>
            {pv}/100
        </div>
        <div style={{width : `${pv}%`}} className='ProgressBarActualValue'>

        </div>
    </div>
  )
}
