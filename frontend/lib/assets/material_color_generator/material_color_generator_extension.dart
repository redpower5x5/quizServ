import 'package:flutter/material.dart';
import 'material_color_generator.dart';

extension MaterialColorGenerator on Color {
  MaterialColor generateMaterial() {
    return generateMaterialColor(color: this);
  }
}