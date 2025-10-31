import { useEffect, useState } from "react";

export default function Tarjeta({ onClose }) {
    const [nombrePrincipal, setNombrePrincipal] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [nombres, setNombres] = useState([""]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const nombreParam = params.get("nombre");
        if (nombreParam) setNombrePrincipal(nombreParam);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const numero = "573144439593";

    const handleCantidadChange = (e) => {
        const nuevaCantidad = parseInt(e.target.value);
        setCantidad(nuevaCantidad);
        setNombres(Array(nuevaCantidad).fill(""));
    };

    const handleNombreChange = (index, valor) => {
        const nuevos = [...nombres];
        nuevos[index] = valor;
        setNombres(nuevos);
    };

    const generarMensaje = () => {
        const lista = nombres.filter((n) => n.trim() !== "").join(", ") || "No especificado";
        const texto = `Por parte de la Flia. ${nombrePrincipal || "invitada"}

Confirmo mi asistencia a los 15 años de Susanna ✨

👥 En total, serémos: ${cantidad} personas
📝 Nombres de los asistentes: ${lista}

¡Gracias por la invitación! 💕`;
        return texto.replace(/\n/g, "%0A").replace(/ /g, "%20");
    };

    const handleEnviar = () => {
        if (nombres.some((n) => n.trim() === "")) {
            alert("Por favor completa todos los nombres antes de enviar 🙏");
            return;
        }
        const url = `https://wa.me/${numero}?text=${generarMensaje()}`;
        window.open(url, "_blank");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="overflow-hidden relative bg-white shadow-2xl w-full max-w-md p-8 pt-10 p-10 text-center animate-fade-in">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ✕
                </button>

                <h2 className="text-4xl text-left leading-[0.8]">
                    Confirmar asistencia<br />Flia. {nombrePrincipal
                        ? `${nombrePrincipal}`
                        : "Invitada"}
                </h2>
                <div className="mt-7 text-left">
                    <label className="block !font-[Amiri] text-[18px]">
                        Seleccione el número de invitados que asistirán
                    </label>
                    <select
                        value={cantidad}
                        onChange={handleCantidadChange}
                        className="relative z-10 !font-[Amiri] text-xl w-full border-2 border-[#DDDDDD] p-2 focus:outline-none"
                    >
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="relative z-10 flex flex-col gap-3 mt-4">
                    {nombres.map((nombre, index) => (
                        <input
                            key={index}
                            type="text"
                            placeholder={`Nombre del invitado ${index + 1}`}
                            value={nombre}
                            onChange={(e) => handleNombreChange(index, e.target.value)}
                            className="!font-[Amiri] text-xl w-auto border-2 border-[#DDDDDD] p-2 focus:outline-none"
                        />
                    ))}
                </div>

                <button
                    onClick={handleEnviar}
                    className="relative z-10 bg-[#7DCDBA] mt-6 hover:bg-green-600 text-white font-semibold py-3 px-6 transition w-full"
                >
                    Enviar por WhatsApp
                </button>
                <img className="absolute opacity-30 -top-40 -left-20 z-1" src="/png/flowers4.png" alt="Flor" />
                <img className="absolute opacity-30 -rotate-90 -bottom-70 -right-50" src="/png/flowers5.png" alt="Flor" />
            </div>
        </div>
    );
}
