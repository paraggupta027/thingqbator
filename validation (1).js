function capital()
        {
            var x=document.getElementById("fname");
            x.value=x.value.toUpperCase();
        }
        function check_age()
        {
            var text;
            var y=document.getElementById("fage").value;
            if(y>15)
            {
                text="Input OK....!!!";
            }
            else
                text="FUCK OFF...!!";

            document.getElementById("demo").innerHTML=text;
        }
        function onlick(form)
        {
            
            if(confirm("Your form is submitting , please RECHECK if you want..!!"))
            {
                return true;
                 
            }
            else
            {
               return false;
                
            }
           
            
        }
