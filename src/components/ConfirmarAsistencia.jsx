import '../style.css';
export default function ConfirmarAsistencia({ numInvitados = 1, fliaName }) {

    const numero = "573144450651";

    const generarMensaje = () => {
        const texto = `Por parte de la Flia. ${fliaName || "invitada"} Confirmo mi asistencia a los 15 años de Susanna ✨
        👥 En total, serémos: ${numInvitados} ${numInvitados === 1 ? "invitado" : "invitados"}`;
        return texto.replace(/\n/g, "%0A").replace(/ /g, "%20");
    };

    console.log(encodeURIComponent("👥"));

    const handleEnviar = () => {
        const url = `https://api.whatsapp.com/send/?phone=${numero}&text=${generarMensaje()}`;
        window.open(url, "_blank");

        setTimeout(() => {
            onClose();
        }, 0);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <button
                onClick={handleEnviar}
                className="relative overflow-hidden bg-[url(/png/noise.png)] custom_button w-[180px] sm:w-[450px] h-17 sm:h-27 flex justify-center items-center gap-2 sm:gap-7">
                <img className="w-18 sm:w-18" src="/svg/whatsapp.svg" alt="Icono WhatsApp" />
                <div className="z-10">
                    <p className="text-[19px] sm:text-[30px] !font-[Amiri] leading-none">Confirmar asistencia!</p>
                </div>
                <img className="absolute w-[200px] opacity-30 -right-35 top-5" src="/png/leaves1.png" alt="Flores" />
            </button>
        </div>
    );
}