import { Children, createContext, useState } from "react";

export const AuthContext= createContext()


export const AuthProvider=({Children})=>{
  const [user, setuser] = useState(null)
  const [loading,setLoading]=useState(false)

  return (
    <AuthContext.Provider value={{user,setUser,loading,setLoading}}
    >
        {Children}
    </AuthContext.Provider>
  )
}