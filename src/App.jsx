//import { useState } from "react";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <div className="relative max-w-full h-full bg-[#FFFAF3] bg-[url(/png/noise.png)] m-auto shadow-xl/20 overflow-hidden">
          <div className="w-[535px] rotate-90 scale-x-[-1] absolute left-0 top-0 -translate-x-35 -translate-y-85">
            <img className="object-cover" src="/png/flowers1.png" />
          </div>
          <div className="w-[535px] rotate-90 scale-[-1] absolute right-0 top-0 translate-x-35 -translate-y-85">
            <img className="object-cover" src="/png/flowers1.png" />
          </div>
          <div className="flex justify-center h-[980px]" id="title">
            <div className="mt-35">
              <div className="w-[700px] h-[750px] relative">
                <h1 className="absolute z-10 text-[200px] translate-x-0 translate-y-0">Mis</h1>
                <img className="absolute z-10 w-[350px] translate-x-50 translate-y-40" src="/svg/quince.svg" />
                <h1 className="absolute z-10 text-[200px] translate-x-110 translate-y-80">años</h1>
                <img className="absolute w-[370px] -rotate-55 translate-x-5 translate-y-30" src="/png/flowers2.png" />
              </div>
              <img className="absolute w-[120px] -right-4 top-80" src="/png/leaves3.png" alt="Hojita" />
              <img className="absolute w-[120px] scale-x-[-1] -left-4 top-390" src="/png/leaves3.png" alt="Hojita" />
              <img className="absolute w-[480px] -left-70 top-80 opacity-30" src="/png/leaves1.png" alt="Hojas" />
              <img className="absolute w-[480px] -right-64 top-350 opacity-70" src="/png/flowers3.png" alt="Ramo de flores" />
            </div>
          </div>
          <div>
            <p className="text-7xl text-center">Padres</p>
            <p className="text-7xl text-center text-[#215D2C]">Henry Andrade & &nbsp;Paola Peña</p>
          </div>
          <div className="flex justify-center my-10">
            <img className="w-[220px]" src="/png/leaves2.png" />
          </div>
          <div>
            <p className="text-6xl text-center leading-[0.8]">Tenemos el honor de invitarle a la<br />
              celebración tan especial</p>
            <p className="text-7xl text-center text-[#215D2C] mt-5">15 años</p>
            <p className="text-6xl text-center">de nuestra querida hija</p>
          </div>
          <div className="flex justify-center h-auto mt-40">
            <div className="w-[600px] h-[300px] relative flex items-center justify-center">
              <h1 className="absolute text-[140px] text-center leading-none z-10">Susanna<br /> Andrade Peña</h1>
              <img className="absolute w-sm -translate-x-50 translate-y-14 opacity-60 z-0" src="/png/flowers4.png" />
              <img className="absolute w-[100px] -translate-x-32 -translate-y-40" src="/png/butterfly1.png" />
              <img className="absolute w-[100px] translate-x-65 translate-y-4" src="/png/butterfly2.png" />
            </div>
          </div>
          <div className="flex justify-center h-auto mt-20">
            <div className="w-[800px] h-[900px] relative flex items-center justify-center">
              <img className="absolute w-full" src="/png/circle.png" />
              <div className="w-[650px] h-[650px] rounded-full bg-[url(/png/susanna.jpeg)] bg-cover"></div>
            </div>
          </div>
          <div className="flex justify-center h-auto mt-10">
            <div className="w-[800px] h-[400px] relative flex items-center justify-center">
              <h2 className="absolute top-15 text-[160px] z-10">29</h2>
              <h3 className="absolute bottom-25 text-[60px] z-10">Agosto</h3>
              <h3 className="absolute left-20 text-[60px] z-10">Viernes</h3>
              <h3 className="absolute right-20 text-[60px] z-10">5:00 p.m.</h3>
              <img className="absolute -right-15 top-1/3 w-[320px] scale-x-[-1]" src="/png/divider.png" />
              <img className="absolute -left-15 top-1/3 w-[320px]" src="/png/divider.png" />
              <img className="absolute -right-15 bottom-1/3 w-[320px] scale-x-[-1]" src="/png/divider.png" />
              <img className="absolute -left-15 bottom-1/3 w-[320px]" src="/png/divider.png" />
              <img className="absolute w-90 opacity-70" src="/png/flowers5.png" />
              <img className="absolute left-20 top-5 w-30" src="/png/butterfly3.png" alt="Mariposa" />
            </div>
          </div>
          <div className="flex justify-center h-auto">
            <div className="relative flex items-center justify-center">
              <img className="absolute w-[120px] rotate-90 -left-40 top-30" src="/png/leaves4.png" alt="Hojas" />
              <img className="absolute w-[120px] -right-30 top-0" src="/png/butterfly4.png" alt="Mariposa" />
              <p className="text-center text-[55px] my-10 leading-none">Nos vemos en <br />Los Jardines de la Casa de la Abuela</p>
            </div>
          </div>
          <div className="flex justify-center gap-30 mt-20">
            <div className="flex flex-col items-center">
              <img className="w-15 mb-2" src="/svg/envelope.svg" alt="Lluvia de sobres" />
              <p id="icon" className="text-xl text-center leading-none">Lluvia de<br />Sobres</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-15 mb-2" src="/svg/movile.svg" alt="Lluvia de sobres" />
              <p id="icon" className="text-xl text-center leading-none">Confirmar asistencia<br />Clic aquí!</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-30 mb-2" src="/svg/dress.svg" alt="Lluvia de sobres" />
              <p id="icon" className="text-xl text-center leading-none">Vestimenta<br />Formal</p>
            </div>
          </div>
          <div className="flex justify-center h-auto mt-20">
            <div className="w-[800px] h-[290px] relative flex items-center justify-center">
              <h2 className="absolute top-15 text-[110px] z-10 text-[#215D2C]">Te esperamos</h2>
              <img className="absolute right-0 top-0 w-[450px] opacity-30" src="/png/flowers7.png" alt="" />
            </div>
          </div>
          <div className="flex justify-center mt-10 mb-50">
            <p className="text-[55px] z-10">Por favor confirmar asistencia</p>
          </div>
          <div className="w-[320px] absolute left-0 bottom-0">
            <img className="object-cover" src="/png/leaves5.png" />
          </div>
          <div className="w-[520px] absolute -right-30 -bottom-25">
            <img className="object-cover" src="/png/flowers6.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


/* Group 6 */


