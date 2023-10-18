import React, { useEffect,  useState } from 'react'

const PREFIX ='codepen-clone'

export default function Hooks(key, initialState) {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if( typeof initialState === 'function'){
            return initialState()
        }else {
            return initialState
        }
    })

    useEffect(() =>{
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    },[prefixedKey, value])

  return [value, setValue]
}
