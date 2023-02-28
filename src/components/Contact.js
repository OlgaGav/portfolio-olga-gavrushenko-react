import React, { useEffect } from "react";

const Contact = () => {
useEffect(() => {
    const script = document.createElement("script");
    script.id = "ff-script";
    script.src = "https://formfacade.com/include/113207398456277540214/form/1FAIpQLSe7fJAe2B4xrAY9J7wjPgDPwzUgV9c6joEIySRAm8Y4E2DeIQ/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="ff-compose"></div>;
};

export default Contact;

