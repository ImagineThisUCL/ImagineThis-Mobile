import React, { Component } from "react"
import { StyleSheet } from "react-native"
import {Text} from "react-native"

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
  default: {
    marginBottom: base.margin,
    fontSize: base.font.smallest
  },
  noMargin: {
    marginBottom: 0
  },
  smallMargin: {
    marginBottom: base.margin / 2
  },
  topMargin: {
    marginTop: base.margin
  },
  smallFont: {
    fontSize: base.font.small
  },
  mediumFont: {
    fontSize: base.font.medium
  },
  largeFont: {
    fontSize: base.font.large
  },
  heading: {
    fontSize: base.font.large,
    color: base.colors.blueHeadings
  },
  smallHeading: {
    fontSize: base.font.small,
    color: base.colors.blueHeadings,
    marginBottom: base.margin / 3
  },
  largeHeading: {
    fontSize: base.font.heading,
    color: base.colors.white,
    paddingHorizontal: base.padding,
    marginBottom: base.margin * 1.5
  },
  textCenter: {
    textAlign: "center"
  },
  secondary: {
    color: base.colors.blueSecondary
  },
  grey: {
    color: base.colors.grey
  },
  dark: {
    color: base.colors.darkSecondary
  },
  bottomSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: base.colors.greyLight,
    paddingBottom: base.padding / 2
  },


})

class P extends Component {
  render() {
    let styleList = [styles.default]
    if (this.props.noMargin) styleList.push(styles.noMargin)
    if (this.props.topMargin) styleList.push(styles.topMargin)
    if (this.props.smallMargin) styleList.push(styles.smallMargin)
    if (this.props.smallFont) styleList.push(styles.smallFont)
    if (this.props.mediumFont) styleList.push(styles.mediumFont)
    if (this.props.largeFont) styleList.push(styles.largeFont)
    if (this.props.heading) styleList.push(styles.heading)
    if (this.props.smallHeading) styleList.push(styles.smallHeading)
    if (this.props.largeHeading) styleList.push(styles.largeHeading)
    if (this.props.textCenter) styleList.push(styles.textCenter)
    if (this.props.secondary) styleList.push(styles.secondary)
    if (this.props.red) styleList.push(styles.red)
    if (this.props.grey) styleList.push(styles.grey)
    if (this.props.dark) styleList.push(styles.dark)
    if (this.props.bottomSeparator) styleList.push(styles.bottomSeparator)
    styleList.push({fontSize: this.props.fontSize})

    return (
      <Text {...this.props} style={[...styleList, this.props.style]}/>
    )
  }
}

export default P;