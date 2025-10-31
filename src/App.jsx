//import { useState } from "react";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <div className="relative max-w-full h-full bg-[#FFFAF3] bg-[url(/png/noise.png)] m-auto shadow-xl/20 overflow-hidden">
          <div className="w-[230px] sm:w-[535px] rotate-90 scale-x-[-1] absolute -left-15 sm:-left-30 -top-35 sm:-top-75">
            <img className="object-cover" src="/png/flowers1.png" />
          </div>
          <div className="w-[235px] sm:w-[535px] rotate-90 scale-[-1] absolute -right-15 sm:-right-30 -top-35 sm:-top-75">
            <img className="object-cover" src="/png/flowers1.png" />
          </div>
          <div className="flex justify-center h-[680px] sm:h-[980px]" id="title">
            <div className="mt-35">
              <div className="w-[400px] h-[450px] sm:w-[700px] sm:h-[750px] relative">
                <h1 className="absolute z-10 text-[120px] sm:text-[200px] translate-x-15 sm:translate-x-0 translate-y-10 sm:translate-y-0">Mis</h1>
                <img className="absolute z-10 w-[170px] sm:w-[350px] translate-x-30 translate-y-40 sm:translate-x-50 sm:translate-y-40" src="/svg/quince.svg" />
                <h1 className="absolute z-10 text-[120px] sm:text-[200px]  translate-x-50 translate-y-55 sm:translate-x-110 sm:translate-y-80">años</h1>
                <img className="absolute w-[210px]  sm:w-[370px] -rotate-55 translate-x-10 translate-y-25" src="/png/flowers2.png" />
              </div>
              <img className="absolute w-[60px] sm:w-[120px] -right-2 top-50 sm:-right-4 sm:top-80" src="/png/leaves3.png" alt="Hojita" />
              <img className="absolute w-[60px] sm:w-[120px] scale-x-[-1] -left-2 top-250 sm:-left-4 sm:top-390" src="/png/leaves3.png" alt="Hojita" />
              <img className="absolute w-[250px] -left-33 top-70 sm:w-[480px] sm:-left-70 sm:top-80 opacity-30" src="/png/leaves1.png" alt="Hojas" />
              <img className="absolute w-[250px] sm:w-[480px] -right-32 top-230 sm:-right-64 sm:top-350 opacity-70" src="/png/flowers3.png" alt="Ramo de flores" />
            </div>
          </div>
          <div>
            <p className="text-4xl sm:text-7xl text-center">Padres</p>
            <p className="text-4xl sm:text-7xl text-center text-[#215D2C]">Henry Andrade & &nbsp;Paola Peña</p>
          </div>
          <div className="flex justify-center my-5 sm:my-10">
            <img className="w-[140px] sm:w-[220px]" src="/png/leaves2.png" />
          </div>
          <div>
            <p className="text-4xl sm:text-6xl text-center leading-[0.8]">Tenemos el honor de invitarle a la<br />
              celebración tan especial</p>
            <p className="text-5xl sm:text-7xl text-center text-[#215D2C] mt-5">15 años</p>
            <p className="text-4xl sm:text-6xl text-center">de nuestra querida hija</p>
          </div>
          <div className="flex justify-center h-auto mt-10 sm:mt-40">
            <div className="w-[600px] h-[300px] relative flex items-center justify-center">
              <h1 className="absolute text-[70px] sm:text-[140px] text-center leading-none z-10">Susanna<br /> Andrade Peña</h1>
              <img className="absolute w-[200px] sm:w-sm -translate-x-22 translate-y-5 sm:-translate-x-50 sm:translate-y-14 opacity-60 z-0" src="/png/flowers4.png" />
              <img className="absolute w-[50px] sm:w-[100px] -translate-x-16 -translate-y-20 sm:-translate-x-32 sm:-translate-y-40" src="/png/butterfly1.png" />
              <img className="absolute w-[50px] sm:w-[100px] translate-x-32 translate-y-1 sm:translate-x-65 sm:translate-y-4" src="/png/butterfly2.png" />
            </div>
          </div>
          <div className="flex justify-center h-auto mt-0 sm:mt-20">
            <div className="w-[400px] h-[400px] sm:h-[900px] sm:w-[800px] relative flex items-center justify-center">
              <img className="absolute w-full" src="/png/circle.png" />
              <div className="w-[350px] h-[350px] sm:w-[650px] sm:h-[650px] rounded-full bg-[url(/png/susanna.jpeg)] bg-cover"></div>
            </div>
          </div>
          <div className="flex justify-center h-auto mt-20 mb-5 sm:mb-0 sm:mt-10">
            <div className="w-[400px] h-[200px] sm:w-[800px] sm:h-[400px] relative flex items-center justify-center">
              <h2 className="absolute text-[90px] sm:text-[160px] top-5 sm:top-15 z-10">29</h2>
              <h3 className="absolute text-[30px] sm:text-[60px] bottom-13 sm:bottom-25 z-10">Agosto</h3>
              <h3 className="absolute text-[30px] sm:text-[60px] left-10 sm:left-20 z-10">Viernes</h3>
              <h3 className="absolute text-[30px] sm:text-[60px] right-10 sm:right-20 z-10">5:00 p.m.</h3>
              <img className="absolute -right-15 top-1/3 w-[170px] sm:w-[320px] scale-x-[-1]" src="/png/divider.png" />
              <img className="absolute -left-15 top-1/3 w-[170px] sm:w-[320px]" src="/png/divider.png" />
              <img className="absolute -right-15 bottom-1/3 w-[170px] sm:w-[320px] scale-x-[-1]" src="/png/divider.png" />
              <img className="absolute -left-15 bottom-1/3 w-[170px] sm:w-[320px]" src="/png/divider.png" />
              <img className="absolute w-55 sm:w-90 opacity-70" src="/png/flowers5.png" />
              <img className="absolute left-5 top-3 w-15 sm:left-20 sm:top-5 sm:w-30" src="/png/butterfly3.png" alt="Mariposa" />
            </div>
          </div>
          <div className="flex justify-center h-auto">
            <div className="relative flex items-center justify-center">
              <img className="absolute w-[60px] -left-5 top-18 sm:w-[120px] sm:-left-40 sm:top-30 rotate-90" src="/png/leaves4.png" alt="Hojas" />
              <img className="absolute w-[60px] -right-8 -top-3 sm:w-[120px] sm:-right-30 sm:top-0" src="/png/butterfly4.png" alt="Mariposa" />
              <p className="text-center text-4xl sm:text-[55px] my-10 leading-[0.8] sm:leading-none">Nos vemos en<br /> Los Jardines de la Casa de la Abuela</p>
            </div>
          </div>
          <div className="flex justify-center gap-10 mt-20 sm:gap-30 sm:mt-20">
            <div className="flex flex-col items-center">
              <img className="w-8 mb-2 sm:w-15 sm:mb-2" src="/svg/envelope.svg" alt="Lluvia de sobres" />
              <p id="icon" className="text-md sm:text-xl text-center leading-none">Lluvia de<br />Sobres</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-8 mb-2 sm:w-15 sm:mb-2" src="/svg/movile.svg" alt="Lluvia de sobres" />
              <p id="icon" className="text-md sm:text-xl text-center leading-none">Confirmar asistencia<br />Clic aquí!</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-15 mb-2 sm:w-15 sm:mb-2" src="/svg/dress.svg" alt="Lluvia de sobres" />
              <p id="icon" className="text-md sm:text-xl text-center leading-none">Vestimenta<br />Formal</p>
            </div>
          </div>
          <div className="flex justify-center h-auto mt-20">
            <div className="w-[800px] h-[190px] sm:h-[290px] relative flex items-center justify-center ">
              <h2 className="absolute top-15 text-[70px] sm:text-[110px] z-10 text-[#215D2C]">Te esperamos</h2>
              <img className="absolute -right-5 top-5 w-[270px] sm:right-0 sm:top-0 sm:w-[450px] opacity-30" src="/png/flowers7.png" alt="Flor" />
            </div>
          </div>
          <div className="flex justify-center mb-20 mt-10 sm:mb-50">
            <p className="text-3xl sm:text-[55px] z-10">Por favor confirmar asistencia</p>
          </div>
          <div className="absolute w-[150px] left-0 bottom-0 sm:w-[320px] sm:left-0 sm:bottom-0">
            <img className="object-cover" src="/png/leaves5.png" />
          </div>
          <div className="absolute w-[200px] -right-10 -bottom-5 sm:w-[520px] sm:-right-30 sm:-bottom-25">
            <img className="object-cover" src="/png/flowers6.png" />

          </div>
        </div>
      </div>
    </>
  );
}

export default App;


/* Group 6 */


