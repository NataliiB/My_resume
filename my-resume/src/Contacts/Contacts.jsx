import React from "react";
import "./Contacts.css";
import { FaTelegram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdLocalPostOffice } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <ul>
        <li>
          <a href="tel:+380988837808">
            <FaTelegram />
            <FaSkype />
            <IoLogoWhatsapp />
            +380988837808
          </a>
        </li>
        <li>
          <a href="tel:+4916091484710">
            <IoCall />
            +4916091484710
          </a>
        </li>
        <li>
          <a href="mailto:nataliibondarenko@ukr.net">
            <MdLocalPostOffice />
            nataliibondarenko@ukr.net
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nataliia-bond/">
            <FaLinkedin />
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}
