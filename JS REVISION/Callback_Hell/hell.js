 const order = {
    customerName : "Shivam Singh" ,
    items:["pizza" , "burger" , "coke"],
    price:599,
    restaurantLocation:"Gorakhpur",
    customerLocation:"Balua"
 }

function OrderPayment(order , callback){
    console.log(`Payment of ${order.price} is processing`)
    setTimeout(()=>{
        console.log(`Dear ${order.customerName} your payment of ${order.price} is successful .`) ;
        order.payment="true" ;
        callback()
    },3000)
}

function PrepareOrder(order , callback){
    console.log("Order is being prepared")
    setTimeout(()=>{
        console.log(`${order.items} is ready`)
        callback()
    },3000)
}

function notifyDeliveryBoy(){
    console.log("Notifying delivery boy about the order ")

    setTimeout(()=>{
        console.log(`Delivery boy arrived ${order.restaurantLocation} and picked up the order `)
        order.picked = "True" ;
    },3000)
}

OrderPayment(order , ()=>{
    PrepareOrder(order , ()=>{
        notifyDeliveryBoy(order) 
    })
})
