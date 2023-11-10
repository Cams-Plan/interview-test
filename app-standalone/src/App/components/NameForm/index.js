import React, {useState} from 'react'

const NameForm = ({ setPlayers, players }) => {

    const handleChange = (e) => {
        const name = e.target.name
        if (name == "O") {
            setPlayers({
            ...players, O : e.target.value
        })
        } else {
            setPlayers({
                ...players, X : e.target.value
            })
        }
    }

  return (
    <>
    <form>
        <input name='X' placeholder='Player X' onChange={handleChange} id='player-x'></input>
        <input name='O' placeholder='Player X' onChange={handleChange} id='player-o'></input>
    </form>
    </>
  )
}

export default NameForm
