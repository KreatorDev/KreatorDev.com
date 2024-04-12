"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right";
import MailIcon from "@/assets/icons/mail";
import { mail } from "@/constants/strings";
import { AlertDialog } from "@/shared/components/alerts/alert-dialog";
import { useAlert } from "@/shared/components/alerts/alert-hook";
import { AlertEnum } from "@/shared/components/alerts/types";
import CardTitle from "@/shared/components/titles/card-title";
import { useLoadingButton } from "@/shared/hooks/loading-button-hook";
import cardStyle from "@/shared/styles/card";
import inputStyle from "@/shared/styles/input";
import "@/shared/styles/input.css";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const getTextById = (id: string): string | undefined => {
  try {
    const element = document.getElementById(id) as HTMLInputElement;
    return element.value;
  } catch {}
};

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const alertDialog = useAlert({
    Alert: AlertDialog,
    iniAlert: { type: AlertEnum.ERROR, className: "" },
  });
  const loadingButton = useLoadingButton({
    props: {
      className:
        "justify-center items-center rounded-full bg-dark dark:bg-white text-white dark:text-dark",
      button: (
        <button
          type="submit"
          disabled={isSent}
          onClick={() => {
            try {
              ["name", "email", "message"].forEach((id) => {
                if (!getTextById(id))
                  throw {
                    title:
                      id.charAt(0).toUpperCase() + id.slice(1) + " is required",
                    description: "Please enter your " + id + " to continue",
                    type: AlertEnum.WARNING,
                  };
              });
            } catch (error) {
              alertDialog.setAlertWithTimeout(error as any);
            }
          }}
          className={
            "rounded-full flex font-normal text-sm text-center gap-3 px-6 py-3 hover:bg-neutral-500/20" +
            (isSent
              ? " bg-green-500 text-white font-medium hover:bg-green-500"
              : "")
          }
        >
          {isSent ? "Sent" : "Send"}
          {isSent ? (
            <MailIcon className="w-5 h-5" strokeWidth={2} />
          ) : (
            <ArrowUpRightIcon className="w-5 h-5" />
          )}
        </button>
      ),
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      loadingButton.setLoading(true);
      if (!executeRecaptcha)
        throw {
          title: "Execute recaptcha not yet available",
          description: "Please try again",
          type: AlertEnum.WARNING,
        };
      const name = getTextById("name");
      const email = getTextById("email");
      const message = getTextById("message");
      const recaptcha_token = await executeRecaptcha("contact");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, recaptcha_token }),
      });
      const data = await res.json();
      if (!data.id)
        throw {
          title: "Failed to send message",
          description: data.error ?? "Something went wrong",
          type: AlertEnum.ERROR,
        };
      setIsSent(true);
      throw {
        title: "Sent",
        description: "Your message has been sent successfully",
        type: AlertEnum.SUCCESS,
        seconds: 5,
      };
    } catch (error) {
      loadingButton.setLoading(false);
      alertDialog.setAlertWithTimeout(error as any);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} className={cardStyle + " gap-7"}>
          <CardTitle title="CONTACT" icon={<MailIcon />} />
          <p className="text-md pb-1">
            <a className="opacity-70">
              Contact me by filling out the form below, or by sending to{" "}
            </a>
            <a
              className="hover:underline font-medium opacity-70 dark:!opacity-80"
              href={"mailto:" + mail}
            >
              {mail}
            </a>
          </p>
          <TextInput
            required
            id="name"
            type="text"
            label="Name"
            placeholder="Enter your name"
          />
          <TextInput
            required
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email address"
          />
          <TextInput
            required
            isTextArea
            id="message"
            minLength={5}
            maxLength={10000}
            rows={3}
            label="Message"
            placeholder="Write your message here..."
          />
          <div className="w-full flex justify-end">
            {loadingButton.loadingButton}
          </div>
          {alertDialog.alert}
        </form>
        <div className="py-3" />

      </div>
    </>
  );
}

function TextInput(props: any) {
  const inputProps = Object.assign({}, props);
  delete inputProps.isTextArea;
  delete inputProps.label;
  return (
    <div className="input-container relative w-full">
      {props.isTextArea ? (
        <textarea {...inputProps} className={inputStyle} />
      ) : (
        <input {...inputProps} className={inputStyle} />
      )}
      <label
        className={
          "input-label absolute pointer-events-none text-xs top-[-10px] left-3 border-0 bg-white dark:bg-dark w-fit px-0.5 rounded-md"
        }
      >
        {props.label}
      </label>
    </div>
  );
}
