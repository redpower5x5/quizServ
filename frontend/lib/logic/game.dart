import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:quiz_app/assets/theming/theme_manager.dart';
import 'package:quiz_app/logic/data/local_repository.dart';
import 'package:quiz_app/logic/users/admin_logic.dart';
import 'package:quiz_app/logic/users/player_logic.dart';
import 'package:quiz_app/logic/users/user_logic.dart';
import 'package:quiz_app/models/login_page/login_page_bloc.dart';
import 'package:quiz_app/models/login_page/login_page_button_state.dart';
import 'package:quiz_app/models/navigator/navigator_bloc.dart';
import 'package:quiz_app/models/play_page/play_page_answer_state.dart';
import 'package:quiz_app/models/play_page/play_page_bloc.dart';
import 'package:quiz_app/models/result_page/result_page_bloc.dart';
import 'package:quiz_app/models/result_page/result_page_user_state.dart';
import 'package:socket_io_client/socket_io_client.dart';

class GameLogic {
  final loginPageBloc = LoginPageBloc();
  final playPageBloc = PlayPageBloc();
  final resultPageBloc = ResultPageBloc();
  final navigatorBloc = NavigatorBloc();

  final LocalRepository localRepository = LocalRepository();

  void init() {

    //jsonDecode(jsonEncode(d))

    String login = '';
    UserLogic? userLogic;
    Socket? socket;

    localRepository.getId().then((value) {
      if (value != null) {
        loginPageBloc.pushButtonState.add(ButtonState('Подключение', false));
        socket = loginFromSessionId(value,
                (p0) {
                  loginPageBloc.showError.add('Сервер помнит тебя, ожидай подключения!');
                  loginPageBloc.pushButtonState.add(ButtonState('Ожидание', false));
                  userLogic = PlayerLogic(loginPageBloc, playPageBloc, resultPageBloc, navigatorBloc);
                  localRepository.getName().then((value2) => userLogic!.init(value2!));
                  socket!.clearListeners();
                  socket!.on('waiting', (d) => userLogic!.waiting());
                  socket!.on('question', (d) => userLogic!.question(jsonDecode(jsonEncode(d)), socket!));
                  socket!.on('admin', (d) => userLogic!.admin(socket!, () {}));
                  socket!.on('results', (d) => userLogic!.results(jsonDecode(jsonEncode(d))));
                  socket!.on('finalResults', (d) => userLogic!.finalResults(jsonDecode(jsonEncode(d))));
                  socket!.on('reset', (d) {
                    localRepository.invalidate().then((value) {
                      navigatorBloc.setRoute.add('/login');
                      loginPageBloc.showError.add('Игра перезапущенна, перезагрузи страницу');
                      loginPageBloc.pushButtonState.add(ButtonState('-', false));
                    });
                  });
            },
                (p0) {
                  print('clear cache');
                  localRepository.invalidate();
                  loginPageBloc.showError.add(null);
                  loginPageBloc.pushButtonState.add(ButtonState('Поехали', true));
                  socket!.close();
                  socket = null;
            }, () {
              print('admin');
          userLogic = AdminLogic(loginPageBloc, playPageBloc, resultPageBloc, navigatorBloc);
          userLogic!.init(login);
          socket!.clearListeners();
          userLogic!.admin(socket!, () {});
          socket!.on('waiting', (d) => userLogic!.waiting());
          socket!.on('question', (d) => userLogic!.question(jsonDecode(jsonEncode(d)), socket!));
          socket!.on('admin', (d) => userLogic!.admin(socket!, () {}));
          socket!.on('results', (d) => userLogic!.results(jsonDecode(jsonEncode(d))));
          socket!.on('finalResults', (d) => userLogic!.finalResults(jsonDecode(jsonEncode(d))));
          socket!.on('reset', (d) {});
            });
      }
    });

    loginPageBloc.enterTap.listen((event) {
      if (login != '') {
        login += ' ${Random().nextInt(8999)+1000}';
        loginPageBloc.pushButtonState.add(ButtonState('Подключение', false));
        socket = loginFromLogin(login,
                (p0) {
                  saveSessionId(jsonDecode(jsonEncode(p0))['sessionID'], false, login);
                  loginPageBloc.showError.add('Ты в игре! Ожидаем начала');
                  loginPageBloc.pushButtonState.add(ButtonState('Ожидание', false));
                  userLogic = PlayerLogic(loginPageBloc, playPageBloc, resultPageBloc, navigatorBloc);
                  userLogic!.init(login);
                  socket!.clearListeners();
                  socket!.on('waiting', (d) => userLogic!.waiting());
                  socket!.on('question', (d) => userLogic!.question(jsonDecode(jsonEncode(d)), socket!));
                  socket!.on('admin', (d) => userLogic!.admin(socket!, () {}));
                  socket!.on('results', (d) => userLogic!.results(jsonDecode(jsonEncode(d))));
                  socket!.on('finalResults', (d) => userLogic!.finalResults(jsonDecode(jsonEncode(d))));
                  socket!.on('reset', (d) {
                    localRepository.invalidate().then((value) {
                      navigatorBloc.setRoute.add('/login');
                      loginPageBloc.showError.add('Игра перезапущенна, перезагрузи страницу');
                      loginPageBloc.pushButtonState.add(ButtonState('-', false));
                    });
                  });
                },
                (p0) {

                }, () {
          print('admin');

          localRepository.getId().then((value) {
            if (value != null) saveSessionId(value, true, login);
          });

          userLogic = AdminLogic(loginPageBloc, playPageBloc, resultPageBloc, navigatorBloc);
          userLogic!.init(login);
          socket!.clearListeners();
          userLogic!.admin(socket!, () {});
          socket!.on('waiting', (d) => userLogic!.waiting());
          socket!.on('question', (d) => userLogic!.question(jsonDecode(jsonEncode(d)), socket!));
          socket!.on('admin', (d) => userLogic!.admin(socket!, () {}));
          socket!.on('results', (d) => userLogic!.results(jsonDecode(jsonEncode(d))));
          socket!.on('finalResults', (d) => userLogic!.finalResults(jsonDecode(jsonEncode(d))));
          socket!.on('reset', (d) {});
            });

      } else {
        loginPageBloc.showError.add('Введи имя');
      }
    });

    loginPageBloc.name.listen((event) => login = event);
    loginPageBloc.pushButtonState.add(ButtonState('Поехали!', true));
  }

  Socket loginFromSessionId(String sessionId, Function(Map) onSession, Function(Map) onError, Function() onAdmin) {
    var s = restoreConnectionToServer(sessionId);
    s.on('session', (data) => onSession(data));
    s.onError((data) => onError(data));
    s.on('admin', (data) => onAdmin());
    // loginPageBloc.showError.add('Сервер помнит тебя, ожидай подключения!');
    // loginPageBloc.pushButtonState.add(ButtonState('Ожидание', false));
    s.connect();
    return s;
  }

  Socket loginFromLogin(String login, Function(Map) onSession, Function(Map) onError, Function() onAdmin) {
    var s = connectToServer(login);
    s.on('session', (data) => onSession(data));
    s.onError((data) => onError(data));
    s.on('admin', (data) => onAdmin());
    s.connect();
    return s;
  }

  Socket connectToServer(String login) {
    return io('https://quizapi.onixx.org',
        OptionBuilder()
            .setTransports(['websocket'])
            .disableAutoConnect()
            .setAuth({'username': login})
            .build()
    );
  }

  Socket restoreConnectionToServer(String sessionId) {
    return io('https://quizapi.onixx.org',
        OptionBuilder()
            .setTransports(['websocket'])
            .disableAutoConnect()
            .setAuth({'sessionID': sessionId})
            .build()
    );
  }

  void saveSessionId(String sessionId, bool isAdmin, String login) {
    //jsonDecode(data)['sessionID']
    localRepository.save(sessionId, isAdmin, login);
  }

  void dispose() {
    loginPageBloc.dispose();
    playPageBloc.dispose();
    resultPageBloc.dispose();
  }
}