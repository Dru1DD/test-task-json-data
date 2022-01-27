import React from 'react'
import { JsonHOC } from './components/JsonHOC'
import * as data from './data/data.json'

import "./style/App.css"

export const App = () => {
    return (
        <div className="container">
            <JsonHOC 
                data={data}
            />
        </div>
    )
}