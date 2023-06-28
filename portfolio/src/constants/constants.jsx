//icons
import {
    FaBriefcase,
    FaEnvelopeOpen,
    FaHome,
    FaUserAlt,
  } from "react-icons/fa";


export const menu=[
    {
        id:"menu-item-home",
        title:"خانه",
        link:"/",
        icon:<FaHome className="menu-item-icon" />
    },
    {
        id:"menu-item-about",
        title:"درباره من",
        link:"/about",
        icon:<FaUserAlt className="menu-item-icon" />
    },
    {
        id:"menu-item-portfolio",
        title:"نمونه کار ها",
        link:"/portfolio",
        icon:<FaBriefcase className="menu-item-icon" />
    },
    {
        id:"menu-item-contact",
        title:"ارتباط با من",
        link:"/contact",
        icon:<FaEnvelopeOpen className="menu-item-icon" />
    },
]
export const personalInfos=[
    {
        id:"personal-name",
        title:"نام",
        value:"مسعود"
    },
    {
        id:"personal-family",
        title:"نام خانوادگی",
        value:"دلوجی"
    },
    {
        id:"personal-age",
        title:"سن",
        value:"26"
    },
    {
        id:"personal-address",
        title:"آدرس",
        value:"کوهدشت"
    },
    {
        id:"personal-phone",
        title:"تلفن",
        value:"09039730443"
    },
    {
        id:"personal-email",
        title:"ایمیل",
        value:"masouddaloji.front@gmail.com"
    },
    {
        id:"personal-github",
        title:"گیت هاب",
        value:"masouddaloji"
    },
  
]
export const personalAnalize=[
    {
        id:"analize-years-experencs",
        title1:"سال",
        title2:"تجربه",
        value:"1"
    },
    {
        id:"analize-years-project",
        title1:"پروژه",
        title2:"تکمیل شده",
        value:"1"
    },
    {
        id:"analize-years-experencs1",
        title1:"سال",
        title2:"تجربه",
        value:"1"
    },
    {
        id:"analize-years-experencs1",
        title1:"پروژه",
        title2:"تکمیل شده",
        value:"1"
    },
   
]
export const skills=[
    {
        id:"skils-html",
        title:"html",
        value:80
    },
    {
        id:"skils-css",
        title:"css",
        value:70
    },
    {
        id:"skils-javascript",
        title:"javascript",
        value:70
    },
    {
        id:"skils-react",
        title:"react",
        value:70
    },
    {
        id:"skils-bootstrap",
        title:"bootstrap",
        value:50
    },
    {
        id:"skils-sas",
        title:"sass",
        value:50
    },
    {
        id:"skils-tailwind",
        title:"tailwindcss",
        value:70
    },
    {
        id:"skils-redux",
        title:"redux",
        value:60
    },
]