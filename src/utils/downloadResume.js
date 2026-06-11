import { pdf } from "@react-pdf/renderer";
import { createElement } from "react";
import ResumeDocument from "../components/resume/ResumeDocument.jsx";

export async function downloadResume() {
  const blob = await pdf(createElement(ResumeDocument)).toBlob();
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = "Zohaib_Zulfiqar_Resume.pdf";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  setTimeout(() => URL.revokeObjectURL(url), 0);
}
