
def solution(A):
    n = len(A)
    if n < 2:
        return n
    
    left = 0
    right = 1
    max_length = 2
    
    while right < n:
        if A[right] < A[right - 1]:
            while left < right and A[left] > A[left + 1]:
                left += 1
            max_length = max(max_length, right - left + 1)
            left = right
        right += 1
    
    while left < n - 1 and A[left] > A[left + 1]:
        left += 1
    max_length = max(max_length, n - left)
    
    return max_length

A = [1, 2]
print(solution(A))
A = [2, 3, 3, 2, 2, 2, 1]
print(solution(A))