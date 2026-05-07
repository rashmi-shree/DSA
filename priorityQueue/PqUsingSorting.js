class PriorityQueue{
    constructor(){
        this.queue=[]
    }
    enqueue(value, priority){
        this.queue.push(value, priority)
        this.queue.sort((a,b)=> b.priority - a.priority)
    }
    dequeue(){
        return this.queue.shift()
    }
    peek(){
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length === 0
    }
}

const pq1 = new PriorityQueue

pq1.enqueue({"value":"heart","priority":3})
pq1.enqueue({"value":"lungs","priority":1})
pq1.enqueue({"value":"ass","priority":5})

console.log(pq1.dequeue());
console.log(pq1.peek());

