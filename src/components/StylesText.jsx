import React from 'react';
import {Text, StyleSheet} from 'react-native';
import theme from '../theme.js';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeigths.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  blue: {
    color: theme.colors.blue,
  },
  bold: {
    fontWeight: theme.fontWeigths.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlingCenter: {
    textAlign: 'center',
  },
});

export default function StylesText({
  children,
  aling,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    aling === 'center' && styles.textAlingCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    color === 'blue' && styles.blue,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
