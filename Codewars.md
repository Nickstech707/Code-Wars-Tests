## Task 1 description

You are given an array S consisting of N strings. Every string is of the same length M. Your task is to find a pair of strings in array S, such that there exists a position in which both of the strings have the same letter. Both the index in array S and the positions in the strings are numbered from zero.
For example, given S = ["abc", "bca", "dbe"], string 0 ("abc") and string 2 ("dbe") have the same letter 'b' in position 1. On the other hand, for strings "abc" and "bca" there does not exist a position in which they have the same letter.
Write a function:
function solution(S);
that, given a zero-indexed array S of N strings, returns an array describing a pair of strings from S which share a common letter at some index. If there is no such pair, the function should return an empty array. If there is more than one correct answer, the function can return any of them.
The result should be represented as an array containing three integers. The first two integers are the indexes in S of the strings belonging to the pair. The third integer is the position of the common letter.
For S = ["abc", "bca", "dbe"], as above, the result array should be represented as [0, 2, 1]. Another correct answer is [2, 0, 1], as the order of indexes of strings does not matter.
Examples:

1. Given: S = ["abc", "bca", "dbe"], your function may return [0, 2, 1] as described above.
2. Given: S = ["zzzz", "ferz", "zdsr", "fgtd"], your function may return [0, 1, 3]. Both "zzzz" and "ferz" have 'z' in position 3. The function may also return [1, 3, 0], which would reflect strings "ferz", "fgtd" and letter 'f'.
3. Given A = ["gr", "sd", "rg"], your function should return []. There is no pair of strings that fulfils the criteria.
4. Given A = ["bdafg", "ceagi"], your function may return [0, 1, 2].
   Write an efficient algorithm for the following assumptions:
   N is an integer within the range [1..30,000];
   M is an integer within the range [1..2,000];
   each element of S consists only of lowercase English letters (a-z);
   N \* M ≤ 30,000.

## Task 2 description

We will call a sequence of integers a spike if they first increase (strictly) and then decrease (also strictly, including the last element of the increasing part). For example (4, 5, 7, 6, 3, 2) is a spike, but (1, 1, 5, 4, 3) and (1, 4, 3, 5) are not. Note that the increasing and decreasing parts always intersect, e.g.: for spike (3, 5, 2) sequence (3, 5) is an increasing part and sequence (5, 2) is a decreasing part, and for spike (2) sequence (2) is both an increasing and a decreasing part.
Your are given an array A of N integers. Your task is to calculate the length of the longest possible spike, which can be created from numbers from array A. Note that you are NOT supposed to find the longest spike as a sub-sequence of A, but rather choose some numbers from A and reorder them to create the longest spike.
Write a function:
def solution(A)
which, given an array A of integers of length N, returns the length of the longest spike which can be created from the numbers from A.
Examples:

1. Given A = [1, 2], your function should return 2, because (1, 2) is already a spike.
2. Given A = [2, 5, 3, 2, 4, 1], your function should return 6, because we can create the following spike of length 6: (2, 4, 5, 3, 2, 1).
3. Given A = [2, 3, 3, 2, 2, 2, 1], your function should return 4, because we can create the following spike of length 4: (2, 3, 2, 1) and we cannot create any longer spike. Note that increasing and decreasing parts should be strictly increasing/decreasing and they always intersect.
   Write an efficient algorithm for the following assumptions:
   N is an integer within the range [1..100,000];
   each element of array A is an integer within the range [1..1,000,000].

## Task 3 description

There is an array A that consists of N integers. In one move you can select a number from A and replace it by the sum of its digits. One number can be selected multiple times. You can apply at most two moves. What is the minimum sum of the array you can achieve?
Write a function:
function solution(A);
that, given an array A, returns the minimum sum of the array you can achieve after applying at most two moves.
Examples:

1. Given A = [1, 10, 12, 3], you can apply the move on the second and third elements. Then A = [1, 1, 3, 3] and the function should return 8.
2. Given A = [2, 29, 3], you can apply the move twice on the second element. Then A = [2, 2, 3] and the function should return 7.
3. Given A = [100, 101, 102, 103], you can apply the move on the first and second elements. Then A = [1, 2, 102, 103] and the function should return 208.
4. Given A = [55], you can apply the move twice on the first element. Then A = [1] and the function should return 1.
   Write an efficient algorithm for the following assumptions:
   N is an integer within the range [1..50,000];
   each element of array A is an integer within the range [1..10,000].

## Task 4 description

There are N hospitals, numbered from 0 to N−1. You are given a schedule of work in each of the hospitals for the following M days. The schedule is provided in the form of a two-dimensional array A containing N rows, each row representing the schedule of one hospital, and M columns, each column representing one day. Integer A[K][L] (for K within the range [0..N−1] and L within the range [0..M−1]) represents the ID of the doctor working at hospital K on day L. Note that sometimes an individual doctor may work at more than one hospital even on the same day.
Write a function:
function solution(A);
that, given a matrix A consisting of N rows and M columns representing the hospitals' schedules, finds the number of doctors working at more than one hospital.
Examples:

1. Given A = [ [1, 2, 2], [3, 1, 4] ], the function should return 1.

The doctor with ID 1 works at both hospitals. The doctor with ID 2 works only at hospital number 0, while the doctors with IDs 3 and 4 work only at hospital number 1. 2. Given A = [ [1, 1, 5, 2, 3], [4, 5, 6, 4, 3], [9, 4, 4, 1, 5] ], the function should return 4.

The doctors with IDs 1, 3, 4 and 5 work at more than one hospital. 3. Given A = [ [4, 3], [5, 5], [6, 2] ], the function should return 0.

Each doctor works only at one hospital.
Write an efficient algorithm for the following assumptions:
N and M are integers within the range [1..1,000];
each element of matrix A is an integer within the range [1..N*M].

## Task 5 description

We will call a sequence of integers a spike if they first increase (strictly) and then decrease (also strictly, including the last element of the increasing part). For example (4, 5, 7, 6, 3, 2) is a spike, but (1, 1, 5, 4, 3) and (1, 4, 3, 5) are not. Note that the increasing and decreasing parts always intersect, e.g.: for spike (3, 5, 2) sequence (3, 5) is an increasing part and sequence (5, 2) is a decreasing part, and for spike (2) sequence (2) is both an increasing and a decreasing part.
Your are given an array A of N integers. Your task is to calculate the length of the longest possible spike, which can be created from numbers from array A. Note that you are NOT supposed to find the longest spike as a sub-sequence of A, but rather choose some numbers from A and reorder them to create the longest spike.
Write a function:
def solution(A)
which, given an array A of integers of length N, returns the length of the longest spike which can be created from the numbers from A.
Examples:

1. Given A = [1, 2], your function should return 2, because (1, 2) is already a spike.
2. Given A = [2, 5, 3, 2, 4, 1], your function should return 6, because we can create the following spike of length 6: (2, 4, 5, 3, 2, 1).
3. Given A = [2, 3, 3, 2, 2, 2, 1], your function should return 4, because we can create the following spike of length 4: (2, 3, 2, 1) and we cannot create any longer spike. Note that increasing and decreasing parts should be strictly increasing/decreasing and they always intersect.
   Write an efficient algorithm for the following assumptions:
   N is an integer within the range [1..100,000];
   each element of array A is an integer within the range [1..1,000,000].

## Task 6 description

There is an array A that consists of N integers. In one move you can select a number from A and replace it by the sum of its digits. One number can be selected multiple times. You can apply at most two moves. What is the minimum sum of the array you can achieve?
Write a function:
function solution(A);
that, given an array A, returns the minimum sum of the array you can achieve after applying at most two moves.
Examples:

1. Given A = [1, 10, 12, 3], you can apply the move on the second and third elements. Then A = [1, 1, 3, 3] and the function should return 8.
2. Given A = [2, 29, 3], you can apply the move twice on the second element. Then A = [2, 2, 3] and the function should return 7.
3. Given A = [100, 101, 102, 103], you can apply the move on the first and second elements. Then A = [1, 2, 102, 103] and the function should return 208.
4. Given A = [55], you can apply the move twice on the first element. Then A = [1] and the function should return 1.
   Write an efficient algorithm for the following assumptions:
   N is an integer within the range [1..50,000];
   each element of array A is an integer within the range [1..10,000].

## Task 7 description

You are given an array S consisting of N strings. Every string is of the same length M. Your task is to find a pair of strings in array S, such that there exists a position in which both of the strings have the same letter. Both the index in array S and the positions in the strings are numbered from zero.
For example, given S = ["abc", "bca", "dbe"], string 0 ("abc") and string 2 ("dbe") have the same letter 'b' in position 1. On the other hand, for strings "abc" and "bca" there does not exist a position in which they have the same letter.
Write a function:
def solution(S)
that, given a zero-indexed array S of N strings, returns an array describing a pair of strings from S which share a common letter at some index. If there is no such pair, the function should return an empty array. If there is more than one correct answer, the function can return any of them.
The result should be represented as an array containing three integers. The first two integers are the indexes in S of the strings belonging to the pair. The third integer is the position of the common letter.
For S = ["abc", "bca", "dbe"], as above, the result array should be represented as [0, 2, 1]. Another correct answer is [2, 0, 1], as the order of indexes of strings does not matter.
Examples:

1. Given: S = ["abc", "bca", "dbe"], your function may return [0, 2, 1] as described above.
2. Given: S = ["zzzz", "ferz", "zdsr", "fgtd"], your function may return [0, 1, 3]. Both "zzzz" and "ferz" have 'z' in position 3. The function may also return [1, 3, 0], which would reflect strings "ferz", "fgtd" and letter 'f'.
3. Given A = ["gr", "sd", "rg"], your function should return []. There is no pair of strings that fulfils the criteria.
4. Given A = ["bdafg", "ceagi"], your function may return [0, 1, 2].
   Write an efficient algorithm for the following assumptions:
   N is an integer within the range [1..30,000];
   M is an integer within the range [1..2,000];
   each element of S consists only of lowercase English letters (a-z);
   N \* M ≤ 30,000.

## Task 8 description

John has recently discovered an online game. In the game, a 15-minute round starts in each quarter-hour period, starting at times notated in the format HH:00, HH:15, HH:30 or HH:45, where HH is a number from 00 to 23. John uses a 24-hour clock, so the earliest time is 00:00 and the latest is 23:59.
John starts playing at time A and ends at time B. If B is earlier than A, John has played overnight (from time A to midnight and from midnight to time B). What is the maximum number of full rounds that can be played by John?
Write a function:
function solution(A, B);
that, given two strings A and B (in HH:MM format), representing the start time and end time, returns an integer denoting the maximum number of full rounds that John can play within the given period of time.
Examples:

1. Given A = "12:01" and B = "12:44", the function should return 1. John can play only one round (from 12:15 to 12:30). He starts too late to play the round from 12:00 to 12:15 and he will not be able to finish the 12:30-12:45 round.
2. Given A = "20:00" and B = "06:00", the function should return 40. John can play 16 game rounds from 20:00 to 00:00 and 24 game rounds from 00:00 to 06:00.
3. Given A = "00:00" and B = "23:59", the function should return 95. John can play four rounds every hour except for the last hour, in which he can play only three rounds (23:00-23:15, 23:15-23:30, 23:30-23:45). The next round would be 23:45-00:00 but John has to end 1 minute sooner, so he cannot take part in it.
4. Given A = "12:03" and B = "12:03", the function should return 0. John cannot play any round during an empty period of time.
   Assume that:
   strings A and B represent valid times in a HH:MM format.
   In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

## Task 9 description

You are given a list of all the transactions on a bank account during the year 2020. The account was empty at the beginning of the year (the balance was 0).
Each transaction specifies the amount and the date it was executed. If the amount is negative (less than 0) then it was a card payment, otherwise it was an incoming transfer (amount at least 0). The date of each transaction is in YYYY−MM−DD format: for example, 2020−05−20 represents 20th May 2020.
Additionally, there is a fee for having a card (omitted in the given transaction list), which is 5 per month. This fee is deducted from the account balance at the end of each month unless there were at least three payments made by card for a total cost of at least 100 within that month.
Your task is to compute the final balance of the account at the end of the year 2020.
Write a function:
function solution(A, D);
that, given an array A of N integers representing transaction amounts and an array D of N strings representing transaction dates, returns the final balance of the account at the end of the year 2020. Transaction number K (for K within the range [0..N-1]) was executed on the date represented by D[K] for amount A[K].
Examples:

1. Given A = [100, 100, 100, −10] and D = ["2020−12−31", "2020−12−22", "2020−12−03", "2020−12−29"], the function should return 230. Total income was equal to 100 + 100 + 100 − 10 = 290 and the fee was paid every month, so 290 - (5 \* 12) = 230.
2. Given A = [180, -50, -25, -25] and D = ["2020−01−01", "2020−01−01", "2020−01−01", "2020−01−31"], the function should return 25. The income was equal to 180, the expenditure was equal to 100 and the fee was applied in every month except January: 180 - 100 - (5 \* 11) = 25.
3. Given A = [1, -1, 0, -105, 1] and D = ["2020−12−31", "2020−04−04", "2020−04−04", "2020−04−14", "2020−07−12"], the function should return -164. The fee is paid every month. 1 - 1 + 0 - 105 + 1 - (5 \* 12) = -164. Note that in April, even though the total cost of card payments was 106 (more than 100), there were only two payments made by card, so the fee was still applied. A transaction of value 0 is considered a positive, incoming transfer.
4. Given A = [100, 100, -10, -20, -30] and D = ["2020−01−01", "2020−02−01", "2020−02−11", "2020−02−05", "2020−02−08"], the function should return 80.
5. Given A = [-60, 60, -40, -20] and D = ["2020−10−01", "2020−02−02", "2020−10−10", "2020−10−30"], the function should return −115.
   Assume that:
   N is an integer within the range [1..100];
   each element of array A is an integer within the range [−1,000..1,000];
   D contains strings in YYYY−MM−DD format, representing dates in the range 2020−01−01 to 2020−12−31.
   In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
