import React from "react";
import { useParams } from "react-router-dom";
import { Download } from "lucide-react";

const udanBooks = {
  1: {
    title: "Udan 1",
    cover: "/assets/books/udan.png",
    pdf: "/assets/books/Udan 1.pdf",
    desc: ""
  },
  2: {
    title: "Udan 2",
    cover: "/assets/books/udan.png",
    pdf: "/assets/books/Udan 2.pdf",
    desc: ""
  },
  3: {
    title: "Udan 3",
    cover: "/assets/books/udan.png",
    pdf: "/assets/books/Udan 3.pdf",
   desc: ""
  },
  4: {
    title: "Udan 4",
    cover: "/assets/books/udan.png",
    pdf: "/assets/books/Udan 4.pdf",
    desc: ""
  },
  5: {
    title: "Udan 5",
    cover: "/assets/books/udan.png",
    pdf: "/assets/books/Udan 5.pdf",
     desc: ""
  },
  6: {
    title: "Udan 6",
    cover: "/assets/books/udan.png",
    pdf: "/assets/books/Udan 6.pdf",
    desc: ""
  },
  7: {
    title: "Udan 7",
    cover: "/assets/books/udan.png",
    pdf: "/assets/books/Udan 7.pdf",
    desc: ""},
  8: {
    title: "Udan 8",
    cover: "/assets/books/udan.png",
    pdf: "/assets/books/Udan 8.pdf",
    desc: ""
  },
  9: {
    title: "Udan 9",
    cover: "/assets/books/udan.png",
    pdf: "/assets/books/Udan9.pdf",
    desc: ""
  }
};

export default function Udan() {
  const { id } = useParams();
  const book = udanBooks[id];

  if (!book) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold">Udan Book Not Found</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-28 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT: COVER */}
        <div className="flex justify-center">
          <img
            src={book.cover}
            alt={book.title}
            className="w-72 rounded-xl shadow-md"
          />
        </div>

        {/* RIGHT: INFO */}
        <div>
          <h1 className="text-3xl font-bold text-blue-700 mb-4">
            {book.title}
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {book.desc}
          </p>

          <a
            href={book.pdf}
            download
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
