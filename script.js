let registeredUser = null;

function registerUser() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (name && password) {
        registeredUser = { name, password };
        document.getElementById('registration-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
        alert('Registration successful. Please log in.');
    } else {
        alert('Please fill in all fields.');
    }
}

function loginUser() {
    const loginName = document.getElementById('login-name').value;
    const loginPassword = document.getElementById('login-password').value;

    if (registeredUser && loginName === registeredUser.name && loginPassword === registeredUser.password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('upload-form').style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function submitUploads() {
    const photo = document.getElementById('photo').files[0];
    const resume = document.getElementById('resume').files[0];
    const userName = registeredUser.name;

    if (photo && resume) {
        const photoURL = URL.createObjectURL(photo);
        const resumeURL = URL.createObjectURL(resume);

        document.getElementById('userName').textContent = userName;
        document.getElementById('userPhoto').src = photoURL;
        document.getElementById('userResume').href = resumeURL;

        document.getElementById('upload-form').style.display = 'none';
        document.getElementById('user-page').style.display = 'block';
    } else {
        alert('Please upload both files.');
    }
}

function viewFiles() {
    document.getElementById('uploaded-files').style.display = 'block';
}
