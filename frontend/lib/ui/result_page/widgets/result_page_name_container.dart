import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:quiz_app/assets/theming/theme_manager.dart';

class NameContainer extends StatefulWidget {
  final Color color;
  final String name;
  final int position;
  final double totalPoints, roundPoints;

  final double height = 90;
  final double bottom = 5;

  final double heightSubbar = 45;
  final double bottomSubbar = 5;

  const NameContainer({Key? key, required this.color, required this.name, required this.position, required this.totalPoints, required this.roundPoints}) : super(key: key);

  @override
  State<NameContainer> createState() => _NameContainerState();
}

class _NameContainerState extends State<NameContainer> {
  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeManager>(
      builder: (_, themeManager, __) => Container(
        decoration: BoxDecoration(
          color: themeManager.currentTheme.accentColor,
          borderRadius: BorderRadius.circular(16)
        ),
        height: widget.height,
        child: Align(
          alignment: Alignment.topCenter,
          child: Container(
              decoration: BoxDecoration(
                  color: widget.color,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(
                    color: themeManager.currentTheme.accentColor,
                    width: 2.0,
                  )
              ),
              height: widget.height - widget.bottom,
              child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 20),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Flexible(
                        flex: 6,
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Flexible(
                              flex: 2,
                              child: AutoSizeText('#${widget.position}', style: Theme.of(context).textTheme.headline3, overflow: TextOverflow.fade, maxLines: 1,),
                            ),
                            const SizedBox(width: 15,),
                            Flexible(
                              flex: 6,
                              child: AutoSizeText(widget.name, style: Theme.of(context).textTheme.headline3, overflow: TextOverflow.fade, maxLines: 2,),
                            ),
                          ],
                        ),
                      ),
                      Flexible(
                        flex: 4,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            Flexible(
                              child: AutoSizeText('+${widget.roundPoints.toStringAsPrecision(2)}', style: Theme.of(context).textTheme.subtitle2, maxLines: 1,),
                            ),
                            const SizedBox(width: 15,),
                            Flexible(
                              flex: 1,
                              child: Container(
                                  decoration: BoxDecoration(
                                    color: themeManager.currentTheme.black,
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                  height: widget.heightSubbar,
                                  child: Align(
                                    alignment: Alignment.topCenter,
                                    child: Container(
                                        width: double.infinity,
                                        decoration: BoxDecoration(
                                          color: themeManager.currentTheme.green,
                                          borderRadius: BorderRadius.circular(12),
                                          border: Border.all(
                                            color: themeManager.currentTheme.black,
                                            width: 2.1,
                                          ),
                                        ),
                                        height: widget.heightSubbar - widget.bottomSubbar-2,
                                        child: Center(
                                          child: AutoSizeText(widget.totalPoints.toStringAsPrecision(2), style: Theme.of(context).textTheme.subtitle2, maxLines: 1,),
                                        )
                                    ),
                                  )
                              ),
                            )
                          ],
                        )
                      )
                    ],
                  ),
              )
          ),
        )
      )
    );
  }
}