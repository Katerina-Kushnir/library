function myLibrary1() { 
    console.log('Library part 1' + '\n' +  
                '1. Вёрстка валидная +10;' + '\n' +  
                '2. Вёрстка семантическая +16;'  + '\n' +  
                '3. Вёрстка соответствует макету +54;' + '\n' +  
                '4. Общие требования к верстке +20;' + '\n' + 
                'Всего: 100 баллов'); 
} 
myLibrary1()

function myLibrary2() { 
    console.log('Library part 2' + '\n' +  
                '1. Вёрстка соответствует макету. Ширина экрана 768px +26;'  + '\n' +  
                '2. Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12;' + '\n' +  
                '3. На ширине экрана 768рх реализовано адаптивное меню (появление бургер-меню сделано на ширине 1024px) +12;' + '\n' + 
                'Всего: 50 баллов'); 
} 
myLibrary2()

document.addEventListener("DOMContentLoaded", function () {
    //BURGER MENU
    const menu = document.querySelector('.nav-list');
    const burger = document.querySelector('.burger-menu');
    const navItem = document.querySelectorAll('.nav-item');
    //ABOUT SLIDER
    const galery = document.querySelector(".galery");
    const images = galery.querySelectorAll("img");
    const firstImageWidth = images[0].clientWidth + 25;
    const prev = document.querySelector(".arrow-prev");
    const next = document.querySelector(".arrow-next");
    const pagination = document.querySelectorAll(".pagination");
    //FAVORITES SLIDER
    const seasonInputs = document.querySelectorAll('input[data-season]');
    const favoriteSeasons = document.querySelectorAll('.favorites-items-season[data-season]');
    //dropMenu Profile
    const userIcon = document.querySelectorAll('.user-menu');
    const dropMenuProfile = document.querySelector('.profile');
    //MODAL Login
    const logIn = document.querySelectorAll('.login');
    const modalLogin = document.querySelector('.modal-login');
    const modalLoginContainer = modalLogin.querySelector('.modal-container');
    const modalCloseLogin = document.querySelector('.close-login');
    const goToLogin = document.querySelector('#go-to-login');
    //MODAL Register
    const register = document.querySelectorAll('.register');
    const modalRegister = document.querySelector('.modal-register');
    const modalRegisterContainer = modalRegister.querySelector('.modal-container');
    const modalCcloseRegister = document.querySelector('.close-register');
    const goToRegister = document.querySelector('#go-to-register');
    //VALIDATE FORM REGISTER
    const registerForm = document.querySelector('.modal-register form');
    const emailInputRegister = registerForm.querySelector('#email');
    const passwordInputRegister = registerForm.querySelector('#password');
    const firstNameInput = registerForm.querySelector('#first-name');
    const lastNameInput = registerForm.querySelector('#last-name');
    //VALIDATE FORM LOGIN
    const loginForm = document.querySelector('.modal-login form');
    const emailInputLogin = loginForm.querySelector('#email-login');
    const passwordInputLogin = loginForm.querySelector('#password-login');
    //LOGIN (localStorage)
    const profileLogin = document.querySelector('.profile-login');
    const profileLogout = document.querySelector('.profile-logout');
    const profileInfo = document.querySelector('.modal-profile-right-info');
    const buttonCheckCard = document.querySelector('.button-check-card');
    const libraryLogin = document.querySelector('.library-card-get-not-login');
    const libraryLogout = document.querySelector('.library-card-get-login');
    const profileLogo = document.querySelector('.modal-profile-left-logo');
    const profileName = document.querySelector('.modal-profile-left-name');
    const userCharts = document.querySelector('.user-charts');
    const userAvatar = document.querySelector('.user-avatar');
    const nameInput = document.querySelector('.check-card-name'); 
    const cardInput = document.querySelector('.check-card-number');
    const userCardNumber = document.querySelector('.card-number');
    //COPY CARD NUMBER
    const copyCardImg = document.querySelector('#copy-card');
    //LOGOUT user profile
    const logoutUser = document.querySelector('.logout');
    //MODAL PROFILE
    const myProfile = document.querySelectorAll('.my-profile');
    const myProfileCard = document.querySelector('.profile-title');
    const modalProfile = document.querySelector('.modal-profile');
    const modalProfileContainer = modalProfile.querySelector('.modal-container');
    const modalCloseProfile = modalProfileContainer.querySelector('.modal-close');
    //MODAL CARD
    const modalCard = document.querySelector('.modal-card');
    const modalCardContainer = modalCard.querySelector('.modal-container');
    const modalCloseBuyCard = modalCardContainer.querySelector('.modal-close');
    const buyCardButtons = document.querySelectorAll('.buy');
    //INFO ABOUT USER
    const visits = document.querySelectorAll('.visit');
    const books = document.querySelectorAll('.books');

    //BURGER MENU
    const toggleMenu = () => {
        menu.classList.toggle('active');
        burger.classList.toggle('open');
    };

    burger.addEventListener('click', toggleMenu);

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !burger.contains(e.target)) {
            menu.classList.remove('active');
            burger.classList.remove('open');
        }
    });

    navItem.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    //ABOUT SLIDER
    let currentIndex = 0;

    function updateSlider() {
        const scrollPosition = currentIndex * firstImageWidth; 
        galery.scrollTo({ left: scrollPosition, behavior: "smooth" });

        pagination.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    prev.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    next.addEventListener("click", function () {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    pagination.forEach((item, index) => {
        item.addEventListener("click", function () {
            currentIndex = index;
            updateSlider();
        });
    });

    updateSlider();

    //FAVORITES SLIDER
    function handleInputChange(event) {
        const selectedFavoriteSeason = event.target.getAttribute('data-season');

        favoriteSeasons.forEach(block => {
            block.style.animationName = 'fadeOut';
        });

        setTimeout(() => {
            favoriteSeasons.forEach(block => {
                block.style.display = 'none';
                block.style.animationName = '';
            });

            const selectedBlock = document.querySelector(`.favorites-items-season[data-season="${selectedFavoriteSeason}"]`);
            if (selectedBlock) {
                selectedBlock.style.animationName = 'fadeIn';
                selectedBlock.style.display = 'grid';

            }
        }, 500); 
    }

    seasonInputs.forEach(input => {
        input.addEventListener('change', handleInputChange);
    });

    handleInputChange({ target: document.querySelector('input[data-season]:checked') });

    //dropMenu Profile
    const toggleMenuProfile = () => {
        dropMenuProfile.classList.toggle('open')
    }

    userIcon.forEach( user => {
        user.addEventListener('click', toggleMenuProfile);
    });

    document.addEventListener('click', (e) => {
        let isUserIconClicked = false;
        userIcon.forEach(user => {
            if (user.contains(e.target)) {
                isUserIconClicked = true;
            }
        });

        if (!isUserIconClicked && !dropMenuProfile.contains(e.target)) {
            dropMenuProfile.classList.remove('open');
        }
    });

    //MODAL Login
    logIn.forEach(buttonLog => {
        buttonLog.addEventListener('click', () => {
            dropMenuProfile.classList.remove('open');
            modalLogin.classList.add('open');
        });
    });

    modalCloseLogin.addEventListener('click', () => {
        modalLogin.classList.remove('open');
    });
    
    modalLogin.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    goToLogin.addEventListener('click', () => {
        modalRegister.classList.remove('open');
        modalLogin.classList.add('open');
    });
    
    modalLogin.addEventListener('click', (e) => {
        if (!modalLoginContainer.contains(e.target)) {
            modalLogin.classList.remove('open');
        }
    });

    //MODAL Register
    register.forEach(buttonRegister => {
        buttonRegister.addEventListener('click', () => {
            dropMenuProfile.classList.remove('open');
            modalRegister.classList.add('open');
        });
    });

    modalCcloseRegister.addEventListener('click', () => {
        modalRegister.classList.remove('open');
    });
    
    modalRegister.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    goToRegister.addEventListener('click', () => {
        modalLogin.classList.remove('open');
        modalRegister.classList.add('open');
    });
    
    modalRegister.addEventListener('click', (e) => {
        if (!modalRegisterContainer.contains(e.target)) {
            modalRegister.classList.remove('open');
        }
    });

    //VALIDATE FORM REGISTER
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    emailInputRegister.addEventListener('input', () => {
        if (!emailInputRegister.value.match(emailRegex)) {
            emailInputRegister.classList.add('error');
        } else {
            emailInputRegister.classList.remove('error');
        }
    });

    passwordInputRegister.addEventListener('input', () => {
        if (passwordInputRegister.value.length < 8) {
            passwordInputRegister.classList.add('error');
        } else {
            passwordInputRegister.classList.remove('error');
        }
    });

    firstNameInput.addEventListener('input', () => {
        if (firstNameInput.value.length < 1) {
            firstNameInput.classList.add('error');
        } else {
            firstNameInput.classList.remove('error');
        }
    });

    lastNameInput.addEventListener('input', () => {
        if (lastNameInput.value.length < 1) {
            lastNameInput.classList.add('error');
        } else {
            lastNameInput.classList.remove('error');
        }
    });


    let isLoggedInUser;
    let countVisit = 0;
    //REGISTER (localStorage)
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (emailInputRegister.classList.contains('error') || passwordInputRegister.classList.contains('error') || firstNameInput.classList.contains('error') || lastNameInput.classList.contains('error')) {
            return;
        }

        const cardNumber = Math.ceil(Math.random() * 10000000000);
        const ownedButtons = [];
        const rentedBooks = [];
        countVisit++;
        let user = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInputRegister.value,
            password: passwordInputRegister.value,
            cardNumber: cardNumber,
            ownedButtons: ownedButtons,
            countVisit: countVisit,
            rentedBooks: rentedBooks,
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        registerForm.submit();
        modalRegister.classList.remove('open');
    });

    //VALIDATE FORM LOGIN
    emailInputLogin.addEventListener('input', () => {
        if (!emailInputLogin.value.match(emailRegex)) {
            emailInputLogin.classList.add('error');
        } else {
            emailInputLogin.classList.remove('error');
        }
    });

    passwordInputLogin.addEventListener('input', () => {
        if (passwordInputLogin.value.length < 8) {
            passwordInputLogin.classList.add('error');
        } else {
            passwordInputLogin.classList.remove('error');
        }
    });

    let email; 
    let password;

    function updateOwnedBooksCount() {
        books.forEach(userBook => {
            userBook.innerText = isLoggedInUser.ownedButtons.length;
        });
    }
    function showRentedBooks() {
        const rentedBooks = isLoggedInUser.rentedBooks || [];
        rentedBooks.forEach(book => {
            const {title, author} = book;
            const listRentedBooks = document.querySelector('.list-rented-books');
            let li = document.createElement('li');
            li.innerText = book.title + ', ' + book.author;
            listRentedBooks.appendChild(li);
        })
    }

    //LOGIN (localStorage)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (emailInputLogin.classList.contains('error') || passwordInputLogin.classList.contains('error')) {
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        email = emailInputLogin.value;
        password = passwordInputLogin.value;

        isLoggedInUser = users.find(user => user.email === email && user.password === password);
        let isTextError = document.querySelector('.error-message');
        if(!isLoggedInUser) {
            if (isTextError) {
                textError.remove;
            } 
            let textError = document.createElement('span');
            textError.textContent = 'email or password is not correct';
            textError.classList.add('error-message');
            loginForm.appendChild(textError);
            return;
        }

        const firstName = isLoggedInUser.firstName;
        const lastName = isLoggedInUser.lastName;
        const cardNumber = isLoggedInUser.cardNumber;
        const firstCharName = firstName.substr(0, 1).toUpperCase();
        const firstCharLastName = lastName.substr(0, 1).toUpperCase();
        profileLogo.innerText = firstCharName + firstCharLastName;
        userCharts.innerText = firstCharName + firstCharLastName;
        userCharts.title = firstName + ' ' + lastName;
        profileName.innerText = firstName + ' ' + lastName;
        userCardNumber.innerText = cardNumber;
        myProfileCard.innerText = cardNumber;
        myProfileCard.classList.add('my-profile-card');
        nameInput.value = firstName + ' ' + lastName;
        cardInput.value = cardNumber;

        isLoggedInUser.countVisit = isLoggedInUser.countVisit + 1;

        console.log(isLoggedInUser);

        const ownedButtons = isLoggedInUser.ownedButtons;
        if (ownedButtons && ownedButtons.length > 0) {
            ownedButtons.forEach(buttonDataId => {
                const button = document.querySelector(`[data-id="${buttonDataId}"]`);
                if (button) {
                    button.classList.remove('buy');
                    button.classList.add('own');
                    button.innerText = 'Own';
                }
            });
        }

        visits.forEach(userVisit => {
            userVisit.innerText = isLoggedInUser.countVisit;
        });

        if (isLoggedInUser) {
            profileLogin.classList.add('none');
            profileLogout.classList.remove('none');
            modalLogin.classList.remove('open');
            modalRegister.classList.remove('open');
            profileInfo.classList.add('open');
            buttonCheckCard.classList.remove('open');
            libraryLogout.classList.add('open');
            libraryLogin.classList.remove('open');
            userCharts.classList.add('open');
            userAvatar.classList.remove('open');

            const updatedUsers = users.map(user => {
                if (user.email === email && user.password === password) {
                    return isLoggedInUser;
                }
                return user;
            });
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            updateOwnedBooksCount();
            showRentedBooks()
        } else {
            return;
        }
    });

    //COPY CARD NUMBER
    copyCardImg.addEventListener('click', () => {
        const valueCardNumber = userCardNumber.textContent;

        const tempInput = document.createElement('input');
        tempInput.value = valueCardNumber;

        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');

        document.body.removeChild(tempInput);
    })

    //LOGOUT user profile
    logoutUser.addEventListener('click', () => {
        dropMenuProfile.classList.remove('open');
        profileLogout.classList.add('none');
        profileLogin.classList.remove('none');
        profileInfo.classList.remove('open');
        buttonCheckCard.classList.add('open');
        libraryLogout.classList.remove('open');
        libraryLogin.classList.add('open');
        userCharts.classList.remove('open');
        userAvatar.classList.add('open');
        nameInput.value = '';
        cardInput.value = '';
        isLoggedInUser = false;

        buyCardButtons.forEach(button => {
            button.classList.add('buy');
            button.classList.remove('own');
            button.innerText = 'Buy';
        });
    });

    //MODAL PROFILE
    myProfile.forEach(buttonProfile => {
        buttonProfile.addEventListener('click', () => {
            dropMenuProfile.classList.remove('open');
            modalProfile.classList.add('open');
        });
    });

    modalCloseProfile.addEventListener('click', () => {
        modalProfile.classList.remove('open');
    });

    modalProfile.addEventListener('click', (e) => {
        if (!modalProfileContainer.contains(e.target)) {
            modalProfile.classList.remove('open');
        }
    });

    //MODAL CARD
    buyCardButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!isLoggedInUser) {
                modalLogin.classList.add('open');
            } else if (isLoggedInUser.isBuyCard) {
                button.classList.remove('buy');
                button.classList.add('own');
                button.innerText = 'Own';

                const bookContainer = button.closest('.favorites-item');
                const bookTitle = bookContainer.querySelector('.favorites-item-title').innerText;
                const bookAuthor = bookContainer.querySelector('.favorites-item-title-author').innerText;

                const listRentedBooks = document.querySelector('.list-rented-books');
                let li = document.createElement('li');
                li.innerText = bookTitle + ', ' + bookAuthor;
                listRentedBooks.appendChild(li);

                const users = JSON.parse(localStorage.getItem('users')) || [];
                isLoggedInUser = users.find(user => user.email === email && user.password === password);

                const buttonDataId = button.getAttribute('data-id');
                ownedButtons = isLoggedInUser.ownedButtons || [];
                ownedButtons.push(buttonDataId);
                isLoggedInUser.ownedButtons = ownedButtons;

                rentedBooks = isLoggedInUser.rentedBooks || [];
                rentedBooks.push({title: bookTitle, author: bookAuthor});
                isLoggedInUser.rentedBooks = rentedBooks;

                localStorage.setItem('users', JSON.stringify(users));
                updateOwnedBooksCount();
            } else {
                modalCard.classList.add('open')
            }
        })
    });
    
    modalCloseBuyCard.addEventListener('click', () => {
        modalCard.classList.remove('open');
    });

    modalCard.addEventListener('click', (e) => {
        if (!modalCardContainer.contains(e.target)) {
            modalCard.classList.remove('open');
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
            modalLogin.classList.remove('open');
            modalRegister.classList.remove('open');
            modalProfile.classList.remove('open');
            modalCard.classList.remove('open');
        }
    });

    //button Check Card
    buttonCheckCard.addEventListener('click', (e) => {
        let checkUser;
        const checkNameUser = nameInput.value;
        const checkCardUser = cardInput.value;
    
        const users = JSON.parse(localStorage.getItem('users')) || [];

        email = emailInputLogin.value;
        password = passwordInputLogin.value;
    
        const [checkFirstName, checkLastName] = checkNameUser.split(' ');
    
        checkUser = users.find(user => user.firstName == checkFirstName && user.lastName == checkLastName && user.cardNumber == checkCardUser);
    
        visits.forEach(userVisit => {
            userVisit.innerText = checkUser.countVisit;
        });

        if (!checkUser) {
            return;
        }
        profileInfo.classList.add('open');
        buttonCheckCard.classList.remove('open');
    
        setTimeout (() => {
            profileInfo.classList.remove('open');
            buttonCheckCard.classList.add('open');
            nameInput.value = '';
            cardInput.value = '';
        }, 10000);
    });

    //FORM BUY BOOK
    const formBuyBook = document.querySelector('#modal-form-buy-book');
    const buyBookButton = document.querySelector('.buy-card');
    const inputsBuyBook = formBuyBook.querySelectorAll('input[required]');

    //input card number
    const inputCardNumber = document.querySelector('#card-number');
    inputCardNumber.addEventListener('input', () => {
        inputCardNumber.value = inputCardNumber.value.replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');

        if (inputCardNumber.value.length < 19) {
            inputCardNumber.classList.add('error');
        } else {
            inputCardNumber.classList.remove('error');
        }
    });
    //input expiration code
    const inputExpirationCode = document.querySelectorAll('input[name="expiration-code"]');
    inputExpirationCode.forEach(expirationCode => {
        expirationCode.addEventListener('input', () => {
            expirationCode.value = expirationCode.value.replace(/[^\d]/g, '');
            if (expirationCode.value.length < 2) {
                expirationCode.classList.add('error');
            } else {
                expirationCode.classList.remove('error');
            }
        });
    });
    //input CVC
    const inputCVC = document.querySelector('#cvc');
    inputCVC.addEventListener('input', () => {
        inputCVC.value = inputCVC.value.replace(/[^\d]/g, '');
        if (inputCVC.value.length < 3) {
            inputCVC.classList.add('error');
        } else {
            inputCVC.classList.remove('error');
        }
    });

    //check all fields
    const checkInputsFilled = () => {
        let allInputsFilled = true;

        inputsBuyBook.forEach(input => {
            if (input.classList.contains('error') || input.value === '') {
                allInputsFilled = false;
            }
        });

        buyBookButton.style.pointerEvents = allInputsFilled ? "auto" : "none";
    }

    inputsBuyBook.forEach(input => {
        input.addEventListener('input', checkInputsFilled);
    });

    //enter BUY CARD
    buyBookButton.addEventListener('click', () => {
        modalCard.classList.remove('open');

        inputsBuyBook.forEach(input => {
            input.value = '';
        });

        const users = JSON.parse(localStorage.getItem('users')) || [];
        isLoggedInUser = users.find(user => user.email === email && user.password === password);

        console.log(isLoggedInUser)
        if (isLoggedInUser) {
            isLoggedInUser.isBuyCard = true;

            localStorage.setItem('users', JSON.stringify(users));
        }
    });
    
});