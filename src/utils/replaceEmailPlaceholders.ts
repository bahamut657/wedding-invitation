import { RTSPValues } from "@/types";

const replaceEmailPlaceholders = (html: string, values: RTSPValues) => {
  let htmlContent = html;
  Object.keys(values).forEach((field) => {
    htmlContent = htmlContent.replaceAll(`{{${field}}}`, values[field as keyof RTSPValues])
  })
  htmlContent = htmlContent.replaceAll(`{{currentDate}}`, new Date().toLocaleString())

  return htmlContent;
}

export default replaceEmailPlaceholders