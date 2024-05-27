def solution(S):
    N = len(S)
    M = len(S[0])
    common_letters = []

    for i in range(N):
        for j in range(i + 1, N):
            for k in range(M):
                if S[i][k] == S[j][k]:
                    common_letters.append([i, j, k])
                    break

    return common_letters[0] if common_letters else []

S = ["zzzz", "ferz", "zdsr", "fgtd"]
result = solution(S)
print(result)