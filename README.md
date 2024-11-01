# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

# Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.


## My Runtime Analysis

When my hasCycle() algorithm runs, it first checks if the length of the graph is 0 or 1, which if it is, the algorithm runs in constant time, because graphs of those lengths don't have any cycles.

If the length is greater than 1, it reaches a for loop which cycles through every node within the graph and checks all possible pathways from that node. This for loop will execute |V| times since it will only iterate through all the nodes, and not every possible edge within the graph.

We then reach a recursive call which essentially executes a depth first search. Within this recursion is another for loop which will iterate through all the paths of the given current node. In the worst case scenerio, this will take |V|^2 to execute, since I am using an adjacency matrix representation and every possible edge is checked.

Since these two operations are nested, we get the resulting time complexity of $\Theta(|V| * |V|^2)$, which simplifies to $\Theta(|V|^3)$.


# Sources

- None

# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.