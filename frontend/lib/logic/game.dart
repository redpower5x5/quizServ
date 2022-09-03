import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:quiz_app/assets/theming/theme_manager.dart';
import 'package:quiz_app/logic/data/local_repository.dart';
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

  String login = '';
  bool isAdmin = false;

  Socket? socket;
  String? sessionId;

  void init() {

    //Listen text field
    loginPageBloc.name.listen((event) => login = event);

    //Listen local storage
    localRepository.getId().then((value) {
      if (value != null) {
        localRepository.getIsAdmin().then((value2) {
          if (value2 != null) {
            isAdmin = value2;
            sessionId = value;
            loginFromSessionId();
          }
        });
      }
    });

    //Listen enter button
    loginPageBloc.enterTap.listen((event) {
      if (login != '') {
        if (socket == null) {
          login += ' ${Random().nextInt(8999)+1000}';
          loginFromUsername();
        }
      }
    });


    loginPageBloc.pushButtonState.add(ButtonState('Поехали!', true));
  }

  void loginFromSessionId() {
    socket = restoreConnectionToServer(sessionId!);
    socket!.on(
        'session', (data) {
          loginPageBloc.showError.add('Сервер помнит тебя, ожидай подключения!');
          loginPageBloc.pushButtonState.add(ButtonState('Ожидание', false));
          initUser();
    });

    socket!.onError((data) {
      localRepository.getName().then((value) {
        if (value != null) {
          loginPageBloc.editName.add(value);
        }
        localRepository.invalidate();
      });
    });

    socket!.on(
        'admin', (data) {
          print('dsdsd');
      isAdmin = true;
      initAdmin();
    }
    );
  }

  void loginFromUsername() {
    socket = connectToServer(login);
    socket!.on(
        'session', (data) {
      sessionId = saveSessionId(jsonEncode(data), isAdmin);
      loginPageBloc.showError.add('Ты в игре! Ожидаем начала');
      loginPageBloc.pushButtonState.add(ButtonState('Ожидание', false));
      initUser();
    });

    socket!.onError((data) {
      localRepository.getName().then((value) {
        if (value != null) {
          loginPageBloc.editName.add(value);
        }
        localRepository.invalidate();
      });
    });

    socket!.on(
      'admin', (data) {
        print('sdsd');
        isAdmin = true;
        initAdmin();
    }
    );
  }

  String? lastQuestion;
  double pointMuliplier = 1;
  bool isAnswered = false;

  void initUser() {
    socket!.on('question', (d) {
      navigatorBloc.setRoute.add('/play');

      var data = jsonDecode(jsonEncode(d));
      print(jsonEncode(d));
      print(data);

      lastQuestion = 'Вопрос ${data['question']['question_id']}';
      playPageBloc.setQuestionId.add(lastQuestion!);
      playPageBloc.setQuestion.add(data['question']['question_text']);
      startTimer((data['timer']-2)*100);

      playPageBloc.setAnswersList.add([
        AnswerState(data['question']['answers'][0]['text'], ThemeManager().currentTheme.yellow),
        AnswerState(data['question']['answers'][1]['text'], ThemeManager().currentTheme.blue),
        AnswerState(data['question']['answers'][2]['text'], ThemeManager().currentTheme.purple),
        AnswerState(data['question']['answers'][3]['text'], ThemeManager().currentTheme.red)
      ]);

      playPageBloc.answer.listen((event) {

        if (!isAnswered) {
          switch (event) {
            case 0:
              print('emit1');
              socket!.emit('answer',
                  (data['question']['answers'][0]['correct'] == true ? 1 : 0) *
                      pointMuliplier);

              playPageBloc.setAnswersList.add([
                AnswerState(data['question']['answers'][0]['text'], ThemeManager().currentTheme.yellow),
                AnswerState(data['question']['answers'][1]['text'], ThemeManager().currentTheme.blue, false),
                AnswerState(data['question']['answers'][2]['text'], ThemeManager().currentTheme.purple, false),
                AnswerState(data['question']['answers'][3]['text'], ThemeManager().currentTheme.red, false)
              ]);

              break;
            case 1:
              print('emit2');
              socket!.emit('answer',
                  (data['question']['answers'][1]['correct'] == true ? 1 : 0) *
                      pointMuliplier);

              playPageBloc.setAnswersList.add([
                AnswerState(data['question']['answers'][0]['text'], ThemeManager().currentTheme.yellow, false),
                AnswerState(data['question']['answers'][1]['text'], ThemeManager().currentTheme.blue),
                AnswerState(data['question']['answers'][2]['text'], ThemeManager().currentTheme.purple, false),
                AnswerState(data['question']['answers'][3]['text'], ThemeManager().currentTheme.red, false)
              ]);

              break;
            case 2:
              print('emit3');
              socket!.emit('answer',
                  (data['question']['answers'][2]['correct'] == true ? 1 : 0) *
                      pointMuliplier);

              playPageBloc.setAnswersList.add([
                AnswerState(data['question']['answers'][0]['text'], ThemeManager().currentTheme.yellow, false),
                AnswerState(data['question']['answers'][1]['text'], ThemeManager().currentTheme.blue, false),
                AnswerState(data['question']['answers'][2]['text'], ThemeManager().currentTheme.purple),
                AnswerState(data['question']['answers'][3]['text'], ThemeManager().currentTheme.red, false)
              ]);
              break;
            case 3:
              print('emit4');
              socket!.emit('answer',
                  (data['question']['answers'][3]['correct'] == true ? 1 : 0) *
                      pointMuliplier);

              playPageBloc.setAnswersList.add([
                AnswerState(data['question']['answers'][0]['text'], ThemeManager().currentTheme.yellow, false),
                AnswerState(data['question']['answers'][1]['text'], ThemeManager().currentTheme.blue, false),
                AnswerState(data['question']['answers'][2]['text'], ThemeManager().currentTheme.purple, false),
                AnswerState(data['question']['answers'][3]['text'], ThemeManager().currentTheme.red)
              ]);
              break;
          }
        }

        isAnswered = true;
      });


    });

    socket!.on('results', (d) {
      navigatorBloc.setRoute.add('/result');
      resultPageBloc.setQuestionId.add(lastQuestion??'Ожидание следующего раунда');
      pointMuliplier = 1;
      isAnswered = false;

      Map data = jsonDecode(jsonEncode(d));
      print(jsonEncode(d));
      print(data);

      int currentUserId = 0;
      var users = List.generate(data.length, (index) => UserState(
          index+1,
          () { if (data.keys.toList()[index] == login) currentUserId = index; return data.keys.toList()[index];}(),
          data[data.keys.toList()[index]]['total'],
          data[data.keys.toList()[index]]['recent'],
        index == 0? ThemeManager().currentTheme.purple : index == 1? ThemeManager().currentTheme.red : index == 2? ThemeManager().currentTheme.yellow : ThemeManager().currentTheme.white
      ));
      resultPageBloc.setUserList.add(users);
      resultPageBloc.setCurrentUser.add(users[currentUserId]);
    });

    socket!.on('finalResults', (d) {
      navigatorBloc.setRoute.add('/result');
      resultPageBloc.setQuestionId.add('Конец игры!');
      pointMuliplier = 1;
      isAnswered = false;

      Map data = jsonDecode(jsonEncode(d));
      print(jsonEncode(d));
      print(data);

      int currentUserId = 0;
      var users = List.generate(data.length, (index) => UserState(
          index+1,
              () { if (data.keys.toList()[index] == login) currentUserId = index; return data.keys.toList()[index];}(),
          data[data.keys.toList()[index]]['total'],
          data[data.keys.toList()[index]]['recent'],
          index == 0? ThemeManager().currentTheme.purple : index == 1? ThemeManager().currentTheme.red : index == 2? ThemeManager().currentTheme.yellow : ThemeManager().currentTheme.white
      ));
      resultPageBloc.setUserList.add(users);
      resultPageBloc.setCurrentUser.add(users[currentUserId]);
    });
  }

  void startTimer(double milliseconds) {
    int t = (milliseconds/100).floor();
    Timer.periodic(Duration(seconds: 1), (timer) {
      if (t == 1) {
        if (!isAnswered) socket!.emit('answer', 0);
        timer.cancel();
      }

      pointMuliplier = t/(milliseconds/100).floor();
      playPageBloc.setTimer.add(t--);
      timer.tick;
    });
  }
  
  void initAdmin() {
    socket!.clearListeners();
    playPageBloc.setAnswersList.add([
      AnswerState('Показать следующий вопрос', ThemeManager().currentTheme.white),
      AnswerState('Остановить время, показать результат', ThemeManager().currentTheme.white),
      AnswerState('Рестарт сервера', ThemeManager().currentTheme.white),
      AnswerState('', ThemeManager().currentTheme.white, false)
    ]);

    playPageBloc.setQuestion.add('Панель администратора');
    
    playPageBloc.answer.listen((event) { 
      switch (event) {
        case 0:
          socket!.emit('setState', 'SHOWQUESTION');
          print(event);
          break;
        case 1:
          socket!.emit('setState', 'SHOWRESULTS');
          print(event);
          break;
        case 2:
          socket!.emit('setState', 'WAITIGUSERS');
          print(event);
          loginFromUsername();
          break;
      }
    });

    navigatorBloc.setRoute.add('/play');
  }

  Socket connectToServer(String login) {
    Socket socket = io('https://quizapi.onixx.org',
        OptionBuilder()
            .setTransports(['websocket'])
            .disableAutoConnect()
            .setAuth({'username': login})
            .build()
    );

    socket.connect();

    return socket;
  }

  Socket restoreConnectionToServer(String sessionId) {
    Socket socket = io('https://quizapi.onixx.org',
        OptionBuilder()
            .setTransports(['websocket'])
            .disableAutoConnect()
            .setAuth({'sessionID': sessionId})
            .build()
    );

    socket.connect();

    return socket;
  }

  String saveSessionId(String data, bool isAdmin) {
    print(data);
    String sessionId = jsonDecode(data)['sessionID'];
    localRepository.save(sessionId, isAdmin, login);
    return sessionId;
  }

  void dispose() {
    loginPageBloc.dispose();
    playPageBloc.dispose();
    resultPageBloc.dispose();
  }
}