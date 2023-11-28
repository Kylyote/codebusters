import React, { useState } from "react";
import { socket } from "../socket";

export function MyForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit("create-something", value, () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <div
        id="messages"
        style={{ minHeight: "50vh", backgroundColor: "white" }}
      ></div>
      <div className="form-group row">
        <label for="exampleFormControlTextarea1">What's on your mind ?</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group-row">
        <button type="submit" disabled={isLoading}>
          Send Message
        </button>
      </div>
    </form>
  );
}
