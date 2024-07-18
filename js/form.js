var nameerror=document.getElementById('name-error');
var pherror=document.getElementById('phone-error');
var eerror=document.getElementById('email-error');
var suberror=document.getElementById('sub-error');

function validateName(){
    var na=document.getElementById('name').value;
    if(na.length == 0){
        nameerror.innerHTML = 'Name required';
        return false
    }
    if(!na.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML='Write full Name';
        return false;
    }
    nameerror.innerHTML='valid';
    return true;
}
function validatePh(){
var ph=document.getElementById('phone').value;
if(ph.length==0){
pherror.innerHTML='Phone number required';
return false;
}
if(ph.length!=10){
pherror.innerHTML='Phone no should be 10 digits';
}
if(!ph.match(/^[0-9]{10}$/)){
pherror.innerHTML='Invalid Phone number';
return false;
}
pherror.innerHTML='valid';
return true;
}
function validateEmail(){
var em=document.getElementById('email').value;
if(em.length==0){
eerror.innerHTML='Email required';
return false;
}
eerror.innerHTML='valid';
return true;
}
function validateForm(){
if(!validateName() || !validatePh() || !validateEmail())
{
suberror.style.display='block';
suberror.innerHTML='Please Enter the correct information';
setTimeout(function(){
    suberror.style.display='none';
},3000);
return false;
}
}