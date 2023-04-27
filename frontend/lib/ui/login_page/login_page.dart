import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:provider/provider.dart';
import 'package:quiz_app/assets/theming/theme_manager.dart';
import 'package:quiz_app/models/login_page/login_page_bloc.dart';
import 'package:quiz_app/models/login_page/login_page_button_state.dart';
import 'package:quiz_app/ui/widgets/title_text.dart';

import 'widgets/login_page_button.dart';

class LoginPage extends StatelessWidget {
  final LoginPageBloc loginPageBloc;

  const LoginPage(this.loginPageBloc, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeManager>(
        builder: (_, theme, __) => Scaffold(
            resizeToAvoidBottomInset: false,
            backgroundColor: theme.currentTheme.backgroundColor,
            body: Center(
              child: Stack(
                children: [
                  Align(
                      alignment: Alignment.center,
                      child: ConstrainedBox(
                        constraints: const BoxConstraints(maxWidth: 500),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 20),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              const TitleText('Привет!'),
                              const SizedBox(
                                height: 80,
                              ),
                              TextField(
                                style: Theme.of(context).textTheme.headline2,
                                decoration: const InputDecoration(
                                    hintText: 'Введи свое имя'),
                                onChanged: (text) =>
                                    loginPageBloc.editName.add(text),
                              ),
                              const SizedBox(height: 15),
                              StreamBuilder<String?>(
                                  initialData: null,
                                  stream: loginPageBloc.error,
                                  builder: (_, snapshot) => AnimatedContainer(
                                      duration:
                                          const Duration(milliseconds: 200),
                                      child: snapshot.data != null
                                          ? Column(
                                              mainAxisSize: MainAxisSize.min,
                                              children: [
                                                Padding(
                                                  padding: const EdgeInsets
                                                          .symmetric(
                                                      horizontal: 40),
                                                  child: Text(
                                                    snapshot.data ?? '',
                                                    style: Theme.of(context)
                                                        .textTheme
                                                        .subtitle1,
                                                    textAlign: TextAlign.center,
                                                  ),
                                                ),
                                                const SizedBox(
                                                  height: 15,
                                                )
                                              ],
                                            )
                                          : const SizedBox())),
                              StreamBuilder<ButtonState>(
                                  initialData: ButtonState('Загрузка', false),
                                  stream: loginPageBloc.enterButton,
                                  builder: (_, s) => LoginPageButton(
                                        text: s.requireData.comment,
                                        onTap: () => loginPageBloc.pushTap
                                            .add(s.requireData.isActive),
                                        isActive: s.requireData.isActive,
                                      ))
                            ],
                          ),
                        ),
                      )),
                  // Align(
                  //   alignment: Alignment.bottomCenter,
                  //   child: Padding(
                  //     padding: const EdgeInsets.only(bottom: 50),
                  //     child: SvgPicture.asset('assets/itam.svg'),
                  //   ),
                  // )
                ],
              ),
            )));
  }
}
