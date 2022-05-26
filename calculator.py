#! /usr/bin/python3

def read_number(line, index):
  number = 0
  while index < len(line) and line[index].isdigit():
    number = number * 10 + int(line[index])
    index += 1
  if index < len(line) and line[index] == '.':
    index += 1
    decimal = 0.1
    while index < len(line) and line[index].isdigit():
      number += int(line[index]) * decimal
      decimal /= 10
      index += 1
  token = {'type': 'NUMBER', 'number': number}
  return token, index


def read_plus(line, index):
  token = {'type': 'PLUS'}
  return token, index + 1


def read_minus(line, index):
  token = {'type': 'MINUS'}
  return token, index + 1

def read_mult(line, index):
  token = {'type': 'MULT'}
  return token, index + 1

def read_div(line, index):
  token = {'type': 'DIVISION'}
  return token, index + 1

def find_bracket(line, index):
  count_inner = 0
  count_outer = 0
  while line[index] != ')':
    if (line[index] == '('):
      count_inner += 1
    index += 1  
  while index < len(line):
    if (line[index] == ')'):
      count_outer += 1
    if count_inner == count_outer:
      return index  
    index += 1   

def tokenize(line):
  tokens = []
  index = 0
  while index < len(line):
    if line[index].isdigit():
      (token, index) = read_number(line, index)
    elif line[index] == '+':
      (token, index) = read_plus(line, index)
    elif line[index] == '-':
      (token, index) = read_minus(line, index)
    elif line[index] == '*':
      (token, index) = read_mult(line, index)
    elif line[index] == '/':
      (token, index) = read_div(line, index)  
    elif line[index] == '(':
      inner_bracket = index
      index = find_bracket(line, inner_bracket) 
      sub_token = tokenize(line[inner_bracket+1 : index])
      sub_answer = evaluate(sub_token)
      token = {'type': 'NUMBER', 'number': sub_answer}
      index += 1
    else:
      print('Invalid character found: ' + line[index])
      exit(1)
    tokens.append(token) 
  return tokens

def evaluate(tokens):
  answer = 0
  tokens.insert(0, {'type': 'PLUS'}) # Insert a dummy '+' token
  index = 1
  while index < len(tokens):
    if tokens[index]['type'] == 'NUMBER':
      if tokens[index - 1]['type'] == 'MULT':
        tokens[index - 2]['number'] *= tokens[index]['number']
      elif tokens[index - 1]['type'] == 'DIVISION':
        tokens[index - 2]['number'] /= tokens[index]['number']
      elif tokens[index - 1]['type'] == 'PLUS' or tokens[index - 1]['type'] == 'MINUS':
        pass
      else:
        print('Invalid syntax')
        exit(1)
    index += 1

  index = 1
  while index < len(tokens):
    if tokens[index]['type'] == 'NUMBER':
      if tokens[index - 1]['type'] == 'PLUS':
        answer += tokens[index]['number']
      elif tokens[index - 1]['type'] == 'MINUS':
        answer -= tokens[index]['number']
      elif tokens[index - 1]['type'] == 'MULT' or tokens[index - 1]['type'] == 'DIVISION':
        pass
      else:
        print('Invalid syntax')
        exit(1)
    index += 1
  return answer 


def test(line):
  tokens = tokenize(line)
  print(tokens)
  actual_answer = evaluate(tokens)
  expected_answer = eval(line)
  if abs(actual_answer - expected_answer) < 1e-8:
    print("PASS! (%s = %f)" % (line, expected_answer))
  else:
    print("FAIL! (%s should be %f but was %f)" % (line, expected_answer, actual_answer))


# Add more tests to this function :)
def run_test():
  print("==== Test started! ====")
  test("1+2")
  test("1.0+2.1-3")
  test("3*1.1")
  test("53/2")
  test("4+2*9-3/5")
  test("(1+2)")
  test("5*(2+7-8)+1")
  test("7-(5+3*4)*(4+(2*9.2)-7)")
  print("==== Test finished! ====\n")

run_test()

while True:
  print('> ', end="")
  line = input()
  tokens = tokenize(line)
  answer = evaluate(tokens)
  print("answer = %f\n" % answer)