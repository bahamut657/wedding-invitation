
import { RTSPValues } from "@/types";
import utils from "@/utils";
import { faThumbsUp, faClose, faPaperPlane, faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

import dictionary from "../../dictionary.json"
import { fontTitle } from '../fonts';

type SubmitNativeEventOverride = Event & {
  submitter: HTMLButtonElement;
}

const FormProcessing = () =>
  <div className="flex flex-col items-center justify-center h-64 w-full text-center">
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: [0, 50, 0], opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="text-blue-500 text-5xl"
    >
      <FontAwesomeIcon
        icon={faPaperPlane}
        className="text-blue"
      />
    </motion.div>
    <p className="mt-4 text-lg font-semibold text-yellow">{dictionary.email.messages.loading.title}</p>
    <p className="text-gray-500 text-sm">{dictionary.email.messages.loading.subtitle}</p>
    <div className="mt-4 w-10 h-10 border-4 border-t-4 border-gray-300 rounded-full animate-spin"></div>
  </div>

const FormAcquired = ({ success }: { success: boolean }) =>
  <div className="flex flex-col items-center justify-center h-64 w-full text-center">
    {success === true && (
      <div className="text-green-500 text-5xl">
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>
    )}
    {success === false && (
      <div className="text-red-500 text-5xl">
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
    )}
    <p className={`mt-4 text-lg font-semibold ${success ? "text-green-500" : "text-red-500"}`}>
      {success === true
        ? dictionary.email.messages.success.title
        : dictionary.email.messages.error.title
      }
    </p>
  </div >




const RsvpForm = () => {
  const [formProcessing, setFormProcessing] = useState(false);
  const [formAcquired, setFormAcquired] = useState<null | boolean>(null);
  const [discardValidation, setDiscardValidation] = useState(false);

  const handleApprove = () => {
    setDiscardValidation(false);
  }

  const handleDiscard = () => {
    setDiscardValidation(true);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setFormProcessing(true);
    event.preventDefault();
    const triggerButton = (event.nativeEvent as SubmitNativeEventOverride).submitter;
    const formData = new FormData(event.target as HTMLFormElement);
    const values = Object.fromEntries(formData.entries()) as RTSPValues;
    utils.sendEmail(triggerButton.id === "accept" ? "accepted" : "declined", values).then(() => {
      setFormAcquired(true);
      setFormProcessing(false)
    }).catch((error: unknown) => {
      console.log(`Error acquiring the form`, error)
      setFormAcquired(false);
      setFormProcessing(false);
    })
    return false;
  }

  if (formProcessing === true) {
    return <FormProcessing />
  }

  if (formAcquired !== null) {
    return <FormAcquired success={formAcquired} />
  }

  return <div
    className="section flex flex-1 flex-col grow bg-light"
    id="rsvp"
  >
    <div className="section-content flex flex-col flex-1 grow">
      <div className="main-title justify-items-center">
        <h1
          className={`${fontTitle.className} text-yellow`}>
          {dictionary.sections.rsvp.title[0]}{" "}
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
          <p className="text-gray text-center">
            <i>
              <strong>
                {dictionary.sections.rsvp.expireInfo}
              </strong>
            </i>
          </p>

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
                  name="partecipant"
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
                  name="partecipant_number"
                  required={discardValidation ? false : true}>
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
              name="additional_info"
              placeholder={dictionary.sections.rsvp.form.additional_info.placeholder}
              rows={5}
            />

            <br />
            <br />
            <div className="text-gray flex justify-center items-center">
              {dictionary.weddingInfo.date}
              &nbsp;
              {dictionary.weddingInfo.time}
            </div>
            <br />
            <div className="flex justify-center items-center gap-4">

              <button
                className="px-6 py-2 bg-yellow text-blue"
                type="submit"
                name="accept"
                onClick={handleApprove}
                id="accept">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                />
                &nbsp;
                {dictionary.sections.rsvp.form.buttonAccept}

              </button>
              <button
                className="px-6 py-2 bg-blue text-white"
                type="submit"
                name="discard"
                onClick={handleDiscard}
                id="discard">
                <FontAwesomeIcon
                  icon={faClose}
                />
                &nbsp;
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