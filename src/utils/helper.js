import Cookies from "js-cookie";

export function setCookie(msisdn) {
  Cookies.set("msisdn", msisdn, {
    expires: 1,
  });
}

export function removeCookie(){
    Cookies.remove("msisdn");
}

export function getCookie(name){
    const value=Cookies.get(name.toString());
    return value;
}