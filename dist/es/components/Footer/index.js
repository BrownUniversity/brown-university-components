var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import React from "react";
import styled, { css } from "styled-components";
import { breakpoints, colors, typography, getRems } from "brown-university-styles";
import FooterLink from "./FooterLink";
import giveLogoSrc from "./logo-together";
import media from "../../media";
import { srOnlyCSS, unstyledLinkCSS } from "../../mixins";
var MarkerSVG = function MarkerSVG(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M15.642 6.253c-.083-.309-.25-.637-.373-.925C13.789 1.774 10.559.5 7.949.5 4.456.5.609 2.842.095 7.67v.986c0 .041.014.411.035.596.288 2.301 2.103 4.746 3.459 7.047 1.459 2.465 2.972 4.89 4.472 7.314.925-1.582 1.846-3.184 2.75-4.725.246-.452.532-.904.778-1.336.165-.287.479-.575.622-.842 1.459-2.67 3.807-5.362 3.807-8.013V7.61c0-.288-.356-1.294-.376-1.356zm-7.63 4.951c-1.026 0-2.15-.513-2.704-1.931-.083-.226-.076-.678-.076-.72v-.637c0-1.807 1.534-2.629 2.87-2.629 1.643 0 2.914 1.315 2.914 2.959 0 1.643-1.36 2.958-3.003 2.958z",
    fillRule: "nonzero"
  }));
};
MarkerSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 17 24"
};
var PhoneSVG = function PhoneSVG(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("g", {
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.998 11.213c-.559-.551-1.256-.551-1.811 0-.424.42-.847.84-1.263 1.267-.114.117-.21.142-.349.064-.274-.15-.565-.27-.829-.434-1.227-.772-2.255-1.765-3.166-2.882-.452-.555-.854-1.149-1.135-1.818-.057-.135-.046-.224.064-.334.424-.41.836-.829 1.252-1.249.58-.583.58-1.266-.003-1.853-.331-.335-.662-.662-.993-.996-.341-.342-.68-.687-1.024-1.025-.559-.544-1.256-.544-1.811.004-.427.42-.836.85-1.27 1.263-.402.38-.605.846-.648 1.39-.067.886.15 1.723.456 2.537.626 1.686 1.58 3.184 2.736 4.557a16.93 16.93 0 0 0 5.606 4.387c.982.476 2 .843 3.106.903.761.043 1.423-.15 1.953-.743.363-.406.772-.776 1.156-1.164.57-.576.573-1.273.008-1.842-.676-.68-1.356-1.356-2.035-2.032zm-.463-3.486l1.374-.205c-.216-1.105-.811-2.106-1.716-2.902-.957-.838-2.167-1.366-3.5-1.53L8.5 4.3c1.031.128 1.97.535 2.71 1.184.7.613 1.158 1.389 1.325 2.243z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.262 2.853C12.739 1.29 10.812.304 8.686 0L8.5 1.36a8.356 8.356 0 0 1 4.818 2.465A8.722 8.722 0 0 1 15.681 8.5L17 8.269a10.14 10.14 0 0 0-2.738-5.416z"
  })));
};
PhoneSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 17 17"
};
var FacebookSVG = function FacebookSVG(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M18 9.055C18 4.055 13.97 0 9 0S0 4.054 0 9.055C0 13.574 3.29 17.32 7.594 18v-6.327H5.308V9.055h2.286V7.059c0-2.269 1.344-3.523 3.4-3.523.984 0 2.014.177 2.014.177v2.228h-1.135c-1.118 0-1.467.698-1.467 1.415v1.699h2.496l-.399 2.618h-2.097V18C14.71 17.321 18 13.575 18 9.055z"
  }));
};
FacebookSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
};
var InstagramSVG = function InstagramSVG(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M12.96 0H4.94A4.946 4.946 0 0 0 0 4.94v8.02a4.945 4.945 0 0 0 4.94 4.94h8.02a4.946 4.946 0 0 0 4.94-4.94V4.94A4.946 4.946 0 0 0 12.96 0zm3.353 12.96a3.356 3.356 0 0 1-3.352 3.352H4.94a3.355 3.355 0 0 1-3.352-3.351V4.94A3.355 3.355 0 0 1 4.94 1.588h8.02a3.356 3.356 0 0 1 3.352 3.352v8.02z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.95 4.338a4.618 4.618 0 0 0-4.612 4.613 4.618 4.618 0 0 0 4.612 4.612 4.618 4.618 0 0 0 4.613-4.612A4.618 4.618 0 0 0 8.95 4.338zm0 7.637A3.028 3.028 0 0 1 5.926 8.95 3.028 3.028 0 0 1 8.95 5.926a3.028 3.028 0 0 1 3.025 3.024 3.028 3.028 0 0 1-3.025 3.025zm4.806-8.984a1.17 1.17 0 0 0-1.164 1.165c0 .306.125.607.342.824.216.216.516.34.822.34.307 0 .607-.124.824-.34a1.17 1.17 0 0 0 0-1.648 1.17 1.17 0 0 0-.824-.34z"
  }));
};
InstagramSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
};
var LinkedInSVG = function LinkedInSVG(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M14.886 9.16a3.107 3.107 0 0 0-.627-1.104 2.46 2.46 0 0 0-.942-.647 3.276 3.276 0 0 0-1.19-.209c-.342 0-.64.041-.894.124a2.35 2.35 0 0 0-.656.323c-.184.133-.34.276-.466.428a6.378 6.378 0 0 0-.324.419V7.39H7.2c.013.216.019.634.019 1.256v2.36L7.2 15.21h2.587v-4.376c0-.114.007-.225.02-.333.012-.108.038-.206.076-.295a2.09 2.09 0 0 1 .466-.647c.209-.203.498-.304.865-.304.47 0 .806.162 1.009.485.203.323.304.751.304 1.284v4.186h2.588v-4.49c0-.596-.076-1.116-.229-1.56zM5.23 5.902a1.23 1.23 0 0 0 .381-.951c0-.38-.13-.7-.39-.961-.26-.26-.612-.39-1.056-.39-.444 0-.8.13-1.065.39-.267.26-.4.58-.4.96 0 .369.127.686.38.952.254.266.603.4 1.047.4h.019c.457 0 .818-.134 1.084-.4zM5.288 7.2H2.7v7.82h2.588V7.2zM17.713.124a.41.41 0 0 1 .133.314V17.56a.41.41 0 0 1-.133.314.458.458 0 0 1-.323.124H.457a.458.458 0 0 1-.324-.124A.41.41 0 0 1 0 17.56V.438A.41.41 0 0 1 .133.124.458.458 0 0 1 .457 0H17.39c.126 0 .234.041.323.124z"
  }));
};
LinkedInSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
};
var SnapchatSVG = function SnapchatSVG(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M21.503 14.994c-2.772-.444-4.035-3.175-4.17-3.485l-.016-.034c-.139-.275-.173-.498-.1-.663.145-.335.761-.525 1.156-.647.111-.035.216-.067.298-.1.8-.306 1.2-.699 1.191-1.166-.007-.371-.306-.712-.749-.865a1.386 1.386 0 0 0-.51-.096c-.123 0-.304.017-.478.096-.338.154-.638.237-.866.246a.85.85 0 0 1-.233-.038l.023-.36.004-.062c.094-1.456.211-3.269-.287-4.355C15.294.25 12.17 0 11.246 0l-.43.004c-.922 0-4.04.25-5.512 3.463-.499 1.089-.38 2.9-.286 4.356.01.144.018.283.026.42a.877.877 0 0 1-.277.039c-.265 0-.582-.084-.943-.248-.52-.238-1.473.08-1.602.739-.07.356.078.87 1.177 1.293.085.033.193.066.325.107.368.114.985.304 1.13.639.073.165.038.388-.114.69-.054.124-1.36 3.019-4.243 3.481a.58.58 0 0 0-.496.6.722.722 0 0 0 .06.247c.242.552 1.165.936 2.902 1.204.039.096.083.293.108.408.037.163.075.331.128.506.053.177.21.473.664.473.153 0 .331-.034.524-.07a5.724 5.724 0 0 1 1.13-.126c.26 0 .533.023.808.067.52.084.975.398 1.504.762.778.536 1.486.946 2.901.946.038 0 .075-.001.111-.004.053.003.105.004.159.004 1.24 0 2.33-.319 3.244-.947.504-.348.98-.676 1.5-.76.277-.045.55-.068.81-.068.452 0 .813.057 1.134.118.218.042.388.062.545.062.317 0 .55-.17.639-.466a7.28 7.28 0 0 0 .127-.502c.02-.09.068-.302.108-.405 1.712-.265 2.587-.633 2.829-1.184a.712.712 0 0 0 .063-.252.581.581 0 0 0-.496-.602z",
    fillRule: "nonzero"
  }));
};
SnapchatSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 22 20"
};
var TwitterSVG = function TwitterSVG(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M18 1.73a7.374 7.374 0 0 1-2.12.581A3.708 3.708 0 0 0 17.503.27a7.444 7.444 0 0 1-2.347.896 3.693 3.693 0 0 0-6.292 3.367A10.483 10.483 0 0 1 1.254.675a3.664 3.664 0 0 0-.5 1.856 3.69 3.69 0 0 0 1.643 3.073A3.693 3.693 0 0 1 .724 5.14v.046a3.696 3.696 0 0 0 2.962 3.621 3.74 3.74 0 0 1-.973.13c-.238 0-.47-.024-.695-.07a3.694 3.694 0 0 0 3.448 2.565A7.408 7.408 0 0 1 .881 13.01c-.298 0-.592-.018-.881-.05a10.438 10.438 0 0 0 5.66 1.661c6.793 0 10.505-5.626 10.505-10.505l-.012-.478A7.374 7.374 0 0 0 18 1.73z"
  }));
};
TwitterSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 15"
};
var YouTubeSVG = function YouTubeSVG(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M19.945 2.112c-.538-.956-1.12-1.131-2.307-1.198C16.452.834 13.47.8 10.888.8c-2.587 0-5.57.033-6.754.113-1.184.068-1.768.242-2.31 1.199-.553.954-.838 2.597-.838 5.49v.01c0 2.881.285 4.537.838 5.481.542.956 1.125 1.129 2.309 1.21 1.186.069 4.168.11 6.756.11 2.582 0 5.563-.041 6.75-.11 1.187-.08 1.77-.253 2.307-1.208.558-.945.84-2.6.84-5.481v-.01c0-2.895-.282-4.538-.841-5.492zM8.41 11.319V3.894l6.19 3.712-6.19 3.714z"
  }));
};
YouTubeSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 21 15"
};
var ribbonAsideWidth = 325;

/*
  css mixins
*/
var addressItemCSS = css(["", " display:block;padding-left:25px;position:relative;", ";"], unstyledLinkCSS, media.lg(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-block;\n    vertical-align: top;\n  "]))));
var addressIconCSS = css(["fill:rgba(255,255,255,0.2);left:0;position:absolute;top:0;transform-origin:left top;", ";"], media.xl(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    top: 2px;\n  "]))));
var socialIconCSS = css(["fill:", ";&:hover,&:focus{fill:", ";}"], colors.white, colors.gold);

/*
  inner components
*/
var PaddedFooterLink = styled(FooterLink).withConfig({
  displayName: "Footer__PaddedFooterLink",
  componentId: "sc-1s3f2bx-0"
})(["display:block;padding:10px 0;"]);
var Margins = styled.div.withConfig({
  displayName: "Footer__Margins",
  componentId: "sc-1s3f2bx-1"
})(["display:flex;flex-wrap:wrap;margin-left:auto;margin-right:auto;min-width:320px;width:calc(100% - 40px);", ";", ";", ";", ";", ";"], media.sm(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: ", "px;\n  "])), breakpoints.sm - 20), media.md(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: ", "px;\n  "])), breakpoints.md - 20), media.lg(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: ", "px;\n  "])), breakpoints.lg - 20), media.xl(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: ", "px;\n  "])), breakpoints.xl - 20), media.xxl(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: ", "px;\n  "])), breakpoints.xxl - 20));
var Wrapper = styled.footer.withConfig({
  displayName: "Footer__Wrapper",
  componentId: "sc-1s3f2bx-2"
})(["background-color:", ";*{box-sizing:border-box;}"], colors.brown);
var RibbonOuter = styled.div.withConfig({
  displayName: "Footer__RibbonOuter",
  componentId: "sc-1s3f2bx-3"
})(["padding:40px 0 50px;", ";", ";"], media.md(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    padding: 60px 0 70px;\n  "]))), media.lg(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding: 90px 0 45px;\n  "]))));
var RibbonInner = styled.div.withConfig({
  displayName: "Footer__RibbonInner",
  componentId: "sc-1s3f2bx-4"
})(["display:flex;flex-direction:column;width:100%;", ";"], media.lg(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    flex-direction: row;\n  "]))));
var RibbonGroup = styled.div.withConfig({
  displayName: "Footer__RibbonGroup",
  componentId: "sc-1s3f2bx-5"
})(["", ";"], media.lg(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    border-right: 1px solid rgba(183, 176, 156, 0.2);\n    padding-top: 15px;\n    padding-right: 50px;\n    width: calc(100% - ", "px);\n  "])), ribbonAsideWidth));
var AddressWrapper = styled.div.withConfig({
  displayName: "Footer__AddressWrapper",
  componentId: "sc-1s3f2bx-6"
})(["margin-bottom:16px;", ";"], media.xl(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-bottom: 12px;\n  "]))));
var AddressName = styled.span.withConfig({
  displayName: "Footer__AddressName",
  componentId: "sc-1s3f2bx-7"
})(["color:", ";display:block;font-family:", ";font-size:", ";font-weight:400;letter-spacing:", ";margin-bottom:26px;text-transform:uppercase;", ";", ";"], colors.taupe, typography.sans, getRems(11), getRems(1.25), media.md(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    letter-spacing: ", ";\n  "])), getRems(13), getRems(1.5)), media.lg(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin-bottom: 28px;\n  "]))));
var AddressItems = styled.div.withConfig({
  displayName: "Footer__AddressItems",
  componentId: "sc-1s3f2bx-8"
})([""]);
var AddressBaseItem = styled.a.withConfig({
  displayName: "Footer__AddressBaseItem",
  componentId: "sc-1s3f2bx-9"
})(["", " margin-bottom:14px;", ";"], addressItemCSS, media.lg(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: 40px;\n    margin-bottom: 0;\n  "]))));
var AddressPhoneItem = styled.a.withConfig({
  displayName: "Footer__AddressPhoneItem",
  componentId: "sc-1s3f2bx-10"
})(["", ""], addressItemCSS);
var AddressBaseIcon = styled(MarkerSVG).withConfig({
  displayName: "Footer__AddressBaseIcon",
  componentId: "sc-1s3f2bx-11"
})(["", " transform:scale(0.85);height:24px;width:17px;"], addressIconCSS);
var AddressPhoneIcon = styled(PhoneSVG).withConfig({
  displayName: "Footer__AddressPhoneIcon",
  componentId: "sc-1s3f2bx-12"
})(["", " height:17px;width:17px;"], addressIconCSS);
var AddressInfo = styled.span.withConfig({
  displayName: "Footer__AddressInfo",
  componentId: "sc-1s3f2bx-13"
})(["color:", ";font-family:", ";font-weight:400;line-height:1.3125;", ";", ";"], colors.white, typography.serif, media.md(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    line-height: 1.25;\n  "])), getRems(20)), media.xl(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    line-height: 1.33333;\n  "])), getRems(24)));
var NavigationHeader = styled.h2.withConfig({
  displayName: "Footer__NavigationHeader",
  componentId: "sc-1s3f2bx-14"
})(["", ""], srOnlyCSS);
var QuickNavWrapper = styled.nav.withConfig({
  displayName: "Footer__QuickNavWrapper",
  componentId: "sc-1s3f2bx-15"
})(["margin-bottom:20px;", ";"], media.xxl(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-bottom: 30px;\n  "]))));
var QuickNavList = styled.ul.withConfig({
  displayName: "Footer__QuickNavList",
  componentId: "sc-1s3f2bx-16"
})(["list-style:none;margin:0;padding:0;", ";"], media.md(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n  "]))));
var QuickNavListItem = styled.li.withConfig({
  displayName: "Footer__QuickNavListItem",
  componentId: "sc-1s3f2bx-17"
})(["", ";", ";"], media.md(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    padding-right: 20px;\n    width: 50%;\n  "]))), media.xxl(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    padding-right: 32px;\n    width: auto;\n  "]))));
var FooterNavWrapper = styled.nav.withConfig({
  displayName: "Footer__FooterNavWrapper",
  componentId: "sc-1s3f2bx-18"
})(["margin-bottom:40px;", ";", ";&:before,&:after{background:rgba(183,176,156,0.4);content:\"\";display:block;height:1px;margin:0 -10px;width:calc(100% + 20px);", ";}"], media.lg(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    border-top: 1px solid rgba(183, 176, 156, 0.2);\n    margin-bottom: 0;\n  "]))), media.xxl(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    display: inline-block;\n    vertical-align: top;\n  "]))), media.lg(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      display: none;\n    "]))));
var FooterNavList = styled.ul.withConfig({
  displayName: "Footer__FooterNavList",
  componentId: "sc-1s3f2bx-19"
})(["list-style:none;margin:0;padding:20px 0;", ";", ";"], media.md(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n  "]))), media.xxl(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    padding: 30px 0 35px;\n  "]))));
var FooterNavListItem = styled.li.withConfig({
  displayName: "Footer__FooterNavListItem",
  componentId: "sc-1s3f2bx-20"
})(["", ";", ";"], media.md(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    padding-right: 20px;\n    width: 50%;\n  "]))), media.xxl(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    padding-right: 32px;\n    width: auto;\n  "]))));
var RibbonAside = styled.div.withConfig({
  displayName: "Footer__RibbonAside",
  componentId: "sc-1s3f2bx-21"
})(["", ";"], media.lg(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    padding-left: 50px;\n    width: ", "px;\n  "])), ribbonAsideWidth));
var GiveWrapper = styled.div.withConfig({
  displayName: "Footer__GiveWrapper",
  componentId: "sc-1s3f2bx-22"
})(["", ";"], media.lg(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    width: 100%;\n  "]))));
var GiveLogo = styled.img.withConfig({
  displayName: "Footer__GiveLogo",
  componentId: "sc-1s3f2bx-23"
})(["max-width:202px;width:100%;margin-bottom:18px;"]);
var GiveCaption = styled.p.withConfig({
  displayName: "Footer__GiveCaption",
  componentId: "sc-1s3f2bx-24"
})(["color:", ";font-family:", ";font-size:", ";font-weight:400;font-style:italic;line-height:1.5;margin:0 0 16px;"], colors.taupe, typography.serif, getRems(24));
var SoleOuter = styled.div.withConfig({
  displayName: "Footer__SoleOuter",
  componentId: "sc-1s3f2bx-25"
})(["background:", ";padding:14px 0 26px;", ";"], colors.transparentBlack, media.md(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    padding: 0;\n  "]))));
var SoleInner = styled.div.withConfig({
  displayName: "Footer__SoleInner",
  componentId: "sc-1s3f2bx-26"
})(["width:100%;", ";"], media.md(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    align-items: center;\n    display: flex;\n    flex-wrap: none;\n    justify-content: space-between;\n  "]))));
var SocialNavWrapper = styled.nav.withConfig({
  displayName: "Footer__SocialNavWrapper",
  componentId: "sc-1s3f2bx-27"
})(["margin-bottom:14px;", ";"], media.md(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    margin-bottom: 0;\n    order: 2;\n  "]))));
var SocialNavList = styled.ul.withConfig({
  displayName: "Footer__SocialNavList",
  componentId: "sc-1s3f2bx-28"
})(["align-items:center;display:flex;flex-wrap:wrap;list-style:none;margin:0 -8px;padding:0;"]);
var SocialNavListItem = styled.li.withConfig({
  displayName: "Footer__SocialNavListItem",
  componentId: "sc-1s3f2bx-29"
})(["display:inline-block;vertical-align:middle;", ";"], media.md(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n    width: auto;\n  "]))));
var SocialNavLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer"
}).withConfig({
  displayName: "Footer__SocialNavLink",
  componentId: "sc-1s3f2bx-30"
})(["", " box-shadow:inset 0 0 0 1px transparent;display:flex;justify-content:center;padding:17px 8px;position:relative;text-align:center;transition:color 0.25s;", ";"], unstyledLinkCSS, media.md(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    padding: 19px 15px;\n  "]))));
var SocialFacebookIcon = styled(FacebookSVG).withConfig({
  displayName: "Footer__SocialFacebookIcon",
  componentId: "sc-1s3f2bx-31"
})(["", " height:22px;width:22px;"], socialIconCSS);
var SocialInstagramIcon = styled(InstagramSVG).withConfig({
  displayName: "Footer__SocialInstagramIcon",
  componentId: "sc-1s3f2bx-32"
})(["", " height:22px;width:22px;"], socialIconCSS);
var SocialLinkedInIcon = styled(LinkedInSVG).withConfig({
  displayName: "Footer__SocialLinkedInIcon",
  componentId: "sc-1s3f2bx-33"
})(["", " height:22px;width:22px;"], socialIconCSS);
var SocialSnapchatIcon = styled(SnapchatSVG).withConfig({
  displayName: "Footer__SocialSnapchatIcon",
  componentId: "sc-1s3f2bx-34"
})(["", " height:20px;width:22px;"], socialIconCSS);
var SocialTwitterIcon = styled(TwitterSVG).withConfig({
  displayName: "Footer__SocialTwitterIcon",
  componentId: "sc-1s3f2bx-35"
})(["", " height:18px;width:22px;"], socialIconCSS);
var SocialYouTubeIcon = styled(YouTubeSVG).withConfig({
  displayName: "Footer__SocialYouTubeIcon",
  componentId: "sc-1s3f2bx-36"
})(["", " height:16px;width:22px;"], socialIconCSS);
var SocialIconLabel = styled.span.withConfig({
  displayName: "Footer__SocialIconLabel",
  componentId: "sc-1s3f2bx-37"
})(["", ""], srOnlyCSS);
var Copyright = styled.p.withConfig({
  displayName: "Footer__Copyright",
  componentId: "sc-1s3f2bx-38"
})(["border-top:1px solid rgba(183,176,156,0.2);color:", ";font-family:", ";font-size:", ";font-weight:400;margin:0 -10px;padding-top:20px;", ";"], colors.taupe, typography.serif, getRems(14), media.md(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n    border-top: 0;\n    font-size: ", ";\n    margin: 0;\n    order: 1;\n    padding-top: 0;\n    position: relative;\n    top: 2px;\n  "])), getRems(20)));

/*
  outer Footer component
*/
var Footer = function Footer() {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(RibbonOuter, null, /*#__PURE__*/React.createElement(Margins, null, /*#__PURE__*/React.createElement(RibbonInner, null, /*#__PURE__*/React.createElement(RibbonGroup, null, /*#__PURE__*/React.createElement(AddressWrapper, null, /*#__PURE__*/React.createElement(AddressName, null, "Brown University"), /*#__PURE__*/React.createElement(AddressItems, null, /*#__PURE__*/React.createElement(AddressBaseItem, {
    href: "https://www.google.com/maps/dir/?api=1&destination=Brown%20University%2075%20Waterman%20Street%20%20%20%20%20%20%20%20Providence%2C%20RI%2002912",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(AddressBaseIcon, null), " ", /*#__PURE__*/React.createElement(AddressInfo, null, "Providence, RI 02912")), /*#__PURE__*/React.createElement(AddressPhoneItem, {
    href: "tel:4018631000"
  }, /*#__PURE__*/React.createElement(AddressPhoneIcon, null), " ", /*#__PURE__*/React.createElement(AddressInfo, null, "401-863-1000")))), /*#__PURE__*/React.createElement(QuickNavWrapper, null, /*#__PURE__*/React.createElement(NavigationHeader, null, "Quick Navigation"), /*#__PURE__*/React.createElement(QuickNavList, {
    "aria-label": "Quick Navigation"
  }, /*#__PURE__*/React.createElement(QuickNavListItem, null, /*#__PURE__*/React.createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/about/visit"
  }, "Visit Brown")), /*#__PURE__*/React.createElement(QuickNavListItem, null, /*#__PURE__*/React.createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/Facilities/Facilities_Management/maps/#building/"
  }, "Campus Map")), /*#__PURE__*/React.createElement(QuickNavListItem, null, /*#__PURE__*/React.createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/a-z"
  }, "A to Z")), /*#__PURE__*/React.createElement(QuickNavListItem, null, /*#__PURE__*/React.createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/about/contact-us"
  }, "Contact Us")))), /*#__PURE__*/React.createElement(FooterNavWrapper, null, /*#__PURE__*/React.createElement(NavigationHeader, null, "Footer Navigation"), /*#__PURE__*/React.createElement(FooterNavList, {
    "aria-label": "Footer Navigation"
  }, /*#__PURE__*/React.createElement(FooterNavListItem, null, /*#__PURE__*/React.createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/news"
  }, "News")), /*#__PURE__*/React.createElement(FooterNavListItem, null, /*#__PURE__*/React.createElement(PaddedFooterLink, {
    href: "https://events.brown.edu/"
  }, "Events")), /*#__PURE__*/React.createElement(FooterNavListItem, null, /*#__PURE__*/React.createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/about/administration/public-safety/"
  }, "Campus Safety")), /*#__PURE__*/React.createElement(FooterNavListItem, null, /*#__PURE__*/React.createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/website-accessibility"
  }, "Accessibility")), /*#__PURE__*/React.createElement(FooterNavListItem, null, /*#__PURE__*/React.createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/about/administration/human-resources/employment-performance-development/jobsbrown"
  }, "Careers At Brown"))))), /*#__PURE__*/React.createElement(RibbonAside, null, /*#__PURE__*/React.createElement(GiveWrapper, null, /*#__PURE__*/React.createElement(GiveLogo, {
    src: giveLogoSrc,
    alt: "Brown Together"
  }), /*#__PURE__*/React.createElement(GiveCaption, null, "The campaign for building on distinction"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "https://giving.brown.edu/"
  }, "Give To Brown")))))), /*#__PURE__*/React.createElement(SoleOuter, null, /*#__PURE__*/React.createElement(Margins, null, /*#__PURE__*/React.createElement(SoleInner, null, /*#__PURE__*/React.createElement(SocialNavWrapper, null, /*#__PURE__*/React.createElement(NavigationHeader, null, "Social Navigation"), /*#__PURE__*/React.createElement(SocialNavList, {
    "aria-label": "Social Navigation"
  }, /*#__PURE__*/React.createElement(SocialNavListItem, null, /*#__PURE__*/React.createElement(SocialNavLink, {
    href: "https://www.facebook.com/BrownUniversity"
  }, /*#__PURE__*/React.createElement(SocialFacebookIcon, null), /*#__PURE__*/React.createElement(SocialIconLabel, null, "Facebook"))), /*#__PURE__*/React.createElement(SocialNavListItem, null, /*#__PURE__*/React.createElement(SocialNavLink, {
    href: "https://instagram.com/brownu"
  }, /*#__PURE__*/React.createElement(SocialInstagramIcon, null), /*#__PURE__*/React.createElement(SocialIconLabel, null, "Instagram"))), /*#__PURE__*/React.createElement(SocialNavListItem, null, /*#__PURE__*/React.createElement(SocialNavLink, {
    href: "https://www.linkedin.com/edu/school?id=19348"
  }, /*#__PURE__*/React.createElement(SocialLinkedInIcon, null), /*#__PURE__*/React.createElement(SocialIconLabel, null, "LinkedIn"))), /*#__PURE__*/React.createElement(SocialNavListItem, null, /*#__PURE__*/React.createElement(SocialNavLink, {
    href: "https://www.snapchat.com/add/brown-u"
  }, /*#__PURE__*/React.createElement(SocialSnapchatIcon, null), /*#__PURE__*/React.createElement(SocialIconLabel, null, "Snapchat"))), /*#__PURE__*/React.createElement(SocialNavListItem, null, /*#__PURE__*/React.createElement(SocialNavLink, {
    href: "https://twitter.com/BrownUniversity"
  }, /*#__PURE__*/React.createElement(SocialTwitterIcon, null), /*#__PURE__*/React.createElement(SocialIconLabel, null, "Twitter"))), /*#__PURE__*/React.createElement(SocialNavListItem, null, /*#__PURE__*/React.createElement(SocialNavLink, {
    href: "https://www.youtube.com/brownuniversity"
  }, /*#__PURE__*/React.createElement(SocialYouTubeIcon, null), /*#__PURE__*/React.createElement(SocialIconLabel, null, "YouTube"))))), /*#__PURE__*/React.createElement(Copyright, null, "\xA9 Brown University")))));
};
export default Footer;