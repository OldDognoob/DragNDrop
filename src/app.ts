/*--------------------Explanation---------------------- */
// creating a new class
// our goal is to get access to the template and to the form as well as to the div in our html
// and render our div in the end
// to achieve we need to create a constructor, adding 2 elements starting with the word this
// the templateElement gives me access and the hostElement is to render
// to get access we use getElementById, we get some errors so we need to add the
// the templateElement to store: HTMLTemplateElement because in tsconfig.json file we add the dom elements
// now we might get some red flags in line 15-16, as it we say that the element might be null
// to avoid that we have 2 options: 1. to put in the end an exclamation mark or 2. to add
// as  HTMLTemplateElement and so according to the others to avoid the null property.
// the getElementById does not know which element to return , it only knows some HTMLElement
// in order to tell the type, we using type casting to inform that whatever we fetch will not be null
/*----------------------Second Part--------------------- */
// second part we need to import what it is the form and render that in the Dom
// create an importedNode by using a method provided on the global document object and two import nodes
// content it gives the references to the property
// the insertAdjacentElement it is a method provided by javascript, it takes the afterbegin and importNode
// which in order to be add, we need to get access by adding it as an element

import { textChangeRangeIsUnchanged } from "typescript";

/*-------------Interacting with the Element------------- */
// we will try to have access inside the form , inside the inputs elements
// to get access in that element we need to add some properties in this class
// so we adding more fields up there

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
