import 'package:socket_io_client/socket_io_client.dart';

abstract class UserLogic {

  void init(String name);
  void waiting();
  void question(Map data, Socket socket);
  void results(Map data);
  void finalResults(Map data);

  void admin(Socket socket, Function onReset);


}