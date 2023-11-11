import React, {useState} from 'react'

const NameForm = ({ setPlayers, players }) => {

    const handleChange = (e) => {
        const name = e.target.name
       
        if (name == "O") {
             //cf-camille: only overwrite 'o' value
            setPlayers({
            ...players, o : e.target.value
        })
        } else {
            //cf-camille: only overwrite 'x' value
            setPlayers({
                ...players, x : e.target.value
            })
        }
    }

  return (
    <>
    <form>
        <input name='X' placeholder='e.g. Player X' onChange={handleChange} id='player-x'></input>
        <input name='O' placeholder='e.g. Player O' onChange={handleChange} id='player-o'></input>
    </form>
    </>
  )
}

export default NameForm
