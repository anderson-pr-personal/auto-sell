'use client'

import clsx from "clsx";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoListOutline, IoNotificationsOutline, IoPersonOutline } from "react-icons/io5"

export const Navigation = () => {
    const url = usePathname();
    return (
        <div className="flex justify-between w-full h-[70px] fixed bottom-0 z-10 bg-[#ededed] px-4">
            <Link href={"/home"}
                className={clsx(
                    "flex flex-col justify-center items-center text-black transition-all ease delay-150",
                    {
                        "text-blue-600": url === "/home",
                    }
                )}
            >
                <IoHomeOutline className="" size={30} />
                <span className="">Inicio</span>
            </Link>

            <Link href={"/home/task"}
                className={clsx(
                    "flex flex-col justify-center items-center text-black transition-all ease delay-150",
                    {
                        "text-blue-600": url === "/home/task",
                    }
                )}
            >
                <IoListOutline className="" size={30} />
                <span className="">Tareas</span>
            </Link>

            <Link href={"/home/notifications"}
                className={clsx(
                    "flex flex-col justify-center items-center text-black transition-all ease delay-150",
                    {
                        "text-blue-600": url === "/home/notifications",
                    }
                )}
            >
                <IoNotificationsOutline className="" size={30} />
                <span className="">Notificaciones</span>
            </Link>

            <Link href={"/home/profile"}
                className={clsx(
                    "flex flex-col justify-center items-center text-black transition-all ease delay-150",
                    {
                        "text-blue-600": url === "/home/profile",
                    }
                )}
            >
                <IoPersonOutline className="" size={30} />
                <span className="">Perfil</span>
            </Link>
        </div>
    )
}
