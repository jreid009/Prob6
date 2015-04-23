    function CreateCustomer()
    {
        var createCustomer = new XMLHttpRequest();
        var url = "HTTP://BUS-PLUTO.AD.UAB.EDU/JSONWEBSERVICE/SERVICE1.SVC/CREATECUSTOMER";
        
        //Collect Customer data from web page.
        var customerid = document.getElementById("creacust").value;
        var customername = document.getElementById("crusto").value;
        var customercity = document.getElementById("creamer").value;
        
        //create the parameter string
        var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'", "CustomerCity":"' + customercity +'"}';
        
        //Checking for operation return
        createCustomer.onreadystatechange = function()
        {
            if (createCustomer.readyState == 4 && createCustomer.status == 200)
            {
                var result = JSON.parse(createCustomer.responseText);
                OperationResult(result);
            }
        }
            
            // Start ajax request
            createCustomer.open("POST", url, true);
            createCustomer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            createCustomer.send(newcustomer);
        }
        
        function OperationResult(output)
        {
            if (output.WasSuccessful == 1)
            {
                document.getElementById("result").innerHTML = "The operation was successful!"
            }
            else
            {
                document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
            }
            
        }
