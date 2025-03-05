import { Form } from "react-router-dom"
export default function Contact() {
    return (
        <div className="contact">
        <h1>Contact Us</h1>
        <Form method="post" action="/contact">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
<br />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
<br />
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <input type="submit" value="Submit"/>
        </Form>
        </div>
    )
}

export const contactAction = async ({ request }) => {
    const data = await request.formData()

    const submission = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
    }
}
