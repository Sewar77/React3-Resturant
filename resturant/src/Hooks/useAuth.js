import { useContext } from "react"
import { userContext } from "../Context/userContext"
import toast from "react-hot-toast";
export const useAuth = () => {
    const { users, setUsers } = useContext(userContext) //this is how to use the context 
    console.log(users);
    const register = (userData) => {
        try {
            //validation
            if (!userData.email || !userData.name || !userData.password || !userData.confirmPassword) {
                toast.error("Please fill all feilds!");
                return
            }
            if (userData.password !== userData.confirmPassword) {
                toast.error("Passwords should match!");
                return
            }

            const isExist = users.find(user => user.email === userData.email)
            if (isExist) {
                toast.error("Email already exist!");
                return
            }
            const newUser = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                confirmPassword: userData.confirmPassword,
                id: Date.now() //id should be unique
            }
            toast.success("Registeration sucessfully")
            // [...array, newarray] => shadow copy for array
            const updatedUsers = [...users, newUser]
            setUsers(updatedUsers)
            localStorage.setItem("users", JSON.stringify(updatedUsers))
        } catch (err) {
            console.log(err)
        }
    }
    //task:
    const login = () => { }

    return { register }
}
