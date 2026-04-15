import { useContext } from "react"
import { userContext } from "../Context/userContext"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"
export const useAuth = () => {
    const navigate = useNavigate()
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
            navigate('/login')
        } catch (err) {
            console.log(err)
        }
    }

    const login = (userData) => {
        if (!userData.email || !userData.password) {
            toast.error("please enter password and email")
            return
        }
        try {
            const allUsers = JSON.parse(localStorage.getItem("users"))
            const existUser = allUsers.find(user => user.email === userData.email)
            if (!existUser) {
                toast.error("You dont have an account. please register!")
                return
            }
            const isMatch = existUser.password === userData.password
            if (!isMatch) {
                toast.error("Email or Password are not correct")
                return
            }
            toast.success("Login successfully")
            localStorage.setItem("currentUser", existUser)
            navigate('/test')
        } catch (err) {
            console.log(err)
        }
    }

    return { register, login }
}
