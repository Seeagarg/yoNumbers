import React, { useState } from "react";
import classes from "../css/LoginPage.module.css";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";
import { toast } from "react-toastify";
import { loginApi } from "../http/http";
import ModalInfo from "../components/ModalInfo";
import Loader from "../components/Loader";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [msisdn, setMsisdn] = useState("");
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState("");
  const [subscribeBtn, setSubscribeBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  const pressHandler = () => {
    setModal(false);
    setModalInfo("");
    setSubscribeBtn(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (msisdn.trim().length === 0) {
      // toast.error("Input Fields cannot be empty!");
      localStorage.setItem("token",'token')
      Cookies.set("token", "token", { expires: 1 });
      setModal(true);
      setModalInfo("Input Fields cannot be empty!");
    } else {
      try {
        setLoading(true);
        const response = await loginApi({ ani: msisdn });
        console.log(response);
        if (response?.data === 0) {
          // toast.error("You are not subscribed!");
          setModal(true);
          setModalInfo("You are not subscribed!");
          setSubscribeBtn(true);
        } else if (response?.data === 2) {
          // toast.error("Billing Pending");
          setModal(true);
          setModalInfo("Billing Pending!");
        } else if (response?.data === 1) {
          navigate("/otp", { state: { msisdn: msisdn, pack: null } });
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error(
          error?.response?.data?.message ||
            error?.data?.message ||
            error?.data ||
            error
        );
      }
    }
  };
  const navigateHandler = (path) => {
    navigate(path);
  };
  return (
    <Layout>
      {/* <TopLines /> */}
      <SubLayout>
      {/* <div className={classes.main}> */}
      <div className={classes.top}>

      </div>
        <div className={classes.title_container}>
          
          <img
            src="/assets/images/name_dark.png"
            alt="name"
            className={classes.name_image}
          />
        </div>

        <div className={classes.tabs_container}>
          <div className={classes.tabs_sub_container}>
            <div
              className={classes.tab_1}
              onClick={() => navigateHandler("/login")}
            >
              <p className={classes.tab}>Login</p>
            </div>
            <div
              className={classes.tab_2}
              onClick={() => navigateHandler("/subscribe")}
            >
              <p className={classes.tab}>Subscribe</p>
            </div>
          </div>
        </div>

        <div className={classes.form_container}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.input_group}>
              <span className={classes.country_code}>+263</span>
              <input
                className={classes.input}
                type="number"
                placeholder="ENTER YOUR PHONE NUMBER"
                value={msisdn}
                onChange={(e) => setMsisdn(e.target.value)}
              ></input>
            </div>

            <button type="submit" className={classes.login_btn}>
              Login
            </button>
          </form>
        </div>
        {loading && <Loader />}
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
        {modal && (
          <ModalInfo
            text={modalInfo}
            pressHandler={pressHandler}
            subscribeBtn={subscribeBtn}
          />
        )}
        {/* </div> */}
      </SubLayout>
    </Layout>
  );
};

export default LoginPage;
