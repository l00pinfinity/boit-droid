import { v4 as uuidv4 } from "uuid";

//Newsletter
const newsletterForm = document.querySelector<HTMLFormElement>("#newsletter-form");
const newsletterEmail = document.querySelector<HTMLInputElement>("#newsletter-email");

type Subscriber = {
  id: string,
  email: string
}

newsletterForm?.addEventListener("submit", e =>{
  e.preventDefault();

  if (newsletterEmail?.value == "" || newsletterEmail?.value == null) return;

  const newSubscriber = {
    id: uuidv4(),
    email: newsletterEmail.value
  }

  addSubscriber(newSubscriber);
  newsletterEmail.value = "";

//ContactMe
const contactForm = document.querySelector<HTMLFormElement>("#contactForm");
const contactName = document.querySelector<HTMLInputElement>("#contactName");
const contactEmail = document.querySelector<HTMLInputElement>("#contactEmail");
const contactMessage = document.querySelector<HTMLInputElement>("#contactMessage");

type Message = {
  id: string,
  name: string,
  email: string,
  message: string,
  createdAt: Date
}

contactForm?.addEventListener("submit", e=> {
  e.preventDefault();

  if (contactEmail?.value == "" || contactEmail?.value == null) return
  if (contactMessage?.value == "" || contactMessage?.value == null) return

  const newMessage = {
    id: uuidv4(),
    name: contactName?.value,
    email: contactEmail?.value,
    message: contactMessage.value,
    createdAt: new Date()
  }

  addMessage(newMessage);
})

})

function addSubscriber(newSubscriber: Subscriber) {
  //make api call to add subscriber
  alert("Thanks for subscribing ");
  //console.log("Thanks for subscribing " + JSON.stringify(newSubscriber))
}

function addMessage(newMessage: { id: string; name: string | undefined; email: string; message: string; createdAt: Date; }) {
  //make api call to add message 
  //console.log("Message sent successfully " + JSON.stringify(newMessage))
}

