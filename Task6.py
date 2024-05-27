def solution(A):
    
    A.sort(reverse=True)

    
    for i in range(len(A)):
        A[i] = sum(int(digit) for digit in str(A[i]))

   
    for i in range(len(A) - 1):
        if A[i] < A[i + 1]:
            A[i], A[i + 1] = A[i + 1], A[i]

    
    return sum(A)

print(solution([1, 10, 12, 3]))  
print(solution([100, 101, 102, 103]))           
print(solution([55]))           
