import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import classes from "../css/SubscriptionPage.module.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";
import { toast } from "react-toastify";
import { priceApi, subscribeApi } from "../http/http";
import ModalInfo from "../components/ModalInfo";
import Loader from "../components/Loader";

const SubscriptionPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [msisdn, setMsisdn] = useState("");
  const [options, setOptions] = useState([]);

  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const [subscribeLoading, setSubscribeLoading] = useState(false);

  const pressHandler = () => {
    setModal(false);
    setModalInfo("");
  };

  useEffect(() => {
    getPrice();
  }, []);

  // const getPrice=()=>{

  // }

  const getPrice = async () => {
    try {
      setLoading(true);
      const response = await priceApi();
      console.log(response.data)
      setLoading(false);
      let optArr = [];
      response?.data.map((element) => {
        optArr.push({
          value: element?.service,
          label: element?.service + " " + element?.price,
        });
       
      });
      setOptions(optArr);
    } catch (error){
      toast.error(
        error?.response?.data?.message ||
          error?.data?.messgae ||
          error?.message ||
          error
      );
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (msisdn.trim().length === 0 || !selectedOption) {
      // toast.error("Input Fields cannot be empty!");
      setModal(true);
      setModalInfo("Input Fields cannot be empty!");
    } else {
      try {
        setSubscribeLoading(true);
        const response = await subscribeApi({
          ani: msisdn,
          pack: selectedOption?.value,
        });
        console.log(response);
        if (response?.data === 1) {
          // toast.error("Billing Pending");
          setModal(true);
          setModalInfo("Billing Pending!");
          return;
        } else if (response?.data === 2) {
          setTimeout(() => {
            navigate("/otp", {
              state: { msisdn: msisdn, pack: selectedOption },
            });
          }, 1000);
        } else if (response?.data === 0) {
          // toast.error("Billing Pending");
          setModal(true);
          setModalInfo("Billing Pending!");
          return;
        } else if (response?.data === 3) {
          setTimeout(() => {
            navigate("/otp", {
              state: { msisdn: msisdn, pack: selectedOption },
            });
          }, 1000);
        } else {
          setModal(true);
          setModalInfo("Billing Pending!");
          // toast.error("Billing Pending");
          return;
        }
        setSubscribeLoading(false);
      } catch (error) {
        setSubscribeLoading(false);
        console.log(error);
        toast.error(
          error?.response?.data?.message ||
            error?.data?.message ||
            error?.data ||
            error
        );
      }
    }
  };

  const handleInputChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const navigate = useNavigate();
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

            {loading ? (
              <Loader />
            ) : (
              <Select
                className={classes.selector}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: "#2B368A",
                    color: "white",
                    fontSize: "1.5rem",
                    fontFamily: "Inter,sans-serif",
                  }),
                  singleValue: (baseStyles) => ({
                    ...baseStyles,
                    color: "white",
                    fontSize: "1.3rem",
                  }),
                  placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: "white",
                    fontSize: "1.3rem",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isSelected ? "#019FE340" : "#fff",
                    color: state.isSelected ? "#172A6E" : "#172A6E",
                    cursor: "pointer",
                  }),
                }}
                value={selectedOption}
                onChange={handleInputChange}
                options={options}
                placeholder="Select Package"
                menuIsOpen={true}
              />
            )}

            <button type="submit" className={classes.subscribe_btn}>
              Subscribe
            </button>
          </form>
        </div>

        {subscribeLoading && <Loader />}

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
        {/* </div> */}
      </SubLayout>
      {modal && <ModalInfo text={modalInfo} pressHandler={pressHandler} />}
    </Layout>
  );
};

export default SubscriptionPage;
