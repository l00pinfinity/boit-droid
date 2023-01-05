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

})

function addSubscriber(newSubscriber: Subscriber) {
  //make api call to add subscriber
  console.log("Thanks for subscribing " + JSON.stringify(newSubscriber))
}
