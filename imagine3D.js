
function myFunction(smallImg)
{
    var modelTitle = smallImg.src.split('/')[4].split('.')[1];
    
    var bigImage = document.getElementById("bigimage");
    
    function delay()
    {
        bigImage.style= "scale:103%;"
        
    }
    setTimeout(delay,200)
   
    
    function delay1()
    {
    bigImage.src = smallImg.src;
    document.getElementById("modelTitle").innerHTML = modelTitle;
    }
    setTimeout(delay1,200)

    function delay2()
    {
    bigImage.style= "scale:100%;"
    }
    setTimeout(delay2,600) 
}

function takevalue()
{
    
    const colour = document.getElementById("colour").value;
    const size = document.getElementById("size").value;
    const amount = document.getElementById("amount").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const streetAdress = document.getElementById("streetAdress").value;
    const townCity = document.getElementById("town/City").value;
    const province = document.getElementById("province").value;
    const postalCode = document.getElementById("postalCode").value;
    document.write(`Colour: ${colour}, Size: ${size},Amount: ${amount},First name: ${firstName},Last name: ${lastName},email: ${email},Phone number: ${phoneNumber},Street adress: ${streetAdress},Town/City: ${townCity},Province: ${province},Postal code: ${postalCode},`);
}
