import Link from "next/link";
import { IoCarOutline, IoDocumentAttachOutline, IoOptionsOutline, IoSettingsOutline } from "react-icons/io5";

export default function TaskPage() {
    return (
        <div className="flex flex-col px-4">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-[#ededede7] h-[60px]">
                <div></div>
                <span className="text-black font-bold text-xl">Tareas</span>
                <Link href={"#"} className="flex flex-col justify-between items-center">
                    <IoSettingsOutline className="text-black" size={25} />
                </Link>
            </div>
            <div className="flex flex-col">

                <h1 className="text-black text-xl font-bold mb-4">Urgentes</h1>
                <div className="flex flex-col gap-4 mb-6">


                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoOptionsOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Revisión anual</span>
                            <span className="text-[14px] font-light">Vence: 21/02/2025</span>
                        </div>
                    </Link>

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoOptionsOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Actualización de datos</span>
                            <span className="text-[14px] font-light">Vence: 21/02/2025</span>
                        </div>
                    </Link>

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoOptionsOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Revisión inventario</span>
                            <span className="text-[14px] font-light">Vence: 21/02/2025</span>
                        </div>
                    </Link>

                </div>

                {/* -------------------- */}

                <h1 className="text-black text-xl font-bold mb-4">Venceran Pronto</h1>
                <div className="flex flex-col gap-4 mb-8">
                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoCarOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Inspección de vehiculo requerida</span>
                            <span className="text-[14px] font-light">Vence: Hoy</span>
                        </div>
                    </Link>

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoDocumentAttachOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Validación de documentos</span>
                            <span className="text-[14px] font-light">Vence: 21/02/2025</span>
                        </div>
                    </Link>



                </div>

                {/* ------------------- */}

                <div className="mb-20"></div>

            </div>
        </div>
    )
}
