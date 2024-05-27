
def solution(S):
    """
    Finds a pair of strings in the given array S that have the same letter at the same position.
    
    Args:
        S (List[str]): Array of strings.
    
    Returns:
        List[int]: Array containing three integers representing the indexes in S of the strings belonging to the pair,
                   and the position of the common letter. If no common letter is found, returns an empty array.
    """
    N = len(S)  # Number of strings in S
    M = len(S[0])  # Length of each string in S
    common_letters = []  # List to store the pairs of strings with common letters

    for i in range(N):
        for j in range(i + 1, N):
            for k in range(M):
                if S[i][k] == S[j][k]:
                    common_letters.append([i, j, k])  # Append the pair of strings and the common letter position
                    break

    return common_letters[0] if common_letters else []  # Return the first pair of common letters found, or an empty array

S = ["zzzz", "ferz", "zdsr", "fgtd"]
result = solution(S)
print(result)