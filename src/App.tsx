import { useState, FormEvent } from "react";

interface Person {
  name: string;
  age: number;
}

function App() {
  const [user, setUser] = useState<Person>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div>
        <p>Hello</p>
        <form onSubmit={submitHandler}>
          <input
            type="number"
            placeholder="Age"
            value={user?.age || ""}
            onChange={(e) =>
              setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
            }
          />
          <input
            type="text"
            placeholder="Name"
            value={user?.name || ""}
            onChange={(e) =>
              setUser((prev) => ({ ...prev!, name: e.target.value }))
            }
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default App;
