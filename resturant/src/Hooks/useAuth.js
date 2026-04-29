import { useContext } from "react"
import { userContext } from "../Context/userContext"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const useAuth = () => {
    const navigate = useNavigate()
    const { users, setUsers, setCurrentUser } = useContext(userContext) //this is how to use the context 
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
                role: "user",
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

    const deleteUser = (userId) => {
        const newUsers = users.filter(user => user.id !== userId)
        setUsers(newUsers)
        toast.success("Deleted Successfully")
        localStorage.setItem("users", JSON.stringify(newUsers))
    }
    const updateUserRole = (userId, newRole) => {
        const updatedUsers = users.map((user) => user.id === userId ? { ...user, role: newRole } : user)
        setUsers(updatedUsers)
        toast.success("role updated")
        localStorage.setItem("users", JSON.stringify(updatedUsers))
    }

    const login = (userData) => {
        try {
            if (!userData.email || !userData.password) {
                toast.error("Please Fill All Fields")
                return;
            }
            const isExist = users.find(user => user.email === userData.email)
            if (!isExist) {
                toast.error("Email does not exist")
                return
            }
            if (isExist.password !== userData.password) {
                toast.error("Password incorrect")
                return
            }
            //role based access => rba

            if (isExist.role === "user") navigate("/home")
            if (isExist.role === "admin") navigate("/admin/dashboard")
            localStorage.setItem("currentUser", JSON.stringify(isExist))
            setCurrentUser(isExist)
            toast.success("Login successfully")
        } catch (err) {
            console.log(err)
        }
    }

    const logout = () => {
        // localStorage.setItem('currentUser', {})
        localStorage.removeItem("currentUser")
        setCurrentUser({})
        navigate("/")
    }


    return { register, login, logout, deleteUser, updateUserRole }
}
