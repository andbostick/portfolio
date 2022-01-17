import { useState } from "react";
import axios from "axios";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mgedoyvj",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main>
      <h1>Contact Me</h1>

      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      <style jsx>{`
        main {
          max-width: 640px;
          font-size: 16px;
          line-height: 1.65;
          margin-bottom: 50px;
        }
        header {
          height: 152px;
          margin-top: 3em;
        }

        h1 {
          color: white;
          font-size: 1.5em;
          font-weight: 500;
        }
        h2 {
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }
        form {
          display: grid;
          grid-row-gap: 1em;
        }
        label {
          color: #666666;
          font-size: 12px;
          font-weight: 500;
          text-align: left;
          text-transform: uppercase;
        }
        input,
        button,
        textarea,
        .error {
          margin: 0;
          border: 1px solid #d1d1d1;
          border-radius: 5px;
          padding: 0.5em;
          vertical-align: middle;
          white-space: normal;
          background: none;
          line-height: 1;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.2s ease;
        }
        button,
        .error {
          padding: 0.65em 1em;
          background: #0076ff;
          color: #fff;
          border: none;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        input{
          color:white;
        }
        textarea {
          height: 4em;
          max-width: 622px;
          color: white;
        }
        input:focus,
        textarea:focus,
        button:focus {
          outline: 0;
          border-color: #0076ff;
        }
        button:hover {
          background: rgba(0, 118, 255, 0.8);
        }
        button:focus {
          box-shadow: 0 0 0 2px rgba(0, 118, 255, 0.5);
        }
        button:disabled {
          pointer-events: none;
          background: #999;
        }
        .error {
          background: #ee0000;
          color: #fff;
          margin-top: 16px;
          text-align: center;
        }
        @media screen and (max-width: 580px) {
          main {
            font-size: 14px;
          }
          header {
            height: 9em;
          }
          h2 {
            padding: 0 16px;
          }
        }
        @media screen and (max-width: 474px) {
          main {
            margin-right: 12px;
          }
        }
      `}</style>
    </main>
  );
};
