
import Image from "next/image";
import { Boogaloo,Voltaire,Ms_Madi } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift,faClock,faVanShuttle} from '@fortawesome/free-solid-svg-icons'

const fontTitle = Boogaloo({ subsets: ['latin'],variable:"--font-title",weight:"400" })
const fontSubTitle = Ms_Madi({ subsets: ['latin'],variable:"--font-subtitle",weight:"400" })
const fontText = Voltaire({ subsets: ['latin'],variable:"--font-text",weight:"400" })

export default function Home() {

  return (<div className={`${fontText.className}  flex flex-col main-container w-full`}>

      {/** TITLE SECTION */}
      <div className="section flex h-full flex-col grow  flex-wrap snow "> 
        <div className="section-banner h-full overflow-hidden snow-content">
          <h1 style={{fontSize:"4rem",lineHeight:"4rem"}} className={`${fontTitle.className} text-blue text-center`}>Giovannella & Jacopo</h1>
          <h2 style={{fontSize:"3rem", textShadow:"0 1px #333"}} className={`${fontTitle.className} text-yellow text-center `}>31 Marzo 2025</h2>
            <Image src="/wedding-couple.svg" alt="logo" width={0} height={0} sizes={"50vh"} className="w-full" style={{height:"50vh"}}/>
        </div>
        <div className="section-content h-full bg-blue">
          <div className="main-title">
            <h1 className={`${fontTitle.className}`}>Il grande <span className="text-yellow">giorno</span></h1>
          </div>
          <div className="main-entry flex justify-items-start items-center mt-8">
            <div>
              <FontAwesomeIcon fixedWidth icon={faClock} className="icon" />
            </div>
            <div className="flex-1 pl-4">
              <p className="subtitle"> 
                30 Marzo 2025 10:00
              </p>
            </div>
          </div>
          <div className="flex main-actions mt-10 ">
            <div className="flex flex-1 justify-center">
              <button className="px-6 py-2 bg-yellow text-blue" type="button">Conferma</button>
            </div>
          </div>
        </div>
      </div>

      {/** LOCATION */}
      <div className="section flex h-full flex-col grow bg-light">
        <div className="section-content flex-1 grow">
          <div className="main-title">
            <h1 className={`${fontTitle.className} text-yellow whitespace-break-spaces`}>Dove <br /><span className="text-blue">siamo</span></h1>
          </div>
          <div className="main-entry flex flex-row justify-items-center items-center mt-8 text-yellow ">
            <div >
              <FontAwesomeIcon icon={faVanShuttle} className="icon" />
            </div>
            <div className="pl-4 flex-1 flex flex-col">
              <h2 className={`${fontSubTitle.className} mt-4 text-blue`}>Comune di Montecatini Terme</h2>
              <p className="subtitle">
                La cerimonia avverr&agrave; presso l'Anagrafe di Montecatini Terme
              </p>
            </div>
          </div>
        </div>
      </div>

      {/** MAP */}
      <div className="section flex h-full flex-col grow">
        <div className="map flex-1 grow">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.5689934029!2d10.770758563121957!3d43.88651885129125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a7d669f9ec007%3A0xb9312c63d922e7b4!2sPalazzina%20Regia%2C%20Viale%20Giuseppe%20Verdi%2C%2041%2C%2051016%20Montecatini%20Terme%20PT!5e0!3m2!1sen!2sit!4v1739231387238!5m2!1sen!2sit" 
        width="100%" 
        height="300px" 
        style={{"border":0}} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
      {/** LISTA NOZZE SECTION */}
      <div className="section flex h-full flex-col grow alternate2 ">
        <div className="section-content h-full grow bg-blue">
          <div className="main-title justify-items-start mb-10">
            <h1 className={`${fontTitle.className}`}>Lista <span className="text-yellow">nozze</span></h1>
          </div>
          <div className="main-entry flex flex-row justify-items-center items-center">
            <div>
              <FontAwesomeIcon fixedWidth icon={faGift} className="icon" />
            </div>
            <div className="flex-1 pl-4">
                <p className="subtitle">
                  Fateci quello che volete
                </p>
            </div>
          </div>
        </div>
      </div>

      {/** RSVP SECTION */}
      <div className="section flex flex-1 flex-col grow bg-light">
        <div className="section-content flex flex-col flex-1 grow">
          <div className="main-title justify-items-center">
            <h1 className={`${fontTitle.className} text-yellow`}>RSVP</h1>
          </div>
          <div className="main-entry flex flex-col justify-items-center items-center mt-8 text-blue subtitle">
            <div>
              30/03/2025
            </div>
            <div className="flex-1 pl-4">
              <p>
                Non dimenticarti di confermare la tua presenza
              </p>
            </div>
          </div>
          <div className="flex flex-1 main-actions mt-10">
            <div  className="flex flex-1 justify-center items-center">
              <button className="px-6 py-2 bg-yellow text-blue" type="button">RSVP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}