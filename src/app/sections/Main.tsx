import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import dictionary from "../../dictionary.json"
import { fontTitle } from '../fonts';

const Main = () =>
  <div className="section-content h-full bg-blue">
    <div className="main-title">
      <h1 className={`${fontTitle.className}`}>
        {dictionary.sections.main.title[0]}&nbsp;
        <span className="text-yellow">
          {dictionary.sections.main.title[1]}
        </span>
      </h1>
    </div>
    <div className="main-entry flex justify-items-start items-center mt-8">
      <div>
        <FontAwesomeIcon
          fixedWidth
          icon={faClock}
          className="icon"
        />
      </div>
      <div className="flex-1 pl-4">
        <p className="subtitle">
          {dictionary.weddingInfo.date}&nbsp;
          {dictionary.weddingInfo.time}
        </p>
      </div>
    </div>
    <div className="flex main-actions mt-10 ">
      <div className="flex flex-1 justify-center">
        <button
          className="px-6 py-2 bg-yellow text-blue"
          type="button">
          {dictionary.sections.main.buttonLabel}
        </button>
      </div>
    </div>
  </div>

export default Main;