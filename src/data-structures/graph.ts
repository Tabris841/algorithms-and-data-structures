export class Graph {
  adjacencyList: Map<string, string[]> = new Map();

  addVertex(vertex: string) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  removeVertex(vertex: string) {
    if (this.adjacencyList.has(vertex)) {
      const edges = this.adjacencyList.get(vertex)!;

      for (const edge of edges) {
        this.removeEdge(vertex, edge);
      }

      this.adjacencyList.delete(vertex);
    }
  }

  addEdge(vertex1: string, vertex2: string) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1)!.push(vertex2);
      this.adjacencyList.get(vertex2)!.push(vertex1);
    }
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1)!.filter((v) => v !== vertex2)
      );
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2)!.filter((v) => v !== vertex1)
      );
    }
  }

  depthFirstRecursive(start: string) {
    const result: string[] = [];
    const visited: Record<string, boolean> = {};

    const dfs = (vertex: string) => {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList.get(vertex)!.forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };

    dfs(start);

    return result;
  }

  depthFirstIterative(start: string) {
    const stack: string[] = [];
    const result: string[] = [];
    const visited: Record<string, boolean> = {};

    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      const current = stack.pop()!;
      result.push(current);

      this.adjacencyList.get(current)!.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  breadthFirst(start: string) {
    const queue: string[] = [];
    const result: string[] = [];
    const visited: Record<string, boolean> = {};

    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      const current = queue.shift()!;
      result.push(current);

      this.adjacencyList.get(current)!.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph);

console.log(graph.depthFirstRecursive('A'));
console.log(graph.depthFirstIterative('A'));
console.log(graph.breadthFirst('A'));
