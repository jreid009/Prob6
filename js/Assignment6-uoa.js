    function UpdateOrderAddress()
    {
        var updateOrderAddress = new XMLHttpRequest();
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
        
        //Updates shipping address data for an order on the web page.
        var orderid = Number(document.getElementById("peaon").value);
        var shippingname = document.getElementById("peastn").value;
        var shippingaddress = document.getElementById("peastsa").value;
        var shippingcity = document.getElementById("peastc").value;
        var shippingpostalcode = document.getElementById("peastpc").value;
        
        //create the parameter string
        var neworderaddress = '{"OrderID":' + orderid + ',"ShippingName":"' + shippingname +
        '","ShippingAddress":"'+ shippingaddress +'", "ShippingCity":"' + shippingcity +
        '","ShippingPostalCode":' + shippingpostalcode +'}';
        
        //Checking for operation return
        updateOrderAddress.onreadystatechange = function()
        {
            if (updateOrderAddress.readyState == 4 && updateOrderAddress.status == 200)
            {
                var outcomes = JSON.parse(updateOrderAddress.responseText);
                OperationResult_2(result);
            }
        }
            
            // Start ajax request
            updateOrderAddress.open("POST", url, true);
            updateOrderAddress.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            updateOrderAddress.send(neworderaddress);
        }
        
        function OperationResult_2(output_1)
        {
            if (output_1.WasSuccessful == 1)
            {
                document.getElementById("outcomes").innerHTML = "Operation completed successfully!"
            }
            else if (output_1.Failed == 0)
            {
                document.getElementById("outcomes").innerHTML = "Operation failed with an unspecified error!"
            }
            else if (output_1.Failed == -2)
            {
                document.getElementById("outcomes").innerHTML = "Operation failed because the data string supplied could not be de-serialized into the service object!"
            }
            else (output_1.Failed == -3)
            {
                document.getElementById("outcomes").innerHTML = "Operation failed because a record with the supplied Order ID could not be found!" + "<br>" + output_1.Exception;
            }
            
        }
        