import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:quiz_app/assets/theming/theme_manager.dart';

class LoginPageButton extends StatefulWidget {
  final Function() onTap;
  final double height;
  final String text;

  final bool isActive;

  const LoginPageButton(
      {Key? key,
      required this.onTap,
      this.height = 70,
      required this.text,
      this.isActive = true})
      : super(key: key);

  @override
  State<LoginPageButton> createState() => _LoginPageButtonState();
}

class _LoginPageButtonState extends State<LoginPageButton> {
  static const double _maxHeight = 4;

  double _h = 0;

  void pressedAnimation() {
    setState(() => _h = _maxHeight);
  }

  void unpressedAnimation() {
    setState(() => _h = 0);
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: widget.height,
      child: Stack(
        children: [
          GestureDetector(
              onTap: widget.isActive
                  ? () {
                      if (_h == 0) {
                        pressedAnimation();
                        widget.onTap();

                        Future.delayed(const Duration(milliseconds: 150))
                            .then((value) => unpressedAnimation());
                      }
                    }
                  : () {},
              onLongPress: widget.isActive ? pressedAnimation : () {},
              onLongPressEnd:
                  widget.isActive ? (_) => unpressedAnimation() : (_) {},
              child: Align(
                  alignment: Alignment.bottomCenter,
                  child: Consumer<ThemeManager>(
                    builder: (_, themeManager, __) => AnimatedContainer(
                      height: widget.isActive
                          ? widget.height - _h
                          : widget.height - _maxHeight,
                      decoration: BoxDecoration(
                          color: themeManager.currentTheme.accentColor,
                          borderRadius: BorderRadius.circular(16)),
                      duration: const Duration(milliseconds: 100),
                      child: Stack(
                        children: [
                          Align(
                            alignment: Alignment.topCenter,
                            child: Container(
                              height: widget.height - 7,
                              width: double.infinity,
                              decoration: BoxDecoration(
                                  color: widget.isActive
                                      ? themeManager.currentTheme.red
                                      : themeManager.currentTheme.grey,
                                  borderRadius: BorderRadius.circular(16)),
                              child: Center(
                                child: Text(
                                  widget.text,
                                  style: Theme.of(context).textTheme.headline3,
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                  )))
        ],
      ),
    );
  }
}
