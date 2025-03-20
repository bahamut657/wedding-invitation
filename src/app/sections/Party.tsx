import { faVanShuttle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import dictionary from "../../dictionary.json"
import { fontTitle, fontSubTitle } from '../fonts';
const { party } = dictionary.sections;

const Party = () => <div className="section flex h-full flex-col grow bg-light snow-content">
  <div className="section-content flex-1 grow lunch">
    <div className="main-title">
      <h1
        className={`${fontTitle.className} text-yellow whitespace-break-spaces`}>
        {party.title[0]}{" "}
        <br />
        <span className="text-blue">
          {party.title[1]}
        </span>
      </h1>
    </div>
    <div className="main-entry flex flex-row justify-items-center items-center mt-8 text-yellow ">
      <div >
        <FontAwesomeIcon
          icon={faVanShuttle}
          className="icon"
        />
      </div>
      <div className="pl-4 flex-1 flex flex-col">
        <h2
          className={`${fontSubTitle.className} mt-4 text-blue`}>
          {dictionary.weddingInfo.party.location}
        </h2>
        <p className="subtitle">
          {dictionary.weddingInfo.party.description}
        </p>
      </div>

    </div>
  </div>
</div>

export default Party;