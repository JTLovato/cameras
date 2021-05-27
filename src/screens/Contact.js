import React from 'react'
import Swal from 'sweetalert2'

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = { feedback: '',
          name: '',
          email: '',
          phone: '',
        };
      }
      nameChange = (event) => {
        this.setState({name: event.target.value})
      }
      emailChange = (event) => {
        this.setState({email: event.target.value})
      }
      phoneChange = (event) => {
        this.setState({phone: event.target.value})
      }
      messageChange = (event) => {
        this.setState({feedback: event.target.value})
      }

      handleSubmit = (event) => {
        event.preventDefault();

        const templateId = 'template_0fd395w';
        this.sendFeedback(templateId, {
          message: this.state.feedback, 
          name: this.state.name, 
          email: this.state.email,
          phone: this.state.phone,
        })
      }
    
      sendFeedback = (templateId, variables) => {
        window.emailjs.send(
          'service_p5jlius', templateId,
          variables
          ).then(res => {
            Swal.fire({
              title: 'On It\'s Way!',
              icon: 'success'
            })
          })
          .catch(err => {
            Swal.fire({
              title: 'Something Went Wrong...',
              icon: 'error'
            })
            console.error('Email Error:', err)
          })
      }
    
      render() {
        return (
          <div class="contact-container">
            <h1>CONTACT US</h1>
            <div className="form-container">
              <form className="test-mailing" onSubmit={this.handleSubmit}>
                <br/>
                <div>
                  <div>
                      <label htmlFor="name">Your Name</label>
                      <input 
                        className="form-control email-inputs" 
                        name="user_name" 
                        type="text" 
                        id="name" onChange={this.nameChange} 
                        required 
                      />
                  </div>
                  <div>
                      <label htmlFor="email">Your Email</label>
                      <input 
                        className="form-control email-inputs" 
                        name="user_email" 
                        type="text"
                        id="email" 
                        onChange={this.emailChange} 
                        required 
                      />
                  </div>
                  <div>
                      <label htmlFor="phone">Number You Can Be Reached At</label>
                      <input 
                        className="form-control email-inputs" 
                        name="user_phone" 
                        type="text"
                        id="phone" 
                        onChange={this.phoneChange} 
                      />
                  </div>
                  <label htmlFor="message">Message</label>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      onChange={this.messageChange}
                      placeholder="Put your message here"
                      required
                      className="email-text-area form-control"
                    />
                  </div>
                </div>
                <input 
                  type="submit" 
                  value="Submit" 
                  className="btn btn-outline-light" 
                />
              </form>
            </div>
            <div className="contact-info">
              <h1>Welcome to pixid!</h1>
              <h4>We are a group of photographers that want the best you to come out. We offer professional on-location portrait, sporting, and wedding photography. </h4>
              <h4>We know not every photographer is the same, so we fly out to you the artist of your choice, in the location of your choosing, so you can have the ultimate photo set of whatever you like.</h4>
              <h4>Want to remember every detail of your wedding? Or etch into time your crowning achievement? Maybe you want to take family portraits, or get a few headshots for you and your company. We do it all.</h4>
              <h4>Please use the form to contact us, we are excited to talk!</h4>
            </div>
          </div>
        )
      }
}

export default Contact;