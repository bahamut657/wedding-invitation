import { faVanShuttle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import dictionary from "../../dictionary.json"
import { fontTitle, fontSubTitle } from '../fonts';

const Location = () => <div className="section flex h-full flex-col grow bg-light">
  <div className="section-content flex-1 grow">
    <div className="main-title">
      <h1
        className={`${fontTitle.className} text-yellow whitespace-break-spaces`}>
        {dictionary.sections.location.title[0]}&nbsp;
        <br />
        <span className="text-blue">
          {dictionary.sections.location.title[1]}
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
          {dictionary.weddingInfo.cerimony.location}
        </h2>
        <p className="subtitle">
          {dictionary.weddingInfo.cerimony.description}
        </p>
      </div>
    </div>
  </div>
</div>

export default Location;