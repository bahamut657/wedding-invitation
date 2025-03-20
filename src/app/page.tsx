
import dictionary from "../dictionary.json"
import { fontText } from './fonts';
import Gifts from './sections/Gifts';
import Location from './sections/Location';
import Main from "./sections/Main"
import Map from './sections/Map';
import Party from './sections/Party';
import Rsvp from './sections/Rsvp';
import Title from './sections/Title';

const { cerimony, party } = dictionary.weddingInfo;

export default function Home() {
  return (<div
    className={`${fontText.className} flex flex-col main-container w-full`}
  >
    <div
      className="section flex h-full flex-col grow  flex-wrap snow">
      <Title />
      <Main />
    </div>
    <div
      className="section flex h-full flex-col grow  flex-wrap snow">
      <Location />
    </div>
    <Map url={cerimony.gmapURL} />
    <div
      className="section flex h-full flex-col grow  flex-wrap snow">
      <Party />
    </div>
    <Map url={party.gmapURL} />
    <Gifts />

    <Rsvp />
  </div >
  );
}




