import axios from "axios";
import { useEffect, useState } from "react";

type Props = {};

export type Subject = {
  id: number;
  name: string;
};

function SubjectList({}: Props) {
  const [subjects, getSubjects] = useState<Subject[] | null>(null);

  useEffect(() => {
    const url = "http://localhost:8080/v1/subjects";
    axios.get(url).then((response) => {
      getSubjects(response.data);
    });
  }, []);

  return (
    <div className="w-full">
      <ul className="flex flex-wrap gap-5 px-10">
        {subjects
          ? subjects.map((subject) => {
              return (
                <li key={subject.id}>
                  <a
                    className="py-1 px-5 rounded-lg font-medium shadow-xl bg-black text-white hover:bg-slate-200 hover:text-black transition-all"
                    href="/:id"
                  >
                    {subject.name}
                  </a>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default SubjectList;
