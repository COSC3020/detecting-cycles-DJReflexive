
export function hasCycle(graph) {

    // if empty, there are no cycles
    if (graph.length == 0 || graph.length == 1) { 
        return false; 
    } 
    
    // Loop through graph
    let foundNodes = [];
    for (let i = 0; i < graph.length; i++) {
        let node = graph[i];
        let name = node.getName();
        let edges = node.getEdges();

        for (let j = 0; j < edges.length; j++) {
            let childNode;
            let childName;

            // If there's an edge, get child node
            if (edges[j] == 1) {
                childNode = graph[j];
                childName = childNode.getName();
            } else { // Otherwise, skip
                break;
            }

            // Check edge to next node, whether that node has already been found
            if (foundNodes.includes(childName)) {
                return true;
            }
            
            // If there's an edge, add it 
            if (edges[j] == 1) {
                foundNodes.push(name);
            }
        }
    }

    return false;
}
