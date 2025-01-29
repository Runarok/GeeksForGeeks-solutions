class Solution:
    def accountsMerge(self, accounts):
        # Union-Find (Disjoint Set Union) data structure
        parent = {}  # Stores the parent (representative) of each email
        email_to_name = {}  # Maps each email to the associated account name
        
        # Find operation with path compression
        def find(x):
            if parent[x] != x:  # If x is not its own parent, compress the path
                parent[x] = find(parent[x])  # Recursively find the root and update parent
            return parent[x]  # Return the root of the set
        
        # Union operation to merge two sets (two emails that belong to the same account)
        def union(x, y):
            rootX = find(x)  # Find root of x
            rootY = find(y)  # Find root of y
            if rootX != rootY:  # If the roots are different, unite the sets
                parent[rootX] = rootY  # Make rootY the parent of rootX
        
        # Build the union-find structure
        for account in accounts:
            name = account[0]  # The name associated with the account
            first_email = account[1]  # The first email in the account
            if first_email not in parent:
                parent[first_email] = first_email  # Initialize the parent of the email
            email_to_name[first_email] = name  # Map the first email to the name
            
            # Union the first email with all other emails in the account
            for email in account[2:]:
                if email not in parent:
                    parent[email] = email  # Initialize the parent of each new email
                email_to_name[email] = name  # Map each email to the account name
                union(first_email, email)  # Union the current email with the first email
        
        # Group emails by their root parent (connected components)
        merged_accounts = {}
        for email in parent:
            root = find(email)  # Find the root of each email
            if root not in merged_accounts:
                merged_accounts[root] = []  # If root is not found, initialize the list
            merged_accounts[root].append(email)  # Add the email to the list of its connected component
        
        # Prepare the result list
        result = []
        for emails in merged_accounts.values():  # Iterate over each group of connected emails
            name = email_to_name[emails[0]]  # All emails in the group have the same account name
            result.append([name] + sorted(emails))  # Add the name and sorted list of emails
        
        return result  # Return the merged accounts as a list of lists

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input ())
    for _ in range (t):
        n = int(input())
        accounts = []
        for i in range(n):
            cntEmails = int(input())
            nameEmails = input().split()
            accounts.append(nameEmails)
        ob = Solution()
        res = ob.accountsMerge(accounts)
        res.sort()
        print('[', end = '')
        for i in range(len(res)):
            print('[', end = '')
            for j in range(len(res[i])):
                if j != (len(res[i]) - 1):
                    print(res[i][j], end = ', ')
                else:
                    print(res[i][j], end='')
            if (i != len(res) - 1):
                print('], ')
            else:
                print(']', end = '')
        print(']')
        print("~")
# } Driver Code Ends