import 'dart:async';

import 'package:rxdart/rxdart.dart';

class NavigatorBloc {

  NavigatorBloc() {
    _navigatorController.stream.listen((event) => _publishName.add(event));
  }

  final _navigatorStream = BehaviorSubject<String>()..sink.add('/login');

  Stream<String> get navigator => _navigatorStream.stream;
  Sink<String> get _publishName => _navigatorStream.sink;

  final  _navigatorController = StreamController<String>();
  StreamSink<String> get setRoute => _navigatorController.sink;
}