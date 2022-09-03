import 'dart:async';

import 'package:quiz_app/models/result_page/result_page_user_state.dart';
import 'package:rxdart/rxdart.dart';

class ResultPageBloc {

  ResultPageBloc() {
    _questionIdController.stream.listen((event) => _publishQuestionId.add(event));
    _actionUserListController.stream.listen((event) => _publishUserList.add(event));
    _currentUserController.stream.listen((event) => _publishCurrentUser.add(event));

  }


  final _questionIdStream = BehaviorSubject<String>();

  Stream<String> get questionId => _questionIdStream.stream;
  Sink<String> get _publishQuestionId => _questionIdStream.sink;

  final  _questionIdController = StreamController<String>();
  StreamSink<String> get setQuestionId => _questionIdController.sink;


  final _userListStream = BehaviorSubject<List<UserState>>();

  Stream<List<UserState>> get userList => _userListStream.stream;
  Sink<List<UserState>> get _publishUserList => _userListStream.sink;

  final _actionUserListController = StreamController<List<UserState>>();
  StreamSink<List<UserState>> get setUserList => _actionUserListController.sink;


  final _currentUserStream = BehaviorSubject<UserState>();

  Stream<UserState> get currentUser => _currentUserStream.stream;
  Sink<UserState> get _publishCurrentUser => _currentUserStream.sink;

  final _currentUserController = StreamController<UserState>();
  StreamSink<UserState> get setCurrentUser => _currentUserController.sink;

  void dispose() {
    _questionIdStream.close();
    _questionIdController.close();
    _userListStream.close();
    _actionUserListController.close();
    _currentUserStream.close();
    _currentUserController.close();
  }
}