import React from "react"

export default function New() {
    return(
        <div>
        <form action='/submitted' method='POST'>
            <p>Title</p>
            <input type='text' name ='title' size='15' />
            <p>Please enter your entry</p>
            <textarea name='entry' cols='20' rows='4'></textarea><br />
            <input type='checkbox' name='Broken' value='ShipIsBroken'/> Is the ship broken?<br />
            <input type='submit' name='submit' value='submit' />
        </form>
        </div>
    )
}