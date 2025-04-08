import { faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import dictionary from "../../dictionary.json"
import { fontTitle } from '../fonts';

const Gifts = () => <div className="section flex h-full flex-col grow alternate2 ">
  <div className="section-content h-full grow bg-blue gifts">
    <div className="main-title justify-center mb-10 flex flex-row items-center gap-4">
      <FontAwesomeIcon
        icon={faGift}
        className="icon text-yellow"
      />
      <h1 className={`${fontTitle.className}`} >
        {dictionary.sections.gifts.title[0]}{" "}
        <span className="text-yellow">
          {dictionary.sections.gifts.title[1]}
        </span>
      </h1>
    </div>
    <div className="main-entry flex flex-row justify-items-center items-center">

      <div className="flex-1 pl-4 justify-items-center">
        <h2 className="subtitle" style={{ textShadow: "1px 0 #333" }} >
          {dictionary.sections.gifts.description}
        </h2>
        <br /><br />
        <p className="subtitle text-yellow" style={{ textShadow: "1px 0 #333" }} >
          <span className="text-white pr-4">IBAN</span>
          {dictionary.sections.gifts.iban}
        </p>

      </div>
    </div>
  </div>
</div>

export default Gifts;