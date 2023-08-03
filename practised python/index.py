#Task 1
# Balbir Singh Thapa
# 2358204

# importing the numpy
import numpy as np
#initializing the matrix
matrix = []

count = 0
#Making conditon for count to be less than equal to 8
while count <= 8:
  #Using try except for invalid input
  try:
    userInput = float(input(f"Enter the value {count+1} :"))
    matrix.append(userInput)
    count+=1
  except:
    print("Invalid input please enter the proper value:")
#making an array through np.array
A = np.array(matrix)
# reshaping the array A to 3*3 matrix
A = A.reshape(3,3)
#print the result
print(A)
#finding the determinant
try:
  determinant = np.linalg.det(A)
  print(f"The determinant of the matrix A is {determinant}.")

  # finding the inverse of matrix
  inverse = np.linalg.inv(A)
  print(f"The inverse of the matrix A is {inverse}.")
#except the error throug message
except:
  print("The determinant does not exist.")
#multiplying the matrix A and A
squareA = np.matmul(A,A)
print(f"The matrix of A*A is {squareA}.")
#multiplying the matrix A*A*A
tripleA = np.matmul(A,squareA)
print(f"The matrix A*A*A is {tripleA}.")

#Using the for loop to find out the number greater than eqaul to 10 in matrix
for i in A:
  for j in i:
    if j>=10:
      print(j)