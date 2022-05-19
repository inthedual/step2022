import numpy, sys, time
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

if (len(sys.argv) != 2):
    print("usage: python %s N" % sys.argv[0])
    quit()

n = int(sys.argv[1])
a = numpy.zeros((n, n)) # Matrix A
b = numpy.zeros((n, n)) # Matrix B
c = numpy.zeros((n, n)) # Matrix C
x = numpy.arange(1, n+1)
time_list = numpy.empty(n) # List for storing time

# Initialize the matrices to some values.
for t in range(1, n+1):
  for i in range(t):
    for j in range(t):
      a[i, j] = i * t + j
      b[i, j] = j * t + i
      c[i, j] = 0
  
  #repeat the process to gain a more accurate result
  avg_time = 0
  for l in range(10):
    begin = time.time()
    ######################################################
    # Write code to calculate C = A * B                  #
    # (without using numpy librarlies e.g., numpy.dot()) #
    ######################################################
    for i in range(t):
      for j in range(t):
       for k in range(t):
         c[i, j] += a[i, k] * b[k, j]

    end = time.time()
    avg_time += end - begin
  time_list[t-1] = avg_time / 5
  #print("time: %.6f sec" % (end - begin))

# Print C for debugging. Comment out the print before measuring the execution time.
  total = 0
  for i in range(t):
    for j in range(t):
      # print c[i, j]
      total += c[i, j]
  # Print out the sum of all values in C.
  # This should be 450 for N=3, 3680 for N=4, and 18250 for N=5.
  #print("sum: %.6f" % total)

plt.plot(x, time_list)
plt.xlabel("N")
plt.ylabel("Execution time (s)")
plt.savefig("graph1.png")