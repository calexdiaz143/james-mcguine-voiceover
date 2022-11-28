/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Features2x2 from "./Features2x2";
import NavBar from "./NavBar";
import HeroLayout1 from "./HeroLayout1";
import { View } from "@aws-amplify/ui-react";
export default function HomePage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="2400px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomePage")}
    >
      <Features2x2
        display="flex"
        gap="0"
        direction="column"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="593px"
        left="0px"
        padding="40px 160px 40px 160px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "Features2x2")}
      ></Features2x2>
      <NavBar
        display="flex"
        gap="20px"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
      <HeroLayout1
        display="flex"
        gap="0"
        direction="row"
        width="1440px"
        height="500px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="93px"
        left="0px"
        padding="0px 0px 0px 0px"
        mode="Light"
        {...getOverrideProps(overrides, "HeroLayout1")}
      ></HeroLayout1>
    </View>
  );
}
