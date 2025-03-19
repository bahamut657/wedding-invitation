
import { fontText } from './fonts';
import Gifts from './sections/Gifts';
import Location from './sections/Location';
import Main from "./sections/Main"
import Map from './sections/Map';
import Rsvp from './sections/Rsvp';
import Title from './sections/Title';

export default function Home() {
  return (<div
    className={`${fontText.className} flex flex-col main-container w-full`}
  >
    <div
      className="section flex h-full flex-col grow  flex-wrap snow">
      <Title />
      <Main />
    </div>
    <Location />
    <Map />
    <Gifts />

    <Rsvp />
  </div>
  );
}




