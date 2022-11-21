import 'package:quiz_app/assets/theming/theme_manager.dart';
import 'package:quiz_app/logic/users/user_logic.dart';
import 'package:quiz_app/models/login_page/login_page_bloc.dart';
import 'package:quiz_app/models/navigator/navigator_bloc.dart';
import 'package:quiz_app/models/play_page/play_page_answer_state.dart';
import 'package:quiz_app/models/result_page/result_page_bloc.dart';
import 'package:socket_io_client/src/socket.dart';

import '../../models/play_page/play_page_bloc.dart';

class AdminLogic extends UserLogic {
  LoginPageBloc loginPageBloc;
  PlayPageBloc playPageBloc;
  ResultPageBloc resultPageBloc;
  NavigatorBloc navigatorBloc;

  AdminLogic(this.loginPageBloc, this.playPageBloc, this.resultPageBloc,
      this.navigatorBloc);

  Map<String, String> users = {};

  @override
  void admin(Socket socket, Function onReset) {
    playPageBloc.setAnswersList.add([
      AnswerState('Показать следующий вопрос',
          ThemeManager().currentTheme.textColorInverse),
      AnswerState('Остановить время, показать результат',
          ThemeManager().currentTheme.textColorInverse),
      AnswerState(
          'Рестарт сервера', ThemeManager().currentTheme.textColorInverse),
      AnswerState(
          'Информация об игроках', ThemeManager().currentTheme.textColorInverse)
    ]);

    playPageBloc.setQuestion.add('Панель администратора');

    socket.on('user connected', (data) {
      print(data['username'] + ' connected');
      users[data['userID']] = data['username'];
    });

    socket.on('user disconnected', (data) {
      print(data + ' disconnected');
      users.remove(data);
    });

    playPageBloc.answer.listen((event) {
      switch (event) {
        case 0:
          socket.emit('setState', 'SHOWQUESTION');
          print(event);
          break;
        case 1:
          socket.emit('setState', 'SHOWRESULTS');
          print(event);
          break;
        case 2:
          socket.emit('setState', 'WAITIGUSERS');
          print(event);
          onReset();
          break;
        case 3:
          print(users.values);
          break;
      }
    });

    navigatorBloc.setRoute.add('/play');
  }

  @override
  void finalResults(Map<dynamic, dynamic> data) {
    // TODO: implement finalResults
  }

  @override
  void question(Map<dynamic, dynamic> data, Socket socket) {
    // TODO: implement question
  }

  @override
  void results(Map<dynamic, dynamic> data) {
    // TODO: implement results
  }

  @override
  void waiting() {
    // TODO: implement waiting
  }

  @override
  void init(String name) {
    // TODO: implement init
  }
}
