import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";
import classes from "../css/OtpPage.module.css";
import OTPInput from "react-otp-input";
import TopLogo from "../components/TopNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setCookie } from "../utils/helper";
import { loginApi, matchOtpApi } from "../http/http";
import ModalInfo from "../components/ModalInfo";
import Loader from "../components/Loader";

const OtpPage = () => {
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();
  const [msisdn, setMsisdn] = useState("");
  const [pack, setPack] = useState("");
  const [resend, setResend] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const pressHandler = () => {
    setModal(false);
    setModalInfo("");
  };

  const location = useLocation();

  useEffect(() => {
    const packSelected = location.state?.pack;
    const number = location.state?.msisdn;
    // if (!number) {
    //   navigate("/login");
    //   return;
    // }
    console.log(location.state);
    setMsisdn(number);
    setPack(packSelected);
  }, [location.state]);

  useEffect(() => {
    if (msisdn) {
      if (timer <= 0 || !msisdn) {
        navigate("/login");
      }
    }
  }, [msisdn, timer]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  const otpHandler = async () => {
    try {
      if (otp.length !== 4) {
        setModal(true);
        setModalInfo("Enter the valid otp number of 4 digits!");
        // toast.error("Enter the valid otp number of 4 digits!");
        return;
      } else {
        try {
          setLoading(true);
          const response = await matchOtpApi({ ani: msisdn, otp: otp });
          console.log(response, "response");
          if (response?.data === 0) {
            // toast.error("Wrong Otp");
            setLoading(false);

            setModal(true);
            setModalInfo("Wrong OTP");
            return;
          } else if (response?.data === 1) {
            setLoading(false);

            setTimeout(() => {
              setOTP("");
              setCookie(msisdn);
              navigate("/auth");
            }, 3000);
          } else if (response?.data === 2) {
            // toast.error("OTP Expired");
            setLoading(false);

            setModal(true);
            setModalInfo("OTP Expired");
            setTimeout(() => {
              setOTP("");
              navigate("/login");
            }, 3000);
            return;
          } else if (response?.data === 3) {
            // toast.error("Billing Failed!");
            setLoading(false);

            setModal(true);
            setModalInfo("Billing Failed!");
            // navigate("/subscribe");
          } else {
            // toast.error("Wrong Otp");
            setLoading(false);

            setModal(true);
            setModalInfo("Wrong OTP");
            return;
          }
        } catch (error) {
          setLoading(false);
          console.log(error, "error");
          toast.error(
            error?.response?.data?.message ||
              error?.data?.message ||
              error?.message ||
              error
          );
        }
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.message || error?.data?.message || error?.message
      );
    }
  };

  const resendHandler = async () => {
    try {
      const response = await loginApi({ ani: msisdn });
      if (response?.data === 0) {
        toast.error("You are not subscribed!");
        navigate("/login");
      } else if (response?.data === 2) {
        toast.error("Billing Pending");
        navigate("/login");
      } else if (response?.data === 1) {
        setResend(true);
        // navigate("/otp", { state: { msisdn: msisdn, pack: null } });
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message ||
          error?.data?.message ||
          error?.message ||
          error
      );
    }
  };

  return (
    <Layout>
      {/* <TopLines /> */}
      <SubLayout>
        {/* <TopLogo /> */}
        <div className={classes.main}>

       
        <div className={classes.otp_description}>
          <h2 className={classes.title}>OTP Verification</h2>
          <p className={classes.text}>
            We have sent the send {resend && "another"} one time pin to
            <span className={classes.bold}> +236{msisdn} </span>
            via SMS.
          </p>
        </div>

        <div className={classes.otp_input_container}>
          <OTPInput
            value={otp}
            shouldAutoFocus
            onChange={setOTP}
            numInputs={4}
            renderSeparator={<span className={classes.gap}></span>}
            renderInput={(props) => (
              <input {...props} type="number" className={classes.input_box} />
            )}
          />
        </div>

        <div className={classes.time_container}>
          <p className={classes.time_text}>Time remaining: {timer} seconds</p>
        </div>

        <div className={classes.btn_container}>
          <button
            type="button"
            className={classes.confirm_btn}
            onClick={otpHandler}
          >
            Confirm
          </button>
          <button
            type="button"
            className={classes.resend_btn}
        
          >
           LOST PIN?
          </button>
          <button
            type="button"
            className={classes.resend_btn}
          
          >
           HAVE'NT RECEIVED PIN YET?
          </button>
          <button
            type="button"
            className={classes.resend_btn}
          
          >
           PIN EXPIRED?
          </button>
          <button
            type="button"
            className={classes.resend_btn}
           
          >
           RETRY HERE?
          </button>
        </div>

        <div className={classes.nameImage_container}>
          <img
            src="/assets/images/name_dark.png"
            alt="name"
            className={classes.name_image}
          />
        </div>

        <div className={classes.footer_container}>
          <div className={classes.footer_sub_container}>
            <img
              src="/assets/images/econet_logo.png"
              alt="econet"
              className={classes.footer}
            />
            <p className={classes.footer_text}>
              By clicking subscribe, you have read, understood and agree to be
              bound by the MyKidzHub service’s Terms & Conditions and FAQ’s
            </p>
          </div>
        </div>

        {loading && <Loader />}
        </div>
      </SubLayout>
      {modal && <ModalInfo text={modalInfo} pressHandler={pressHandler} />}
    </Layout>
  );
};

export default OtpPage;
