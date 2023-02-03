import styled from "styled-components";
// import { Button } from "./styles/Button";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          .btn {
              border: 2px solid black;
              background-color: white;
              color: black;
              padding: 14px 28px;
              font-size: 16px;
              cursor: pointer;
              border-radius: 5px;
            }
          .btn {
              border-color: rgb(64 134 156);
              color: green;
              
            }

            .btn:hover {
              background-color: rgb(64 134 156);
              color: white;
            }

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>

      <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29370.
        761028093708!2d72.65329869734356!3d23.
        04780527637191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86d53c2ed683%3A0x161958a4f45e809a!2sNikol%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1675147404477!5m2!1sen!2sin" 
        width="100%" height="400" style={{border:0}} allowFullScreen="" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xeqwelpl" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username"  required
              autoComplete="off"
            />
            <input type="email" name="Email" placeholder="Email" autoComplete="off" 
             required/>
            <textarea name="Message" cols="30" rows="10" 
             required autoComplete="off" placeholder="Enter Your Message">
            </textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
