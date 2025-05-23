import React from "react";
import HTMLImage from "../assets/Images/stack/HTML.png";
import CSSImage from "../assets/Images/stack/CSS.png";
import JavascriptImage from "../assets/Images/stack/Javascript.svg";
import ReactImage from "../assets/Images/stack/React.png";
import NodeJsImage from "../assets/Images/stack/NodeJs.svg";
import NextImage from "../assets/Images/stack/Next.svg";
import ReduxImage from "../assets/Images/stack/Redux.svg";
import TailwindImage from "../assets/Images/stack/Tailwind.png";
import BootstrapImage from "../assets/Images/stack/Bootstrap.svg";
import MaterialUIImage from "../assets/Images/stack/MaterialUI.svg";
import ExpressImage from "../assets/Images/stack/Express.png";
import GitImage from "../assets/Images/stack/Git.svg";
import GithubImage from "../assets/Images/stack/Github.svg";
import GraphqlImage from "../assets/Images/stack/Graphql.svg";
import MongoDBImage from "../assets/Images/stack/MongoDB.svg";
import VercelImage from "../assets/Images/stack/Vercel.svg";
import ChartJsImage from "../assets/Images/stack/ChartJs.svg";
import BashImage from "../assets/Images/stack/Bash.svg";
import DockerImage from "../assets/Images/stack/Docker.svg";
import K8sImage from "../assets/Images/stack/K8s.svg";

export default function Skills() {
  return (
    <section className="skillContainer w-full flex flex-col md:flex-row relative" id="skills">
  <div class="flex flex-col justify-end items-end h-full absolute -bottom-10 md:right-[16%] md:-bottom-10 select-none text-gray-300 font-bold">
    <div class="text-8xl md:text-10xl">Skills</div>
  
</div>

      <div className="leftSkillContainer w-full md:w-[50%]">
        <h2 className="skillHeading">
          <span>M</span>e and <br />MyTech Stack
        </h2>
        <div className="skillSubHeading mt-4 w-full md:w-[85%] text-justify text-lg">
          <p>
            Hi Everyone, My name is Priyanshu Kumar and I am currently a 4th year student,
            Pursuing Integrated BS+MS in Mathematics From Sardar Vallabhbhai National Institute of Technology.I am from East Champaran, Bihar.
            I am Skilled in ReactJS and have good Knowledge of Java Full Stack Programming.
            I am also Familiar with NodeJs and ExpressJs and have good knowledge of MongoDB and Graph.
            I am SDE-Intern  @Arkalogi Tech Private Limited.
            I am a Competitive Programmer and I have good knowledge of Data Structures and Algorithms.
            My Hobby is Coding.Here are my Skills.
          </p>
         
        </div>
      </div>

      <div className="rightSkillContainer  w-[100%] md:w-[50%] flex flex-row">
        <img src={HTMLImage} alt="" className="skillsLogo" />
        <img src={CSSImage} alt="" className="skillsLogo" />
        <img src={JavascriptImage} alt="" className="skillsLogo" />
        <img src={ReactImage} alt="" className="skillsLogo" />
        <img src={NodeJsImage} alt="" className="skillsLogo" />
        {/* <img src={NextImage} alt="" className="skillsLogo" /> */}
        <img src={ReduxImage} alt="" className="skillsLogo" />
        <img src={TailwindImage} alt="" className="skillsLogo" />
        <img src={BootstrapImage} alt="" className="skillsLogo" />
        <img src={MaterialUIImage} alt="" className="skillsLogo" />
        <img src={ExpressImage} alt="" className="skillsLogo" />
        <img src={GitImage} alt="" className="skillsLogo" />
        <img src={GithubImage} alt="" className="skillsLogo" />
        {/* <img src={GraphqlImage} alt="" className="skillsLogo" /> */}
        <img src={MongoDBImage} alt="" className="skillsLogo" />
        <img src={VercelImage} alt="" className="skillsLogo" />
        <img src={ChartJsImage} alt="" className="skillsLogo" />
        {/* <img src={BashImage} alt="" className="skillsLogo" /> */}
        {/* <img src={DockerImage} alt="" className="skillsLogo" />
        <img src={K8sImage} alt="" className="skillsLogo" /> */}
      </div>
    </section>
  );
}
