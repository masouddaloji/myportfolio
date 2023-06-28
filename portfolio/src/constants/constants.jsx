//icons
import {
    FaBriefcase,
    FaEnvelopeOpen,
    FaGithub,
    FaHome,
    FaInstagram,
    FaTelegramPlane,
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
        id:"personal-github",
        title:"گیت هاب",
        value:"masouddaloji"
    },
    {
        id:"personal-email",
        title:"ایمیل",
        value:"masouddaloji.front@gmail.com"
    }
  
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
export const allCategory=[
    {
        id:"portfolio-all",
        title:"همه",
        value:"all",
    },
    {
        id:"portfolio-e-commerce",
        title:"فروشگاهی",
        value:"e-commerce",
    },
    {
        id:"portfolio-portfolio",
        title:"شخصی",
        value:"portfolio",
    },
    {
        id:"portfolio-education",
        title:"آموزشی",
        value:"education",
    },
    {
        id:"portfolio-resturant",
        title:"رستوران وکافه",
        value:"resturant",
    },
]
export const allPortfolio=[
    {
        id:"portfolio-digiland",
        title:"فروشگاه دیجی لند",
        link:"http://www.google.com",
        img:["prot1.jpg","port2.jpg"],
        language:"html,css,react,redux",
        category:"e-commerce"
    },
]
export const myLinks=[
    {
        id:"link-telegram",
        icon:<FaTelegramPlane className="text-[17px]"/>,
        link:"https://t.me/masouddaloji_front"
    },
    {
        id:"link-instagram",
        icon:<FaInstagram className="text-[17px]"/>,
        link:"https://instagram.com/masouddaloji?igshid=NGExMmI2YTkyZg=="
    },
    {
        id:"link-github",
        icon:<FaGithub className="text-[17px]"/>,
        link:"https://github.com/masouddaloji"
    },
]