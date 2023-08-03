#Task 2
#Balbir Singh Thapa
#2358204

#importing the numpy module
import numpy as np

# making the matrix as per question    
matrix1 = np.array([[1,2,3],[4,5,6],[7,8,9]])
matrix2 = np.array([[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]])
matrix3 = np.array([[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6]])

# making fucntion 
def matrixTrace(array):
  #using try except for error handling 
  try:
    #using trace fucntion to sum diagonal of matrix
    a  = np.trace(array)
    return f"The sum of diagonal of matrix is {a}."
  except:
    return "Please, enter the valid input."
totalMatrices = [matrix1,matrix2,matrix3]
for i in totalMatrices:
  print(matrixTrace(i))
