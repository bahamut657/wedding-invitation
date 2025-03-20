import { RTSPValues, SendPayload } from "@/types";

import dictionary from "../dictionary.json"
import replaceEmailPlaceholders from "./replaceEmailPlaceholders";

const sendEmail= async (action:"accepted"|"declined",values:RTSPValues)=>{
  let payload: SendPayload

  if (action === "accepted") {
    //accept invitation
    const { accepted } = dictionary.email.template
    const { name, subject, html } = accepted
    const htmlContent = replaceEmailPlaceholders(html, values)
    payload = {
      name,
      subject: `${values.partecipant} ${subject}`,
      sender: dictionary.email.config.sender,
      type: "classic",
      htmlContent,
      to: dictionary.email.config.recipients
    }
  } else {
    //decline invitation
    const { declined } = dictionary.email.template
    const { name, subject, html } = declined
    const htmlContent = replaceEmailPlaceholders(html, values)

    payload = {
      name,
      subject: `${values.partecipant} ${subject}`,
      sender: dictionary.email.config.sender,
      type: "classic",
      htmlContent,
      to: dictionary.email.config.recipients
    }
  }

  return await fetch(dictionary.email.config.url, {
    method: dictionary.email.config.method, headers: {
      ...dictionary.email.config.headers
    },
    body: JSON.stringify(payload), // Convert data to JSON
  })
}

export default sendEmail;