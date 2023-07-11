import { useCallback, useRef } from "react";
//packages
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
//custome hooks
import useTitle from "../hooks/useTitle";
//icons
import {
  FaEnvelopeOpen,
  FaMap,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
//constants
import { myLinks } from "../constants/constants";
//persian text
import PersianTexts from "../PersianTexts";

const Contact = () => {
  useTitle("ارتباط با من")
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

  const sendEmail =useCallback( (data) => {
    emailjs
      .sendForm(
        "service_kdbr1b8",
        "template_7h9516h",
        form.current,
        "5gu5dkmjCZLb6lg4w"
      )
      .then(
        (result) => {
          toast.success(PersianTexts.contact.sendMessageSuccess);
          reset();
        },
        (error) => {
          toast.error(PersianTexts.contact.senMessageError);
        }
      );
  },[]);

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
             ارتباط با
            <p className="text-primary">من</p>
          </h2>
        </div>
        {/* end contact header */}
        {/* start contact content */}
        <section className="pb-20">
          <div className="w-full flex flex-wrap">
            <div className="col-12 lg:col-4 flex flex-col items-start gap-y-7 lg:gap-y-5 text-justify text-[15px] text-txt-gray dark:text-white">
              <p className="leading-7">{PersianTexts.contact.solgan}</p>

              <div className="flex items-start gap-x-5 ">
                <FaMap className="text-primary text-3xl" />
                <p className="flex flex-col gap-2.5">
                  <span className="opacity-75">آدرس</span>
                  {PersianTexts.contact.address}
                </p>
              </div>

              <div className="flex items-start gap-x-5 ">
                <FaEnvelopeOpen className="text-primary text-3xl" />
                <p className="flex flex-col gap-2.5">
                  <span className="opacity-75">ایمیل</span>
                  {PersianTexts.contact.email}
                </p>
              </div>

              <div className="flex items-start gap-x-5 ">
                <FaPhoneSquareAlt className="text-primary text-3xl" />
                <p className="flex flex-col gap-2.5">
                  <span className="opacity-75">تلفن</span>
                  {PersianTexts.contact.phone}
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
                        required: PersianTexts.contact.error.userName.required,
                        minLength: {
                          value: 5,
                          message: PersianTexts.contact.error.userName.min,
                        },
                        maxLength: {
                          value: 20,
                          message: PersianTexts.contact.error.userName.max,
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
                        required: PersianTexts.contact.error.email.required,
                        minLength: {
                          value: 10,
                          message: PersianTexts.contact.error.email.min,
                        },
                        maxLength: {
                          value: 30,
                          message: PersianTexts.contact.error.email.max,
                        },
                        pattern: {
                          value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                          message: PersianTexts.contact.error.email.match,
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
                        required: PersianTexts.contact.error.subject.required,
                        minLength: {
                          value: 4,
                          message: PersianTexts.contact.error.subject.min,
                        },
                        maxLength: {
                          value: 40,
                          message: PersianTexts.contact.error.subject.max,
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
                        required: PersianTexts.contact.error.message.required,
                        minLength: {
                          value: 10,
                          message: PersianTexts.contact.error.message.min,
                        },
                        maxLength: {
                          value: 300,
                          message: PersianTexts.contact.error.message.max,
                        },
                      })}
                    />
                    {errors?.message && (
                      <span className="error">{errors?.message?.message}</span>
                    )}
                  </div>
                  <div className="col-12">

                  <button className="mainBtn group w-full" type="submit">
                    <span className="mainBtn-effect"></span>
                    <span className="mainBtn-text">
                      {PersianTexts.contact.btn}
                    </span>
                    <span className="mainBtn-iconbox">
                      <BsFillSendFill className="main-icon" />
                    </span>
                  </button>
                  </div>
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
