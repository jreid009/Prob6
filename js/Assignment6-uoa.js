    function UpdateOrderAddress()
    {
        var updateOrderAddress = new XMLHttpRequest();
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
        
        //Updates shipping address data for an order on the web page.
        var orderid = Number(document.getElementById("peaon").value);
        var shippingname = document.getElementById("peastn").value;
        var shippingaddress = document.getElementById("peastsa").value;
        var shippingcity = document.getElementById("peastc").value;
        var shippingpostcode = document.getElementById("peastpc").value;
        
        //create the parameter string
        var neworderaddress = '{"OrderID":' + orderid + ',"ShippingName":"' + shippingname +
        '","ShippingAddress":"'+ shippingaddress +'", "ShippingCity":"' + shippingcity +
        '","ShippingPostCode":"' + shippingpostcode +'"}';
        
        //Checking for operation return
        updateOrderAddress.onreadystatechange = function()
        {
            if (updateOrderAddress.readyState == 4 && updateOrderAddress.status == 200)
            {
                var result_2 = JSON.parse(updateOrderAddress.responseText);
                OperationResult_2(result_2);
            }
        }
            
            // Start ajax request
            updateOrderAddress.open("POST", url, true);
            updateOrderAddress.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            updateOrderAddress.send(neworderaddress);
        }
        
        function OperationResult_2(output_2)
        {
            if (output_2 == 1)
            {
                document.getElementById("result_2").innerHTML = "Operation completed successfully!"
            }
            else if (output_2 == 0)
            {
                document.getElementById("result_2").innerHTML = "Operation failed with an unspecified error!"
            }
            else if (output_2.Exception == -2)
            {
                document.getElementById("result_2").innerHTML = "Operation failed because the data string supplied could not be de-serialized into the service object!"
            }
            else 
            {
                document.getElementById("result_2").innerHTML = "Operation failed because a record with the supplied Order ID could not be found!" 
            }
            
        }
        