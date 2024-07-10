import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button type="button" onClick={myFunction}>Executar função!</button>
    </div>
  )
}

export default ExecuteFunction