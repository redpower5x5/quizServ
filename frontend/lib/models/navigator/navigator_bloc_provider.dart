import 'dart:async';

import 'package:flutter/material.dart';

class NavigatorBLocProvider extends StatefulWidget {
  final Widget child;
  final BuildContext buildContext;
  final Stream navigatorStream;

  final String routeName;
  const NavigatorBLocProvider({Key? key, required this.buildContext, required this.child, required this.navigatorStream, required this.routeName}) : super(key: key);

  @override
  State<NavigatorBLocProvider> createState() => _NavigatorBLocProviderState();
}

class _NavigatorBLocProviderState extends State<NavigatorBLocProvider> {

  late StreamSubscription subscription;
  @override
  void initState() {
    subscription = widget.navigatorStream.listen((event) { if (widget.routeName != event) Navigator.of(widget.buildContext, rootNavigator: true).pushReplacementNamed(event);});
  }


  @override
  void deactivate() {
    super.deactivate();
    subscription.cancel();
  }

  @override
  Widget build(BuildContext context) {
    return widget.child;
  }
}