import "./wcd.css";
import React from 'react';
import { Button } from "@mui/material";
import f1 from "./components/f1.svg";
import f3 from "./components/f3.svg";


export default function Wcd() {
  const svgCode1 = `<svg width="217" height="175" viewBox="0 0 217 175" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 0.5H199C208.665 0.5 216.5 8.33502 216.5 18V174.5H18C8.33501 174.5 0.5 166.665 0.5 157V18C0.5 8.33501 8.33502 0.5 18 0.5Z" fill="url(#paint0_linear_510_970)" stroke="url(#paint1_linear_510_970)"/>
    <defs>
      <linearGradient id="paint0_linear_510_970" x1="149.375" y1="-96.5123" x2="40.8252" y2="144.523" gradientUnits="userSpaceOnUse">
        <stop stop-color="#98BA13" stop-opacity="0.58"/>
        <stop offset="1" stop-color="#2C2C34" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_510_970" x1="131.933" y1="-11.4924" x2="-57.7637" y2="70.3202" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E2FF6F"/>
        <stop offset="1" stop-color="#E2FF6F" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>`;
  const svgCode2 = `<svg width="211" height="172" viewBox="0 0 211 172" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.712891 153.361C0.712891 163.026 8.54791 170.861 18.2129 170.861H192.213C201.878 170.861 209.713 163.026 209.713 153.361V1.06152H18.2129C8.54791 1.06152 0.712891 8.89653 0.712891 18.5615V153.361Z" fill="url(#paint0_linear_510_971)" stroke="url(#paint1_linear_510_971)"/>
  <defs>
    <linearGradient id="paint0_linear_510_971" x1="144.769" y1="265.557" x2="38.2288" y2="30.9851" gradientUnits="userSpaceOnUse">
      <stop stop-color="#98BA13" stop-opacity="0.58"/>
      <stop offset="1" stop-color="#2C2C34" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint1_linear_510_971" x1="127.89" y1="182.578" x2="-56.1738" y2="103.866" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E2FF6F"/>
      <stop offset="1" stop-color="#E2FF6F" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>`;
const svgCode3='<svg width="211" height="172" viewBox="0 0 211 172" fill="none" xmlns="http://www.w3.org/2000/svg">' +
'<path d="M209.697 153.361C209.697 163.026 201.862 170.861 192.197 170.861H18.1973C8.53227 170.861 0.697266 163.026 0.697266 153.361V1.06152H192.197C201.862 1.06152 209.697 8.89653 209.697 18.5615V153.361Z" fill="url(#paint0_linear_510_9901)" stroke="url(#paint1_linear_510_9901)"/>' +
'<defs>' +
'<linearGradient id="paint0_linear_510_9901" x1="65.6411" y1="265.557" x2="172.181" y2="30.9851" gradientUnits="userSpaceOnUse">' +
'<stop stop-color="#98BA13" stop-opacity="0.58"/>' +
'<stop offset="1" stop-color="#2C2C34" stop-opacity="0"/>' +
'</linearGradient>' +
'<linearGradient id="paint1_linear_510_9901" x1="-6.48833" y1="171.361" x2="266.425" y2="131.966" gradientUnits="userSpaceOnUse">' +
'<stop stop-color="#E2FF6F"/>' +
'<stop offset="1" stop-color="#E2FF6F" stop-opacity="0"/>' +
'</linearGradient>' +
'</defs>' +
'</svg>';
  return (
    <div className="wcd">
      <div className="contentw">
        <div className="svgi" style={{ margin: 10, position: "absolute" }}>
          <svg
            width="401"
            height="394"
            viewBox="0 0 401 394"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.44986 0.901367H44.6882C47.7693 0.901367 50.2621 3.36986 50.2621 6.40889V44.2116C50.2621 47.2506 47.7693 49.7191 44.6882 49.7191H6.44986C3.36878 49.7191 0.875977 47.2506 0.875977 44.2116V6.40889C0.875977 3.36986 3.36878 0.901367 6.44986 0.901367Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M76.4948 0.901367H113.449V0.939239H113.699C117.356 0.939239 120.307 3.86029 120.307 7.46949V43.1889C120.307 46.7981 117.356 49.7191 113.699 49.7191H76.4948C73.4117 49.7191 70.9209 47.2526 70.9209 44.2116V6.40889C70.9209 3.36786 73.4117 0.901367 76.4948 0.901367Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M146.477 0.901367H184.716C187.797 0.901367 190.29 3.36986 190.29 6.40889V44.2116C190.29 47.2506 187.797 49.7191 184.716 49.7191H146.477C143.396 49.7191 140.904 47.2506 140.904 44.2116V6.40889C140.904 3.36986 143.396 0.901367 146.477 0.901367Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M216.51 0.901367H254.748C257.829 0.901367 260.322 3.36986 260.322 6.40889V44.2116C260.322 47.2506 257.829 49.7191 254.748 49.7191H216.51C213.429 49.7191 210.936 47.2506 210.936 44.2116V6.40889C210.936 3.36986 213.429 0.901367 216.51 0.901367Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M286.737 69.665H324.975C328.056 69.665 330.549 72.1335 330.549 75.1726V112.975C330.549 116.014 328.056 118.483 324.975 118.483H286.737C283.656 118.483 281.163 116.014 281.163 112.975V75.1726C281.163 72.1335 283.656 69.665 286.737 69.665Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M216.51 69.665H254.748C257.829 69.665 260.322 72.1335 260.322 75.1726V112.975C260.322 116.014 257.829 118.483 254.748 118.483H216.51C213.429 118.483 210.936 116.014 210.936 112.975V75.1726C210.936 72.1335 213.429 69.665 216.51 69.665Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M146.477 69.665H184.716C187.797 69.665 190.29 72.1335 190.29 75.1726V112.975C190.29 116.014 187.797 118.483 184.716 118.483H146.477C143.396 118.483 140.904 116.014 140.904 112.975V75.1726C140.904 72.1335 143.396 69.665 146.477 69.665Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M114.733 69.6834H114.983V69.6509C117.95 69.78 120.307 72.1947 120.307 75.153V112.956C120.307 115.997 117.816 118.463 114.733 118.463H77.5293C73.8715 118.463 70.9209 115.542 70.9209 111.933V76.2136C70.9209 72.6044 73.8715 69.6834 77.5293 69.6834H114.733Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M6.44986 69.665H44.6882C47.7693 69.665 50.2621 72.1335 50.2621 75.1726V112.975C50.2621 116.014 47.7693 118.483 44.6882 118.483H6.44986C3.36878 118.483 0.875977 116.014 0.875977 112.975V75.1726C0.875977 72.1335 3.36878 69.665 6.44986 69.665Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M7.48436 138.41H43.6537C47.3061 138.41 50.2621 141.337 50.2621 144.94V180.698C50.2621 184.302 47.3061 187.228 43.6537 187.228H7.48436C3.83194 187.228 0.875977 184.302 0.875977 180.698V144.94C0.875977 141.337 3.83194 138.41 7.48436 138.41Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M114.733 138.423H114.983V138.39C117.95 138.519 120.307 140.934 120.307 143.892V181.695C120.307 184.736 117.816 187.203 114.733 187.203H77.5293C73.8715 187.203 70.9209 184.282 70.9209 180.672V144.953C70.9209 141.344 73.8715 138.423 77.5293 138.423H114.733Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M146.477 138.41H184.716C187.797 138.41 190.29 140.879 190.29 143.918V181.72C190.29 184.759 187.797 187.228 184.716 187.228H146.477C143.396 187.228 140.904 184.759 140.904 181.72V143.918C140.904 140.879 143.396 138.41 146.477 138.41Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M216.51 138.41H254.748C257.829 138.41 260.322 140.879 260.322 143.918V181.72C260.322 184.759 257.829 187.228 254.748 187.228H216.51C213.429 187.228 210.936 184.759 210.936 181.72V143.918C210.936 140.879 213.429 138.41 216.51 138.41Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M286.737 138.41H324.975C328.056 138.41 330.549 140.879 330.549 143.918V181.72C330.549 184.759 328.056 187.228 324.975 187.228H286.737C283.656 187.228 281.163 184.759 281.163 181.72V143.918C281.163 140.879 283.656 138.41 286.737 138.41Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M356.757 138.41H394.995C398.076 138.41 400.569 140.879 400.569 143.918V181.72C400.569 184.759 398.076 187.228 394.995 187.228H356.757C353.676 187.228 351.183 184.759 351.183 181.72V143.918C351.183 140.879 353.676 138.41 356.757 138.41Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M356.757 207.148H394.995C398.076 207.148 400.569 209.617 400.569 212.656V250.459C400.569 253.498 398.076 255.966 394.995 255.966H356.757C353.676 255.966 351.183 253.498 351.183 250.459V212.656C351.183 209.617 353.676 207.148 356.757 207.148Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M286.737 207.148H324.975C328.056 207.148 330.549 209.617 330.549 212.656V250.459C330.549 253.498 328.056 255.966 324.975 255.966H286.737C283.656 255.966 281.163 253.498 281.163 250.459V212.656C281.163 209.617 283.656 207.148 286.737 207.148Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M216.51 207.148H254.748C257.829 207.148 260.322 209.617 260.322 212.656V250.459C260.322 253.498 257.829 255.966 254.748 255.966H216.51C213.429 255.966 210.936 253.498 210.936 250.459V212.656C210.936 209.617 213.429 207.148 216.51 207.148Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M146.477 207.148H184.716C187.797 207.148 190.29 209.617 190.29 212.656V250.459C190.29 253.498 187.797 255.966 184.716 255.966H146.477C143.396 255.966 140.904 253.498 140.904 250.459V212.656C140.904 209.617 143.396 207.148 146.477 207.148Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M114.733 207.167H114.983V207.134C117.95 207.263 120.307 209.678 120.307 212.636V250.439C120.307 253.48 117.816 255.947 114.733 255.947H77.5293C73.8715 255.947 70.9209 253.026 70.9209 249.416V213.697C70.9209 210.088 73.8715 207.167 77.5293 207.167H114.733Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M6.44986 207.148H44.6882C47.7693 207.148 50.2621 209.617 50.2621 212.656V250.459C50.2621 253.498 47.7693 255.966 44.6882 255.966H6.44986C3.36878 255.966 0.875977 253.498 0.875977 250.459V212.656C0.875977 209.617 3.36878 207.148 6.44986 207.148Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M6.44986 275.925H44.6882C47.7693 275.925 50.2621 278.394 50.2621 281.433V319.236C50.2621 322.275 47.7693 324.743 44.6882 324.743H6.44986C3.36878 324.743 0.875977 322.275 0.875977 319.236V281.433C0.875977 278.394 3.36878 275.925 6.44986 275.925Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M113.69 275.737H113.94V275.705C116.906 275.834 119.264 278.248 119.264 281.207V319.009C119.264 322.05 116.773 324.517 113.69 324.517H76.4858C72.828 324.517 69.8774 321.596 69.8774 317.987V282.267C69.8774 278.658 72.828 275.737 76.4858 275.737H113.69Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M146.477 275.925H184.716C187.797 275.925 190.29 278.394 190.29 281.433V319.236C190.29 322.275 187.797 324.743 184.716 324.743H146.477C143.396 324.743 140.904 322.275 140.904 319.236V281.433C140.904 278.394 143.396 275.925 146.477 275.925Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M216.51 275.925H254.748C257.829 275.925 260.322 278.394 260.322 281.433V319.236C260.322 322.275 257.829 324.743 254.748 324.743H216.51C213.429 324.743 210.936 322.275 210.936 319.236V281.433C210.936 278.394 213.429 275.925 216.51 275.925Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M286.737 275.925H324.975C328.056 275.925 330.549 278.394 330.549 281.433V319.236C330.549 322.275 328.056 324.743 324.975 324.743H286.737C283.656 324.743 281.163 322.275 281.163 319.236V281.433C281.163 278.394 283.656 275.925 286.737 275.925Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M216.51 344.631H254.748C257.829 344.631 260.322 347.099 260.322 350.138V387.941C260.322 390.98 257.829 393.449 254.748 393.449H216.51C213.429 393.449 210.936 390.98 210.936 387.941V350.138C210.936 347.099 213.429 344.631 216.51 344.631Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M146.477 344.631H184.716C187.797 344.631 190.29 347.099 190.29 350.138V387.941C190.29 390.98 187.797 393.449 184.716 393.449H146.477C143.396 393.449 140.904 390.98 140.904 387.941V350.138C140.904 347.099 143.396 344.631 146.477 344.631Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M114.733 344.636H114.983V344.603C117.95 344.732 120.307 347.147 120.307 350.105V387.908C120.307 390.949 117.816 393.415 114.733 393.415H77.5293C73.8715 393.415 70.9209 390.494 70.9209 386.885V351.166C70.9209 347.557 73.8715 344.636 77.5293 344.636H114.733Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
            <path
              d="M6.44986 344.631H44.6882C47.7693 344.631 50.2621 347.099 50.2621 350.138V387.941C50.2621 390.98 47.7693 393.449 44.6882 393.449H6.44986C3.36878 393.449 0.875977 390.98 0.875977 387.941V350.138C0.875977 347.099 3.36878 344.631 6.44986 344.631Z"
              fill="#333720"
              fill-opacity="0.13"
              stroke="#8FAA1F"
              stroke-width="0.5"
            />
          </svg>
        </div>
        <h2 className="whead">Why Choose Density ?</h2>
        <p className="wp">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </p>
        <div className="btn">
          <Button
            sx={{
              color: "#000000",
              display: "flex",
              fontFamily: "DM Sans",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: 18,
              mt: 4.5,
              ml: 11,
              padding: "24px 36px",
              width: 230,
              "&:hover": {
                background: "#E2FF6F"
              },
              height: 66,
              background: "#E2FF6F"
            }}
            href="https://app.density.exchange/"
          >
            Trade Now
          </Button>
        </div>
      </div>
      <div className="static">
        <div className="col1">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                svgCode1
              )}")`,
              marginBotton:"10px",
              backgroundSize: "cover",
              backgroundPosition: "right",
              width: "217px",
              height: "175px"
            }}
          >
            <div style={{ marginLeft: 52, marginTop: 32 }}>
              <svg
                width="116"
                height="104"
                viewBox="0 0 116 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M75.0077 28.9959L70.3091 26.7443L77.001 5.86328L81.6978 8.11484L75.0077 28.9959Z"
                  fill="url(#paint0_linear_510_973)"
                />
                <path
                  d="M54.1852 47.6827L49.4883 45.4311L58.699 32.2744L63.3976 34.526L54.1852 47.6827Z"
                  fill="url(#paint1_linear_510_973)"
                />
                <path
                  d="M63.3959 34.5247L58.6973 32.2732L70.3071 26.7451L75.004 28.9967L63.3959 34.5247Z"
                  fill="#BACC11"
                />
                <path
                  d="M36.3998 56.1476L31.7012 53.8961L49.4883 45.4277L54.187 47.6793L36.3998 56.1476Z"
                  fill="#BACC11"
                />
                <path
                  d="M36.4037 57.0445L31.7051 54.7929V53.8965L36.4037 56.148V57.0445Z"
                  fill="#32D875"
                />
                <path
                  d="M81.7003 8.11523L82.369 8.43048L75.7495 29.5446L63.7899 35.234L54.5847 48.3892L36.4043 57.0443V56.1479L54.1897 47.6795L63.4021 34.5213L75.0102 28.9933L81.7003 8.11523Z"
                  fill="#00A44C"
                />
                <path
                  d="M83.708 9.80654L74.7583 5.51857L81.9884 0.299805L83.708 9.80654Z"
                  fill="url(#paint2_linear_510_973)"
                />
                <path
                  d="M81.9849 0.298813L82.6463 0L84.2989 9.4126L83.7027 9.80704L81.9849 0.298813Z"
                  fill="#158C45"
                />
                <path
                  d="M54.1868 47.6797L54.5836 48.3894L36.4032 57.043L36.3018 56.0599L54.1868 47.6797Z"
                  fill="#158C45"
                />
                <path
                  d="M7.146 86.2389C8.622 85.0509 9.72 83.8989 9.72 82.0089C9.72 79.3449 7.704 77.9049 5.076 77.9049C2.628 77.9049 0.558 79.4889 0.504 82.3509H2.934C2.988 81.0909 3.852 80.2449 5.058 80.2449C6.3 80.2449 7.11 80.9469 7.074 82.2249C7.056 83.1609 6.498 83.7729 5.526 84.6369L0.702 88.7589V91.0449H9.612V88.6869H4.194L7.146 86.2389ZM16.0595 82.1169C14.9435 82.1169 14.2415 82.3869 13.7735 82.7829L14.2955 80.2629H19.8575V78.0849H12.3695L11.0195 85.5549H13.3955C13.6295 84.9069 14.4035 84.1509 15.5735 84.1509C16.9595 84.1509 17.8775 85.1589 17.8775 86.6169C17.8775 88.0929 16.9595 89.0649 15.5555 89.0649C14.2775 89.0649 13.3775 88.2909 13.3055 87.0309H10.9115C10.9835 89.8569 13.1975 91.2249 15.6455 91.2249C18.3995 91.2249 20.5055 89.4969 20.5055 86.5809C20.5055 83.8809 18.6695 82.1169 16.0595 82.1169ZM21.4002 91.0449H24.3162L26.3142 87.7329L28.3122 91.0449H31.2282L28.0782 86.1669L31.2822 81.6849H28.3122L26.3142 84.7449L24.2982 81.6849H21.3462L24.5502 86.2029L21.4002 91.0449ZM38.6726 88.6869V78.0849H36.0986V91.0449H44.5766V88.6869H38.6726ZM54.8691 86.2209C54.8691 83.3589 53.0151 81.5049 50.2251 81.5049C47.4351 81.5049 45.5631 83.4489 45.5631 86.3649C45.5631 89.2989 47.4351 91.2429 50.2431 91.2429C52.6011 91.2429 54.3831 89.9289 54.7971 87.9849H52.2591C51.9711 88.7949 51.2331 89.2089 50.3151 89.2089C49.1091 89.2089 48.1371 88.4349 48.1011 87.0489H54.8691V86.2209ZM50.2251 83.4669C51.3231 83.4669 52.2411 84.0969 52.3491 85.3929H48.1191C48.2271 84.0969 49.1451 83.4669 50.2251 83.4669ZM57.7907 81.6849H55.1807L58.7807 91.0449H61.6427L65.3507 81.6849H62.6507L60.2567 88.4889L57.7907 81.6849ZM75.0136 86.2209C75.0136 83.3589 73.1596 81.5049 70.3696 81.5049C67.5796 81.5049 65.7076 83.4489 65.7076 86.3649C65.7076 89.2989 67.5796 91.2429 70.3876 91.2429C72.7456 91.2429 74.5276 89.9289 74.9416 87.9849H72.4036C72.1156 88.7949 71.3776 89.2089 70.4596 89.2089C69.2536 89.2089 68.2816 88.4349 68.2456 87.0489H75.0136V86.2209ZM70.3696 83.4669C71.4676 83.4669 72.3856 84.0969 72.4936 85.3929H68.2636C68.3716 84.0969 69.2896 83.4669 70.3696 83.4669ZM81.4857 81.6849C80.4417 81.6849 79.7757 82.1889 79.4697 82.7649L79.1997 81.6849H76.8417V91.0449H79.3797V86.2389C79.3797 84.8169 79.8477 83.9349 81.3417 83.9349H82.7637V81.6849H81.4857ZM92.6536 89.2089C92.3476 89.2089 92.1136 89.1369 92.1136 88.6689V85.1769C92.1136 82.4229 90.0076 81.5049 87.9736 81.5049C85.5256 81.5049 83.7976 82.7829 83.7976 84.8889H86.0836C86.1196 84.0609 86.8216 83.5029 87.8656 83.5029C88.9096 83.5029 89.5756 84.0789 89.5756 85.1229V85.5369H87.0736C84.6796 85.5369 83.5636 86.6709 83.5636 88.3449C83.5636 90.1449 84.8956 91.2249 86.9656 91.2249C88.3516 91.2249 89.4316 90.7389 89.9536 89.9469C90.1516 90.7569 90.8356 91.0449 91.6636 91.0449H93.0316V89.2089H92.6536ZM89.5756 87.5169C89.5756 88.6329 88.8556 89.2449 87.6136 89.2449C86.7856 89.2449 86.1556 88.9569 86.1556 88.1829C86.1556 87.6789 86.4436 87.1749 87.5236 87.1749H89.5756V87.5169ZM101.244 81.6849L101.046 82.7829C100.506 82.0089 99.5875 81.5049 98.2735 81.5049C95.7535 81.5049 94.0075 83.2869 94.0075 86.1669C94.0075 89.0109 95.7355 90.8289 98.2375 90.8289C99.5335 90.8289 100.542 90.3429 101.046 89.5689V90.6849C101.046 91.9269 100.2 92.7729 98.7595 92.7729C97.7335 92.7729 96.9235 92.3589 96.6715 91.4409H94.2415C94.4935 93.4749 96.2755 94.8249 98.7415 94.8249C101.622 94.8249 103.512 93.1149 103.512 90.2889V81.6849H101.244ZM98.8135 88.6329C97.4815 88.6329 96.5995 87.6249 96.5995 86.1849C96.5995 84.7629 97.4815 83.7369 98.8135 83.7369C100.164 83.7369 101.046 84.7629 101.046 86.2029C101.046 87.6249 100.164 88.6329 98.8135 88.6329ZM114.635 86.2209C114.635 83.3589 112.781 81.5049 109.991 81.5049C107.201 81.5049 105.329 83.4489 105.329 86.3649C105.329 89.2989 107.201 91.2429 110.009 91.2429C112.367 91.2429 114.149 89.9289 114.563 87.9849H112.025C111.737 88.7949 110.999 89.2089 110.081 89.2089C108.875 89.2089 107.903 88.4349 107.867 87.0489H114.635V86.2209ZM109.991 83.4669C111.089 83.4669 112.007 84.0969 112.115 85.3929H107.885C107.993 84.0969 108.911 83.4669 109.991 83.4669Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_510_973"
                    x1="79.9137"
                    y1="6.35583"
                    x2="66.0697"
                    y2="19.4084"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.4375" stop-color="#D4F938" />
                    <stop offset="1" stop-color="#32D875" stop-opacity="0.96" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_510_973"
                    x1="61.2186"
                    y1="32.6025"
                    x2="53.2114"
                    y2="46.4452"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.4375" stop-color="#D4F938" />
                    <stop offset="1" stop-color="#32D875" stop-opacity="0.96" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_510_973"
                    x1="82.306"
                    y1="0.502224"
                    x2="77.471"
                    y2="9.21894"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.4375" stop-color="#D4F938" />
                    <stop offset="1" stop-color="#32D875" stop-opacity="0.96" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                svgCode2
              )}")`,
              marginTop:"10px",
              backgroundSize: "cover",
              backgroundPosition: "right",
              width: "217px",
              height: "175px"
            }}
          >
            <div style={{ marginLeft: 52, marginTop: 32 }}>
              <svg
                width="127"
                height="92"
                viewBox="0 0 127 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_510_18839)">
                  <path
                    d="M55.8588 0.755859C53.5054 2.86927 50.8235 5.66367 48.2589 9.24864C44.0914 15.0801 41.8787 20.7237 40.659 24.8174C40.4713 25.4201 38.2664 32.9815 43.3096 39.1495C47.3363 44.073 53.0831 44.5661 54.0918 44.6365C60.7769 45.6384 67.2822 42.5623 70.355 37.0283C74.0924 30.3045 70.8554 23.3537 70.5348 22.6962C69.0649 19.1347 66.9303 14.8374 63.8184 10.3132C61.1131 6.37597 58.3296 3.22151 55.8588 0.755859Z"
                    fill="url(#paint0_linear_510_18839)"
                  />
                  <path
                    d="M79.5814 4.41162C78.4789 5.40571 77.2123 6.72072 76.0082 8.40362C74.0535 11.1432 73.0057 13.7967 72.435 15.7223C72.349 16.0041 71.3091 19.5577 73.6782 22.4617C75.5703 24.7786 78.2678 25.0056 78.7448 25.0369C81.888 25.5066 84.9452 24.0585 86.3916 21.4598C88.1509 18.2975 86.6262 15.0335 86.4776 14.7204C85.7818 13.0453 84.781 11.0258 83.3188 8.89675C82.0522 7.04947 80.9467 5.80153 79.7895 4.64306L79.5814 4.41162Z"
                    fill="url(#paint1_linear_510_18839)"
                  />
                  <path
                    d="M85.0757 19.8932C85.4274 18.8718 85.5075 18.1223 85.4796 17.575C85.4796 17.5681 85.4796 17.5611 85.4796 17.5611C85.4343 16.7977 85.2672 16.2399 85.0792 15.832"
                    fill="white"
                  />
                  <path
                    d="M85.0757 19.8932C85.4274 18.8718 85.5075 18.1223 85.4796 17.575C85.4796 17.5681 85.4796 17.5611 85.4796 17.5611C85.4343 16.7977 85.2672 16.2399 85.0792 15.832"
                    stroke="#EBFF25"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M83.7666 22.1522L84.8356 20.6079"
                    stroke="#EBFF25"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M69.5576 34.2572C70.3473 31.9637 70.5272 30.2808 70.4646 29.0519C70.4646 29.0363 70.4646 29.0206 70.4646 29.0206C70.363 27.3064 69.9877 26.054 69.5654 25.1382"
                    stroke="#EBFF25"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M66.6177 39.3294L69.0181 35.8618"
                    stroke="#EBFF25"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M55.9646 31.9156V30.4916C55.2233 30.3263 54.5966 30.0063 54.0846 29.5316C53.5779 29.0516 53.2099 28.473 52.9806 27.7956L54.6766 27.1716C54.8953 27.6623 55.2046 28.065 55.6046 28.3796C56.0099 28.6943 56.4739 28.8516 56.9966 28.8516C57.5299 28.8516 57.9566 28.7183 58.2766 28.4516C58.5966 28.185 58.7566 27.7983 58.7566 27.2916C58.7566 26.9343 58.6553 26.6356 58.4526 26.3956C58.2499 26.1503 57.9806 25.9396 57.6446 25.7636C57.3139 25.5876 56.9486 25.4223 56.5486 25.2676C56.1699 25.1183 55.7913 24.9583 55.4126 24.7876C55.0393 24.6116 54.6979 24.401 54.3886 24.1556C54.0846 23.905 53.8393 23.5983 53.6526 23.2356C53.4713 22.873 53.3806 22.433 53.3806 21.9156C53.3806 21.2436 53.6046 20.6436 54.0526 20.1156C54.5006 19.5823 55.1379 19.2463 55.9646 19.1076V17.8356H57.7806V19.1236C58.4259 19.2623 58.9513 19.5343 59.3566 19.9396C59.7619 20.3396 60.0419 20.8116 60.1966 21.3556L58.5326 21.9076C58.4046 21.5876 58.1913 21.3183 57.8926 21.0996C57.5939 20.8756 57.2099 20.7636 56.7406 20.7636C56.2819 20.7636 55.9246 20.865 55.6686 21.0676C55.4126 21.265 55.2846 21.5476 55.2846 21.9156C55.2846 22.1983 55.3779 22.4383 55.5646 22.6356C55.7566 22.833 56.0099 23.009 56.3246 23.1636C56.6393 23.313 56.9833 23.457 57.3566 23.5956C57.7246 23.7343 58.1006 23.897 58.4846 24.0836C58.8739 24.2703 59.2313 24.4996 59.5566 24.7716C59.8873 25.0436 60.1539 25.3823 60.3566 25.7876C60.5593 26.193 60.6606 26.6863 60.6606 27.2676C60.6606 27.8863 60.5326 28.4223 60.2766 28.8756C60.0259 29.329 59.6846 29.697 59.2526 29.9796C58.8206 30.257 58.3299 30.441 57.7806 30.5316V31.9156H55.9646Z"
                    fill="black"
                  />
                  <path
                    d="M79.775 20.8389V19.7709C79.219 19.6469 78.749 19.4069 78.365 19.0509C77.985 18.6909 77.709 18.2569 77.537 17.7489L78.809 17.2809C78.973 17.6489 79.205 17.9509 79.505 18.1869C79.809 18.4229 80.157 18.5409 80.549 18.5409C80.949 18.5409 81.269 18.4409 81.509 18.2409C81.749 18.0409 81.869 17.7509 81.869 17.3709C81.869 17.1029 81.793 16.8789 81.641 16.6989C81.489 16.5149 81.287 16.3569 81.035 16.2249C80.787 16.0929 80.513 15.9689 80.213 15.8529C79.929 15.7409 79.645 15.6209 79.361 15.4929C79.081 15.3609 78.825 15.2029 78.593 15.0189C78.365 14.8309 78.181 14.6009 78.041 14.3289C77.905 14.0569 77.837 13.7269 77.837 13.3389C77.837 12.8349 78.005 12.3849 78.341 11.9889C78.677 11.5889 79.155 11.3369 79.775 11.2329V10.2789H81.137V11.2449C81.621 11.3489 82.015 11.5529 82.319 11.8569C82.623 12.1569 82.833 12.5109 82.949 12.9189L81.701 13.3329C81.605 13.0929 81.445 12.8909 81.221 12.7269C80.997 12.5589 80.709 12.4749 80.357 12.4749C80.013 12.4749 79.745 12.5509 79.553 12.7029C79.361 12.8509 79.265 13.0629 79.265 13.3389C79.265 13.5509 79.335 13.7309 79.475 13.8789C79.619 14.0269 79.809 14.1589 80.045 14.2749C80.281 14.3869 80.539 14.4949 80.819 14.5989C81.095 14.7029 81.377 14.8249 81.665 14.9649C81.957 15.1049 82.225 15.2769 82.469 15.4809C82.717 15.6849 82.917 15.9389 83.069 16.2429C83.221 16.5469 83.297 16.9169 83.297 17.3529C83.297 17.8169 83.201 18.2189 83.009 18.5589C82.821 18.8989 82.565 19.1749 82.241 19.3869C81.917 19.5949 81.549 19.7329 81.137 19.8009V20.8389H79.775Z"
                    fill="#024D00"
                  />
                </g>
                <path
                  d="M1.83295 79.2158V66.2558H6.56695C10.617 66.2558 13.083 68.9198 13.083 72.7358C13.083 76.6058 10.617 79.2158 6.56695 79.2158H1.83295ZM4.40695 76.9478H6.42295C8.87095 76.9478 10.383 75.3098 10.383 72.6638C10.383 70.0178 8.87095 68.5238 6.42295 68.5238H4.40695V76.9478ZM23.8027 74.3918C23.8027 71.5298 21.9487 69.6758 19.1587 69.6758C16.3687 69.6758 14.4967 71.6198 14.4967 74.5358C14.4967 77.4698 16.3687 79.4138 19.1767 79.4138C21.5347 79.4138 23.3167 78.0998 23.7307 76.1558H21.1927C20.9047 76.9658 20.1667 77.3798 19.2487 77.3798C18.0427 77.3798 17.0707 76.6058 17.0347 75.2198H23.8027V74.3918ZM19.1587 71.6378C20.2567 71.6378 21.1747 72.2678 21.2827 73.5638H17.0527C17.1607 72.2678 18.0787 71.6378 19.1587 71.6378ZM34.5077 74.3918C34.5077 71.5298 32.6537 69.6758 29.8637 69.6758C27.0737 69.6758 25.2017 71.6198 25.2017 74.5358C25.2017 77.4698 27.0737 79.4138 29.8817 79.4138C32.2397 79.4138 34.0217 78.0998 34.4357 76.1558H31.8977C31.6097 76.9658 30.8717 77.3798 29.9537 77.3798C28.7477 77.3798 27.7757 76.6058 27.7397 75.2198H34.5077V74.3918ZM29.8637 71.6378C30.9617 71.6378 31.8797 72.2678 31.9877 73.5638H27.7577C27.8657 72.2678 28.7837 71.6378 29.8637 71.6378ZM41.8259 69.6758C40.3859 69.6758 39.2699 70.3238 38.8019 71.1338L38.6579 69.8558H36.2999V82.8158H38.8199V78.0278C39.3059 78.8558 40.4579 79.4138 41.8259 79.4138C44.5259 79.4138 46.2539 77.5238 46.2539 74.5538C46.2539 71.4218 44.3819 69.6758 41.8259 69.6758ZM41.2679 77.1638C39.8999 77.1638 38.8739 76.1918 38.8739 74.5718C38.8739 72.9338 39.8999 71.9258 41.2679 71.9258C42.6539 71.9438 43.6619 72.9338 43.6619 74.5538C43.6619 76.1918 42.6539 77.1638 41.2679 77.1638ZM54.1179 76.8578V66.2558H51.5439V79.2158H60.0219V76.8578H54.1179ZM61.6291 68.4158H64.1851V65.9858H61.6291V68.4158ZM61.6651 79.2158H64.1851V69.8558H61.6651V79.2158ZM73.5961 69.8558L73.4341 71.1338C72.9661 70.3238 71.8501 69.6758 70.4101 69.6758C67.8541 69.6758 65.9821 71.4218 65.9821 74.5538C65.9821 77.5238 67.7281 79.3958 70.4101 79.3958C71.7961 79.3958 72.9301 78.8378 73.4161 78.0098V82.7978H75.9361V69.8558H73.5961ZM70.9861 77.1458C69.5821 77.1458 68.5741 76.1738 68.5741 74.5538C68.5741 72.9338 69.5821 71.9258 70.9861 71.9258C72.3361 71.9258 73.3621 72.9338 73.3621 74.5538C73.3621 76.1738 72.3361 77.1458 70.9861 77.1458ZM84.1683 69.8558V74.9858C84.1683 76.3718 83.5203 77.1998 82.2783 77.2178C81.0903 77.2538 80.3343 76.5518 80.3343 75.0938V69.8558H77.9403V75.4178C77.9403 77.8118 79.3263 79.3958 81.7203 79.3958C82.8363 79.3958 83.6463 78.8918 84.1323 78.1898L84.2583 79.2158H86.5623V69.8558H84.1683ZM88.6115 68.4158H91.1675V65.9858H88.6115V68.4158ZM88.6475 79.2158H91.1675V69.8558H88.6475V79.2158ZM100.399 65.6978V71.0438C99.9126 70.2338 98.7966 69.6758 97.3926 69.6758C94.8366 69.6758 92.9646 71.4218 92.9646 74.5358C92.9646 77.5238 94.7106 79.3958 97.3926 79.3958C98.8326 79.3958 99.9486 78.7478 100.417 77.9378L100.579 79.2158H102.919V65.6978H100.399ZM97.9686 77.1458C96.5646 77.1458 95.5566 76.1738 95.5566 74.5358C95.5566 72.9338 96.5646 71.9258 97.9686 71.9258C99.3186 71.9258 100.345 72.9158 100.345 74.5358C100.345 76.1738 99.3186 77.1458 97.9686 77.1458ZM104.977 68.4158H107.533V65.9858H104.977V68.4158ZM105.013 79.2158H107.533V69.8558H105.013V79.2158ZM112.93 79.2158H114.838V77.0018H113.74C112.912 77.0018 112.696 76.6958 112.696 75.8858V72.0878H114.838V69.8558H112.696V67.2998H110.176V68.9378C110.176 69.5678 110.014 69.8558 109.438 69.8558H108.736V72.0878H110.176V76.4438C110.176 78.1358 111.076 79.2158 112.93 79.2158ZM118.273 69.8558H115.573L119.119 79.0178C119.227 79.3058 119.281 79.5038 119.281 79.7198C119.281 80.2958 118.957 80.5838 118.345 80.5838H116.059V82.8158H118.345C119.767 82.8158 121.063 82.5278 121.711 80.7098L125.617 69.8558H123.043L120.721 76.9478L118.273 69.8558Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_510_18839"
                    x1="67.1089"
                    y1="1.69417"
                    x2="42.0946"
                    y2="36.6124"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.4375" stop-color="#D4F938" />
                    <stop offset="1" stop-color="#32D875" stop-opacity="0.96" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_510_18839"
                    x1="84.867"
                    y1="4.85265"
                    x2="73.1097"
                    y2="21.2648"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.4375" stop-color="#D4F938" />
                    <stop offset="1" stop-color="#32D875" stop-opacity="0.96" />
                  </linearGradient>
                  <clipPath id="clip0_510_18839">
                    <rect
                      width="48"
                      height="45"
                      fill="white"
                      transform="translate(39.627 0.21582)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="col2">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                svgCode1
              )}")`,
              marginBottom:"10px",
              backgroundSize: "cover",
              backgroundPosition: "right",
              width: "217px",
              height: "175px"
            }}
          >
            <div style={{ marginLeft: 52, marginTop: 32 }}>
              <img src={f1} />
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                svgCode3
              )}")`,
              marginBotton:"10px",
              backgroundSize: "cover",
              backgroundPosition: "right",
              width: "217px",
              height: "175px"
            }}
          >
            <div style={{ marginLeft: 52, marginTop: 32,display:'flex',flexDirection: 'column'}}>
              <img src={f3} style={{marginLeft:30,width:'20%',padding:0}}/>
              <p className="security">Safe and Secured </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
