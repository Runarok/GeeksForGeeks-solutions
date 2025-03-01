class Solution:
    def value(self, n, poly, x):
        MOD = 10**9 + 7  # Số nguyên lớn làm MOD
        result = 0

        # Duyệt từ hệ số cao nhất đến thấp nhất
        for i in range(n):
            # Tính toán và áp dụng modulo từng bước
            result = (result * x + poly[i]) % MOD

        return result

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n = int(input())
        poly = input().split()
        for i in range(n):
            poly[i] = int(poly[i])
        x = int(input())
        
        ob = Solution()
        print(ob.value(n, poly, x))
# } Driver Code Ends