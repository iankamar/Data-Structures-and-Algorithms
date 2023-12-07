const findCheapestPrice = function(n, flights, src, dst, k) {
    const adjList = new Map()
    flights.map((flight) => {
        if(!adjList.has(flight[0])) adjList.set(flight[0], []) 
        adjList.get(flight[0]).push([flight[1],flight[2]])
    })
    let q = [[src,0,0]], min = Infinity, visited = new Set(`${src}:0:0`)
    while(q.length){
        let [flight,currentPrice,stops] = q.shift()
        const destinations = adjList.get(flight)
        if(!destinations || stops > k) continue
        for(const [destination, price] of destinations){       
            if(destination == dst) min = Math.min(min,(currentPrice + price))
            if(!visited.has(`${destination}:${stops}:${currentPrice + price}`)){
                visited.add(`${destination}:${stops}:${currentPrice + price}`)
                if(min == Infinity || currentPrice + price <= min){
                    q.push([destination,(currentPrice + price),stops+1])

                }
                
            }
        }
    }
    return min == Infinity ? -1 : min
}

// Time Complexity O(V + E)
// Space Complexity O(V + E)