import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiPython } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiJava } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { GiGiftOfKnowledge } from "react-icons/gi";

export const Topics = [
  { id: "react", name: "React", icon: <FaReact color="#61DAFB" /> },
  {
    id: "javascript",
    name: "JavaScript",
    icon: <DiJavascript color="#F7DF1E" />,
  },
  { id: "python", name: "Python", icon: <SiPython color="#3776AB" /> },
  { id: "sql", name: "SQL", icon: <GrMysql color="#4479A1" /> },
  { id: "java", name: "Java", icon: <DiJava color="#ED8B00" /> },
  { id: "html", name: "HTML", icon: <IoLogoHtml5 color="#E34F26" /> },
  { id: "css", name: "CSS", icon: <FaCss3 color="#1572B6" /> },
  { id: "angular", name: "Angular", icon: <FaAngular color="#DD0031" /> },
  { id: "django", name: "Django", icon: <SiDjango color="#20a270" /> },
  {
    id: "gk",
    name: "GK",
    icon: <GiGiftOfKnowledge color="#8B5CF6" />,
  },
];

export const labels = ["A", "B", "C", "D"];


export function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}
