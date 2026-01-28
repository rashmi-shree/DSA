class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    addLast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode
            return ;
        }
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
    size (){
        let count = 0 
        let current = this.head
        while(current){
            count++
            current = current.next
        }
        return count
    }

    addAt(index, data){
        if(index < 0 || index >this.size()){
            console.error("Invalid index"); 
            return;
        }
        const newNode = new Node(data);
        if(index === 0 ){
            newNode.next = this.head;
            this.head = newNode
            return ;
        }
        let current = this.head

        for (let i =0 ; i<index-1; i++){
            current = current.next
        }
        newNode.next = current.next;
        current.next = newNode
    }
    removeTop(){
        if(!this.head){
            return
        }
        this.head = this.head.next
    }
    removeLast(){
        if(!this.head){
            return
        }
        let current = this.head;
        while(current = current.next.next){
            current = current.next
        }
        current.next = null
    }
    removeAt(index){
        if(index<0 || index>this.size()){
            console.error("invalid index");
            return
        }
        if(index == 0 ){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        for (let i =0; i<index-1; i++){
            current = current.next
        }
        if(current.next){
            current.next = current.next.next
        }
    }
    print(){
        let current = this.head;
        let result = []
        while(current){
            result.push(current.data);
            current = current.next
        }
        return result.join("->")
    }
}

const ll = new LinkedList()
ll.addFirst(5)
ll.addFirst(4)
ll.addFirst(3)
ll.addFirst(2)
ll.addFirst(1)
console.log(ll.print());
