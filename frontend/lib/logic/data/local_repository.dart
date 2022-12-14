//Copyright Dariusz Bacinski from https://stackoverflow.com/questions/56417667/how-to-save-to-web-local-storage-in-flutter-web

import 'dart:html';

class LocalRepository {
  final Storage _localStorage = window.localStorage;

  Future save(String id, bool isAdmin, String name) async {
    _localStorage['sessionId'] = id;
    _localStorage['isAdmin'] = isAdmin.toString();
    _localStorage['name'] = name;
  }

  Future saveAnswer(int answer) async {
    _localStorage['answer'] = answer.toString();
  }

  Future<String?> getId() async => _localStorage['sessionId'];
  Future<String?> getName() async => _localStorage['name'];
  Future<bool?> getIsAdmin() async => _localStorage['isAdmin'] == 'true'? true : false;
  Future<int> getAnswer() async => int.parse(_localStorage['answer']??'0');

  Future invalidate() async {
    _localStorage.remove('sessionId');
    _localStorage.remove('isAdmin');
    _localStorage.remove('name');
    _localStorage.remove('answer');
    print('invalidated');
  }
}