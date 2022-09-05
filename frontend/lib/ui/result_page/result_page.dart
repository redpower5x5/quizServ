import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:quiz_app/assets/theming/theme_manager.dart';
import 'package:quiz_app/models/result_page/result_page_bloc.dart';
import 'package:quiz_app/models/result_page/result_page_user_state.dart';
import 'package:quiz_app/ui/result_page/widgets/result_page_name_container.dart';
import 'package:quiz_app/ui/widgets/title_text.dart';

class ResultPage extends StatelessWidget {
  final ResultPageBloc resultPageBloc;

  const ResultPage(this.resultPageBloc, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeManager>(
        builder: (_, theme, __) => Scaffold(
            backgroundColor: theme.currentTheme.backgroundColor,
            body: Center(
                child: ScrollConfiguration(
                  behavior: ScrollBehavior(),
                  child: Stack(
                    children: [
                      Align(
                        alignment: Alignment.center,
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
                                      child: Center(
                                        child: Column(
                                          mainAxisSize: MainAxisSize.min,
                                          children: [
                                            StreamBuilder<String>(
                                              initialData: '...',
                                              stream: resultPageBloc.questionId,
                                              builder: (_, s) => Text(s.requireData, style: Theme.of(context).textTheme.headline4,),
                                            ),
                                            const SizedBox(height: 20,),
                                            const TitleText('Лидерборд'),
                                            const SizedBox(height: 40,),
                                          ],
                                        ),
                                      ),
                                    ),
                                    Flexible(
                                        flex: 3,
                                        child: StreamBuilder<List<UserState>>(
                                            initialData: [],
                                            stream: resultPageBloc.userList,
                                            builder: (_, s) => ListView.builder(
                                                itemCount: s.requireData.length,
                                                itemBuilder: (__, i) => Padding(
                                                  padding: const EdgeInsets.only(bottom: 12),
                                                  child: NameContainer(
                                                      color: s.requireData[i].color,
                                                      name: s.requireData[i].name,
                                                      position: s.requireData[i].id,
                                                      totalPoints: s.requireData[i].totalPoints,
                                                      roundPoints: s.requireData[i].roundPoints
                                                  ),
                                                )
                                            )
                                        )
                                    ),
                                    Flexible(
                                      flex: 1,
                                      child: SizedBox(),
                                    )
                                  ],
                                )
                            )
                        ),
                      ),
                      Align(
                          alignment: Alignment.bottomCenter,
                          child: FractionallySizedBox(
                            heightFactor: 0.3,
                            widthFactor: 1.0,
                            child: Container(
                                decoration: const BoxDecoration(
                                    gradient: LinearGradient(
                                        begin: Alignment.bottomCenter,
                                        end: Alignment.topCenter,
                                        colors: [Colors.black, Colors.transparent]
                                    )
                                ),
                                child: Padding(
                                  padding: const EdgeInsets.only(bottom: 40, left: 20, right: 20),
                                  child: Align(
                                      alignment: Alignment.bottomCenter,
                                      child: ConstrainedBox(
                                          constraints: const BoxConstraints(
                                              maxWidth: 500
                                          ),
                                          child: StreamBuilder<UserState>(
                                            initialData: UserState(0, 'Ожидание...', 0, 0, theme.currentTheme.white),
                                            stream: resultPageBloc.currentUser,
                                            builder: (_, s) => NameContainer(color: s.requireData.color, name: s.requireData.name, position: s.requireData.id, totalPoints: s.requireData.totalPoints, roundPoints: s.requireData.roundPoints),
                                          )
                                      )
                                  ),
                                )
                            ),
                          )
                      )
                    ],
                  ),
                )
            )
        )
    );
  }

}