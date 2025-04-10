import 'package:flutter/material.dart';
import 'package:timer_web/consts.dart';
import 'package:timer_web/theme/app_colors.dart';
import 'package:timer_web/theme/typography.dart';

class CategoriaCronometro extends StatelessWidget {
  final String text;
  final bool isSelecionado;
  final double fontSize2;

  const CategoriaCronometro({
    super.key,
    required this.text,
    this.isSelecionado = false,
    required this.fontSize2,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: isSelecionado ? AppColors.azulRoyal : Colors.transparent,
        borderRadius: BorderRadius.circular(8 * value),
      ),
      padding: EdgeInsets.symmetric(horizontal: 8 * value, vertical: 8 * value),
      child: Text(
        text,
        style:
            isSelecionado
                ? AppTypography.label.copyWith(
                  color: Colors.white,
                  fontSize: fontSize2,
                )
                : AppTypography.labelSmall.copyWith(
                  color: Colors.white,
                  fontSize: fontSize2,
                ),
      ),
    );
  }
}
