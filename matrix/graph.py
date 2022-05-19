import numpy, sys
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

lines = []
with open('execution_time.txt') as f:
  lines = f.readlines()

n = int(lines[0])
x = numpy.arange(1, n+1) 
time_list = numpy.array(lines[1:])

plt.plot(x, time_list)
plt.xlabel("N")
plt.ylabel("Execution time (ms)")
plt.savefig("graph2.png")