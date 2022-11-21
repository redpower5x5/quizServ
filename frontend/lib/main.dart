import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:quiz_app/assets/material_color_generator/material_color_generator.dart';
import 'package:quiz_app/assets/theming/theme_manager.dart';
import 'package:quiz_app/logic/game.dart';
import 'package:quiz_app/models/navigator/navigator_bloc_provider.dart';
import 'package:quiz_app/ui/login_page/login_page_deffered.dart';
import 'package:quiz_app/ui/play_page/play_page_deffered.dart';
import 'package:quiz_app/ui/result_page/result_page_deffered.dart';

void main() {
  print('Quolly v 0.9.7');
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  GameLogic gameLogic = GameLogic();

  @override
  void initState() {
    super.initState();

    gameLogic.init();
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ThemeManager>(
        create: (_) => ThemeManager(),
        builder: (_, __) => Consumer<ThemeManager>(
              builder: (_, themeManager, __) => MaterialApp(
                title: 'Quolly',
                theme: ThemeData(
                    primarySwatch: themeManager.currentTheme.accentColor
                        .generateMaterial(),
                    textTheme: TextTheme(
                      headline1: GoogleFonts.montserrat(
                          textStyle: TextStyle(
                              fontSize: 36,
                              color: themeManager.currentTheme.textColorInverse,
                              fontWeight: FontWeight.w800)),
                      headline2: GoogleFonts.montserrat(
                          textStyle: TextStyle(
                              fontSize: 21,
                              color: themeManager.currentTheme.textColorInverse,
                              fontWeight: FontWeight.w500)),
                      headline3: GoogleFonts.montserrat(
                          textStyle: TextStyle(
                              fontSize: 21,
                              color: themeManager.currentTheme.textColorInverse,
                              fontWeight: FontWeight.w800)),
                      headline4: GoogleFonts.montserrat(
                          textStyle: TextStyle(
                              fontSize: 17,
                              color: themeManager.currentTheme.grey,
                              fontWeight: FontWeight.w800)),
                      headline5: GoogleFonts.montserrat(
                          textStyle: TextStyle(
                              fontSize: 24,
                              color: themeManager.currentTheme.textColorInverse,
                              fontWeight: FontWeight.w700)),
                      headline6: GoogleFonts.montserrat(
                          textStyle: TextStyle(
                              fontSize: 24,
                              color: themeManager.currentTheme.black,
                              fontWeight: FontWeight.w700)),
                      subtitle1: GoogleFonts.montserrat(
                          textStyle: TextStyle(
                        fontSize: 14,
                        color: themeManager.currentTheme.textColorInverse,
                        fontWeight: FontWeight.w500,
                      )),
                      subtitle2: GoogleFonts.montserrat(
                          textStyle: TextStyle(
                        fontSize: 15,
                        color: themeManager.currentTheme.textColorInverse,
                        fontWeight: FontWeight.w800,
                      )),
                    ),
                    backgroundColor: themeManager.currentTheme.backgroundColor,
                    inputDecorationTheme: InputDecorationTheme(
                      enabledBorder: OutlineInputBorder(
                          borderSide: BorderSide(
                            color: themeManager.currentTheme.accentColor,
                            width: 2.2,
                          ),
                          borderRadius: BorderRadius.circular(15)),
                      focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(
                            color: themeManager.currentTheme.accentColor,
                            width: 2.2,
                          ),
                          borderRadius: BorderRadius.circular(16)),
                      hintStyle: GoogleFonts.montserrat(
                          textStyle: TextStyle(
                              fontSize: 21,
                              color: themeManager.currentTheme.textColorInverse,
                              fontWeight: FontWeight.w500)),
                    )),
                routes: {
                  '/login': (c) => NavigatorBLocProvider(
                      routeName: '/login',
                      buildContext: c,
                      navigatorStream: gameLogic.navigatorBloc.navigator,
                      child: LoginPageDeffered(
                          loginPageBloc: gameLogic.loginPageBloc)),
                  '/play': (c) => NavigatorBLocProvider(
                      routeName: '/play',
                      buildContext: c,
                      navigatorStream: gameLogic.navigatorBloc.navigator,
                      child: PlayPageDeffered(
                          playPageBloc: gameLogic.playPageBloc)),
                  '/result': (c) => NavigatorBLocProvider(
                      routeName: '/result',
                      buildContext: c,
                      navigatorStream: gameLogic.navigatorBloc.navigator,
                      child: ResultPageDeffered(
                        resultPageBloc: gameLogic.resultPageBloc,
                      ))
                },
                initialRoute: '/login',
              ),
            ));
  }
}
