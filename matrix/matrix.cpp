// When N=850, it causes a segmentation fault ???
#include <bits/stdc++.h>
#include <chrono>
using namespace std;
using namespace std::chrono;

int main(int argc, char** argv)
{
  if (argc != 2) {
    printf("usage: %s N\n", argv[0]);
    return -1;
  }

  ofstream time_file ("execution_time.txt");

  int n = atoi(argv[1]);
  int a[n][n]; // Matrix A
  int b[n][n]; // Matrix B
  int c[n][n]; // Matrix C

  time_file << n << endl;

  // Initialize the matrices to some values.
  for (int t = 1; t < n+1; t++) {
    int i, j;
    for (i = 0; i < t; i++) {
      for (j = 0; j < t; j++) {
        a[i][j] = i * t + j; // A[i][j]
        b[i][j]= j * t + i; // B[i][j]
        c[i][j] = 0; // C[i][j]
      }
    }
    auto begin = high_resolution_clock::now();

    /**************************************/
    /* Write code to calculate C = A * B. */
    /**************************************/
    for (int i = 0; i < t; i++) {
      for (int j = 0; j < t; j++) {
        for (int k = 0; k < t; k++) {
          c[i][j] += a[i][k] * b[k][j];
        }
      }
    }

    auto end = high_resolution_clock::now();
    auto time = chrono::duration <double, milli> (end - begin).count();
  

    if (time_file.is_open()) {
     time_file << time << endl;
    }
    else {
      cout << "Unable to open file" << endl;
      return -1;
    }
  }

}