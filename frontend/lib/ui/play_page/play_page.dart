import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:quiz_app/assets/theming/theme_manager.dart';
import 'package:quiz_app/models/play_page/play_page_answer_state.dart';
import 'package:quiz_app/models/play_page/play_page_bloc.dart';
import 'package:quiz_app/models/play_page/play_page_timer_state.dart';
import 'package:quiz_app/ui/play_page/widgets/play_page_choose_button.dart';
import 'package:quiz_app/ui/widgets/title_text.dart';

class PlayPage extends StatelessWidget {

  PlayPageBloc playPageBloc;

  PlayPage(this.playPageBloc, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeManager>(
        builder: (_, theme, __) => Scaffold(
            backgroundColor: theme.currentTheme.backgroundColor,
            body: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(
                  maxWidth: 500
                ),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    children: [
                      Flexible(
                        flex: 2,
                        child: Padding(
                          padding: const EdgeInsets.symmetric(vertical: 20),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              StreamBuilder<String>(
                                  initialData: '...',
                                  stream: playPageBloc.questionId,
                                  builder: (_, s) => Text(s.requireData, style: Theme.of(context).textTheme.headline4,)
                              ),
                              const SizedBox(height: 20,),
                              Flexible(
                                child: StreamBuilder<String>(
                                  initialData: 'Ожидание...',
                                  stream: playPageBloc.question,
                                  builder: (_, s) => TitleText(s.requireData),
                                ),
                              ),
                              const SizedBox(height: 40,),
                              StreamBuilder<TimerState>(
                                initialData: TimerState('--:--', theme.currentTheme.accentColor),
                                stream: playPageBloc.timer,
                                builder: (_, s) => Text(s.requireData.text, style: Theme.of(context).textTheme.headline5!.copyWith(color: s.requireData.color),),
                              ),
                            ],
                          ),
                        )
                      ),
                      Flexible(
                        flex: 4,
                        child: Consumer<ThemeManager>(
                            builder: (_, themeManager, __) =>
                                StreamBuilder<List<AnswerState>>(
                                  initialData: [
                                    AnswerState('', themeManager.currentTheme.blue, true),
                                    AnswerState('', themeManager.currentTheme.red, false),
                                    AnswerState('', themeManager.currentTheme.purple, false),
                                    AnswerState('', themeManager.currentTheme.yellow, false)
                                  ],
                                  stream: playPageBloc.answersList,
                                  builder: (_, s) =>
                                      GridView.builder(
                                          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                                            crossAxisCount: 2,
                                            crossAxisSpacing: 18,
                                            mainAxisSpacing: 18,
                                            childAspectRatio: 155/155,
                                          ),
                                          padding: const EdgeInsets.only(bottom: 20),
                                          shrinkWrap: true,
                                          physics: const NeverScrollableScrollPhysics(),
                                          itemCount: 4,
                                          itemBuilder: (_, i) =>
                                              ChooseButton(
                                                text: s.requireData[i].text,
                                                mainColor: s.requireData[i].color,
                                                isActive: s.requireData[i].isActive,
                                                onTap: () => playPageBloc.setAnswer.add(i)
                                              )
                                      )
                                )
                          )
                      )
                    ],
                  ),
                )
              )
            )
        )
    );
  }

}