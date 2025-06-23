"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "./Spinner";
import Image from "next/image";

export const InitialLoader = () => {
    const spinner = useAnimation();
    const logo = useAnimation();
    const btn = useAnimation();

    const [isPosted, setIsPosted] = useState(false);
    const router = useRouter();

    const handlerClick = () => {
        setIsPosted(true);
        router.push("/home");
    };

    const test = 2;

    const timeLine = async () => {
        await logo.start({
            opacity: 1,
        });

        await spinner.start({
            opacity: 1,
            y: 20,
            transition: { duration: 1, delay: 2.8 },
        });

        await spinner.start({
            opacity: 0,
            transition: { duration: 1, delay: test },
        });

        await logo.start({
            y: -40,
            transition: { duration: 1, delay: 0 },
        });

        await btn.start({
            opacity: 1,
            transition: { duration: 1, delay: 0 },
        });
    };

    useEffect(() => {
        timeLine();
    }, [spinner, logo, btn, test, timeLine]);

    return (
        <motion.div className="h-screen w-screen bg-primary flex flex-col p-4 justify-center items-center">
            <motion.div animate={logo} initial={{ opacity: 0 }}>
                <Image src={"/images/logo4.png"} alt={"logo"} width={300} height={300} />
            </motion.div>

            <motion.div animate={spinner} initial={{ opacity: 0, y: 50 }}>
                <Spinner />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -40 }} animate={btn}>
                <button
                    onClick={handlerClick}
                    className="text-black border-2 w-[120px] border-black py-2 px-5 rounded-lg font-bold"
                >
                    {isPosted ? <Spinner /> : "Ingresar"}
                </button>
            </motion.div>
        </motion.div>
    );
};