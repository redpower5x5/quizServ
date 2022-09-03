import 'dart:async';

import 'package:quiz_app/assets/theming/theme_manager.dart';
import 'package:quiz_app/models/play_page/play_page_answer_state.dart';
import 'package:quiz_app/models/play_page/play_page_timer_state.dart';
import 'package:rxdart/rxdart.dart';

class PlayPageBloc {

  PlayPageBloc() {
    _questionIdController.stream.listen((event) => _publishQuestionId.add(event));
    _questionController.stream.listen((event) => _publishQuestion.add(event));
    _timerController.stream.listen((event) => _publishTimer.add(TimerState('00: ${(event < 10? '0$event' : event)}', event > 3? ThemeManager().currentTheme.accentColor : ThemeManager().currentTheme.red)));
    _actionAnswersListController.stream.listen((event) => _publishAnswersList.add(event));
    _answerController.stream.listen((event) => _publishAnswer.add(event));
  }

  final _questionIdStream = BehaviorSubject<String>();

  Stream<String> get questionId => _questionIdStream.stream;
  Sink<String> get _publishQuestionId => _questionIdStream.sink;

  final  _questionIdController = StreamController<String>();
  StreamSink<String> get setQuestionId => _questionIdController.sink;


  final _questionStream = BehaviorSubject<String>();

  Stream<String> get question => _questionStream.stream;
  Sink<String> get _publishQuestion => _questionStream.sink;

  final _questionController = StreamController<String>();
  StreamSink<String> get setQuestion => _questionController.sink;


  final _timerStream = BehaviorSubject<TimerState>();

  Stream<TimerState> get timer => _timerStream.stream;
  Sink<TimerState> get _publishTimer => _timerStream.sink;

  final _timerController = StreamController<int>();
  StreamSink<int> get setTimer => _timerController.sink;


  final _answersListStream = BehaviorSubject<List<AnswerState>>();

  Stream<List<AnswerState>> get answersList => _answersListStream.stream;
  Sink<List<AnswerState>> get _publishAnswersList => _answersListStream.sink;

  final _actionAnswersListController = StreamController<List<AnswerState>>();
  StreamSink<List<AnswerState>> get setAnswersList => _actionAnswersListController.sink;


  final _answerStream = PublishSubject<int>();

  Stream<int> get answer => _answerStream.stream;
  Sink<int> get _publishAnswer => _answerStream.sink;

  final _answerController = StreamController<int>();
  StreamSink<int> get setAnswer => _answerController.sink;

  void dispose() {
    _questionIdController.close();
    _questionController.close();
    _timerController.close();
    _actionAnswersListController.close();
    _answerController.close();

    _questionIdStream.close();
    _questionStream.close();
    _timerStream.close();
    _answersListStream.close();
    _answerStream.close();
  }
}