import sys

class Solution:
    def roundToNearest (self, str1) : 
        sys.set_int_max_str_digits(50000)
        a=int(str1)
        count=0
        if str1[0]=="0":
            for i in str1:
                if i!="0":
                    break
                else:
                    count=count+1
        f=str(0)*count
            
        b=a//10
        
        
        minim=min(abs(a-b*10),abs(a-(b+1)*10))
        
        if minim==abs(a-b*10):
            ans=f+str(b*10)
            return ans
        else:
            ans=f+str((b+1)*10)
            return ans

#{ 
 # Driver Code Starts
#Initial Template for Python 3

for _ in range(0, int(input())):
    num_str = input()
    ob = Solution()
    res = ob.roundToNearest(num_str)
    print(res)
    print("~")

# } Driver Code Ends