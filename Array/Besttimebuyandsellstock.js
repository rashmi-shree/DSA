function maxProfit(arr){
    let mini = arr[0], profit = 0

    for (let i =1 ; i <arr.length; i++){
        cost = arr[i] - mini
        profit = Math.max(profit, cost)
        mini = Math.min(mini, arr[i])
    }
    return profit
}

prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));