import React, { FunctionComponent } from "react";
import "./SalesInfo.css";
import { FaUserTie, FaQuoteLeft, FaQuoteRight, FaPhone, FaMobileAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SalesRep } from "../../types";

interface SalesInfoProps {
  salesRep: SalesRep;
}

export const SalesInfo: FunctionComponent<any> = ({ salesRep, message }) => {
  return (
    <div className="salesrep__wrapper">
      <div className="salesrep__pic">
        <div className="salesrep__avatar">
          <FaUserTie className="salesrep__icon" />
        </div>
        <h4 className="salesrep__name">{`${salesRep.FirstName} ${salesRep.LastName}`}</h4>
        <p className="salesrep__company">
          <em>{`Sales @ ${salesRep.CompanyName}`}</em>
        </p>
      </div>
        <div className="salesrep__divider" />
      <div className="salesrep__info">
        <div className="salesrep__msg-wrapper">
          <FaQuoteLeft className=" salesrep__quote salesrep__quote--left" />
          <p
            className="salesrep__message"
            dangerouslySetInnerHTML={{ __html: message }}
          />
          <FaQuoteRight className="salesrep__quote salesrep__quote--right" />
        </div>
      </div>
      <div className="salesrep__divider" />
      <div className="salesrep__contact">
        <p className="salesrep__contact-data">
                <FiMail className="salesrep__contact-icon" />
            <a href={`mailto:${salesRep.EmailAddress}`}>{salesRep.EmailAddress}</a>
        </p>
          <p className="salesrep__contact-data">
              <FaPhone className="salesrep__contact-icon" />
              {salesRep.Phone}
          </p>
          <p className="salesrep__contact-data">
              <FaMobileAlt className="salesrep__contact-icon" />
              {salesRep.CellPhone}
          </p>
      </div>
    </div>
  );
};
