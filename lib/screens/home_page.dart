import 'package:flutter/material.dart';
import 'package:cloud_functions/cloud_functions.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final functions = FirebaseFunctions.instance;

  bool _isSending = false;

  Future<void> sendEmail() async {
    setState(() => _isSending = true);

    final callable = functions.httpsCallable('sendEmailToUser');
    final results = await callable();

    setState(() => _isSending = false);

    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text(
          'Email sent successfully!',
          style: TextStyle(fontSize: 18),
        ),
      ),
    );

    debugPrint(results.data);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cloud Functions'),
      ),
      body: Center(
        child: _isSending
            ? const CircularProgressIndicator()
            : ElevatedButton(
                onPressed: () async => await sendEmail(),
                child: const Padding(
                  padding: EdgeInsets.all(8.0),
                  child: Text(
                    'Send Email',
                    style: TextStyle(fontSize: 24),
                  ),
                ),
              ),
      ),
    );
  }
}
