import { useContext } from "react"
import { menuContext } from "../Context/menuContext"
import toast from "react-hot-toast"


export const useMenu = () => {
    const { menu, setMenu } = useContext(menuContext)

    const deleteMenuItem = (menuId) => {
        try {
            const filteredMenu = menu.filter(item => item.id !== menuId)
            setMenu(filteredMenu)
            localStorage.setItem("menu", JSON.stringify(filteredMenu))
            toast.success("deleted menu item")
        } catch (err) {
            console.log(err);
            toast.error(err)
        }
    }

    const addNewItem = (menuItem) => {
        try {
            console.log(menuItem);

            if (!menuItem.name || !menuItem.description) {
                toast.error("Please fill the requered fields")
                return
            }
            const newMenw = {
                id: Date.now(), ...menuItem
            }
            const allMenu = [...menu, newMenw]
            setMenu(allMenu)
            localStorage.setItem("menu", JSON.stringify(allMenu))
            toast.success("added done!")
        } catch (err) {
            console.log(err);
            toast.error(err)
        }
    }

    return { menu, deleteMenuItem, addNewItem }
}