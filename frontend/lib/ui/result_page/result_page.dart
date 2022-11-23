import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_svg/svg.dart';
import 'package:quiz_app/assets/theming/theme_manager.dart';
import 'package:quiz_app/models/result_page/result_page_bloc.dart';
import 'package:quiz_app/models/result_page/result_page_user_state.dart';
import 'package:quiz_app/ui/result_page/widgets/result_page_name_container.dart';
import 'package:quiz_app/ui/widgets/title_text.dart';
import 'package:url_launcher/url_launcher.dart';

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
              behavior:
                  ScrollConfiguration.of(context).copyWith(scrollbars: false),
              child: Stack(
                children: [
                  Align(
                    alignment: Alignment.topCenter,
                    child: ConstrainedBox(
                        constraints: const BoxConstraints(maxWidth: 500),
                        child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: FractionallySizedBox(
                                heightFactor: 0.3,
                                child: Center(
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      const SizedBox(
                                        height: 50,
                                      ),
                                      StreamBuilder<String>(
                                        initialData: '...',
                                        stream: resultPageBloc.questionId,
                                        builder: (_, s) => Text(
                                          s.requireData,
                                          style: Theme.of(context)
                                              .textTheme
                                              .headline4,
                                          textAlign: TextAlign.center,
                                        ),
                                      ),
                                      const SizedBox(
                                        height: 20,
                                      ),
                                      const TitleText('Лидерборд'),
                                      const SizedBox(
                                        height: 40,
                                      ),
                                    ],
                                  ),
                                )))),
                  ),
                  Align(
                      alignment: Alignment.topCenter,
                      child: ConstrainedBox(
                          constraints: const BoxConstraints(maxWidth: 500),
                          child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: StreamBuilder<List<UserState>>(
                                initialData: const [],
                                stream: resultPageBloc.userList,
                                builder: (_, s) => ListView.builder(
                                    itemCount: s.requireData.length + 2,
                                    itemBuilder: (__, i) {
                                      if (i == 0) {
                                        return SizedBox(
                                          height: MediaQuery.of(context)
                                                  .size
                                                  .height *
                                              0.33,
                                        );
                                      }

                                      if (i == s.requireData.length + 1) {
                                        return SizedBox(
                                          height: MediaQuery.of(context)
                                                  .size
                                                  .height *
                                              0.3,
                                        );
                                      }

                                      if (s.requireData[i - 1].name
                                              .split(' ')[0] ==
                                          'lAqSCG4rIV') return SizedBox();

                                      return Padding(
                                        padding:
                                            const EdgeInsets.only(bottom: 12),
                                        child: NameContainer(
                                            color: s.requireData[i - 1].color,
                                            name: s.requireData[i - 1].name,
                                            position: s.requireData[i - 1].id,
                                            totalPoints: s
                                                .requireData[i - 1].totalPoints,
                                            roundPoints: s.requireData[i - 1]
                                                .roundPoints),
                                      );
                                    })),
                          ))),
                  Align(
                      alignment: Alignment.bottomCenter,
                      child: StreamBuilder<UserState>(
                          initialData:
                              UserState(0, '-', 0, 0, theme.currentTheme.grey),
                          stream: resultPageBloc.currentUser,
                          builder: (_, s) {
                            if (s.requireData.name.split(' ')[0] ==
                                    'lAqSCG4rIV' ||
                                s.requireData.name.split(' ')[0] == '-')
                              return const SizedBox();
                            return FractionallySizedBox(
                              heightFactor: 0.3,
                              widthFactor: 1.0,
                              child: Container(
                                  decoration: const BoxDecoration(
                                      gradient: LinearGradient(
                                          begin: Alignment.bottomCenter,
                                          end: Alignment.topCenter,
                                          colors: [
                                        Colors.grey,
                                        Colors.transparent
                                      ])),
                                  child: Padding(
                                    padding: const EdgeInsets.only(
                                        bottom: 40, left: 20, right: 20),
                                    child: Align(
                                        alignment: Alignment.bottomCenter,
                                        child: ConstrainedBox(
                                          constraints: const BoxConstraints(
                                              maxWidth: 500),
                                          child: NameContainer(
                                              color: s.requireData!.color,
                                              name: s.requireData!.name,
                                              position: s.requireData!.id,
                                              totalPoints:
                                                  s.requireData!.totalPoints,
                                              roundPoints:
                                                  s.requireData!.roundPoints),
                                        )),
                                  )),
                            );
                          })),
                  Align(
                      alignment: Alignment.topCenter,
                      child: ConstrainedBox(
                        constraints: const BoxConstraints(maxWidth: 500),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 20, vertical: 20),
                          child: StreamBuilder<String>(
                              initialData: '...',
                              stream: resultPageBloc.questionId,
                              builder: (_, s) => s.requireData == 'Конец игры!'
                                  ? InkWell(
                                      onTap: () =>
                                          launch('https://quolly-app.tilda.ws'),
                                      child: Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.center,
                                        children: [
                                          Text("Создай свой квиз с Quolly",
                                              style: Theme.of(context)
                                                  .textTheme
                                                  .headline4
                                                  ?.apply(
                                                    color: Color(0xffDF3042),
                                                    decoration: TextDecoration
                                                        .underline,
                                                  ),
                                              textAlign: TextAlign.left),
                                          const SizedBox(width: 10),
                                          SvgPicture.asset(
                                            'assets/quolly.svg',
                                          )
                                        ],
                                      ))
                                  : const SizedBox()),
                        ),
                      )),
                ],
              ),
            ))));
  }
}
