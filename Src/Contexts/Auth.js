import React, { createContext, useState } from 'react'

export const AuthContext = createContext({}) 

function AuthProvider({ children }) {

    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    const [activity, setActivity] = useState('')

    function calcRate(weight, height, age, gender, activity) {
        
    }

    return(
        <AuthContext.Provider value={{ 
            setName,
            setWeight,
            setHeight,
            setAge,
            setGender,
            setActivity,
         }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider