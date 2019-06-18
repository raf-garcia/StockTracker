export const addCommasToNumber = (number) => {
    let subNumberArray = [];
    let decimal = "";

    if (isNaN(number)) return NaN;

    if(typeof number == 'number')
        number = String(number);
    
    if(number > 1000){
        
        //get decimal part of number
        if((Number(number) * 10) % 10) decimal = "."+number.split('.')[1];
        
        number = number.split('.')[0];
    
        for(let i = number.length; i > 0; i -= 3){
            subNumberArray.unshift(number.substring(i-3, i));
        }

        return subNumberArray.join(',')+decimal;
    }

    return number; 
}

export const changeToPercent = (number) => {
    if(isNaN(number)) return NaN;

    number = (number*100).toFixed(2);
    return String(number)+"%";
}