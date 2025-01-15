#User function Template for python3

class Solution:
    def add_large_numbers(self, num1, num2):
        num1 = num1[::-1] 
        num2 = num2[::-1]
        result = []
        carry = 0
        max_len = max(len(num1), len(num2))
        for i in range(max_len):
            digit1 = int(num1[i]) if i < len(num1) else 0
            digit2 = int(num2[i]) if i < len(num2) else 0
            
            total = digit1 + digit2 + carry
            result.append(str(total % 10))
            carry = total // 10 
        if carry:
            result.append(str(carry))
        return ''.join(result[::-1])
    
    def minSum(self, arr):
        # code here
        if len(arr) == 1:
            return str(arr[0])
        arr.sort()
        num1 = ""
        num2 = ""
        for i in range(len(arr)):
            if i%2 == 0:
                num1 += str(arr[i])
            else:
                num2 += str(arr[i])
        num1 = num1.lstrip('0') or '0'
        num2 = num2.lstrip('0') or '0'
        return self.add_large_numbers(num1, num2)

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        arr = list(map(int, input().strip().split()))
        ob = Solution()
        ans = ob.minSum(arr)
        print(ans)
        tc -= 1

        print("~")

# } Driver Code Ends