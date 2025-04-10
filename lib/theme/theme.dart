import 'package:flutter/material.dart';
import 'package:timer_web/theme/app_colors.dart';
import 'typography.dart';

ThemeData appTheme = ThemeData(
  textTheme: TextTheme(
    displayLarge: AppTypography.headingDisplay,
    displayMedium: AppTypography.headingLarge,
    displaySmall: AppTypography.heading,
    headlineMedium: AppTypography.headingSmall,
    titleLarge: AppTypography.subtitleLarge,
    titleMedium: AppTypography.subtitle,
    bodyLarge: AppTypography.paragraphLarge,
    bodyMedium: AppTypography.paragraph,
    bodySmall: AppTypography.paragraphSmall,
    labelSmall: AppTypography.label,
  ),

  brightness: Brightness.dark,
  scaffoldBackgroundColor: Colors.black,

  colorScheme: ColorScheme.dark(
    primary: AppColors.azulRoyal,
    secondary: AppColors.lilas,
    background: Colors.black,
    surface: AppColors.fundoCardsTarefas,
    onPrimary: Colors.white,
    onSecondary: Colors.white,
    onBackground: Colors.white,
    onSurface: Colors.black,
  ),
);
