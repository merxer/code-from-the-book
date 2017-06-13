class Time:
  """Represents the time of day.
  attributes: hour, minute, second
  """


time = Time()
time.hour = 11
time.minute = 59
time.second = 30

time2 = Time()
time2.hour = 10
time2.minute = 10 
time2.second = 10

def print_time(time):
  print("%.2d:%.2d:%.2d" % (time.hour, time.minute, time.second))

def add_time(t1, t2):
  sum = Time()
  sum.hour = t1.hour + t2.hour
  sum.minute = t1.minute + t2.minute
  sum.second = t1.second + t2.second
  return sum


print_time(time)

