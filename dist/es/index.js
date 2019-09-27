import React from "react";

/*
  utils
*/
export { default as media } from "./media";
/*
  components
*/

export { default as Background } from "./components/Background";
export { default as Banner } from "./components/Banner";
export { default as Button } from "./components/Button";
export { default as Code } from "./components/Code";
export { default as Footer } from "./components/Footer";
export { default as Hamburger } from "./components/Hamburger";
export { default as Loader } from "./components/Loader";
export { default as Nav } from "./components/Nav";
export { default as Navbar } from "./components/Navbar";
export { default as SiteNav } from "./components/SiteNav";
export { default as SubNav } from "./components/SubNav";
/*
  svgs
*/
// icons (fastspot)

var AppleSVG = function AppleSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M9.774 5.866c2.632.097 4.834-2.879 4.448-5.285-1.998.161-4.834 2.224-4.448 5.285zm.613.849c1.31 0 2.342-1.128 4.286-1.128 2.62 0 4.297 2.514 4.297 2.514s-2.557 1.375-2.557 4.36c0 3.546 3.212 4.577 3.212 4.577S17.09 23 14.243 23c-1.6 0-1.708-.913-3.835-.913-1.847 0-2.47.913-3.878.913C3.845 23 .375 17.188.375 12.462c0-4.91 3.513-6.875 5.715-6.875 1.933 0 2.74 1.128 4.297 1.128z",
    fillRule: "evenodd"
  }));
};

AppleSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 23"
};
export { AppleSVG };

var ArrowLeftSVG = function ArrowLeftSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M4.573.135c.19-.18.508-.18.705 0a.43.43 0 0 1 0 .639l-3.577 3.27h11.805c.275.001.494.201.494.453 0 .251-.219.458-.494.458H1.701L5.278 8.22c.19.18.19.47 0 .645a.527.527 0 0 1-.705 0L.148 4.819a.418.418 0 0 1 0-.638L4.573.135z",
    fillRule: "nonzero"
  }));
};

ArrowLeftSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 9"
};
export { ArrowLeftSVG };

var ArrowOutSVG = function ArrowOutSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M1.014 9.43c-.095.088-.152.133-.241.133H.709A.27.27 0 0 1 .5 9.309C.633 5.633 2.938 3.335 7 3.335V.898c0-.108.057-.197.152-.241a.287.287 0 0 1 .286.025l5.954 4.609c.064.044.108.12.108.209a.255.255 0 0 1-.108.21l-5.954 4.608a.229.229 0 0 1-.165.057.285.285 0 0 1-.12-.032.259.259 0 0 1-.153-.241V7.665c-2.71 0-5.008.545-5.986 1.764z",
    fillRule: "evenodd"
  }));
};

ArrowOutSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 11"
};
export { ArrowOutSVG };

var ArrowRightSVG = function ArrowRightSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M9.427.135a.527.527 0 0 0-.705 0 .428.428 0 0 0 0 .639l3.577 3.27H.494C.219 4.046 0 4.246 0 4.498c0 .251.219.458.494.458h11.805L8.722 8.22a.435.435 0 0 0 0 .645c.197.18.515.18.705 0l4.425-4.046a.418.418 0 0 0 0-.638L9.427.135z",
    fillRule: "nonzero"
  }));
};

ArrowRightSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 9"
};
export { ArrowRightSVG };

var BestBuySVG = function BestBuySVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M.241 8.233a.828.828 0 0 1 0-1.162L7.236.076A.283.283 0 0 1 7.42 0h4.768A.81.81 0 0 1 13 .813V5.58c0 .063-.032.14-.076.184l-6.995 6.995a.828.828 0 0 1-1.162 0L.241 8.233zm8.697-5.39c0 .68.54 1.22 1.218 1.22.68 0 1.219-.54 1.219-1.22 0-.678-.54-1.218-1.219-1.218s-1.219.54-1.219 1.219z",
    fillRule: "evenodd"
  }));
};

BestBuySVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13 13"
};
export { BestBuySVG };

var BookmarkSVG = function BookmarkSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M8.25.938v13.747a.319.319 0 0 1-.19.3C8.023 15 7.972 15 7.935 15a.345.345 0 0 1-.22-.088L4.5 11.704l-3.215 3.208c-.08.088-.22.103-.345.073a.319.319 0 0 1-.19-.3V.937c0-.52.417-.937.938-.937h5.625c.52 0 .937.417.937.938z",
    fillRule: "evenodd"
  }));
};

BookmarkSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 9 15"
};
export { BookmarkSVG };

var CameraSVG = function CameraSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M12 .502v6.996c0 .1-.053.2-.152.24-.03.012-.07.012-.1.012a.276.276 0 0 1-.176-.07L9 5.096V7c0 .416-.334.75-.75.75H.75A.748.748 0 0 1 0 7V1C0 .584.334.25.75.25h7.5C8.666.25 9 .584 9 1v1.904L11.572.32c.065-.07.176-.082.276-.058.1.04.152.14.152.24z",
    fill: "inherit",
    fillRule: "evenodd"
  }));
};

CameraSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 8"
};
export { CameraSVG };

var CaretDownSVG = function CaretDownSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M13.279.208L7.071 8.142.863.208z"
  }));
};

CaretDownSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 9"
};
export { CaretDownSVG };

var ChevronDownSVG = function ChevronDownSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M16.797 11.5a.54.54 0 0 1-.156.359L9.36 19.14c-.094.094-.234.156-.359.156s-.266-.063-.359-.156l-7.281-7.281c-.094-.094-.156-.234-.156-.359s.063-.266.156-.359l.781-.781a.508.508 0 0 1 .359-.156.54.54 0 0 1 .359.156l6.141 6.141 6.141-6.141c.094-.094.234-.156.359-.156s.266.063.359.156l.781.781a.536.536 0 0 1 .156.359z"
  }));
};

ChevronDownSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 28"
};
export { ChevronDownSVG };

var ChevronLeftSVG = function ChevronLeftSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M5.6 9l6.4 6.26L9.2 18 0 9l9.2-9L12 2.74z",
    fillRule: "nonzero"
  }));
};

ChevronLeftSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 18"
};
export { ChevronLeftSVG };

var ChevronRightSVG = function ChevronRightSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M6.4 9L0 15.26 2.8 18 12 9 2.8 0 0 2.74z",
    fillRule: "nonzero"
  }));
};

ChevronRightSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 18"
};
export { ChevronRightSVG };

var ClockSVG = function ClockSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M8 0c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm3.54 11.54l.944-.946L9.22 7.336 8 2H6.664v6c0 .336.133.688.39.945.079.07.15.125.227.188l4.258 2.406z",
    fillRule: "evenodd"
  }));
};

ClockSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
};
export { ClockSVG };

var CloseSVG = function CloseSVG(props) {
  return React.createElement("svg", props, React.createElement("g", {
    transform: "translate(-1)",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    transform: "rotate(-45 7.768 7.268)",
    x: "6.768",
    y: "-1.732",
    width: "2",
    height: "18",
    rx: "1"
  }), React.createElement("rect", {
    transform: "rotate(45 7.768 7.268)",
    x: "6.768",
    y: "-1.732",
    width: "2",
    height: "18",
    rx: "1"
  })));
};

CloseSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 14"
};
export { CloseSVG };

var CloseMiniSVG = function CloseMiniSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M7.465 6.047a.19.19 0 0 1 .043.121.18.18 0 0 1-.043.117l-1.18 1.18a.18.18 0 0 1-.117.043.19.19 0 0 1-.121-.043L4 5.418 1.953 7.465a.19.19 0 0 1-.121.043.18.18 0 0 1-.117-.043l-1.18-1.18a.18.18 0 0 1-.043-.117.19.19 0 0 1 .043-.121L2.582 4 .535 1.953a.19.19 0 0 1-.043-.121.18.18 0 0 1 .043-.117l1.18-1.18a.18.18 0 0 1 .117-.043.19.19 0 0 1 .121.043L4 2.582 6.047.535a.19.19 0 0 1 .121-.043.18.18 0 0 1 .117.043l1.18 1.18a.18.18 0 0 1 .043.117.19.19 0 0 1-.043.121L5.418 4l2.047 2.047z",
    fillRule: "evenodd"
  }));
};

CloseMiniSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 8 8"
};
export { CloseMiniSVG }; // new

var DeleteSVG = function DeleteSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M.857 14.333C.857 15.25 1.63 16 2.571 16H9.43c.942 0 1.714-.75 1.714-1.667v-10H.857v10zM12 .833H9L8.143 0H3.857L3 .833H0V2.5h12V.833z",
    fillRule: "nonzero"
  }));
};

DeleteSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 16"
};
export { DeleteSVG };

var DotsSVG = function DotsSVG(props) {
  return React.createElement("svg", props, React.createElement("g", {
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "8",
    cy: "2",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "14",
    cy: "2",
    r: "1.5"
  })));
};

DotsSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 4"
};
export { DotsSVG };

var DownloadSVG = function DownloadSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M11.415 13H.585a.27.27 0 0 1-.272-.273v-1.625a.27.27 0 0 1 .272-.267h10.83a.27.27 0 0 1 .273.267v1.625a.27.27 0 0 1-.273.273zm.196-8.74L6.197 9.673A.331.331 0 0 1 6 9.75a.331.331 0 0 1-.197-.076L.39 4.259C.313 4.183.3 4.062.326 3.955a.287.287 0 0 1 .26-.165h2.978V.273A.27.27 0 0 1 3.835 0h4.33a.27.27 0 0 1 .273.273V3.79h2.977c.107 0 .215.063.26.165.025.107.012.228-.064.304z",
    fillRule: "evenodd"
  }));
};

DownloadSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 13"
};
export { DownloadSVG };

var EmailSVG = function EmailSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M22 2.125l-11 8.25-11-8.25A1.37 1.37 0 0 1 1.375.75h19.25A1.37 1.37 0 0 1 22 2.125zM0 4.595l11 8.25 11-8.25v11.28a1.37 1.37 0 0 1-1.375 1.375H1.375A1.37 1.37 0 0 1 0 15.875V4.595z",
    fillRule: "evenodd"
  }));
};

EmailSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 22 18"
};
export { EmailSVG };

var FacebookSVG = function FacebookSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M18 9.055C18 4.055 13.97 0 9 0S0 4.054 0 9.055C0 13.574 3.29 17.32 7.594 18v-6.327H5.308V9.055h2.286V7.059c0-2.269 1.344-3.523 3.4-3.523.984 0 2.014.177 2.014.177v2.228h-1.135c-1.118 0-1.467.698-1.467 1.415v1.699h2.496l-.399 2.618h-2.097V18C14.71 17.321 18 13.575 18 9.055z"
  }));
};

FacebookSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
};
export { FacebookSVG };

var FlickrSVG = function FlickrSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M22 5.001C22 7.761 19.793 10 17.07 10s-4.93-2.238-4.93-4.999C12.14 2.239 14.346 0 17.07 0S22 2.239 22 5.001zM4.93 0C2.207 0 0 2.239 0 5.001 0 7.761 2.207 10 4.93 10s4.93-2.238 4.93-4.999C9.86 2.239 7.653 0 4.93 0z"
  }));
};

FlickrSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 22 10"
};
export { FlickrSVG };

var InstagramSVG = function InstagramSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M12.96 0H4.94A4.946 4.946 0 0 0 0 4.94v8.02a4.945 4.945 0 0 0 4.94 4.94h8.02a4.946 4.946 0 0 0 4.94-4.94V4.94A4.946 4.946 0 0 0 12.96 0zm3.353 12.96a3.356 3.356 0 0 1-3.352 3.352H4.94a3.355 3.355 0 0 1-3.352-3.351V4.94A3.355 3.355 0 0 1 4.94 1.588h8.02a3.356 3.356 0 0 1 3.352 3.352v8.02z"
  }), React.createElement("path", {
    d: "M8.95 4.338a4.618 4.618 0 0 0-4.612 4.613 4.618 4.618 0 0 0 4.612 4.612 4.618 4.618 0 0 0 4.613-4.612A4.618 4.618 0 0 0 8.95 4.338zm0 7.637A3.028 3.028 0 0 1 5.926 8.95 3.028 3.028 0 0 1 8.95 5.926a3.028 3.028 0 0 1 3.025 3.024 3.028 3.028 0 0 1-3.025 3.025zm4.806-8.984a1.17 1.17 0 0 0-1.164 1.165c0 .306.125.607.342.824.216.216.516.34.822.34.307 0 .607-.124.824-.34a1.17 1.17 0 0 0 0-1.648 1.17 1.17 0 0 0-.824-.34z"
  }));
};

InstagramSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
};
export { InstagramSVG };

var LinkSVG = function LinkSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M16.506 8.003l-2.633 2.44a5.617 5.617 0 0 0-.383-2.676l1.376-1.3a2.44 2.44 0 0 0 .793-1.782c0-.65-.264-1.291-.793-1.78a2.816 2.816 0 0 0-1.922-.735c-.692 0-1.385.244-1.922.734L8.107 5.58c-.529.507-.802 1.157-.802 1.807 0 .65.264 1.291.802 1.781.236.22.355.498.355.768s-.119.54-.355.752c-.22.21-.52.312-.82.312-.292 0-.593-.101-.82-.312C5.492 9.768 5 8.568 5 7.37c0-1.199.492-2.398 1.467-3.31l2.897-2.676A5.234 5.234 0 0 1 12.926 0c1.293 0 2.587.464 3.58 1.384.993.92 1.494 2.12 1.494 3.318 0 1.19-.501 2.38-1.494 3.301zm-4.972 5.934l-2.913 2.697C7.638 17.544 6.345 18 5.043 18c-1.292 0-2.585-.455-3.568-1.366C.492 15.724 0 14.527 0 13.33c0-1.205.492-2.402 1.475-3.312l2.658-2.453a5.7 5.7 0 0 0 .382 2.697l-1.374 1.273a2.423 2.423 0 0 0-.792 1.778c0 .65.264 1.29.792 1.779.528.489 1.22.733 1.92.733a2.83 2.83 0 0 0 1.921-.733l2.886-2.672c.547-.489.81-1.138.81-1.779 0-.649-.263-1.29-.81-1.778a1.042 1.042 0 0 1-.336-.776c0-.278.109-.556.336-.767.228-.21.528-.32.838-.32.3 0 .6.11.828.32.984.92 1.466 2.116 1.466 3.313a4.478 4.478 0 0 1-1.466 3.304z",
    fillRule: "evenodd"
  }));
};

LinkSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
};
export { LinkSVG };

var LinkedInSVG = function LinkedInSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M14.886 9.16a3.107 3.107 0 0 0-.627-1.104 2.46 2.46 0 0 0-.942-.647 3.276 3.276 0 0 0-1.19-.209c-.342 0-.64.041-.894.124a2.35 2.35 0 0 0-.656.323c-.184.133-.34.276-.466.428a6.378 6.378 0 0 0-.324.419V7.39H7.2c.013.216.019.634.019 1.256v2.36L7.2 15.21h2.587v-4.376c0-.114.007-.225.02-.333.012-.108.038-.206.076-.295a2.09 2.09 0 0 1 .466-.647c.209-.203.498-.304.865-.304.47 0 .806.162 1.009.485.203.323.304.751.304 1.284v4.186h2.588v-4.49c0-.596-.076-1.116-.229-1.56zM5.23 5.902a1.23 1.23 0 0 0 .381-.951c0-.38-.13-.7-.39-.961-.26-.26-.612-.39-1.056-.39-.444 0-.8.13-1.065.39-.267.26-.4.58-.4.96 0 .369.127.686.38.952.254.266.603.4 1.047.4h.019c.457 0 .818-.134 1.084-.4zM5.288 7.2H2.7v7.82h2.588V7.2zM17.713.124a.41.41 0 0 1 .133.314V17.56a.41.41 0 0 1-.133.314.458.458 0 0 1-.323.124H.457a.458.458 0 0 1-.324-.124A.41.41 0 0 1 0 17.56V.438A.41.41 0 0 1 .133.124.458.458 0 0 1 .457 0H17.39c.126 0 .234.041.323.124z"
  }));
};

LinkedInSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
};
export { LinkedInSVG };

var LockSVG = function LockSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M12.625 7.875c.624 0 1.125.501 1.125 1.125v7.875c0 .624-.501 1.125-1.125 1.125H1.375A1.122 1.122 0 0 1 .25 16.875V9c0-.624.501-1.125 1.125-1.125H2.5V4.5C2.5 2.021 4.521 0 7 0s4.5 2.021 4.5 4.5v3.375h1.125zM4.75 4.5v3.375h4.5V4.5A2.243 2.243 0 0 0 7 2.25 2.243 2.243 0 0 0 4.75 4.5z",
    fillRule: "evenodd"
  }));
};

LockSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 18"
};
export { LockSVG };

var MailSVG = function MailSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M7 6.875l-7-5.25C0 1.14.39.75.875.75h12.25c.485 0 .875.39.875.875l-7 5.25zm0 1.572l7-5.25v7.178c0 .485-.39.875-.875.875H.875A.872.872 0 0 1 0 10.375V3.197l7 5.25z",
    fillRule: "evenodd"
  }));
};

MailSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 12"
};
export { MailSVG };

var MarkerSVG = function MarkerSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M15.642 6.253c-.083-.309-.25-.637-.373-.925C13.789 1.774 10.559.5 7.949.5 4.456.5.609 2.842.095 7.67v.986c0 .041.014.411.035.596.288 2.301 2.103 4.746 3.459 7.047 1.459 2.465 2.972 4.89 4.472 7.314.925-1.582 1.846-3.184 2.75-4.725.246-.452.532-.904.778-1.336.165-.287.479-.575.622-.842 1.459-2.67 3.807-5.362 3.807-8.013V7.61c0-.288-.356-1.294-.376-1.356zm-7.63 4.951c-1.026 0-2.15-.513-2.704-1.931-.083-.226-.076-.678-.076-.72v-.637c0-1.807 1.534-2.629 2.87-2.629 1.643 0 2.914 1.315 2.914 2.959 0 1.643-1.36 2.958-3.003 2.958z",
    fillRule: "nonzero"
  }));
};

MarkerSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 17 24"
};
export { MarkerSVG };

var MenuSVG = function MenuSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M1.667 1.667H13M1.667 6.333H13M1.667 11H13",
    stroke: "inherit",
    strokeWidth: "2",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }));
};

MenuSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 12"
};
export { MenuSVG };

var PauseSVG = function PauseSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M3.894 11H.231A.23.23 0 0 1 0 10.769V.231A.23.23 0 0 1 .231 0h3.663a.23.23 0 0 1 .231.231v10.538a.23.23 0 0 1-.231.231zm6.875 0H7.106a.23.23 0 0 1-.231-.231V.231A.23.23 0 0 1 7.106 0h3.663A.23.23 0 0 1 11 .231v10.538a.23.23 0 0 1-.231.231z",
    fillRule: "evenodd"
  }));
};

PauseSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 11 11"
};
export { PauseSVG };

var PhoneSVG = function PhoneSVG(props) {
  return React.createElement("svg", props, React.createElement("g", {
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M12.998 11.213c-.559-.551-1.256-.551-1.811 0-.424.42-.847.84-1.263 1.267-.114.117-.21.142-.349.064-.274-.15-.565-.27-.829-.434-1.227-.772-2.255-1.765-3.166-2.882-.452-.555-.854-1.149-1.135-1.818-.057-.135-.046-.224.064-.334.424-.41.836-.829 1.252-1.249.58-.583.58-1.266-.003-1.853-.331-.335-.662-.662-.993-.996-.341-.342-.68-.687-1.024-1.025-.559-.544-1.256-.544-1.811.004-.427.42-.836.85-1.27 1.263-.402.38-.605.846-.648 1.39-.067.886.15 1.723.456 2.537.626 1.686 1.58 3.184 2.736 4.557a16.93 16.93 0 0 0 5.606 4.387c.982.476 2 .843 3.106.903.761.043 1.423-.15 1.953-.743.363-.406.772-.776 1.156-1.164.57-.576.573-1.273.008-1.842-.676-.68-1.356-1.356-2.035-2.032zm-.463-3.486l1.374-.205c-.216-1.105-.811-2.106-1.716-2.902-.957-.838-2.167-1.366-3.5-1.53L8.5 4.3c1.031.128 1.97.535 2.71 1.184.7.613 1.158 1.389 1.325 2.243z"
  }), React.createElement("path", {
    d: "M14.262 2.853C12.739 1.29 10.812.304 8.686 0L8.5 1.36a8.356 8.356 0 0 1 4.818 2.465A8.722 8.722 0 0 1 15.681 8.5L17 8.269a10.14 10.14 0 0 0-2.738-5.416z"
  })));
};

PhoneSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 17 17"
};
export { PhoneSVG };

var PhoneAltSVG = function PhoneAltSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M14 1.668c0 .034 0 .068-.014.116-.8 6.364-5.851 11.403-12.202 12.202-.048.014-.082.014-.116.014s-.082 0-.11-.014a.347.347 0 0 1-.163-.164L.014 10.356a.316.316 0 0 1 .15-.376l3.821-1.914c.117-.061.246-.027.342.055l1.86 1.88A11.76 11.76 0 0 0 9.98 6.187l-1.859-1.86c-.082-.096-.116-.225-.055-.342L9.98.165a.316.316 0 0 1 .376-.151l3.466 1.38c.062.035.13.096.144.165a.21.21 0 0 1 .034.109z",
    fillRule: "evenodd"
  }));
};

PhoneAltSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 14"
};
export { PhoneAltSVG };

var PlaySVG = function PlaySVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M.42 20a.432.432 0 0 1-.234-.068A.402.402 0 0 1 0 19.58V.42C0 .273.068.137.186.068a.406.406 0 0 1 .42-.02l19.16 9.58A.398.398 0 0 1 20 10a.398.398 0 0 1-.234.371l-19.16 9.58A.438.438 0 0 1 .42 20z",
    fillRule: "evenodd"
  }));
};

PlaySVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
export { PlaySVG };

var PlusSVG = function PlusSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M6.882 6.118H13v.764H6.882V13h-.764V6.882H0v-.764h6.118V0h.764v6.118z",
    fillRule: "nonzero"
  }));
};

PlusSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13 13"
};
export { PlusSVG };

var SearchSVG = function SearchSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M5.623 0A5.626 5.626 0 0 0-.002 5.625a5.626 5.626 0 0 0 5.625 5.625 5.507 5.507 0 0 0 3.003-.872l4.233 4.256c.25.241.58.366.887.366a1.251 1.251 0 0 0 .886-2.139l-4.255-4.233c.556-.864.871-1.89.871-3.003A5.626 5.626 0 0 0 5.623 0zm0 9.375a3.757 3.757 0 0 1-3.75-3.75 3.757 3.757 0 0 1 3.75-3.75 3.757 3.757 0 0 1 3.75 3.75 3.757 3.757 0 0 1-3.75 3.75z",
    fillRule: "evenodd"
  }));
};

SearchSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 15"
};
export { SearchSVG };

var SnapchatSVG = function SnapchatSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M21.503 14.994c-2.772-.444-4.035-3.175-4.17-3.485l-.016-.034c-.139-.275-.173-.498-.1-.663.145-.335.761-.525 1.156-.647.111-.035.216-.067.298-.1.8-.306 1.2-.699 1.191-1.166-.007-.371-.306-.712-.749-.865a1.386 1.386 0 0 0-.51-.096c-.123 0-.304.017-.478.096-.338.154-.638.237-.866.246a.85.85 0 0 1-.233-.038l.023-.36.004-.062c.094-1.456.211-3.269-.287-4.355C15.294.25 12.17 0 11.246 0l-.43.004c-.922 0-4.04.25-5.512 3.463-.499 1.089-.38 2.9-.286 4.356.01.144.018.283.026.42a.877.877 0 0 1-.277.039c-.265 0-.582-.084-.943-.248-.52-.238-1.473.08-1.602.739-.07.356.078.87 1.177 1.293.085.033.193.066.325.107.368.114.985.304 1.13.639.073.165.038.388-.114.69-.054.124-1.36 3.019-4.243 3.481a.58.58 0 0 0-.496.6.722.722 0 0 0 .06.247c.242.552 1.165.936 2.902 1.204.039.096.083.293.108.408.037.163.075.331.128.506.053.177.21.473.664.473.153 0 .331-.034.524-.07a5.724 5.724 0 0 1 1.13-.126c.26 0 .533.023.808.067.52.084.975.398 1.504.762.778.536 1.486.946 2.901.946.038 0 .075-.001.111-.004.053.003.105.004.159.004 1.24 0 2.33-.319 3.244-.947.504-.348.98-.676 1.5-.76.277-.045.55-.068.81-.068.452 0 .813.057 1.134.118.218.042.388.062.545.062.317 0 .55-.17.639-.466a7.28 7.28 0 0 0 .127-.502c.02-.09.068-.302.108-.405 1.712-.265 2.587-.633 2.829-1.184a.712.712 0 0 0 .063-.252.581.581 0 0 0-.496-.602z",
    fillRule: "nonzero"
  }));
};

SnapchatSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 22 20"
};
export { SnapchatSVG };

var StarSVG = function StarSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M17.895 7.392l-4.377 4.359 1.107 5.81a.4.4 0 0 1-.167.377.389.389 0 0 1-.21.062.361.361 0 0 1-.203-.062L9 14.687l-5.045 3.251a.39.39 0 0 1-.413 0 .4.4 0 0 1-.167-.377l1.107-5.81-4.377-4.36C0 7.296-.018 7.129.018 6.98a.383.383 0 0 1 .36-.229h5.748L8.648.246A.402.402 0 0 1 9 0c.15 0 .29.105.352.246l2.522 6.504h5.748c.15 0 .299.08.36.229.036.149.018.316-.087.413z",
    fillRule: "evenodd"
  }));
};

StarSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
};
export { StarSVG };

var TwitterSVG = function TwitterSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M18 1.73a7.374 7.374 0 0 1-2.12.581A3.708 3.708 0 0 0 17.503.27a7.444 7.444 0 0 1-2.347.896 3.693 3.693 0 0 0-6.292 3.367A10.483 10.483 0 0 1 1.254.675a3.664 3.664 0 0 0-.5 1.856 3.69 3.69 0 0 0 1.643 3.073A3.693 3.693 0 0 1 .724 5.14v.046a3.696 3.696 0 0 0 2.962 3.621 3.74 3.74 0 0 1-.973.13c-.238 0-.47-.024-.695-.07a3.694 3.694 0 0 0 3.448 2.565A7.408 7.408 0 0 1 .881 13.01c-.298 0-.592-.018-.881-.05a10.438 10.438 0 0 0 5.66 1.661c6.793 0 10.505-5.626 10.505-10.505l-.012-.478A7.374 7.374 0 0 0 18 1.73z"
  }));
};

TwitterSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 15"
};
export { TwitterSVG };

var UserSVG = function UserSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M15 14.063v.622c0 .176-.14.315-.315.315H.315A.313.313 0 0 1 0 14.685v-.623c0-3.127 5.625-2.497 5.625-5.002 0 0-1.875-1.875-1.875-5.31A3.757 3.757 0 0 1 7.5 0a3.757 3.757 0 0 1 3.75 3.75c0 3.435-1.875 5.31-1.875 5.31 0 2.505 5.625 1.875 5.625 5.002z",
    fillRule: "evenodd"
  }));
};

UserSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 15"
};
export { UserSVG };

var VimeoSVG = function VimeoSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M.986 0h18v18h-18V0zm1.96 6.204l.697.888s.87-.679 1.183-.679c.195 0 .61.226.87 1.01.262.783 1.361 4.843 1.428 5.03.3.84.696 2.401 1.914 2.628 1.219.226 2.768-1.01 3.62-1.915.853-.905 4.213-4.769 4.352-7.084.129-2.14-.574-2.637-.888-2.836-.574-.366-1.531-.488-2.437-.175-.905.314-2.28 1.34-2.645 3.168 0 0 1.236-.452 1.688-.017.453.435.331 1.392-.052 2.106-.383.713-1.462 2.367-1.862 2.419-.4.052-.714-.731-.766-.94-.052-.209-.714-3.08-.957-4.751-.244-1.671-1.306-1.95-1.81-1.95-.505 0-1.375.383-4.334 3.098z"
  }));
};

VimeoSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 19 18"
};
export { VimeoSVG };

var WorldSVG = function WorldSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M7.417 0c3.876 0 7 3.124 7 7s-3.124 7-7 7-7-3.124-7-7 3.124-7 7-7zm.875 12.544c.875 0 2.625-1.463 2.625-3.5 0-1.135-.91-2.044-2.044-2.044H7.71c-.875 0-1.463-.438-1.463-1.019 0-.41.328-.731.731-.731.581 0 .602.581 1.019.581.328 0 .588-.26.588-.581 0-.567-.28-.861-.554-1.135.164-.307.533-1.114.554-2.283a.295.295 0 0 0-.246-.294 6.012 6.012 0 0 0-.923-.082c-2.461.082-4.081 1.251-4.081 3.213 0 1.75 1.456 3.206 3.206 3.206h.048a1.907 1.907 0 0 0-.048.438 1.89 1.89 0 0 0 1.456 1.845v2.092c0 .164.13.294.294.294z",
    fillRule: "evenodd"
  }));
};

WorldSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 14"
};
export { WorldSVG };

var YouTubeSVG = function YouTubeSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M19.945 2.112c-.538-.956-1.12-1.131-2.307-1.198C16.452.834 13.47.8 10.888.8c-2.587 0-5.57.033-6.754.113-1.184.068-1.768.242-2.31 1.199-.553.954-.838 2.597-.838 5.49v.01c0 2.881.285 4.537.838 5.481.542.956 1.125 1.129 2.309 1.21 1.186.069 4.168.11 6.756.11 2.582 0 5.563-.041 6.75-.11 1.187-.08 1.77-.253 2.307-1.208.558-.945.84-2.6.84-5.481v-.01c0-2.895-.282-4.538-.841-5.492zM8.41 11.319V3.894l6.19 3.712-6.19 3.714z"
  }));
};

YouTubeSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 21 15"
};
export { YouTubeSVG }; // icons (other)

var CalendarSVG = function CalendarSVG(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "inherit",
    strokeWidth: "2",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M21 8.667H1",
    strokeLinecap: "square"
  }), React.createElement("path", {
    strokeLinecap: "square",
    strokeLinejoin: "round",
    d: "M1 3h20v18H1z"
  }), React.createElement("path", {
    d: "M7 1v4M15 1v4",
    strokeLinecap: "round"
  })));
};

CalendarSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 22 22"
};
export { CalendarSVG };

var CheckMarkSVG = function CheckMarkSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M4.379 6.328l-2.122-2.12-2.121 2.12L3.318 9.51l1.06 1.061 7.779-7.778L10.036.672 4.379 6.328z",
    stroke: "none",
    strokeWidth: "1"
  }));
};

CheckMarkSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13 11"
};
export { CheckMarkSVG };

var DraggableSVG = function DraggableSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M16.207 2.46c0 .33-.062.642-.191.935a2.702 2.702 0 0 1-.508.777 2.27 2.27 0 0 1-.758.531 2.282 2.282 0 0 1-.934.192 2.3 2.3 0 0 1-.937-.192 2.385 2.385 0 0 1-.766-.531 2.583 2.583 0 0 1-.52-.777 2.362 2.362 0 0 1-.19-.934c0-.332.066-.648.19-.95.13-.3.302-.562.52-.788.219-.227.473-.403.766-.532A2.3 2.3 0 0 1 13.816 0c.332 0 .641.063.934.191.293.13.547.305.758.532.21.226.379.488.508.789.129.3.191.617.191.949zm0 7.419c0 .348-.062.664-.191.957-.13.297-.297.55-.508.77a2.358 2.358 0 0 1-1.692.71c-.332 0-.644-.066-.937-.191a2.453 2.453 0 0 1-1.285-1.29 2.448 2.448 0 0 1 0-1.902c.129-.3.3-.562.52-.78a2.47 2.47 0 0 1 .765-.516c.293-.13.605-.196.937-.196.332 0 .641.067.934.196.293.125.547.3.758.515.21.22.379.48.508.782.129.3.191.617.191.945zm-.066 7.422a2.33 2.33 0 0 1-.676 1.672 2.354 2.354 0 0 1-3.297 0 2.33 2.33 0 0 1-.676-1.672c0-.317.059-.617.18-.903.121-.285.285-.535.496-.753.21-.22.46-.391.746-.512a2.354 2.354 0 0 1 1.805 0c.285.12.535.293.746.512.21.218.375.468.496.753.117.286.18.586.18.903zM8.336 2.46c0 .328-.066.64-.191.934a2.702 2.702 0 0 1-.508.777 2.27 2.27 0 0 1-.758.531 2.282 2.282 0 0 1-.934.192 2.343 2.343 0 0 1-1.703-.723 2.583 2.583 0 0 1-.52-.777 2.295 2.295 0 0 1-.19-.934c0-.332.062-.648.19-.95.13-.3.301-.562.52-.788A2.343 2.343 0 0 1 5.945 0c.332 0 .64.063.934.191.293.13.547.305.758.532.21.226.379.488.508.789.125.3.19.617.19.949zm0 7.418c0 .348-.066.664-.191.957-.13.297-.297.55-.508.77a2.358 2.358 0 0 1-1.692.71c-.332 0-.644-.066-.937-.191a2.436 2.436 0 0 1-1.285-1.29 2.34 2.34 0 0 1-.192-.956c0-.328.063-.645.192-.945.129-.301.3-.563.52-.782.214-.214.472-.39.765-.515.293-.13.605-.196.937-.196.332 0 .64.067.934.196.293.125.547.3.758.515.21.22.379.48.508.782.125.3.19.617.19.945zm0 7.422c0 .347-.066.664-.191.957-.13.293-.297.55-.508.77-.211.214-.465.39-.758.515a2.285 2.285 0 0 1-.934.195c-.332 0-.644-.066-.937-.195a2.425 2.425 0 0 1-1.477-2.242 2.445 2.445 0 0 1 .71-1.727c.216-.215.474-.39.767-.515.293-.13.605-.196.937-.196.332 0 .64.067.934.196.293.125.547.3.758.515.21.219.379.477.508.778.125.3.19.617.19.949zm0 0",
    fillRule: "nonzero",
    fill: "inherit",
    fillOpacity: "1"
  }));
};

DraggableSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
export { DraggableSVG };

var ErrorSVG = function ErrorSVG(props) {
  return React.createElement("svg", props, React.createElement("g", {
    strokeWidth: "1",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M17.5 0L35 26H0z"
  }), React.createElement("path", {
    d: "M19.446 9.238l-.576 8.874h-1.746l-.576-8.874h2.898zm-2.862 11.484c0-.792.63-1.44 1.404-1.44.792 0 1.44.648 1.44 1.44 0 .792-.648 1.422-1.44 1.422a1.41 1.41 0 0 1-1.404-1.422z",
    fill: "#FFF",
    fillRule: "nonzero"
  })));
};

ErrorSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 35 26"
};
export { ErrorSVG };

var FilterSVG = function FilterSVG(props) {
  return React.createElement("svg", props, React.createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2",
    stroke: "inherit",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M12 2h5.5M.5 2H4"
  }), React.createElement("circle", {
    cx: "6.546",
    cy: "2.046",
    r: "2"
  }), React.createElement("path", {
    d: "M7 10H.5M17.5 10H15"
  }), React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2"
  })));
};

FilterSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 14"
};
export { FilterSVG };

var ListSearchSVG = function ListSearchSVG(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M27.82 17.886l3.11 3.087a1.18 1.18 0 0 1 0 1.68 1.202 1.202 0 0 1-1.692 0l-3.11-3.088a8.375 8.375 0 0 1-5.013 1.654c-4.623 0-8.371-3.72-8.371-8.31 0-4.589 3.748-8.309 8.37-8.309 4.624 0 8.372 3.72 8.372 8.31 0 1.866-.62 3.589-1.666 4.976zm-6.705.96c3.302 0 5.98-2.658 5.98-5.936s-2.678-5.936-5.98-5.936c-3.302 0-5.98 2.658-5.98 5.936s2.678 5.935 5.98 5.935zM1.088 2.3C.488 2.3 0 1.785 0 1.15 0 .515.487 0 1.088 0h16.36c.601 0 1.088.515 1.088 1.15 0 .635-.487 1.15-1.088 1.15H1.088zM.623 8.05C.279 8.05 0 7.535 0 6.9c0-.635.279-1.15.623-1.15h9.366c.344 0 .623.515.623 1.15 0 .635-.279 1.15-.623 1.15H.623zm0 5.75C.279 13.8 0 13.285 0 12.65c0-.635.279-1.15.623-1.15h9.366c.344 0 .623.515.623 1.15 0 .635-.279 1.15-.623 1.15H.623z",
    fill: "inherit",
    fillRule: "nonzero",
    stroke: "none",
    strokeWidth: "1"
  }));
};

ListSearchSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 23"
};
export { ListSearchSVG };