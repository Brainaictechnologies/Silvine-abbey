"use client";
import { useEffect } from "react";

const TawkToScript = () => {
  useEffect(() => {
    const tawkToScript = document.createElement("script");
    tawkToScript.type = "text/javascript";
    tawkToScript.text = `
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        (function(){
        s1.async=true;
        s1.src='https://embed.tawk.to/66223d341ec1082f04e48e1b/1hrqru6a3';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        `;
    document.body.appendChild(tawkToScript);

    return () => {
      document.body.removeChild(tawkToScript);
    };
  }, []);

  return null;
};

export default TawkToScript;
