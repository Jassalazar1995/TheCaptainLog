import React from "react"

export default function Show({ log }) {
    return(
        <div>
            <h1>Show Page</h1>
            <ul>
                    <li>
                        Title: {log.title} <br /> Entry: {log.entry} <br /> Broken: {log.shipIsBroken ? 'true' : 'false'} <br /> Created: {JSON.stringify(log.createdAt)}
                    </li>
            </ul>
            <a href= '/'>Index Page</a>
        </div>
    )
}