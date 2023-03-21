# Quiz-form
Here is brief info abt my code -->
This code is related to a simple quiz form. The form has five questions with multiple choices, and the correct answers are stored in an array called correctAnswer, which has five elements corresponding to the five questions.

The code selects the quiz form, result element, and questions elements from the HTML document using the document.querySelector() and document.querySelectorAll() methods.

It then attaches an event listener to the form's submit event, preventing its default behavior of reloading the page using event.preventDefault().

Inside the event listener, the code initializes a variable score to 0 and creates an array userAnswer that contains the user's selected answers for each question. The user's answers are obtained by accessing the value property of each question's input element using form.q1.value, form.q2.value, and so on, where q1, q2, etc. are the names of the form inputs.

The code then loops through each element of userAnswer and compares it to the corresponding element of correctAnswer. If the answers match, it increments the score variable by 1 and adds the correct CSS class to the corresponding question element. If the answers don't match, it adds the wrong CSS class to the question element.

After looping through all the questions, the code updates the result element's text content to display the user's score out of 5, removes the hide CSS class from the result element (if it had it), and scrolls to the top of the page using the scrollTo() method.
