import math
# print('Hello World!')
# print('o-------')
# print(' |||||')
# print('*' * 10)

# price = 10
# price = 20
# rating = 4.9
# name = 'joe'
# is_published = True
# print(price)

# return_name = input('whats yo name? ')
# print(return_name)

# birth_year = input('Birth year: ')
# age = 2019 - int(birth_year)
# print(age)

# weight = input("what's yo weight ")
# km = float(weight)/2.2
# print(km)

# first = 'Joe'
# last = 'Yuan'
# message = f'{first} [{last}] is a coder'
# print(message)

# course = 'Python for Beginners'
# # print(len(course))
# # print(course.upper())
# # course = course.upper()
# # print(course)
# # print(course.lower())
# print(course.find('Python'))
# print(course.replace('Beginners', 'Absolute Beginners'))
# print('for' in course)
# print(course.title())

# print(99%34)

# import math
# print(math.ceil(2.9))

# is_hot = False
# is_cold = True
# if is_hot:
#     print("it's a hot day")
# elif is_cold:
#     print("it's a cold day")
# else:
#     print("it's a lovely day")
# print("enjoy your day")

# price = 1000000
# good_credit = True
# if good_credit == False:
#     print(f'put down 10% of ${price}, which is ${price*.1}')
# else:
#     print(f'put down 20% of ${price}, which is ${price*.2}')

# name = input('enter your name ')
# if len(name) < 3:
#     print('name must be at least 3 char long')
# elif len(name) > 50:
#     print('name can be max 50 char')
# else:
#     print('name looks good')

# input_weight = input('enter your weight ')
# unit = input("enter 'K' for kg or 'L' for lbs ")
# if unit == 'K':
#     output_weight = int(input_weight) * 2.2
# elif unit == 'L':
#     output_weight = int(input_weight) / 2.2
# else:
#     print('error: enter K or L')
# print(output_weight)

# i = 0
# while i < 5:
#     print(i)
#     i+=1

# userIn = input('')

# userIn = initialIn
# print(userIn)
# print(initialIn)
# quit = False
# while quit == False:
#     initialIn = input('''
#     'start' to start
#     'stop' to stop
#     'quit' to exit 
#     ''')
#     userIn = initialIn[:]
#     if userIn == 'start':
#         print('car started ready to go!')
#         initialIn
#     elif userIn == 'stop':
#         print('car stopped.')
#         initialIn
#     elif userIn == 'quit':
#         quit = True
#     else:
#         print('not a valid input')
#         initialIn
        


# For loops
# for item in range(10,16,2):
#     print(item)

# prices = [10,20,30]
# cost = 0
# for price in prices:
#     cost += price
# print(cost)



# nested loops
# (x,y)
# (0,0)
# (0,1)
# (0,2)
# (1,0)
# (1,1)
# (1,2)
# for x in range(4):
#     for y in range(4):
#         print(f'({x}, {y})')
#     # print(x)

# numbers = [5,2,5,2,2]
# for n in numbers:
#     # newN = n
#     answer = ''
#     for i in range(n):
#         answer += 'X'
#     print(answer)

# names = ['John', 'Bob', 'Mosh', 'Sarah', 'Mary']
# names[0] = 'Jon'
# print(names[:3])

# numbers = [3,6,2,8,4,10]
# print(max(numbers))



# 2D Lists

# matrix = [
#     [1,2,3],
#     [4,5,6],
#     [7,8,9]
# ]
# matrix[1][1] = 20
# # print(matrix)
# # print(matrix[2][1])

# for row in matrix:
#     for item in row:
#         print(item)



# List methods
# numbers = [5,2,1,7,4]
# numbers.append(20)
# print(numbers)
# numbers.insert(2,0)
# print(numbers)
# numbers.remove(5)
# print(numbers)
# numbers.pop()
# print(numbers)
# print(numbers.index(0))
# print (44 in numbers)
# numbers.insert(5,4)
# print(numbers)
# print(numbers.count(4))
# numbers.sort()
# print(numbers)
# numbers.reverse()
# print(numbers)
# numbers2 = numbers.copy()
# numbers.append(10)
# print(numbers)
# print(numbers2)
# numbers.clear()
# print(numbers)

# nums = [1,2,3,3,2,1,6,4,5]
# singles = []
# for i in nums:
#     if singles.count(i) == 0:
#         singles.append(i)
# print(singles)



# # Turples
# # immutable lists
# numbers = (1,2,3)
# print(numbers.count(2))
# print(numbers[0])



# Unpacking



