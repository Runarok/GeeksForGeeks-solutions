class Solution:
    def maximumMatch(self, G):
        # Initialize the graph, number of people, and number of jobs
        self.graph = G
        self.num_people = len(G)
        self.num_jobs = len(G[0])
        
        # Call the function to get the maximum number of job matches
        return self.findMaxBPM()
        
    
    def findMaxBPM(self):
        # Initialize an array to track job assignments, -1 means no job assigned
        job_assigned = [-1] * self.num_jobs
        
        max_matches = 0
        # Try to assign a job for each person
        for person in range(self.num_people):
            # Keep track of jobs already visited in the current DFS attempt
            visited_jobs = [False] * self.num_jobs
            
            # If a job is assigned for the person, increment the result
            if self.tryToAssignJob(person, job_assigned, visited_jobs):
                max_matches += 1

        return max_matches
    
    def tryToAssignJob(self, person, job_assigned, visited_jobs):
        # Check all jobs for the current person
        for job in range(self.num_jobs):
            # If the person can do the job and it hasn't been visited yet
            if self.graph[person][job] and not visited_jobs[job]:
                visited_jobs[job] = True
                
                # If the job is not assigned or we can find an alternative match for the previously assigned person
                if job_assigned[job] == -1 or self.tryToAssignJob(job_assigned[job], job_assigned, visited_jobs):
                    job_assigned[job] = person
                    
                    return True
                    
        return False

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        m, n = map(int, input().strip().split())
        G = []
        for i in range(m):
            G.append(list(map(int, input().strip().split())))
        obj = Solution()
        ans = obj.maximumMatch(G)
        print(ans)
        print("~")

# } Driver Code Ends