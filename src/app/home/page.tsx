import Link from "next/link";
import { IoArrowUndoOutline, IoCarOutline, IoCarSportOutline, IoClipboardOutline, IoDocumentAttachOutline, IoOptionsOutline, IoSettingsOutline } from "react-icons/io5";

export default function HomePage() {
    return (
        <div className="flex flex-col px-4">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-[#ededede7] h-[60px]">
                <div></div>
                <span className="text-black font-bold text-xl">Dashboard</span>
                <Link href={"#"} className="flex flex-col justify-between items-center">
                    <IoSettingsOutline className="text-black" size={25} />
                </Link>
            </div>
            <div className="flex flex-col">
                <h1 className="text-black text-xl font-bold mb-4">Metricas Clave</h1>
                {/* --------------- */}
                <div className="flex justify-between gap-6 text-black text-lg mb-6">
                    <div className="flex flex-col w-[50%] border-2 border-gray-300 p-4 rounded-lg shadow-md">
                        <span>Invetario total</span>
                        <span className="font-bold">125</span>
                    </div>

                    <div className="flex flex-col w-[50%] border-2 border-gray-300 p-4 rounded-lg shadow-md">
                        <span>Autos vendidos</span>
                        <span className="font-bold">40</span>
                    </div>

                </div>
                {/* -------------- */}
                <div className="flex flex-col border-2 border-gray-300 p-4 mb-6 rounded-lg shadow-md text-black text-lg">
                    <span>Precio de venta promedio</span>
                    <span className="font-bold">$22,500</span>
                </div>
                {/* ---------------- */}
                <h1 className="text-black text-xl font-bold mb-4">Acciónes</h1>
                <div className="flex flex-col gap-4 mb-6">
                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoCarOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Inspecciónes</span>
                            <span className="text-[14px] font-light">Vence: 20/02/2025</span>
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

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoOptionsOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Asignar una tarea</span>
                            <span className="text-[14px] font-light">Vence: 21/02/2025</span>
                        </div>
                    </Link>

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoArrowUndoOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Re compra</span>
                            <span className="text-[14px] font-light">Vence: 21/02/2025</span>
                        </div>
                    </Link>

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoCarSportOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Registrar vehiculos</span>
                            <span className="text-[14px] font-light">Vence: 21/02/2025</span>
                        </div>
                    </Link>

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoClipboardOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Reportes</span>
                            <span className="text-[14px] font-light">Vence: 21/02/2025</span>
                        </div>
                    </Link>

                    <Link href={"/home/inspections"} className="flex gap-2">
                        <div className="bg-gray-200 p-4 rounded-2xl">
                            <IoClipboardOutline size={25} className="text-black" />
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-[16px] font-bold">Inventario</span>
                            <span className="text-[14px] font-light">Vence: 21/02/2025</span>
                        </div>
                    </Link>

                </div>

                {/* -------------------- */}

                <h1 className="text-black text-xl font-bold mb-4">Alertas Urgentes</h1>
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

                <h1 className="text-black text-xl font-bold mb-4">Performance Summary</h1>
                <h2 className="text-black text-lg font-light mb-2">Sales Performance</h2>
                <h2 className="text-black text-2xl font-bold">COP $140.300.100</h2>
                <h2 className="text-gray-600 text-lg font-light mb-2">Ultimos 3 meses <span className="text-green-600">+15%</span> </h2>


                {/* ----------------- graphic here ------------------ */}

                <div className="mb-20"></div>

            </div>
        </div>
    )
}
