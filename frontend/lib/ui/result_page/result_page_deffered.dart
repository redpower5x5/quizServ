import 'package:flutter/material.dart';
import 'package:quiz_app/models/result_page/result_page_bloc.dart';
import 'result_page.dart' deferred as result;

class ResultPageDeffered extends StatefulWidget {
  final ResultPageBloc resultPageBloc;
  const ResultPageDeffered({super.key, required this.resultPageBloc});

  @override
  State<ResultPageDeffered> createState() => _ResultPageDefferedState();
}

class _ResultPageDefferedState extends State<ResultPageDeffered> {

  late Future<void> _libraryFuture;

  @override
  void initState() {
    _libraryFuture = result.loadLibrary();
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
            return result.ResultPage(widget.resultPageBloc);
          }
          return const CircularProgressIndicator();
        },
    );
  }
}