function StringUtil(text){

    if(text != null){
       
        let fixedNumber = text.toFixed(2).toString();
        fixedNumber = fixedNumber.replace(".", ",");
        return fixedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
        
    }
}

export default StringUtil;