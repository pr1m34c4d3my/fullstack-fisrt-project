import axios from "axios";
import { useEffect, useState } from "react";

type Props = {};

export type User = {
  id: number;
  name: string;
  email: string;
};

function UserCard({}: Props) {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const url = "http://localhost:8080/v1/users/";
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="px-10 flex gap-3 flex-row flex-wrap">
      {users
        ? users.map((user) => {
            return (
              <div
                className="flex flex-col p-3 border-black border-solid rounded-xl border-[1px] gap-2 w-[300px]"
                key={user.id}
              >
                <h1 className=" font-bold text-[25px]">{user.name}</h1>
                <p>{user.email}</p>
                <div className="mt-5">
                  <a
                    className="py-1 px-5 rounded-md text-white bg-slate-400 hover:bg-white hover:text-black transition-all"
                    href="#"
                  >
                    Detail
                  </a>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default UserCard;
