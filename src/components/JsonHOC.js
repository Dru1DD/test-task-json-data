import React from 'react'


export const JsonHOC = ({ data }) => {
    const { id, name, settings, type, children } = data
    return (
        <>
            <Element 
                id={id}
                name={name}
                settings={settings}
                type={type}
                children={children}
            />
        </>
    )
}


const Element = ({
    id, name, settings, type, children
}) => {
    return (
        <div className="elemContainer">
            <h3>Id: {id}</h3>
            <br />
            <h3>Name: {name}</h3>
            <br />
            {Object.keys(settings).length !== 0 ? 
                <>
                    <h3>Settings: {settings.text}</h3>
                    <br />
                </> : null
            }
            <h3>Type: {type}</h3>
            <br />
            {
                children.length === 0 ?
                    <h3>There is no children of this element</h3> 
                    : children.map(item => (
                        <Element 
                        id={item.id}
                        name={item.name}
                        settings={item.settings}
                        type={item.type}
                        children={item.children}
                        key={item.id}
                      />
                    ))
            }
        </div>
    )
}