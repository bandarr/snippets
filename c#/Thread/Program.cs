// See https://aka.ms/new-console-template for more information
using System;
using System.Threading;

class Program
{
  static void Main()
  {
    Thread t = new Thread(Worker);
    t.Start();

    for (int i = 0; i < 10; i++)
    {
      Console.WriteLine("Main thread doing some work");
      Thread.Sleep(100);
    }

    t.Join();

    Console.WriteLine("Done");
  }

  static void Worker()
  {
    for (int i = 0; i < 10; i++)
    {
      Console.WriteLine("Worker thread doing some work");
      Thread.Sleep(100);
    }
  }
}
