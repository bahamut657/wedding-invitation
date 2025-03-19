
import { FormEvent } from "react";

import dictionary from "../../dictionary.json"
import { fontTitle } from '../fonts';


const RsvpForm = () => {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const triggerButton = (event.nativeEvent as any).submitter as HTMLButtonElement;

    if (triggerButton.id === "accept") {
      //accept invitation
      alert("ACCEPT")
    } else {
      //decline invitation
      alert("DECLINE")
    }
    return false;
  }

  return <div className="section flex flex-1 flex-col grow bg-light">
    <div className="section-content flex flex-col flex-1 grow">
      <div className="main-title justify-items-center">
        <h1
          className={`${fontTitle.className} text-yellow`}>
          {dictionary.sections.rsvp.title[0]}&nbsp;
          <span className="text-blue">
            {dictionary.sections.rsvp.title[1]}
          </span>
        </h1>
      </div>
      <div className="main-entry flex flex-col justify-items-center items-center mt-8 text-blue subtitle">
        <div>
          <p>
            {dictionary.sections.rsvp.subtitle}
          </p>
        </div>

        <div>
          {dictionary.weddingInfo.date}
          &nbsp;
          {dictionary.weddingInfo.time}
        </div>

      </div>
      <div className="flex flex-1 main-actions mt-10 ">
        <div className="flex flex-1 justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="partecipant">
                  {dictionary.sections.rsvp.form.partecipant.label}*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="partecipant"
                  type={dictionary.sections.rsvp.form.partecipant.type}
                  placeholder={dictionary.sections.rsvp.form.partecipant.placeholder}
                  style={{ minWidth: "50vw" }}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="partecipant_number">
                  {dictionary.sections.rsvp.form.partecipant_number.label}*
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="partecipant_number"
                  required>
                  <option />
                  {dictionary.sections.rsvp.form.partecipant_number.options.map((entry) =>
                    (<option key={entry} value={entry}>{entry}</option>)
                  )}
                </select>
              </div>
            </div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="additional_info">
              {dictionary.sections.rsvp.form.additional_info.label}
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="additional_info"
              placeholder={dictionary.sections.rsvp.form.additional_info.placeholder}
              rows={5}
            />
            <br /><br />
            <br />
            <div className="flex justify-center items-center gap-4">
              <button
                className="px-6 py-2 bg-yellow text-blue"
                type="submit"
                name="accept"
                id="accept">
                {dictionary.sections.rsvp.form.buttonAccept}

              </button>
              <button
                className="px-6 py-2 bg-blue text-white"
                type="submit"
                name="discard"
                id="discard">
                {dictionary.sections.rsvp.form.buttonDecline}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div >;
}

export default RsvpForm