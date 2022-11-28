/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBar from "./NavBar";
import HeroLayout1 from "./HeroLayout1";
import Features2x2 from "./Features2x2";
import { Flex } from "@aws-amplify/ui-react";
export default function HomePage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomePage")}
    >
      <NavBar
        display="flex"
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
      <HeroLayout1
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="478px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        mode="Light"
        {...getOverrideProps(overrides, "HeroLayout1")}
      ></HeroLayout1>
      <Features2x2
        display="flex"
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="40px 160px 40px 160px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "Features2x2")}
      ></Features2x2>
    </Flex>
  );
}
