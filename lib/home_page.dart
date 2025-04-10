import 'dart:async';

import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:just_audio/just_audio.dart';
import 'package:timer_web/breakpoints.dart';
import 'package:timer_web/components/button.dart';
import 'package:timer_web/components/categoria.dart';
import 'package:timer_web/consts.dart';
import 'package:timer_web/theme/app_colors.dart';
import 'package:timer_web/theme/typography.dart';
import 'package:flutter_switch/flutter_switch.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int selecionado = 0;
  int _tempoRestante = 1500;
  Timer? _timer;
  bool _ativo = false;
  bool _zerou = false;
  bool _switchValue = false;

  final AudioPlayer _player = AudioPlayer();

  @override
  void dispose() {
    _timer?.cancel();
    _player.dispose();
    super.dispose();
  }

  bool get _podePausar => _ativo;
  bool get _podeResetar => _zerou;

  void _selecionarCategoria(int index) {
    setState(() {
      selecionado = index;
      _tempoRestante = tempos[selecionado];
      _resetarTimer();
    });
  }

  void _iniciarTimer() {
    if (_ativo) return;

    setState(() => _ativo = true);

    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (_tempoRestante > 0) {
        setState(() => _tempoRestante--);
      } else {
        _pararTimer();
        _zerou = true;
        _reproduzirSom(true);
      }
    });
  }

  void _pausarTimer() {
    _timer?.cancel();
    setState(() => _ativo = false);
  }

  void _resetarTimer() {
    _timer?.cancel();
    setState(() {
      _tempoRestante = tempos[selecionado];
      _ativo = false;
      _zerou = false;
    });
  }

  void _pararTimer() {
    _timer?.cancel();
    setState(() => _ativo = false);
  }

  Future<void> _reproduzirSom(bool tocar) async {
    await _player.setAsset('assets/Sons/Beep.mp3');
    tocar ? _player.play() : _player.stop();
    if (!tocar) _resetarTimer();
  }

  String _formatarTempo(int segundos) {
    final minutos = (segundos ~/ 60).toString().padLeft(2, '0');
    final segs = (segundos % 60).toString().padLeft(2, '0');
    return '$minutos:$segs';
  }

  double _calcularFator(double maxWidth) {
    if (maxWidth < mobileBreakpoint) return maxWidth / mobileBreakpoint;
    if (maxWidth < tabletBreakpoint) return maxWidth / tabletBreakpoint;
    return maxWidth / desktopBreakpoint;
  }

  double _calcularAlturaMaxima(double maxWidth) =>
      maxWidth < mobileBreakpoint
          ? 2024
          : maxWidth < tabletBreakpoint
          ? 1031
          : 2364;

  double _calcularLarguraMaxima(double maxWidth) =>
      maxWidth < mobileBreakpoint
          ? 360
          : maxWidth < tabletBreakpoint
          ? 768
          : 1440;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final double fator = _calcularFator(constraints.maxWidth);
        return Scaffold(
          body: Container(
            decoration: _buildBackgroundDecoration(),
            child: Align(
              alignment: Alignment.topCenter,
              child: ConstrainedBox(
                constraints: BoxConstraints(
                  maxWidth: _calcularLarguraMaxima(constraints.maxWidth),
                  maxHeight: _calcularAlturaMaxima(constraints.maxWidth),
                ),
                child: SingleChildScrollView(
                  child: _buildContent(fator, constraints.maxWidth),
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  BoxDecoration _buildBackgroundDecoration() {
    return BoxDecoration(
      gradient: gradients[selecionado],
      image: const DecorationImage(
        image: AssetImage('assets/Imagens/Background-linhas.png'),
        fit: BoxFit.cover,
      ),
    );
  }

  Widget _buildContent(double fator, double maxWidth) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      mainAxisSize: MainAxisSize.min,
      children: [
        _buildLogo(width: 156.36 * fator, height: 120 * fator),
        SizedBox(height: 40 * fator),
        if (maxWidth > tabletBreakpoint)
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _buildHeaderText(width: 489 * fator, height: 405 * fator),
              SizedBox(width: 24 * fator),
              _buildHeaderImage(width: 483 * fator),
            ],
          )
        else ...[
          _buildHeaderText(width: 489 * fator, height: 405 * fator),
          SizedBox(height: 24 * fator),
          _buildHeaderImage(width: 422 * fator),
        ],
        SizedBox(height: 40 * fator),
        _buildTimerContainer(
          width: 588 * fator,
          height: 390 * fator,
          fontSize: 112 * fator,
          fontSize2: 18 * fator,
          fator: fator,
        ),
        SizedBox(height: 80 * fator),
      ],
    );
  }

  Widget _buildLogo({required double width, required double height}) {
    return Center(
      child: Image.asset('assets/Logo/Logo.png', width: width, height: height),
    );
  }

  Widget _buildHeaderText({required double width, required double height}) {
    return SizedBox(
      width: width,
      height: height,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          AutoSizeText(
            frases1[selecionado],
            style: AppTypography.headingSmall.copyWith(color: Colors.white),
            maxLines: 2,
          ),
          AutoSizeText(
            frases2[selecionado],
            style: AppTypography.headingLarge.copyWith(color: Colors.white),
            maxLines: 2,
          ),
        ],
      ),
    );
  }

  Widget _buildHeaderImage({required double width}) {
    return SizedBox(width: width, child: Image.asset(imagens[selecionado]));
  }

  Widget _buildTimerContainer({
    required double width,
    required double height,
    required double fontSize,
    required double fontSize2,
    required double fator,
  }) {
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        color: AppColors.azulRoyal.withAlpha((0.3 * 255).toInt()),
        borderRadius: BorderRadius.circular(32 * fator),
        border: Border.all(color: AppColors.azulRoyal, width: 2),
      ),
      child: Padding(
        padding: EdgeInsets.all(24 * fator),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            _buildCategoriaRow(fontSize2),
            Text(
              _formatarTempo(_tempoRestante),
              style: AppTypography.paragraphLarge.copyWith(
                color: Colors.white,
                fontSize: fontSize,
              ),
            ),
            _buildControls(fontSize2, fator),
          ],
        ),
      ),
    );
  }

  Widget _buildCategoriaRow(double fontSize2) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        for (int i = 0; i < 3; i++)
          GestureDetector(
            onTap: () => _selecionarCategoria(i),
            child: CategoriaCronometro(
              text: ['Foco', 'Pausa curta', 'Pausa longa'][i],
              isSelecionado: selecionado == i,
              fontSize2: fontSize2,
            ),
          ),
      ],
    );
  }

  Widget _buildControls(double fontSize2, double fator) {
    IconData icon;
    String label;
    VoidCallback onTap;

    if (_podeResetar) {
      icon = Icons.restart_alt;
      label = 'Restart';
      onTap = () => _reproduzirSom(false);
    } else if (_podePausar) {
      icon = Icons.pause;
      label = 'Pause';
      onTap = _pausarTimer;
    } else {
      icon = Icons.play_arrow;
      label = 'Play';
      onTap = _iniciarTimer;
    }

    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            FlutterSwitch(
              width: 55.0 * fator,
              height: 32.0 * fator,
              toggleSize: 20.0 * fator,
              value: _switchValue,
              borderRadius: 30.0 * fator,
              padding: 4.0 * fator,
              activeColor: AppColors.lilas,
              inactiveColor: Colors.grey,
              onToggle: (val) => setState(() => _switchValue = val),
            ),
            const SizedBox(width: 8),
            Text(
              'Música',
              style: AppTypography.label.copyWith(
                color: Colors.white,
                fontSize: fontSize2,
              ),
            ),
          ],
        ),
        SizedBox(height: 24 * fator),
        Button(
          fator: fator,
          fontSize2: fontSize2,
          text: label,
          icon: icon,
          onTap: onTap,
        ),
      ],
    );
  }
}
