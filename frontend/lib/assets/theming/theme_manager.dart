import 'dart:async';

import 'package:flutter/material.dart';
import 'package:quiz_app/assets/theming/constants.dart';

class ThemeManager extends ChangeNotifier {
  static final ThemeManager _entity = ThemeManager._internal();

  ThemeManager._internal();

  factory ThemeManager() {
    return _entity;
  }

  BaseTheme _currentTheme = DarkTheme();

  BaseTheme get currentTheme => _currentTheme;

  void changeTheme(BaseTheme theme) {
    _currentTheme = theme;
    notifyListeners();
  }


}