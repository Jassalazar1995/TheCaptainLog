import React from "react"

export default function Index({ logs }) {
    return(
        <div>
            <h1>Index Page</h1>
            <ul>
                {logs.map((log, i) => (
                    <div>
                    <a href = {'/' + log._id}><li key={i}>
                        Title: {log.title} <br /> Entry: {log.entry} <br /> Broken: {log.shipIsBroken ? 'true' : 'false'}
                    </li></a>
                    <form action={'/' + log._id +'?_method=DELETE'} method='POST'><button>Delete</button></form>
                    </div>
                    
                ))}
            </ul>
            <a href= '/new'>New Log</a>
        </div>
    )
}