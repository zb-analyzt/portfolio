import fs from "fs";
import path from "path";
import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 28,
    paddingHorizontal: 34,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#1f2937",
    backgroundColor: "#ffffff",
    lineHeight: 1.35,
  },
  header: {
    alignItems: "center",
    marginBottom: 12,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    color: "#111827",
    marginBottom: 4,
    lineHeight: 1.05,
  },
  role: {
    fontSize: 8,
    color: "#6b7280",
    marginBottom: 8,
    textAlign: "center",
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    fontSize: 7.5,
    color: "#374151",
    marginTop: 2,
    maxWidth: 510,
    lineHeight: 1.25,
  },
  contactItem: {
    marginHorizontal: 3,
    marginBottom: 2,
    textAlign: "center",
  },
});

const doc = React.createElement(
  Document,
  null,
  React.createElement(
    Page,
    { size: "A4", style: styles.page },
    React.createElement(
      View,
      { style: styles.header },
      React.createElement(Text, { style: styles.name }, "Zohaib Zulfiqar"),
      React.createElement(
        Text,
        { style: styles.role },
        "Data Analyst | Python • SQL • Power BI • Excel",
      ),
      React.createElement(
        View,
        { style: styles.contactRow },
        React.createElement(
          Text,
          { style: styles.contactItem },
          "zohaib.dataanalyst@gmail.com",
        ),
        React.createElement(
          Text,
          { style: styles.contactItem },
          "+92 317 067 4509",
        ),
        React.createElement(
          Text,
          { style: styles.contactItem },
          "https://zohaibzulfiqar.com",
        ),
      ),
    ),
  ),
);

(async () => {
  try {
    const pdfDoc = pdf(doc);
    const out = path.join(
      process.cwd(),
      "dist",
      "Zohaib_Zulfiqar_Resume_verify.pdf",
    );
    await new Promise((resolve, reject) => {
      const fileStream = fs.createWriteStream(out);
      // pdf(doc) returns a PDFKit document which supports pipe()
      pdfDoc.pipe(fileStream);
      pdfDoc.end();
      fileStream.on("finish", () => resolve());
      fileStream.on("error", (e) => reject(e));
    });
    console.log("WROTE", out);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
