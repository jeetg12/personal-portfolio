const text = document.getElementById('text');
const name = document.getElementById('name');
const Email = document.getElementById('Email');
const textarea = document.getElementById('textarea');

const datauser =[];

text.addEventListener('click', () => {

    const username = name.value;
    const userEmail = Email.value;
    const comments = textarea.value;

    const formData = {
        "Username": username,
        "Email": userEmail,
        "Comments": comments
    };

    
    datauser.push(formData);
    console.log(datauser);
    alert("Your form is submitted");

    
    name.value = '';
    Email.value = '';
    textarea.value = '';



});
