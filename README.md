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

If the length is greater than 1, it reaches a for loop which makes every node the starting node at some point. This for loop will execute $|V|$ times since it will only iterate through the nodes.

Within the recursive findCycle() method, we reach the first for loop and we iterate through the edges of the current node (which will execute |V| times) and check whether there is an edge. If there is an edge, the algorithm checks whether the child node has already been visited (which indicates a cycle), and if there is no cycle, will execute the next recursive call with the child node as the new current node. If a path reaches a dead end, the recursion backtracks (by popping nodes from the foundNodes() list) until it finds an undiscovered path to go down.

The worst case scenario of this algorithm is when there is no cycle within the graph, all nodes will become the "starting node" and all valid edges will be traversed from there.

Since these operations are nested, we get the resulting time complexity of $\Theta(|V| * |V|)$, which simplifies to $\Theta(|V|^2)$. 


# Sources

- None

# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.