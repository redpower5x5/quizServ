import 'dart:ui';
import 'dart:ui';

import 'package:flutter/material.dart';

abstract class BaseColors {
  Color get black => const Color(0xFF040B15);
  Color get black_tinted => const Color(0xFFC9C9C9);
  Color get grey => const Color(0xFFBEB6AE);
  Color get white => const Color(0xFFFFFFFF);

  Color get yellow => const Color(0xFF0077FF);
  Color get yellow_transp => Color(0xFFBFDDFF);
  Color get green => const Color(0xFF17D685);
  Color get blue => const Color(0xFF00EAFF);
  Color get purple => const Color(0xFF8024C0);
  Color get red => const Color(0xFFFF3985);
}

abstract class BaseTheme extends BaseColors {
  Color get backgroundColor;
  Color get accentColor;
  Color get textColor;
  Color get textColorInverse;
  Color get textColorTip;
}

class DarkTheme extends BaseColors implements BaseTheme {
  @override
  Color get backgroundColor => black;
  @override
  Color get accentColor => white;
  @override
  Color get textColor => black;
  @override
  Color get textColorInverse => white;
  @override
  Color get textColorTip => grey;
}

class LightTheme extends BaseColors implements BaseTheme {
  @override
  Color get backgroundColor => white;
  @override
  Color get accentColor => black;
  @override
  Color get textColor => white;
  @override
  Color get textColorInverse => black;
  @override
  Color get textColorTip => grey;
}
