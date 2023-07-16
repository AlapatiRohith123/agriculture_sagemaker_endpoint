function fun1(thiss)
{
    if((thiss.value>parseFloat(thiss.max) || thiss.value<parseFloat(thiss.min)) && thiss.value!="")
    {
        alert("Please enter the correct Rainfall value. Rainfall value can only range from "+thiss.min+" to "+thiss.max);
        thiss.value="";
    }
}
function fun2(thiss)
{
    if((thiss.value>parseFloat(thiss.max) || thiss.value<parseFloat(thiss.min)) && thiss.value!="")
    {
        alert("Please enter the correct Minimum Temperature value. Minimum Temperature value can only range from "+thiss.min+" to "+thiss.max);
        thiss.value="";
    }
}
function fun3(thiss)
{
    if((thiss.value>parseFloat(thiss.max) || thiss.value<parseFloat(thiss.min)) && thiss.value!="")
    {
        alert("Please enter the correct Maximum Temperature value. Maximum Temperature value can only range from "+thiss.min+" to "+thiss.max);
        thiss.value="";
    }
}
function fun4(thiss)
{
    if((thiss.value>parseFloat(thiss.max) || thiss.value<parseFloat(thiss.min)) && thiss.value!="")
    {
        alert("Please enter the correct Irrigation value. Irrigation value can only range from "+thiss.min+" to "+thiss.max);
        thiss.value="";
    }
}
function fun5(thiss)
{
    if((thiss.value>parseFloat(thiss.max) || thiss.value<parseFloat(thiss.min)) && thiss.value!="")
    {
        alert("Please enter the correct Ph value. Ph value can only range from "+thiss.min+" to "+thiss.max);
        thiss.value="";
    }
}
function hide(thiss)
{
    //console.log(thiss,document.getElementsByClassName("hide"));
    //console.log(document.getElementsByClassName("hide").style.display);
    if(thiss.value=="Custom")
    {
        document.querySelectorAll(".hide").forEach(function(el) {
            el.style.display = 'table-row';
        });
        document.getElementById("hide2").style.display="table-row";
        thiss.value="Hide";
    }
    else
    {
        document.querySelectorAll(".hide").forEach(function(el) {
            el.style.display = 'none';
        });
        document.getElementById("hide2").style.display="none";
        thiss.value="Custom";
    }
}
function run(){
    // var event=document.getElementById("myForm");
    // event.preventDefault();
        navigator.geolocation.getCurrentPosition(predict,function(error) {
                document.querySelectorAll(".hide").forEach(function(el) {
                    //console.log("hij");
                    el.style.display = 'table-row';
                });
                predict();
          });
    async function predict(position) {
        //console.log(position);
        //console.log(window.getComputedStyle(document.getElementsByClassName("hide")[0]).display);
        if(window.getComputedStyle(document.getElementsByClassName("hide")[0]).display=='none')
        {
            //console.log("enter the dragon");
            const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1e70d32aeemsh8b6727a2df2442fp1252cdjsn83fbd5c2a918',
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(url, options);
                var weather = await response.text();
                console.log(weather);
                //console.log(typeof weather);
                weather=JSON.parse(weather);
                var minTemp=weather["min_temp"];
                var maxTemp=weather["max_temp"];
                var rainfall=weather["cloud_pct"];
            } catch (error) {
                //console.log(error);
                document.querySelectorAll(".hide").forEach(function(el) {
                    el.style.display = 'table-row';
                });
            }
        }
        var elements=document.getElementsByClassName("input1");
        var arr=[];
        for(let i of elements)
        {
            arr.push(i.value);
        }
        const arrd=['District_Adilabad', 'District_Bhadradri','District_Jagitial', 'District_Jangoan', 'District_Jayashankar','District_Jogulamba', 'District_Kamareddy', 'District_Karimnagar','District_Khammam', 'District_Komaram bheem asifabad','District_Mahabubabad', 'District_Mahbubnagar', 'District_Mancherial','District_Medak', 'District_Medchal', 'District_Mulugu','District_Nagarkurnool', 'District_Nalgonda', 'District_Narayanapet','District_Nirmal', 'District_Nizamabad', 'District_Peddapalli','District_Rajanna', 'District_Rangareddy', 'District_Sangareddy','District_Siddipet', 'District_Suryapet', 'District_Vikarabad','District_Wanaparthy', 'District_Warangal', 'District_Warangal urban','District_Yadadri'];
        var arr1=[];
        for(let i=0;i<arrd.length;i++)
        {
            if(arr[0]==arrd[i])
            {
                arr1[i]=1;
            }
            else
            {
                arr1[i]=0;
            }
        }
        var arr2=[];
        if(arr[1]=="Season_Kharif")
        {
            arr2[0]=1;
            arr2[1]=0;
        }
        else
        {
            arr2[0]=0;
            arr2[1]=1;
        }
        const arrc=['Crop_Groundnut','Crop_Maize', 'Crop_Moong(Green Gram)', 'Crop_Rice','Crop_cotton(lint)'];
        var arr3=[];
        for(let i=0;i<arrc.length;i++)
        {
            if(arr[2]==arrc[i])
            {
                arr3[i]=1;
            }
            else
            {
                arr3[i]=0;
            }
        }
        var arr5=[0,0];
        var currentDate = new Date();
        if(currentDate.getMonth()>=6 && currentDate.getMonth()<=10)
        {
            arr5[0]=1;
        }
        else
        {
            arr5[1]=1;
        }
        //console.log(window.getComputedStyle(document.getElementById("hide2")).display);
        if(window.getComputedStyle(document.getElementById("hide2")).display=="table-row")
        {
            arr5=arr2;
        }
        var arrf;
        //console.log(window.getComputedStyle(document.getElementsByClassName("hide")[0]).display);
        if(window.getComputedStyle(document.getElementsByClassName("hide")[0]).display=="table-row")
        {
            arrf=arr.slice(3,6).concat(arr[7],arr[6],arr1,arr5,arr3);
        }
        else{
            var arr4=[rainfall,minTemp,maxTemp];
            arrf=arr4.concat(arr[7],arr[6],arr1,arr5,arr3);
        }
        arrf=arrf.map(parseFloat);
        //console.log(arrf);
        let headersList = {
            "Content-Type": "text/csv",
        }
        let bodyContent = arrf.join();
        let response = await fetch("paste_your_sagemaker_endpoint_url_here", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        let data = await response.json();
        //console.log(data,typeof data);
        //console.log(response,typeof response);
        //console.log(data.Prediction);
        if(arr3[4]==1)
        {
            document.getElementById("output").innerHTML="Yield of "+arr[2].slice(5)+" is : "+Math.round((data["Prediction"][0] + Number.EPSILON) * 100) / 100+" (Bales/Hectare)";
        }
        else
        {
            document.getElementById("output").innerHTML="Yield of "+arr[2].slice(5)+" is : "+Math.round((data["Prediction"][0] + Number.EPSILON) * 100) / 100+" (Tonne/Hectare)";
        }
    }
}