import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTypography {
  static double scaledFontSize(double fontSize) => fontSize * 2 / 3;

  static TextStyle headingDisplay = GoogleFonts.unbounded(
    fontSize: scaledFontSize(77),
    height: 1.2,
    fontWeight: FontWeight.bold,
  );

  static TextStyle headingLarge = GoogleFonts.unbounded(
    fontSize: scaledFontSize(53.7),
    height: 1.5,
    fontWeight: FontWeight.w600,
  );

  static TextStyle headingSmall = GoogleFonts.unbounded(
    fontSize: scaledFontSize(53.7),
    height: 1.5,
    fontWeight: FontWeight.w200,
  );

  static TextStyle heading = GoogleFonts.unbounded(
    fontSize: scaledFontSize(44),
    height: 1.2,
    fontWeight: FontWeight.bold,
  );

  // static TextStyle headingSmall = TextStyle(
  //   fontSize: scaledFontSize(37),
  //   height: 1.2,
  //   fontFamily: _fontFamily.fontFamily,
  //   fontWeight: FontWeight.bold,
  // );

  static TextStyle subtitleLarge = GoogleFonts.unbounded(
    fontSize: scaledFontSize(31),
    height: 1.2,
    fontWeight: FontWeight.w600,
  );

  static TextStyle subtitle = GoogleFonts.unbounded(
    fontSize: scaledFontSize(26),
    height: 1.5,
    fontWeight: FontWeight.w600,
  );

  static TextStyle paragraphLarge = GoogleFonts.unbounded(
    fontSize: scaledFontSize(22),
    height: 1.5,
    fontWeight: FontWeight.normal,
  );

  static TextStyle paragraph = GoogleFonts.unbounded(
    fontSize: scaledFontSize(18),
    height: 1.5,
    fontWeight: FontWeight.normal,
  );

  static TextStyle paragraphSmall = GoogleFonts.unbounded(
    fontSize: scaledFontSize(15),
    height: 1.5,
    fontWeight: FontWeight.normal,
  );

  static TextStyle label = GoogleFonts.unbounded(
    fontSize: scaledFontSize(12.5),
    height: 1.5,
    fontWeight: FontWeight.w500,
  );
  static TextStyle labelSmall = GoogleFonts.unbounded(
    fontSize: scaledFontSize(12.5),
    height: 1.5,
    fontWeight: FontWeight.w200,
  );
}
