    function DeleteCustomer()
    {
        var deleteCustomer = new XMLHttpRequest(); // Create AJAX request object
        //Create URL and Query String
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
        url += document.getElementById("peacid").value;
        //Collect Customer data from web page.
        deleteCustomer.onreadystatechange = function()
        
       // var customerid_1 = document.getElementById("peacid").value;
        //create the parameter string
    //var newdeletedCustomer = '{"CustomerID_1":"' + customerid_1 +'"}';
        
 //Checking for operation return
        // deleteCustomer.onreadystatechange = function()
        {
            if (deleteCustomer.readyState == 4 && deleteCustomer.status == 200)
            {
                var result_3 = JSON.parse(deleteCustomer.responseText);
                OperationResult_3(result_3);
            }
        }
            
            // Start ajax request
            deleteCustomer.open("GET", url, true);
            deleteCustomer.send();
        }
        
        function OperationResult_3(output_3)
        {
            if (output_3.DeleteCustomerResult.WasSuccessful == 1)
            {
                document.getElementById("finito").innerHTML = "Operation completed successfully!"
            }
            else  (output_3.DeleteCustomerResult.WasSuccessful == 0)
            {
                document.getElementById("finito").innerHTML = "Operation failed!" + "<br>" + result_3.Exception;
            }
        }
            
        