import 'package:device_preview/device_preview.dart';
import 'package:flutter/material.dart';
import 'package:timer_web/home_page.dart';
import 'package:timer_web/theme/theme.dart';

void main() {
  runApp(DevicePreview(builder: (_) => MainApp()));
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Temporizador',
      theme: appTheme,
      debugShowCheckedModeBanner: false,
      builder: DevicePreview.appBuilder,
      locale: DevicePreview.locale(context),
      home: const HomePage(),
    );
  }
}
