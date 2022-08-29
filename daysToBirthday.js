function days(month, day){
    /*Registering current date and registering point of time in 
    the future (or in past) to find a difference*/
    let now = new Date();
    let date = new Date(now.getFullYear(), month-1, day);
    
    //If you are lucky and your birthday 2/29 we need to find when your next birthday
    if(month === 2 && day === 29){
        date = new Date(leap(), month-1, day);
    };

    /*Locking for difference between points of time to find if your birthday still 
    in this year or already passed and will be in next yaer*/
    let diff = date - now;

    if(diff > 0){
        return 'Your birthday will be in: '+ Math.floor((date - now)/(1000*3600*24))+' days.';
    }else if(now.getDate()===date.getDate()){// in case of your birthday today)))
        return 'Happy birthday!!!'
    }else{//getting point of time in next yaer
        date = new Date(now.getFullYear()+1, month-1, day);
        return 'Your birthday will be in: '+ Math.floor((date - now)/(1000*3600*24))+' days.';
    }
}

//Function wich looking for Leap yaer
function leap(){
    for(let year = (new Date()).getFullYear();;year++){
        if((new Date(year, 2, 0)).getDate() === 29){
            console.log('Next Leap year is: '+year);
            return year;
        }
    }
}   

console.log(days(9, 8));
