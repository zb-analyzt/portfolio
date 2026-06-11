import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Link,
} from "@react-pdf/renderer";
import { projects } from "../../data/projects.js";
import { experience } from "../../data/experience.js";
import { skillGroups } from "../../data/skills.js";
import { education } from "../../data/education.js";

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
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: "#0ea5e9",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#0ea5e9",
    marginBottom: 8,
  },
  subsectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: "#111827",
    marginBottom: 1,
  },
  subsectionMeta: {
    fontSize: 8,
    color: "#6b7280",
    marginBottom: 3,
  },
  bullet: {
    marginBottom: 2.5,
  },
  bulletText: {
    marginLeft: 8,
  },
  profileGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  profileCol: {
    width: "32%",
  },
  summary: {
    textAlign: "justify",
    color: "#111827",
  },
  projectBlock: {
    marginBottom: 6,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 2,
  },
  tag: {
    fontSize: 7.3,
    color: "#0ea5e9",
    marginRight: 4,
  },
  muted: {
    color: "#6b7280",
  },
  skillColumns: {
    flexDirection: "row",
    gap: 10,
  },
  skillCol: {
    width: "25%",
  },
  skillItem: {
    marginBottom: 2,
  },
  pageNumber: {
    position: "absolute",
    bottom: 14,
    right: 34,
    fontSize: 7.5,
    color: "#6b7280",
  },
  languageRow: {
    marginBottom: 2,
  },
});

function Section({ title, children }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.divider} />
      {children}
    </View>
  );
}

function BulletList({ items }) {
  return (
    <View>
      {items.map((item) => (
        <View key={item} style={styles.bullet}>
          <Text>
            • <Text style={styles.bulletText}>{item}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
}

export default function ResumeDocument() {
  const allSkills = skillGroups.flatMap((group) => group.skills);
  const skillColumns = [
    allSkills.slice(0, Math.ceil(allSkills.length / 4)),
    allSkills.slice(
      Math.ceil(allSkills.length / 4),
      Math.ceil((allSkills.length * 2) / 4),
    ),
    allSkills.slice(
      Math.ceil((allSkills.length * 2) / 4),
      Math.ceil((allSkills.length * 3) / 4),
    ),
    allSkills.slice(Math.ceil((allSkills.length * 3) / 4)),
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>Zohaib Zulfiqar</Text>
          <Text style={styles.role}>
            Data Analyst | Python • SQL • Power BI • Excel
          </Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>zohaib.dataanalyst@gmail.com</Text>
            <Text style={styles.contactItem}>+92 317 067 4509</Text>
            <Text style={styles.contactItem}>https://zohaibzulfiqar.com</Text>
          </View>
        </View>

        <Section title="PROFILES">
          <View style={styles.profileGrid}>
            <View style={styles.profileCol}>
              <Text style={styles.subsectionTitle}>LinkedIn</Text>
              <Link src="https://www.linkedin.com/in/zohaib-zulfiqar-data-analyst">
                <Text style={{ color: "#0ea5e9" }}>
                  zohaib-zulfiqar-data-analyst
                </Text>
              </Link>
            </View>
            <View style={styles.profileCol}>
              <Text style={styles.subsectionTitle}>Github</Text>
              <Link src="https://github.com/Zb-analyzt">
                <Text style={{ color: "#0ea5e9" }}>Zb-analyzt</Text>
              </Link>
            </View>
            <View style={styles.profileCol}>
              <Text style={styles.subsectionTitle}>Kaggle</Text>
              <Link src="https://www.kaggle.com/zbanalyzt">
                <Text style={{ color: "#0ea5e9" }}>/zbanalyzt</Text>
              </Link>
            </View>
          </View>
        </Section>

        <Section title="SUMMARY">
          <Text style={styles.summary}>
            Results-driven Data Analyst with hands-on experience in Python, SQL,
            Power BI, and Excel, delivering end-to-end data solutions from raw
            data cleaning and exploratory data analysis to interactive
            dashboards and machine learning models. Proven ability to translate
            complex datasets into actionable business insights across supply
            chain, e-commerce, HR, and public health domains. Background in
            frontend development with React.js, JavaScript, HTML5, and CSS3,
            which strengthens UI thinking and stakeholder communication.
          </Text>
        </Section>

        <Section title="EXPERIENCE">
          {experience.map((item) => (
            <View
              key={`${item.company}-${item.duration}`}
              style={styles.projectBlock}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.subsectionTitle}>{item.company}</Text>
                <Text style={styles.subsectionMeta}>{item.duration}</Text>
              </View>
              <Text style={styles.subsectionMeta}>
                {item.role} | {item.type}
              </Text>
              <BulletList items={item.bullets} />
            </View>
          ))}
        </Section>

        <Section title="PROJECTS">
          {projects.map((project) => (
            <View key={project.title} style={styles.projectBlock}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Text style={styles.subsectionTitle}>{project.title}</Text>
                <Text style={styles.subsectionMeta}>
                  {project.flagship ? "Flagship" : ""}
                </Text>
              </View>
              <View style={styles.tagRow}>
                {project.tools.map((tool) => (
                  <Text key={tool} style={styles.tag}>
                    {tool}
                  </Text>
                ))}
              </View>
              <BulletList
                items={[
                  `Problem: ${project.problem}`,
                  `Approach: ${project.approach}`,
                  `Outcome: ${project.outcome}`,
                ]}
              />
            </View>
          ))}
        </Section>

        <Section title="EDUCATION">
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.subsectionTitle}>{education.university}</Text>
            <Text style={styles.subsectionMeta}>{education.duration}</Text>
          </View>
          <Text style={styles.subsectionMeta}>{education.degree}</Text>
          <Text style={styles.subsectionMeta}>
            {education.location} | CGPA: {education.cgpa} / 4.00
          </Text>
          <Text style={styles.subsectionMeta}>
            Relevant Coursework: {education.courses.join(", ")}.
          </Text>
        </Section>

        <Section title="TECHNICAL SKILLS">
          <View style={styles.skillColumns}>
            {skillColumns.map((column, index) => (
              <View key={index} style={styles.skillCol}>
                {column.map((skill) => (
                  <Text key={skill} style={styles.skillItem}>
                    • {skill}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </Section>

        <Section title="LANGUAGE">
          {education.languages.map((language) => (
            <View key={language.name} style={styles.languageRow}>
              <Text>
                <Text style={styles.subsectionTitle}>{language.name}</Text>
              </Text>
              <Text style={styles.subsectionMeta}>{language.level}</Text>
            </View>
          ))}
        </Section>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}
