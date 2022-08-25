function yes(){
    event.preventDefault();//prevents page from reloading
    console.log("Name:",document.getElementById("name").value);
    console.log("Email:",document.getElementById("email").value);
    console.log("Telephone",document.getElementById("telephone").value);
    console.log("security code:",document.getElementById("security").value);
    console.log("Expiry date:",document.getElementById("exp").value);
    console.log("Address:",document.getElementById("address").value);
}



//Current order

const fields = {
    type : document.getElementById("ticketType"),
    quantity : document.getElementById("quantity"),
    duration : document.getElementById("duration"),
    extra : document.getElementById("extra"),
    activities : document.getElementById("activities"),

  }
  const nowOrderField = {
    type : document.getElementById("currentOrderType"),
    quantity : document.getElementById("currentOrderQuantity"),
    duration : document.getElementById("currentOrderDuration"),
    extra : document.getElementById("currentOrderExtra"),
    activities : document.getElementById("currentOrderActivities"),
  }
  const nowOrderCost = document.getElementById("currentOrderCost")

  //ticket details

  const TICKET_TYPES = {
    local : 2500,
    foreign : 3000,
    foreignChild : 2500,
    child15 : 1000,
    child06 : 500,
  }
  
  const EXTRA_OPTIONS = {
    annual : 5000,
    food : 500
  }
  
 
  
  const getFormData = () => {
    const type = fields.type.value
    const quantity = fields.quantity.value
    const duration = fields.duration.value
    const extra = fields.extra.value
    const activities = fields.extra.value
  
    return { type, quantity, duration, extra, activities }
  }
  
  //Calculation
  const calculatePrice = formData => {
    const {type, quantity, extra, duration, activities} = formData
    return ((TICKET_TYPES[type] * quantity) + EXTRA_OPTIONS[extra] + durationConditions(type, duration))
  }
  
  
  
  const durationConditions = (ticketTypes, durations) => {
  
    if (ticketTypes === "local" && durations === "3Hours") {
      return 0
    } 
    else if ((ticketTypes === "foreign" && durations === "3Hours") || (ticketTypes === "foreignChild" && durations === "3Hours")) {
      return 1000
    }
    else if (ticketTypes === "local" && durations === "1/2Day") {
      return 250
    }
    else if ((ticketTypes === "foreign" && durations === "1/2Day") || (ticketTypes === "foreignChild" && durations === "1/2Day")) {
      return 1000
    }
    else if (ticketTypes === "local" && durations === "Aday") {
      return 500
    }
    else if ((ticketTypes === "foreign" && durations === "Aday") || (ticketTypes === "foreignChild" && durations === "Aday")) {
      return 1000
    }
  }
  
  
  
  //Returning values to current order 

  const setNowPrice = () => {
    const price = calculatePrice(getFormData())
    nowOrderCost.innerText = price || "\n"
  }
  
  fields.type.addEventListener("change", event => {
    const options = event.target.options
    const selectedOption = options[options.selectedIndex]
    const optionText = selectedOption.innerText
  
    nowOrderField.type.innerText = ("Ticket type: " + optionText)
    setNowPrice()
  })
  
  fields.quantity.addEventListener("keyup", event => {
    nowOrderField.quantity.innerText = ("Quantity: " + event.target.value) || '\n'
    setNowPrice()
  })
  
  fields.duration.addEventListener("change", event => {
    nowOrderField.duration.innerText = ("Duration: " + event.target.value) || '\n'
    setNowPrice()
  })
  
  fields.extra.addEventListener("change", event => {
    nowOrderField.extra.innerText = ("Extras: " + event.target.value) || '\n'
    setNowPrice()
  })

  //fields.extra.addEventListener("change", event => {
    //nowOrderField.activities.innerText = ("Activities: " + activities.target.value) || '\n'
    //setCurrentPrice()
 // })
   
  //Total order
  
  const form = document.getElementById("order-form")
  const overallOrderField = document.getElementById("overallOrderField")
  const overallOrderCost = document.getElementById("overallOrderCost")
  
  const overallOrder = []
  
  const calculateTotalPrice = () => {
    return overallOrder.reduce((acc, curr) => acc + calculatePrice(curr), 0)
  }
  
  form.addEventListener("submit", event => {
    event.preventDefault()
  
    const formData = getFormData()
    overallOrder.push(formData)
  
    const order = document.createElement('li')
    Object.values(formData).forEach(value => {
      const p = document.createElement('p')
      p.innerText = value
      order.appendChild(p)
    })
    overallOrderField.append(order)
    overallOrderCost.innerText = calculateTotalPrice()
  
    nowOrderField.type.innerText = ""
    nowOrderField.quantity.innerText = ""
    nowOrderField.duration.innerText = ""
    nowOrderField.extra.innerText = ""
    //nowOrderField.activities.innerText=""
  
    fields.type.value= ""
    fields.quantity.value= ""
    fields.duration.value= ""
    fields.extra.value= ""
    //fields.activities.value=""
  })
  
  const btnPlaceOrder = document.getElementById("place-order")
  
  btnPlaceOrder.addEventListener("click", () => {
    alert("Thank YOU! for ordering with us\nHope you have an amzing time," )
  
    nowOrderField.type.innerText = ""
    nowOrderField.quantity.innerText = ""
    nowOrderField.duration.innerText = ""
    nowOrderField.extra.innerText = ""
    //nowOrderField.activities.innerText = ""
  
    fields.type.value= ""
    fields.quantity.value= ""
    fields.duration.value= ""
    fields.extra.value= ""
    //fields.activities.value=""
  
    overallOrderCost.innerText= ""
    overallOrderField.innerText= ""
    nowOrderCost.innerText= ""
  })