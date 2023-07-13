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

console.log(graph);

graph.removeVertex('A');

console.log(graph);
