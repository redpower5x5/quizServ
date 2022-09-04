import 'dart:async';

import 'package:quiz_app/models/login_page/login_page_button_state.dart';
import 'package:rxdart/rxdart.dart';

class LoginPageBloc {

  LoginPageBloc() {
    _actionNameController.stream.listen((event) => _publishName.add(event));
    _actionErrorController.stream.listen((event) => _publishError.add(event));
    _enterButtonStateController.stream.listen((event) => _publishButton.add(event));
    _enterTapController.stream.listen((event) => _publishTap.add(event));
  }

  final _nameStream = BehaviorSubject<String>();

  Stream<String> get name => _nameStream.stream;
  Sink<String> get _publishName => _nameStream.sink;

  final _actionNameController = StreamController<String>();
  StreamSink<String> get editName => _actionNameController.sink;

  final _enterButtonStream = BehaviorSubject<ButtonState>();

  Stream<ButtonState> get enterButton => _enterButtonStream.stream;
  Sink<ButtonState> get _publishButton => _enterButtonStream.sink;

  final _enterButtonStateController = StreamController<ButtonState>();
  StreamSink<ButtonState> get pushButtonState => _enterButtonStateController.sink;

  final _enterTapStream = BehaviorSubject<bool>();

  Stream<bool> get enterTap => _enterTapStream.stream;
  Sink<bool> get _publishTap => _enterTapStream.sink;

  final _enterTapController = StreamController<bool>();
  StreamSink<bool> get pushTap => _enterTapController.sink;

  final _errorStream = BehaviorSubject<String?>();

  Stream<String?> get error => _errorStream.stream;
  Sink<String?> get _publishError => _errorStream.sink;

  final _actionErrorController = StreamController<String?>();
  StreamSink<String?> get showError => _actionErrorController.sink;

  void dispose() {
    _nameStream.close();
    _actionNameController.close();
    _enterButtonStream.close();
    _enterButtonStateController.close();
    _enterTapStream.close();
    _enterTapController.close();
    _errorStream.close();
    _actionErrorController.close();
  }
}