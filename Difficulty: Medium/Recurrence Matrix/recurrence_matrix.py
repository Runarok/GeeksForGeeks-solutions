class Solution:
    def CountOnes(self, Queries):
        # Precompute C(i) % 2 for a large range of i (since the maximum i is from 1000 * 1000)
        max_limit = 1000 * 1000  # This is the maximum value for i * j
        C = [0] * (max_limit + 1)  # Array to store C(i) % 2
        
        # Initial values
        C[0], C[1], C[2], C[3] = 2 % 2, 0 % 2, 1 % 2, 7 % 2
        
        # Fill the sequence modulo 2 up to max_limit
        for i in range(4, max_limit + 1):
            C[i] = (3 * C[i - 1] + 4 * C[i - 2] + 5 * C[i - 3] + 6 * C[i - 4]) % 2
        
        # For each query, calculate the count of ones in the matrix
        result = []
        for n in Queries:
            count_ones = 0
            for i in range(1, n + 1):
                for j in range(1, n + 1):
                    # We want to compute C((i * j) ** 3) % 2
                    idx = (i * j) ** 3
                    if C[idx % (max_limit + 1)] == 1:  # Check if odd
                        count_ones += 1
            result.append(count_ones)
        
        return result
