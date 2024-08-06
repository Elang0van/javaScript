
        // User constructor
        function User(username, password) {
            this.username = username;
            this.password = password;
        }

        // Array of users
        let users = [
            new User('elango', '1122'),
            new User('ace', '1133'),
            new User('sparrow', '1144')
        ];

        function login() {
            let userName = document.getElementById('username');
            let passWord = document.getElementById('password');

            let userInput = userName.value;
            let passInput = passWord.value;

            let user = users.find(u => u.username === userInput);

            if (userInput === '') {
                document.getElementById('aa').innerHTML = 'Username is empty';
            } else if (!user) {
                document.getElementById('aa').innerHTML = 'Invalid username';
            } else {
                if (passInput === '') {
                    document.getElementById('bb').innerHTML = 'Password is empty'; 
                } else if (user.password !== passInput) {
                    document.getElementById('bb').innerHTML = 'Invalid password';
                } else {
                  alert("login success ")
                }
            }
        }

               
                document.getElementById('username').addEventListener('clear', function() {
                    document.getElementById('aa').innerHTML = '';
                });
        
                document.getElementById('password').addEventListener('input', function() {
                    document.getElementById('aa').innerHTML = '';
                });