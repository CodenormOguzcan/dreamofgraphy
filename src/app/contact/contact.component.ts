import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import '../../assets/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  onSubmit() {
    const message = {
      SecureToken: "089f771b-0949-47f6-b207-b8dbccfa21bb",
      To: 'kontakt@dreamofgraphy.de',
      From: (document.getElementById("email") as HTMLInputElement).value,
      Subject: "Neuer Kontakt von DreamOfGraphy's Kontaktformular",
      Body: "Vorname: " + (document.getElementById("firstName") as HTMLInputElement).value
        + "<br> Nachname " + (document.getElementById("lastName") as HTMLInputElement).value
        + "<br> Email " + (document.getElementById("email") as HTMLInputElement).value
        + "<br> Telefonnummer " + (document.getElementById("phone") as HTMLInputElement).value
        + "<br> Firma " + (document.getElementById("company") as HTMLInputElement).value
        + "<br> Wie sind sie auf uns aufmerksam geworden? " + (document.getElementById("attention") as HTMLSelectElement).value
        + "<br> Betreff " + (document.getElementById("subject") as HTMLSelectElement).value
        + "<br> Nachricht " + (document.getElementById("message") as HTMLTextAreaElement).value
    };

    Email.send(message).then(
      (response: any) => {
        alert("Nachricht wurde erfolgreich gesendet!");
        // Formular zurücksetzen
        const form = document.querySelector('.contact-form') as HTMLFormElement;
        form.reset();
      },
      (error: any) => {
        alert("Beim Senden der Nachricht ist ein Fehler aufgetreten!");
      }
    );
  }
}
