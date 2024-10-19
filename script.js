function generatePassword() {

    const length = document.getElementById('length').value;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    
    let password = '';
    
    for (let i = 0; i < length; i++) {
    
    password += characters.charAt(Math.floor(Math.random() * characters.length));
    
    }
    
    document.getElementById('result').textContent = `Generated Password: ${password}`;
    
    }