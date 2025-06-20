import Link from "next/link"
import { IoHomeOutline, IoListOutline, IoNotificationsOutline, IoPersonOutline } from "react-icons/io5"

export const Navigation = () => {
    return (
        <div className="flex justify-between w-full h-[70px] fixed bottom-0 z-10 bg-[#ededed] px-4">
            <Link href={"/home"} className="flex flex-col justify-center items-center">
                <IoHomeOutline className="text-black" size={30} />
                <span className="text-black">Inicio</span>
            </Link>

            <Link href={"/home/task"} className="flex flex-col justify-center items-center">
                <IoListOutline className="text-black" size={30} />
                <span className="text-black">Tareas</span>
            </Link>

            <Link href={"/home/notifications"} className="flex flex-col justify-center items-center">
                <IoNotificationsOutline className="text-black" size={30} />
                <span className="text-black">Notificaciones</span>
            </Link>

            <Link href={"/home/profile"} className="flex flex-col justify-center items-center">
                <IoPersonOutline className="text-black" size={30} />
                <span className="text-black">Perfil</span>
            </Link>
        </div>
    )
}
