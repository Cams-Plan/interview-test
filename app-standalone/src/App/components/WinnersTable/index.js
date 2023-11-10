import React from 'react'

const WinnerTable = (winTable) => {
  return (
    <>
    <h2>Winner's Table</h2>
    { winTable.length == 0 ? <p>No Winners Yet</p> : <ol>{winTable.map((win, index)=> {
                return <li key={index}>{win}</li>
            })}
    </ol> 
    }
    </>
  )
}

export default WinnerTable
