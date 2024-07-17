import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./index.scss";
import "react-datepicker/dist/react-datepicker.css";

const ReservationArea = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const options = [
    { value: "1", label: "Event One" },
    { value: "2", label: "Event Two" },
    { value: "3", label: "Event Three" },
    { value: "4", label: "Event Four" },
  ];

  // Array of form inputs configuration
  const formInputs = [
    { type: "text", name: "name", placeholder: "Your Name" },
    { type: "email", name: "email", placeholder: "Your Email Address" },
    { type: "text", name: "phone", placeholder: "Phone Number" },
  ];

  return (
    <section className="reservation-area section-gap relative">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row justify-content-end align-items-center">
          <div className="col-lg-6 reservation-left">
            <h1 className="text-white">
              Reserve Your Seats
              <br />
              to Confirm if You Come
              <br />
              with Your Family
            </h1>
            <p className="text-white pt-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
          </div>
          <div className="col-lg-5 reservation-right">
            <form className="form-wrap text-center" action="#">
              {formInputs.map((input, index) => (
                <input
                  key={index}
                  type={input.type}
                  className="form-control"
                  name={input.name}
                  placeholder={input.placeholder}
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = input.placeholder)}
                />
              ))}
              <DatePicker
                className={`form-control date-picker ${
                  isCalendarOpen ? "calendar-open" : ""
                }`}
                placeholderText="Select Date & time"
                showTimeSelect
                onCalendarOpen={() => setIsCalendarOpen(true)}
                onCalendarClose={() => setIsCalendarOpen(false)}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <div className="form-select" id="service-select">
                <select
                  className="form-control"
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  style={{
                    borderColor: "rgb(71, 81, 95)",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                  }}
                >
                  <option
                    value=""
                    disabled
                    style={{
                      color: "#666",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Select Event
                  </option>
                  {options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      style={{
                        color: "red",
                        backgroundColor: "#fff",
                        fontSize: "12px"
                      }}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <button className="primary-btn text-uppercase mt-20">
                Make Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationArea;
