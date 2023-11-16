import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState(false);

  return (
    <div className="bg-back fixed w-screen h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] tall:h-[calc(100vh-6rem)] flex items-center justify-center">
      <div className="bg-green flex flex-col h-auto py-8 px-6 w-auto md:w-auto items-center rounded-[10px]">
        <form
          className="flex flex-col my-auto"
          onSubmit={(e) => {
            e.preventDefault();
            setMessage(true);
            setTimeout(() => {
              setMessage(false);
            }, 2000);
          }}
        >
          <label htmlFor="Message" className="text-label">
            Message
          </label>
          <input
            type="text"
            id="Message"
            name="Message"
            autoComplete="off"
            required
            className="h-32 border-2 border-black mb-2 px-2 py-1 content-center bg-label"
          />
          <label htmlFor="Username" className="text-label">
            Username
          </label>
          <input
            type="text"
            id="Username"
            name="Username"
            required
            className="border-2 border-black mb-2 px-2 py-1 content-center bg-label"
          />
          <label htmlFor="Email" className="text-label">
            Email
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            required
            className="border-2 border-black mb-2 px-2 py-1 content-center bg-label"
          />
          <div className="flex justify-center">
            <input
              type="submit"
              value="Submit"
              className="bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8 "
            />
          </div>
          {message && (
            <div className="flex justify-center">
              <p className="text-label mt-4 text-lg">
                Votre message a été envoyé!
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
