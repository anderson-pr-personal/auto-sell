import Image from "next/image";
import Link from "next/link";
import { IoSettingsOutline, IoCarOutline, IoCallOutline, IoMailOutline, IoNotificationsOutline, IoMoonOutline } from "react-icons/io5";

export default function ProfilePage() {
    return (
        <div className="flex flex-col px-4">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-[#edededef] h-[60px]">
                <div></div>
                <span className="text-black font-bold text-xl">Perfil</span>
                <Link href={"#"} className="flex flex-col justify-between items-center">
                    <IoSettingsOutline className="text-black" size={25} />
                </Link>
            </div>

            <div className="flex flex-col w-full justify-center items-center mb-6">
                <Image src={"/images/user.jpg"} className="w-[120px] h-[120px] mb-4 rounded-full object-cover" alt={"user"} width={120} height={120} />
                <span className="text-2xl font-bold text-black">Javier Rendon</span>
                <span className="text-lg font-light text-gray-600">Manager</span>
                <span className="text-lg font-light text-gray-600 mb-6">javier.rendon@reventacar.com</span>
            </div>

            <div className="flex flex-col">
                <h1 className="text-black text-xl font-bold mb-4">Contacto</h1>
                <div className="flex flex-col gap-4 mb-6">
                    <div className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoCallOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Celular</span>
                            <span className="text-[14px] font-light">+57 3219875567</span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoMailOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Correo</span>
                            <span className="text-[14px] font-light">javier.rendon@reventacars.com</span>
                        </div>
                    </div>

                </div>

                {/* -------------------- */}

                <h1 className="text-black text-xl font-bold mb-4">Ajustes</h1>
                <div className="flex flex-col gap-3 mb-8">
                    <div className="flex gap-2 items-center">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoNotificationsOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black flex-1">
                            <span className="text-[16px] font-bold">Notificaciones</span>
                        </div>

                        <label className="relative inline-flex h-7 w-12 cursor-pointer select-none items-center">
                            {/* visually-hidden checkbox drives the state */}
                            <input type="checkbox" className="peer sr-only" />

                            {/* track */}
                            <span className="h-full w-full rounded-full bg-neutral-200 transition-colors duration-200 peer-checked:bg-blue-500/30" />

                            {/* thumb */}
                            <span className="absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-5" />
                        </label>

                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoMoonOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black flex-1">
                            <span className="text-[16px] font-bold">Modo oscuro</span>
                        </div>
                        <label className="relative inline-flex h-7 w-12 cursor-pointer select-none items-center">
                            {/* visually-hidden checkbox drives the state */}
                            <input type="checkbox" className="peer sr-only" />

                            {/* track */}
                            <span className="h-full w-full rounded-full bg-neutral-200 transition-colors duration-200 peer-checked:bg-blue-500/30" />

                            {/* thumb */}
                            <span className="absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-5" />
                        </label>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoCarOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black flex-1">
                            <span className="text-[16px] font-bold">Idioma</span>
                        </div>
                        <div className="text-black">Español</div>
                    </div>



                </div>

                {/* ------------------- */}

                <div className="mb-20"></div>

            </div>
        </div>
    )
}
