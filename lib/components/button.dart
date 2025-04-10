// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:flutter/material.dart';
import 'package:timer_web/theme/app_gradients.dart';
import 'package:timer_web/theme/typography.dart';

class Button extends StatelessWidget {
  final String text;
  final IconData? icon;
  final Function? onTap;
  final double fator;
  final double fontSize2;

  const Button({
    super.key,
    required this.text,
    this.icon,
    this.onTap,
    required this.fator,
    required this.fontSize2,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        if (onTap != null) {
          onTap!();
        }
      },
      child: Container(
        height: 40 * fator,
        width: 180 * fator,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(32),
          gradient: AppGradients.linearBotoes,
        ),
        child: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              icon != null
                  ? Icon(icon, color: Colors.white, size: fontSize2)
                  : Container(),
              const SizedBox(width: 8),
              Text(
                text,
                style: AppTypography.label.copyWith(
                  color: Colors.white,
                  fontWeight: FontWeight.w600,
                  fontSize: fontSize2,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
