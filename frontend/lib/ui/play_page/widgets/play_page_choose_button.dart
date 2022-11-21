import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:quiz_app/assets/theming/theme_manager.dart';

class ChooseButton extends StatefulWidget {
  final String text;
  final Color mainColor;
  final bool isActive;

  final Function() onTap;

  const ChooseButton(
      {Key? key,
      required this.text,
      required this.mainColor,
      this.isActive = true,
      required this.onTap})
      : super(key: key);

  @override
  State<ChooseButton> createState() => _ChooseButtonState();
}

class _ChooseButtonState extends State<ChooseButton> {
  bool isTapped = false;

  void pressedAnimation() {
    setState(() => isTapped = true);
  }

  void unpressedAnimation() {
    setState(() => isTapped = false);
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeManager>(
        builder: (_, themeManager, __) => GestureDetector(
              onTap: () {
                pressedAnimation();
                widget.onTap();
                Future.delayed(Duration(milliseconds: 100))
                    .then((value) => unpressedAnimation());
              },
              onLongPress: () {
                pressedAnimation();
                widget.onTap();
              },
              onLongPressEnd: (_) => unpressedAnimation(),
              behavior: HitTestBehavior.opaque,
              child: Container(
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(
                          color: widget.isActive
                              ? themeManager.currentTheme.accentColor
                              : themeManager.currentTheme.accentColor
                                  .withAlpha(100),
                          width: 1.7),
                      color: widget.isActive
                          ? widget.mainColor
                          : widget.mainColor.withAlpha(140)),
                  child: Center(
                    child: AutoSizeText(
                      widget.text,
                      style: Theme.of(context).textTheme.headline6?.apply(
                            color: Colors.white,
                          ),
                      textAlign: TextAlign.center,
                      wrapWords: true,
                    ),
                  )),
            ));
  }
}
