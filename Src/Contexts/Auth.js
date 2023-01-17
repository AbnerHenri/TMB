import React, { createContext, useState } from 'react'

export const AuthContext = createContext({}) 

function AuthProvider({ children }) {

    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    const [activity, setActivity] = useState('')

    return(
        <AuthContext.Provider value={{ 
            name, setName,
            weight, setWeight,
            height, setHeight,
            age, setAge,
            gender, setGender,
            activity, setActivity,
         }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider