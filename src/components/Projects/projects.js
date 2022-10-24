import recipEasy from "../../assets/images/recipeasy.png";
import timeless from "../../assets/images/Timeless.png";
import jarvis from "../../assets/images/Jarvis.png";

const projects = [
  {
    color: "#FF6C6C",
    image: recipEasy,
    link: "https://github.com/JHuangg/recipe-app",
    description:
      "Enter available ingredients, appliances, and the amount of time you have to cook. RecipEasy will search over 10 000 recipes for ones that can be cooked within user parameters. Less thinking, more eating!",
    technologies: [
      { title: "React", textcolor: "#007a99", color: "#00ccff40" },
      { title: "JavaScript", textcolor: "#7d7000", color: "#ffe22640" },
      { title: "HTML", textcolor: "#bd7400", color: "#ff9d0040" },
      { title: "MongoDB", textcolor: "#016e05", color: "#5ff56e40" },
      { title: "Python", textcolor: "#8c0317", color: "#ff002640" },
    ],
  },
  {
    image: timeless,
    color: "#a6a6a6",
    link: "",
    description:
      "An interactive social media dashboard where users can invite friends and post memories. Don't let your memories with friends fade.",
    technologies: [
      { title: "React", textcolor: "#007a99", color: "#00ccff40" },
      { title: "JavaScript", textcolor: "#7d7000", color: "#ffe22640" },
      { title: "HTML", textcolor: "#bd7400", color: "#ff9d0040" },
      { title: "MongoDB", textcolor: "#016e05", color: "#5ff56e40" },
    ],
  },
  {
    image: jarvis,
    color: "#88adac",
    link: "",
    description:
      "A personal assistant created using python/ google speech recognition.  Play your favorite songs, get the weather, schedule events and even get information on any topic!",
    technologies: [
      { title: "Python", textcolor: "#8c0317", color: "#ff002640" },
      { title: "Google Cloud", textcolor: "#016e05", color: "#5ff56e40" },
    ],
  },
];

export default projects;
