// template_puut7uj
// service_6hw7566
// ETDn6akjv6lHFgQj0 

function contact(event) {
    event.preventDefault();
    // emailjs
    //     .sendForm(
    //         "service_6hw7566",
    //         "template_puut7uj",
    //         event.target,
    //         "ETDn6akjv6lHFgQj0"
    //     ).then(() => {
    //         alert("Thank you for your message!");
    //     })
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        console.log("Thank you for your message!");
    }, 1000);
    }