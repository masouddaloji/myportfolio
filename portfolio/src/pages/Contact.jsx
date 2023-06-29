import { useRef, useState } from "react";
//packages
import emailjs from "@emailjs/browser";
//icons
import {
  FaEnvelopeOpen,
  FaMap,
  FaPhoneSquareAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { myLinks } from "../constants/constants";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    },
  });

  const form = useRef();
  const sendEmail = (data) => {
    emailjs
      .sendForm(
        "service_kdbr1b8",
        "template_7h9516h",
        form.current,
        "5gu5dkmjCZLb6lg4w"
      )
      .then(
        (result) => {
          toast.success("پیغام شما با موفقیت ارسال شد");
          reset();
        },
        (error) => {
          toast.error("ارسال پیغام با مشکل مواجه شد");
        }
      );
  };

  return (
    <section
      className="w-full min-h-screen relative bg-white  lg:pr-20 dark:bg-dark-bg "
      data-aos="fade-down"
      data-aos-easing="linear"
    >
      <div className="container mx-auto">
        {/* start contact header */}
        <div className=" w-full py-16 relative">
          <h2 className="page-title">
            ارتباط
            <p className="text-primary">من</p>
          </h2>
        </div>
        {/* end contact header */}
        {/* start contact content */}
        <section className="pb-20">
          <div className="w-full flex flex-wrap">
            <div className="col-12 lg:col-4 flex flex-col items-start gap-y-7 lg:gap-y-5 text-justify text-[15px] text-txt-gray dark:text-white">
              <p className="leading-7">
                با خیال راحت با من در تماس باشید. همواره آماده بحث درباره
                پروژه‌های جدید، ایده‌های خلاقانه و فرصت‌هایی هستم که بخشی از
                چشم‌انداز شما باشم. با تجربه و علاقه‌مندی به همکاری، به دنبال
                رشد و پیشرفت هستم. خوشحال خواهم شد اگر بتوانم به شما کمک کنم و
                به تحقق اهدافتان نیز برسید.
              </p>

              <div className="flex items-start gap-x-5 ">
                <FaMap className="text-primary text-3xl" />
                <p className="flex flex-col gap-2.5">
                  <span className="opacity-75">آدرس</span>
                  استان لرستان، شهرستان کوهدشت
                </p>
              </div>

              <div className="flex items-start gap-x-5 ">
                <FaEnvelopeOpen className="text-primary text-3xl" />
                <p className="flex flex-col gap-2.5">
                  <span className="opacity-75">ایمیل</span>
                  masouddaloji.front@gmail.com
                </p>
              </div>

              <div className="flex items-start gap-x-5 ">
                <FaPhoneSquareAlt className="text-primary text-3xl" />
                <p className="flex flex-col gap-2.5">
                  <span className="opacity-75">تلفن</span>
                  09039730443
                </p>
              </div>
              <div className="flex items-center gap-x-4 mb-7 lg:mb-5">
                {myLinks.map((item) => (
                  <Link to={item.link} className="contact-link" key={item.id}>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
            {/* inputes */}
            <div className="col-12 lg:col-8 mt-7 lg:mt-0">
              <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className=" flex flex-wrap gap-y-7">
                  <div className="col-12 md:col-6">
                    <input
                      type="text"
                      className={`input ${
                        errors?.user_name && "invalid-input"
                      }`}
                      placeholder="نام"
                      {...register("user_name", {
                        required: "وارد کردن نام الزامی می باشد",
                        minLength: {
                          value: 5,
                          message: "حداقل تعداد کاراکتر نام پنج می باشد",
                        },
                        maxLength: {
                          value: 20,
                          message: "حداکثر تعداد کاراکتر نام بیست می باشد",
                        },
                      })}
                    />
                    {errors?.user_name && (
                      <span className="error">
                        {errors?.user_name?.message}
                      </span>
                    )}
                  </div>
                  <div className="col-12 md:col-6">
                    <input
                      type="text"
                      className={`input ${
                        errors?.user_email && "invalid-input"
                      }`}
                      placeholder="ایمیل"
                      {...register("user_email", {
                        required: "وارد کردن ایمیل الزامی می باشد",
                        minLength: {
                          value: 10,
                          message: "حداقل تعداد کاراکتر ایمیل ده می باشد",
                        },
                        maxLength: {
                          value: 30,
                          message: "حداکثر تعداد کاراکتر ایمیل سی می باشد",
                        },
                        pattern: {
                          value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                          message: "لطفا یک ایمیل معتبر وارد کنید",
                        },
                      })}
                    />
                    {errors?.user_email && (
                      <span className="error">
                        {errors?.user_email?.message}
                      </span>
                    )}
                  </div>
                  <div className="col-12 ">
                    <input
                      type="text"
                      className={`input ${errors?.subject && "invalid-input"}`}
                      placeholder="موضوع"
                      {...register("subject", {
                        required: "وارد کردن موضوع الزامی می باشد",
                        minLength: {
                          value: 4,
                          message: "حداقل تعداد کاراکتر موضوع چهار می باشد",
                        },
                        maxLength: {
                          value: 40,
                          message: "حداکثر تعداد کاراکتر موضوع چهل می باشد",
                        },
                      })}
                    />
                    {errors?.subject && (
                      <span className="error">{errors?.subject?.message}</span>
                    )}
                  </div>
                  <div className="col-12 ">
                    <textarea
                      className={`input  h-52 resize-none ${
                        errors?.message && "invalid-input"
                      }`}
                      placeholder="پیغام شما"
                      {...register("message", {
                        required: "وارد کردن پیغام الزامی می باشد",
                        minLength: {
                          value: 10,
                          message: "حداقل تعداد کاراکتر پیغام ده می باشد",
                        },
                        maxLength: {
                          value: 300,
                          message: "حداکثر تعداد کاراکتر پیغام سیصد می باشد",
                        },
                      })}
                    />
                    {errors?.message && (
                      <span className="error">{errors?.message?.message}</span>
                    )}
                  </div>
                  <button className="mainBtn group" type="submit">
                    <span className="mainBtn-effect"></span>
                    <span className="mainBtn-text">ارسال پیغام</span>
                    <span className="mainBtn-iconbox">
                      <BsFillSendFill className="main-icon" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* end contact content */}
      </div>
    </section>
  );
};

export default Contact;
