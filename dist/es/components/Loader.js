function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes } from 'styled-components';

var LoaderSVG = function LoaderSVG(props) {
  return React.createElement("svg", props, React.createElement("title", {
    id: "title"
  }, "Loading..."), React.createElement("path", {
    className: "rays",
    id: "rays",
    fill: "#F0F3F5",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeMiterlimit: "10",
    d: "M102 64.6s-5.1-1.9-7.9-2.1c-3.1-.3-6.9-.5-6.9-.5-2.3-.3-3.7-.7-4.5-.9 0-.4.1-.8.1-1.2 0-.5 0-1-.1-1.5.8-.3 2.2-.6 4.5-.9 0 0 3.8-.2 6.9-.4 2.8-.2 7.9-2.1 7.9-2.1 1.4-.4 2.2-.6 6.4-1.7 0 0 .5 0 0-.2-.2-.1-1.1-.3-1.1-.3s-1.5-.3-4.5-.4H101c-.7 0-3.1 0-4.9.3-1.8.3-6.8.1-6.8.1s-5.6-.6-7.6 1.4l-.1.1c-.2-.4-.4-.7-.6-1.1.4-.3 3.3-2.3 6.3-6.1 0 0 1.8-1.7 4-2.7 2.6-1.1 5.5-4.8 5.5-4.8s1.5-2.3 4.5-3.9c0 0 .4-.2-.1-.2-.2 0-.8.2-.8.2s-2 .9-4.7 2.3c0 0-.9.4-1.5.7-.6.3-2.8 1.4-4.2 2.6-1.2 1.1-4.7 3.6-4.7 3.6s-6.1 3.7-6.7 5.3c-.4-.4-.8-.7-1.3-1 .6-.9 1.3-2.4 1.8-4.6 0 0 .7-2.4 2.5-4.6 1.8-2.2 2.3-6.8 2.3-6.8s.2-2.4 2.1-5.2c0 0 .3-.4-.2-.1-.2.1-.6.6-.6.6s-1.5 1.3-3.3 3.8c0 0-.6.7-1 1.3-.4.5-1.8 2.6-2.5 4.2S75 42.7 75 42.7s-1.7 2.2-2.1 4.4c-.5-.1-.9-.2-1.4-.3.9-2.1.2-5 .2-5s-.9-4.3-.6-5.9c.3-1.8 0-4.2-.1-4.9 0-.7-.2-1.6-.2-1.6-.3-3-.9-5-.9-5s-.2-.6-.3-.8c-.2-.5-.2 0-.2 0 .3 3.4-.6 5.7-.6 5.7s-1.8 4.3-1.3 7.1c.4 2.8-.1 4.8-.1 4.8-.4 2.6-.2 4.5 0 5.6-.5.1-1 .2-1.5.4-.5-2.4-3-4.6-3-4.6s-2.5-3-3.2-5c-.6-1.7-2.2-3.7-2.5-4.2-.4-.5-1-1.3-1-1.3-1.7-2.1-3.2-3.5-3.2-3.5l-.6-.6c-.5-.3-.2.1-.2.1 2 2.8 2.3 5.2 2.3 5.2s.9 4.6 2.7 6.8c1.8 2.2 2.4 4.5 2.4 4.5.8 2.5 1.9 4.1 2.6 4.9-.4.3-.8.7-1.2 1-1-2.1-6.3-3.9-6.3-3.9s-3.2-1.5-4.9-3.2c-1.3-1.3-3.6-2.3-4.2-2.6-.6-.3-1.5-.7-1.5-.7-2.5-1.6-4-2.5-4-2.5s-.6-.2-.8-.2c-.5-.1-.1.2-.1.2 2 2.1 3.8 4.1 3.8 4.1s2.4 3 4.8 4.5c2.3 1.5 4 3.8 4 3.8 2.7 3.1 5.4 3.8 5.4 3.8l1.2.2-.6 1.2-.2-.1c-2-2-6.4-1.5-6.4-1.5s-4.4.3-5.9-.1c-1.8-.4-4.2-.3-4.9-.3s-1.6.1-1.6.1c-3.1 0-5 .6-5 .6s-.6.1-.8.1c-.5.2 0 .2 0 .2 3.4-.1 5.6 1 5.6 1s4.3 1.8 7.1 1.6c2.8-.2 4.8.4 4.8.4 3.9 1.4 6.3 1.6 6.3 1.6h.1c0 .4-.1.7-.1 1.1v.8h-.1s-2.5.2-6.3 1.6c0 0-2 .6-4.8.4-2.8-.2-7.1 1.6-7.1 1.6s-2.2 1.1-5.6 1c0 0-.5 0 0 .2.2.1.8.2.8.2s2 .5 5 .6c0 0 1 .1 1.6.1s3.1.2 4.9-.3c1.6-.4 5.9-.1 5.9-.1s4.4.5 6.4-1.5l.1-.1c.1.4.3.8.5 1.2l-1 .2s-2.8.6-5.4 3.8c0 0-1.7 2.3-4 3.8-2.4 1.5-4.8 4.5-4.8 4.5s-1.8 2-3.8 4.1c0 0-.4.2.1.2.2 0 .8-.2.8-.2s1.6-.8 4-2.5c0 0 .9-.4 1.5-.7.6-.3 2.9-1.3 4.2-2.6 1.7-1.7 4.9-3.2 4.9-3.2s5-1.6 6.2-3.7c.4.4.8.7 1.2 1-.7.9-1.7 2.4-2.4 4.7 0 0-.6 2.2-2.4 4.5-1.8 2.2-2.7 6.8-2.7 6.8s-.4 2.4-2.3 5.2c0 0-.3.4.2.1.2-.1.6-.6.6-.6s1.5-1.3 3.3-3.8c0 0 .6-.7 1-1.3.4-.5 1.9-2.5 2.5-4.2.7-2 3.2-5 3.2-5s2.3-2 2.9-4.3c.5.2 1 .3 1.5.4-.2 1.1-.3 3 0 5.3 0 0 .5 2 .1 4.8s1.3 7.1 1.3 7.1.9 2.3.6 5.7c0 0 0 .5.2 0 .1-.2.3-.8.3-.8s.6-1.9.9-5c0 0 .2-.9.2-1.6 0-.7.4-3.1.1-4.9-.3-1.6.6-5.9.6-5.9s.6-2.6-.1-4.7c.5-.1.9-.1 1.3-.3.5 2.2 2.1 4.2 2.1 4.2s2.6 3.4 3.4 4.9c.8 1.6 2.2 3.7 2.5 4.2.4.5 1 1.3 1 1.3 1.7 2.5 3.3 3.8 3.3 3.8l.6.6c.5.3.2-.1.2-.1-2-2.8-2.1-5.2-2.1-5.2s-.5-4.6-2.3-6.8c-1.8-2.2-2.5-4.6-2.5-4.6-.5-2-1.1-3.4-1.7-4.3.4-.3.9-.7 1.2-1 1 1.7 6.6 5.1 6.6 5.1s3.5 2.5 4.7 3.6c1.3 1.2 3.6 2.3 4.2 2.6.6.3 1.5.7 1.5.7 2.7 1.4 4.7 2.3 4.7 2.3s.6.2.8.2c.5.1.1-.2.1-.2-3-1.6-4.5-3.9-4.5-3.9s-2.9-3.7-5.5-4.8c-2.3-1-4-2.7-4-2.7-2.7-3.5-5.4-5.5-6.1-6 .2-.3.4-.7.5-1 2 2 7.6 1.4 7.6 1.4s5-.2 6.8.1c1.8.3 4.2.3 4.9.3h1.8c3.1 0 4.5-.4 4.5-.4s.9-.2 1.1-.3c.5-.2 0-.2 0-.2-4.1-1.2-4.8-1.3-6.3-1.7z"
  }), React.createElement("circle", {
    className: "st5",
    fill: "#F0F3F5",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeMiterlimit: "10",
    cx: "69.9",
    cy: "59.9",
    r: "13",
    id: "sun_1_"
  }), React.createElement("g", {
    fill: "#6C757C",
    id: "sun_eyes__x26__mouth"
  }, React.createElement("path", {
    d: "M67.1 55.7c0 .8-.7 1.4-1.5 1.4s-1.4-.7-1.4-1.5v-.2c-.1-.2-.8-.4-1.7.2-.5.3-1 .1-.2-.6.9-.8 1.7-1.2 2.5-1.3 1.2-.1 2.9.2 3.6.5.3.1 0 1.7-.1 1.7-.3-.1-.8-.3-1.3-.2h.1M71.2 60c-.3.7-2.8 1-3.3 0-.2-.4-.4-1.3-.1-1.1.6.3 2.6.1 3 0 .3-.1.1-.6.3-.5.3 0 .3.9.1 1.6M77.2 55.9c-.6-.5-1.5-.8-1.8-.5v.1c.1.8-.5 1.5-1.3 1.5-.8.1-1.5-.5-1.5-1.3v-.1c-.5-.2-1.3.1-1.4.1-.1 0-.4-1.5 0-1.7 1.2-.5 5.2-.7 6.4 1.5.1.4 0 .7-.4.4"
  })), React.createElement("path", {
    stroke: "#F0F3F5",
    strokeWidth: "9",
    d: "M26 72h88",
    id: "cover"
  }), React.createElement("g", {
    id: "shield"
  }, React.createElement("path", {
    fill: "#F0F3F5",
    d: "M32.5 76.4l74.2.1v41.7s2.8 30-36.8 36.2c0 0-36.3-2.9-37.2-35.4l-.2-42.6z"
  }), React.createElement("path", {
    fill: "none",
    d: "M46.4 82.8c-1.8.1-3.6.8-4.7.6v12.3s.7.5 2.5 0c2.4-.7 3.4.1 3.4.1V83.3c.1 0-.2-.5-1.2-.5zM93.1 82.8c-1 0-1.3.5-1.3.5v12.4s1.1-.7 3.5-.1c1.8.5 2.5 0 2.5 0V83.4c-1.1.2-2.9-.6-4.7-.6z"
  }), React.createElement("path", {
    fill: "none",
    d: "M105.7 77.3H76.2v26.8h29.5V77.3zm-4.4 21.3h-8.5v1.1h-3.5v-1.1h-8.5V84.3h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v14.3zM63.3 77.3H33.8v26.8h29.5V77.3zm-4.5 21.3h-8.5v1.1h-3.5v-1.1h-8.5V84.3h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v14.3z"
  }), React.createElement("path", {
    fill: "none",
    d: "M50.8 82.8c-1 0-1.3.5-1.3.5v12.4s1.1-.7 3.5-.1c1.8.5 2.5 0 2.5 0V83.4c-1 .2-2.8-.6-4.7-.6zM47.7 134.3v-12.4s-.3-.6-1.3-.5c-1.8.1-3.6.8-4.7.6v12.3s.7.5 2.5 0c2.4-.7 3.5 0 3.5 0zM53 134.3c1.8.5 2.5 0 2.5 0V122c-1.1.2-2.9-.5-4.7-.6-1 0-1.3.5-1.3.5v12.4c.1 0 1.1-.7 3.5 0z"
  }), React.createElement("path", {
    fill: "none",
    d: "M38.4 135.7v-12.8h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v14.3h-8.5v1.1h-3.5v-1.1h-7.5c1.2 1.8 2.6 3.5 4.3 5.1 4.7 4.4 12.1 7.4 19.7 9.6v-35.8H33.8l.1 1.1c.2 7.4 1.6 13.5 4.5 18.5z"
  }), React.createElement("path", {
    fill: "none",
    d: "M64.9 152.4l4.9 1.3 4.9-1.3v-38h31v-8.7h-31V77.3h-9.8v28.4H33.8v8.7h31.1z"
  }), React.createElement("path", {
    fill: "none",
    d: "M88.7 82.8c-1.8.1-3.6.8-4.7.6v12.3s.7.5 2.5 0c2.4-.7 3.4.1 3.4.1V83.3c.1 0-.2-.5-1.2-.5zM76.2 116.1V152c7.4-2.2 14.8-5 19.8-9.6 1.8-1.6 3.2-3.3 4.5-5.1h-7.6v1.1h-3.5v-1.1h-8.5V123h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v12.9c2.7-4.7 4-10.5 4.4-18.5l-.1-1.2H76.2z"
  }), React.createElement("path", {
    fill: "none",
    d: "M84.2 122v12.3s.7.5 2.5 0c2.4-.7 3.5.1 3.5.1V122s-.3-.6-1.3-.5c-1.8-.1-3.6.7-4.7.5zM92.1 121.9v12.4s1.1-.7 3.4-.1c1.8.5 2.5 0 2.5 0V122c-1.1.2-2.9-.5-4.7-.6-1-.1-1.2.5-1.2.5z"
  }), React.createElement("path", {
    fill: "#6C757C",
    d: "M32 115.1c0 13.1 3.3 22.2 10.3 28.5 6.9 6.3 17.4 9.5 27.5 11.9 10.5-2.5 20.5-5.5 27.5-11.9s10.3-15.4 10.3-28.5V75.5H32v39.6zm69.3 20.7v-12.9h-1.8v-2.6c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v14.3h8.5v1.1h3.5v-1.1h7.6c-1.2 1.8-2.7 3.5-4.5 5.1-5 4.6-12.4 7.4-19.8 9.6V116h29.5l.1 1.2c-.4 8.2-1.7 13.9-4.5 18.6zM98 122v12.3s-.7.5-2.5 0c-2.4-.7-3.4.1-3.4.1V122s.3-.6 1.3-.5c1.8-.1 3.6.7 4.6.5zm-7.8-.1v12.4s-1.1-.7-3.5-.1c-1.8.5-2.5 0-2.5 0V122c1.1.2 2.9-.5 4.7-.6 1-.1 1.3.5 1.3.5zm-14-44.6h29.5v26.8H76.2V77.3zm-42.4 0h29.5v26.8H33.8V77.3zm0 28.4h31.1V77.3h9.8v28.4h31.1v8.7H74.7v38l-4.9 1.2-4.9-1.3v-38H33.8v-8.6zm29.5 10.4v35.8c-7.6-2.2-15-5.2-19.7-9.6-1.7-1.6-3.1-3.3-4.3-5.1h7.5v1.1h3.5v-1.1h8.5v-14.3H57v-2.6c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v12.8c-2.9-5-4.3-11.1-4.6-18.5l-.1-1.1h29.6zm-21.6 18.2V122c1.1.2 2.9-.5 4.7-.6 1 0 1.3.5 1.3.5v12.4s-1.1-.7-3.5-.1c-1.8.6-2.5.1-2.5.1zm7.9 0v-12.4s.3-.6 1.3-.5c1.8.1 3.6.8 4.7.6v12.3s-.7.5-2.5 0c-2.5-.7-3.5 0-3.5 0z"
  }), React.createElement("path", {
    fill: "#6C757C",
    d: "M57 81.7c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v14.3h8.5v1.1h3.5v-1.1h8.5V84.3H57v-2.6zm-9.3 14s-1.1-.7-3.4-.1c-1.8.5-2.5 0-2.5 0V83.4c1.1.2 2.9-.5 4.7-.6 1 0 1.3.5 1.3.5v12.4zm7.8 0s-.7.5-2.5 0c-2.4-.7-3.5.1-3.5.1V83.3s.3-.6 1.3-.5c1.8.1 3.6.8 4.7.6v12.3zM99.5 81.7c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v14.3h8.5v1.1h3.5v-1.1h8.5V84.3h-1.8v-2.6zm-9.5 14s-1.1-.7-3.4-.1c-1.8.5-2.5 0-2.5 0V83.4c1.1.2 2.9-.5 4.7-.6 1 0 1.3.5 1.3.5v12.4zm7.8 0s-.7.5-2.5 0c-2.4-.7-3.5.1-3.5.1V83.3s.3-.6 1.3-.5c1.8.1 3.6.8 4.7.6v12.3z"
  })), React.createElement("g", {
    id: "clouds_of_ignorance"
  }, React.createElement("path", {
    className: "st5",
    fill: "#F0F3F5",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeMiterlimit: "10",
    d: "M41 40.3s.6-4.1 5.8-4.6c0 0 .4-8.5 10.9-4.5 0 0 2.2-9.3 12.4-3.8 0 0 8.3-5.3 13.7 4.3 0 0 6.9-2.8 7.9 3.5 0 0 7.6-2.7 9.4 3.8 0 0 5.7-.2 4.7 5.7 0 0-.5 5-9 1.9 0 0-7.7 3.9-11.1-4.8 0 0-6.4 1.9-8.4-4.6 0 0-6.1 4.1-10.8-.5 0 0-3 4.1-8.6 3.2 0 0-2.7 3.3-7.3 2.2 0 0 1.6 7.7-9.4 6.2 0 0-4.3 2.5-6.3-1.8-2-4.6 6.1-6.2 6.1-6.2z"
  }), React.createElement("path", {
    className: "st6",
    fill: "none",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    d: "M36.7 45.7s.3-3.5 4.8-3.1"
  }), React.createElement("path", {
    className: "st7",
    fill: "none",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M43.3 41s.5-2.8 3.7-2.7M48.9 36.9s1.3-5.6 6.6-3.7M60.2 31.4s3.9-5.2 8.2-1.5M70.7 30.8s6.4-5 10.4 2.1M84.1 34.3s4.5-2 5.3 2M92 38.2s5-2.3 6.7 2.4M100.1 41.8c.1 0 3.7-.8 3.1 3.1"
  })), React.createElement("g", {
    id: "decor"
  }, React.createElement("path", {
    className: "st8",
    fill: "#F0F3F5",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M43.4 62.8s-5.9-3.7-9.7.4c0 0-1.6 1.8-.3 4.3 1.5 2.8 4.9 2.7 6.9.9 0 0 1.8 2.8 6.5.1 0 0 5.6 2.7 11.6-.1 0 0 2 2.4 6.3.4 0 0 2.7 2.4 6.3-.2 0 0 6.5 3 11.9-.3 0 0 2.3 2.6 6.1.4 0 0 2.6 2.6 6.4-.2 0 0 3.3 2 8.4.7 0 0 3.1-.8 2.3-3.2-1-2.9-3.8-6.3-13.6-3.1 0 0-6.7-2.9-12.4.5 0 0-4.7-3.7-12.1 0 0 0-3.1-3.6-12.4-.4-.2 0-4.5-3.7-12.2-.2z"
  }), React.createElement("path", {
    className: "st9",
    fill: "#FFF",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M37.1 65.4s1.1 0 1.6.8 1.6 2.1 1.6 2.1M43.2 62.6s1.2 1.4 1.7 2.8 1.7 3.1 2.8 3.5M55.7 63.2c.4.5 1 1.4 1.3 2.3.5 1.4 1.5 3.3 2.7 3.7M67.9 63.4c.4.5.8 1.3 1.1 2 .4 1.1 1.2 2.4 2.1 3M79.5 63.1c.4.5.8 1.3 1.1 2 .4 1.1 1.2 2.4 2.1 3M92.2 63c.4.5.8 1.3 1.1 2 .4 1.1 1 2.6 1.9 3.3M61.2 65.4s.9 0 1.7 1.1 1.8 2.4 2.5 2.7M85.8 65.6s1 .2 1.6 1.2c.6 1 1.9 2.3 2.8 2.7"
  })));
};

LoaderSVG.defaultProps = {
  viewBox: "0 0 140 180",
  role: "img",
  'aria-labelledby': "title"
};
/*
  inner components
*/

var spin = keyframes([" 100%{transform:rotate(360deg);}"]);
var LoaderWrapper = styled.div.withConfig({
  displayName: "Loader__LoaderWrapper",
  componentId: "sc-1nddroc-0"
})(["svg{#rays{transform-origin:center;transform-box:fill-box;animation:", " 7s linear infinite;}}"], spin);
/*
  outer Loader component
*/

var Loader = function Loader(_ref) {
  var height = _ref.height,
      restProps = _objectWithoutProperties(_ref, ["height"]);

  return React.createElement(LoaderWrapper, restProps, React.createElement(LoaderSVG, {
    width: Math.floor(height * 0.77),
    height: height
  }));
};

Loader.propTypes = {
  height: PropTypes.number
};
Loader.defaultProps = {
  height: 250
};
export default Loader;