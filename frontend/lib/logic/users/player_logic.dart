import 'dart:async';

import 'package:quiz_app/assets/theming/theme_manager.dart';
import 'package:quiz_app/logic/data/local_repository.dart';
import 'package:quiz_app/logic/users/user_logic.dart';
import 'package:quiz_app/models/login_page/login_page_bloc.dart';
import 'package:quiz_app/models/login_page/login_page_button_state.dart';
import 'package:quiz_app/models/navigator/navigator_bloc.dart';
import 'package:quiz_app/models/play_page/play_page_answer_state.dart';
import 'package:quiz_app/models/play_page/play_page_bloc.dart';
import 'package:quiz_app/models/result_page/result_page_bloc.dart';
import 'package:quiz_app/models/result_page/result_page_user_state.dart';
import 'package:socket_io_client/socket_io_client.dart';

class PlayerLogic implements UserLogic {
  LoginPageBloc loginPageBloc;
  PlayPageBloc playPageBloc;
  ResultPageBloc resultPageBloc;
  NavigatorBloc navigatorBloc;

  PlayerLogic(this.loginPageBloc, this.playPageBloc, this.resultPageBloc,
      this.navigatorBloc);

  late String name;

  String? lastQuestion;
  String? totalQuestions;

  @override
  void init(String name) {
    this.name = name;
  }

  @override
  void waiting() {
    loginPageBloc.editName.add(name);
    loginPageBloc.showError.add('Ты в игре! Ожидаем начала');
    loginPageBloc.pushButtonState.add(ButtonState('Ожидание', false));
  }

  StreamSubscription? answerListSubscription;
  Timer? timer;
  bool isAnswered = false;

  @override
  void question(Map data, Socket socket) {
    if (timer != null) timer!.cancel();

    double pointMultiplier = 1;

    lastQuestion = data['question']['question_id'].toString();
    totalQuestions = data['totalQuestions'].toString();
    navigatorBloc.setRoute.add('/play');
    playPageBloc.setQuestionId.add('Вопрос $lastQuestion из $totalQuestions');
    playPageBloc.setQuestion.add(data['question']['question_text']);

    List colors = getColors();

    playPageBloc.setAnswersList.add([
      AnswerState(data['question']['answers'][0]['text'], colors[0]),
      AnswerState(data['question']['answers'][1]['text'], colors[1]),
      AnswerState(data['question']['answers'][2]['text'], colors[2]),
      AnswerState(data['question']['answers'][3]['text'], colors[3])
    ]);

    timer = startTimer((data['timer'] - 2) * 100, () {
      if (!isAnswered) socket.emit('answer', 0);
    }, (t, milliseconds) {
      pointMultiplier = t / (milliseconds / 100).floor();
      playPageBloc.setTimer.add(t);
    });

    if (answerListSubscription != null) answerListSubscription!.cancel();

    if (!data['isAnswered']) {
      answerListSubscription = playPageBloc.answer.listen((event) {
        socket.emit(
            'answer',
            (data['question']['answers'][event]['correct'] == true ? 1 : 0) *
                pointMultiplier);
        print(data['question']['answers'][event]['correct']);
        isAnswered = true;
        LocalRepository().saveAnswer(event);

        switch (event) {
          case 0:
            playPageBloc.setAnswersList.add([
              AnswerState(data['question']['answers'][0]['text'], colors[0]),
              AnswerState(
                  data['question']['answers'][1]['text'], colors[1], false),
              AnswerState(
                  data['question']['answers'][2]['text'], colors[2], false),
              AnswerState(
                  data['question']['answers'][3]['text'], colors[3], false)
            ]);
            break;
          case 1:
            playPageBloc.setAnswersList.add([
              AnswerState(
                  data['question']['answers'][0]['text'], colors[0], false),
              AnswerState(data['question']['answers'][1]['text'], colors[1]),
              AnswerState(
                  data['question']['answers'][2]['text'], colors[2], false),
              AnswerState(
                  data['question']['answers'][3]['text'], colors[3], false)
            ]);
            break;
          case 2:
            playPageBloc.setAnswersList.add([
              AnswerState(
                  data['question']['answers'][0]['text'], colors[0], false),
              AnswerState(
                  data['question']['answers'][1]['text'], colors[1], false),
              AnswerState(data['question']['answers'][2]['text'], colors[2]),
              AnswerState(
                  data['question']['answers'][3]['text'], colors[3], false)
            ]);
            break;
          case 3:
            playPageBloc.setAnswersList.add([
              AnswerState(
                  data['question']['answers'][0]['text'], colors[0], false),
              AnswerState(
                  data['question']['answers'][1]['text'], colors[1], false),
              AnswerState(
                  data['question']['answers'][2]['text'], colors[2], false),
              AnswerState(data['question']['answers'][3]['text'], colors[3])
            ]);
            break;
        }
        answerListSubscription!.cancel();
      });
    } else {
      LocalRepository().getAnswer().then((event) {
        isAnswered = true;
        switch (event) {
          case 0:
            playPageBloc.setAnswersList.add([
              AnswerState(data['question']['answers'][0]['text'], colors[0]),
              AnswerState(
                  data['question']['answers'][1]['text'], colors[1], false),
              AnswerState(
                  data['question']['answers'][2]['text'], colors[2], false),
              AnswerState(
                  data['question']['answers'][3]['text'], colors[3], false)
            ]);
            break;
          case 1:
            playPageBloc.setAnswersList.add([
              AnswerState(
                  data['question']['answers'][0]['text'], colors[0], false),
              AnswerState(data['question']['answers'][1]['text'], colors[1]),
              AnswerState(
                  data['question']['answers'][2]['text'], colors[2], false),
              AnswerState(
                  data['question']['answers'][3]['text'], colors[3], false)
            ]);
            break;
          case 2:
            playPageBloc.setAnswersList.add([
              AnswerState(
                  data['question']['answers'][0]['text'], colors[0], false),
              AnswerState(
                  data['question']['answers'][1]['text'], colors[1], false),
              AnswerState(data['question']['answers'][2]['text'], colors[2]),
              AnswerState(
                  data['question']['answers'][3]['text'], colors[3], false)
            ]);
            break;
          case 3:
            playPageBloc.setAnswersList.add([
              AnswerState(
                  data['question']['answers'][0]['text'], colors[0], false),
              AnswerState(
                  data['question']['answers'][1]['text'], colors[1], false),
              AnswerState(
                  data['question']['answers'][2]['text'], colors[2], false),
              AnswerState(data['question']['answers'][3]['text'], colors[3])
            ]);
            break;
        }
        answerListSubscription!.cancel();
      });
    }
  }

  @override
  void results(Map data) {
    navigatorBloc.setRoute.add('/result');
    resultPageBloc.setQuestionId.add(lastQuestion != null
        ? 'Вопрос $lastQuestion из $totalQuestions'
        : 'Ожидание следующего раунда');

    int currentUserId = -1;

    var users = List.generate(
        data.length,
        (index) => UserState(index + 1, () {
              if (data.keys.toList()[index] == name) currentUserId = index;
              return data.keys.toList()[index];
            }(),
                data[data.keys.toList()[index]]['total'],
                data[data.keys.toList()[index]]['recent'],
                index == 0
                    ? ThemeManager().currentTheme.red
                    : index == 1
                        ? ThemeManager().currentTheme.blue
                        : index == 2
                            ? ThemeManager().currentTheme.yellow
                            : ThemeManager().currentTheme.white));

    resultPageBloc.setUserList.add(users);
    resultPageBloc.setCurrentUser.add(currentUserId != -1
        ? users[currentUserId]
        : UserState(0, '-', 0, 0, ThemeManager().currentTheme.grey));
  }

  @override
  void finalResults(Map data) {
    navigatorBloc.setRoute.add('/result');
    resultPageBloc.setQuestionId.add('Конец игры!');

    int currentUserId = -1;

    var users = List.generate(
        data.length,
        (index) => UserState(index + 1, () {
              if (data.keys.toList()[index] == name) currentUserId = index;
              return data.keys.toList()[index];
            }(),
                data[data.keys.toList()[index]]['total'],
                data[data.keys.toList()[index]]['recent'],
                index == 0
                    ? ThemeManager().currentTheme.red
                    : index == 1
                        ? ThemeManager().currentTheme.blue
                        : index == 2
                            ? ThemeManager().currentTheme.yellow
                            : ThemeManager().currentTheme.white));

    resultPageBloc.setUserList.add(users);
    resultPageBloc.setCurrentUser.add(currentUserId != -1
        ? users[currentUserId]
        : UserState(0, '-', 0, 0, ThemeManager().currentTheme.grey));
  }

  @override
  void admin(Socket socket, Function onReset) {
    // TODO: implement admin
  }

  List getColors() {
    return [
      ThemeManager().currentTheme.yellow,
      ThemeManager().currentTheme.blue,
      ThemeManager().currentTheme.purple,
      ThemeManager().currentTheme.red
    ]..shuffle();
  }

  Timer startTimer(
      double milliseconds, Function onEnds, Function(int, double) onTick) {
    int t = (milliseconds / 100).floor();
    return Timer.periodic(Duration(seconds: 1), (timer) {
      if (t == 0) {
        onEnds();
        timer.cancel();
      }
      onTick(t, milliseconds);
      playPageBloc.setTimer.add(t--);
      timer.tick;
    });
  }
}
