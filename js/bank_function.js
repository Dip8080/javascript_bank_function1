// console.log('i am here')

// same banking shit calculation using function

/* function update_depo(){
    const depo_input= document.getElementById('deposite_field');
    const depo_input_in_no=parseFloat(depo_input.value);
    
    const update_depo=document.getElementById('update_deposite');
    const up_depo_in_no=parseFloat(update_depo.innerText);
    
    update_depo.innerText =up_depo_in_no + depo_input_in_no ;

    return update_depo;
} */

// function that converts input field to num of float type
function inputToNum (inputId){
    const catchId = document.getElementById(inputId);
    const stringInputToNum=parseFloat(catchId.value);
    catchId.value = '';
    return stringInputToNum;
   
}
// function that converts a html tag into num of float type
function tagToNum(inputId){
    const catchId = document.getElementById(inputId);
    const stringTagToNum= parseFloat(catchId.innerText);
    catchId.innerText = '';
    return stringTagToNum;     
}

// function that holds a id element
function holdId(idName){
    const Id=document.getElementById(idName);
    return Id;
}

//event handling deposite and updating total balance
document.getElementById('deposite_btn').addEventListener('click',function(){
    const catch_return_input = inputToNum('deposite_field');
    const catch_return_tag = tagToNum('update_deposite');
    const catch_return_tag_balance=tagToNum('update_balance')
    const update_depo = holdId('update_deposite');
    const updatebalance=holdId('update_balance');
    update_depo.innerText=catch_return_tag+catch_return_input;
    updatebalance.innerText=catch_return_tag_balance+catch_return_input;

})

//event handeling withdraw and uddating total balance
document.getElementById('withdraw_btn').addEventListener('click',function(){
    const catch_return_input=inputToNum('withdraw_field');
    const catch_return_tag=tagToNum('update_withdraw');
    const catch_return_tag_balance=tagToNum('update_balance')
    const updateWithdraw=holdId('update_withdraw');
    const updateBalance=holdId('update_balance')
    updateWithdraw.innerText=catch_return_tag+catch_return_input;
    updateBalance.innerText=catch_return_tag_balance-catch_return_input;
})

