# Task 3
# Balbir Singh Thapa
#2358204

#defining the function
def A(m,n):
  if m == 0:
    return n+1
  elif m > 0 and n == 0:
    return A(m-1,1)
  elif m > 0 and n > 0:
    return A(m-1,A(m,n-1))
#geberating the varaible to call the function
result = A(2,3)
#print the result
print(f"The recursive calls required to evaluate is {result}.")
