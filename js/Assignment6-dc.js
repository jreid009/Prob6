    function DeleteCustomer()
    {
        var deleteCustomer = new XMLHttpRequest();
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/WWVW3";
        
        //Collect Customer data from web page.
        var customerid = document.getElementById("peacid").value;
        
        //create the parameter string
    objRequest = '{"CustomerID":"' + customerid +'"}';
        
        //Checking for operation return
        deleteCustomer.onreadystatechange = function()
        {
            if (deleteCustomer.readyState == 4 && deleteCustomer.status == 200)
            {
                var conclusion = JSON.parse(deleteCustomer.responseText);
                OperationResult_3(result);
            }
        }
            
            // Start ajax request
            deleteCustomer.open("GET", url, true);
            deleteCustomer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            deleteCustomer.send(objRequest);
        }
        
        function OperationResult_3(output_3)
        {
            if (output_3.WasSuccessful == 1)
            {
                document.getElementById("conclusion").innerHTML = "Operation completed successfully!"
            }
            else
            {
                document.getElementById("conclusion").innerHTML = "Operation failed!" + "<br>" + output_3.Exception;
            }
        }
            
        