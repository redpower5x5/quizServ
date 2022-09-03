import 'dart:ui';

class AnswerState {
  final Color color;
  final String text;
  final bool isActive;

  AnswerState(this.text, this.color, [this.isActive = true]);
}