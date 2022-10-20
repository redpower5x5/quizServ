import 'package:flutter/material.dart';
import 'package:quiz_app/models/play_page/play_page_bloc.dart';
import 'play_page.dart' deferred as play;

class PlayPageDeffered extends StatefulWidget {
  final PlayPageBloc playPageBloc;
  const PlayPageDeffered({super.key, required this.playPageBloc});

  @override
  State<PlayPageDeffered> createState() => _PlayPageDefferedState();
}

class _PlayPageDefferedState extends State<PlayPageDeffered> {

  late Future<void> _libraryFuture;

  @override
  void initState() {
    _libraryFuture = play.loadLibrary();
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
          return play.PlayPage(widget.playPageBloc);
        }
        return const CircularProgressIndicator();
      },
    );
  }
}