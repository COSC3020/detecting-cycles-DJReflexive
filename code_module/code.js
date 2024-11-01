
export function hasCycle(graph) {
    let foundNodes = [];

    // if empty, there are no cycles
    if (graph.length == 0 || graph.length == 1) { 
        return false; 
    } 

    // Make every node be the starting node
    for (let i = 0; i < graph.length; i++) {
        foundNodes.push(graph[i]);
            
        if (findCycle(graph, foundNodes)) { // Recursively go down valid paths
            return true; // Found Cycle
        } else {
            foundNodes.pop();
            continue; // Didn't find cycle, try next node
        }
    }

    return false;
}


function findCycle(graph, foundNodes) {
    let currentNode = foundNodes[foundNodes.length-1]; // Last element added
    let edges = currentNode.getEdges();

    // Loops through current node, recursively traversing through each path
    for (let i = 0; i < edges.length; i++) {
        let childNode;

        // If there's an edge, get child node
        if (edges[i] == 1) { childNode = graph[i]; } 
        else { continue; } // Otherwise, skip

        // If there is a repeating node, a cycle is found
        if (foundNodes.includes(childNode)) { return true; }
        else { // Otherwise go down next path
            foundNodes.push(childNode);

            if (findCycle(graph, foundNodes)) { return true; }

            foundNodes.pop(); // Backtrack
        }
    }

    return false;
}


