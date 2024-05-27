
def solution(A):
    # Get the length of the list
    n = len(A)
    
    # If the list has less than 2 elements, the longest spike length is the length of the list
    if n < 2:
        return n
    
    # Initialize the left and right pointers and the maximum spike length
    left = 0
    right = 1
    max_length = 2
    
    # Iterate through the list
    while right < n:
        # If the current element is less than the previous element, it is the start of a spike
        if A[right] < A[right - 1]:
            # Find the rightmost element on the left side that is greater than the current element
            while left < right and A[left] > A[left + 1]:
                left += 1
            
            # Update the maximum spike length
            max_length = max(max_length, right - left + 1)
            
            # Move the left pointer to the start of the spike
            left = right
        
        # Move the right pointer to the next element
        right += 1
    
    # Find the leftmost element on the right side that is less than the current element
    while left < n - 1 and A[left] > A[left + 1]:
        left += 1
    
    # Update the maximum spike length with the length from the last spike
    max_length = max(max_length, n - left)
    
    # Return the maximum spike length
    return max_length

# Example usage
A = [1, 2]
print(solution(A))  # Output: 2

A = [2, 3, 3, 2, 2, 2, 1]
print(solution(A))  # Output: 4