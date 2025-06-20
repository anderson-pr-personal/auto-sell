import Link from "next/link";
import { IoSettingsOutline, IoCarOutline, IoDocumentAttachOutline, IoOptionsOutline } from "react-icons/io5";

export default function NotificationsPage() {
    return (
        <div className="flex flex-col px-4">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-[#ededede7] h-[60px]">
                <div></div>
                <span className="text-black font-bold text-xl">Notificaciones</span>
                <Link href={"#"} className="flex flex-col justify-between items-center">
                    <IoSettingsOutline className="text-black" size={25} />
                </Link>
            </div>
            <div className="flex flex-col">
                <h1 className="text-black text-2xl font-bold mb-4">Hoy</h1>
                <div className="flex flex-col gap-4 mb-6">
                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoCarOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Nueva compra</span>
                            <span className="text-[14px] font-light">11:00</span>
                        </div>
                    </Link>

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoDocumentAttachOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Actualización de documentos</span>
                            <span className="text-[14px] font-light">09:00</span>
                        </div>
                    </Link>

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoOptionsOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Re compra - auto</span>
                            <span className="text-[14px] font-light">15:00</span>
                        </div>
                    </Link>

                </div>

                {/* -------------------- */}

                <h1 className="text-black text-2xl font-bold mb-4">Ayer</h1>
                <div className="flex flex-col gap-4 mb-8">
                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoCarOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Inspección de vehiculo requerida</span>
                            <span className="text-[14px] font-light">18:00</span>
                        </div>
                    </Link>

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoDocumentAttachOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Validación de documentos</span>
                            <span className="text-[14px] font-light">02:00</span>
                        </div>
                    </Link>



                </div>

                {/* ------------------- */}

                <div className="mb-20"></div>

            </div>
        </div>
    )
}
