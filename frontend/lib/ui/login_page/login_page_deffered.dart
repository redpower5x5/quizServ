import 'package:flutter/material.dart';
import 'package:quiz_app/models/login_page/login_page_bloc.dart';
import 'package:quiz_app/models/play_page/play_page_bloc.dart';
import 'login_page.dart' deferred as login;

class LoginPageDeffered extends StatefulWidget {
  final LoginPageBloc loginPageBloc;
  const LoginPageDeffered({super.key, required this.loginPageBloc});

  @override
  State<LoginPageDeffered> createState() => _LoginPageDefferedState();
}

class _LoginPageDefferedState extends State<LoginPageDeffered> {

  late Future<void> _libraryFuture;

  @override
  void initState() {
    _libraryFuture = login.loadLibrary();
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: _libraryFuture,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.done) {
          if (snapshot.hasError) {
            return Text('Error: ${snapshot.error}');
          }
          return login.LoginPage(widget.loginPageBloc);
        }
        return const CircularProgressIndicator();
      },
    );
  }
}