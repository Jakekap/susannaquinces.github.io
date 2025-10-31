import '../style.css';
import Tarjeta from './Tarjeta';
import { useState } from "react";
export default function ConfirmarAsistencia() {
    const [mostrarCard, setMostrarCard] = useState(false);
    return (
        <div>

            <button
                onClick={() => setMostrarCard(true)}
                className="relative overflow-hidden bg-[url(/png/noise.png)] custom_button w-[180px] sm:w-[450px] h-17 sm:h-27 flex justify-center items-center gap-2 sm:gap-7">
                <img className="w-18 sm:w-18" src="/svg/whatsapp.svg" alt="Icono WhatsApp" />
                <div className="z-10">
                    <p className="text-[19px] sm:text-[30px] !font-[Amiri] leading-none">Confirmar asistencia!</p>
                </div>
                <img className="absolute w-[200px] opacity-30 -right-35 top-5" src="/png/leaves1.png" alt="Flores" />
            </button>
            {mostrarCard && (
                <Tarjeta onClose={() => setMostrarCard(false)} />
            )}
        </div>
    );
}