import { faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import dictionary from "../../dictionary.json"
import { fontTitle } from '../fonts';

const Gifts = () => <div className="section flex h-full flex-col grow alternate2 ">
  <div className="section-content h-full grow bg-blue">
    <div className="main-title justify-items-start mb-10">
      <h1 className={`${fontTitle.className}`}>
        {dictionary.sections.gifts.title[0]}&nbsp;
        <span className="text-yellow">
          {dictionary.sections.gifts.title[1]}
        </span>
      </h1>
    </div>
    <div className="main-entry flex flex-row justify-items-center items-center">
      <div>
        <FontAwesomeIcon
          fixedWidth
          icon={faGift}
          className="icon"
        />
      </div>
      <div className="flex-1 pl-4 justify-items-center">
        <p className="subtitle">
          {dictionary.sections.gifts.description}
        </p>
        <br />
        <h2 className="subtitle text-yellow" style={{ textShadow: "1px 0 #FFF" }} >
          {dictionary.sections.gifts.iban}
        </h2>
      </div>
    </div>
  </div>
</div>

export default Gifts;