// src/components/Dashboard.tsx
import { useState, useEffect } from "react";

interface Book {
  id: number;
  userId: string;
  amount: number;
  dueDate: string;
  dateTime: string;
  type: string;
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"borrowed" | "returned">("borrowed");
  const [books, setBooks] = useState<Book[]>([]);
  const [returnedBooks, setReturnedBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalBorrowed, setTotalBorrowed] = useState<number>(0);
  const [totalReturned, setTotalReturned] = useState<number>(0);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await fetch("/api/books?status=borrowed");
        if (!response.ok) {
          throw new Error("Failed to fetch borrowed books");
        }
        const data: Book[] = await response.json();
        setBooks(data);
        setTotalBorrowed(data.length);
      } catch (error) {
        console.error("Error fetching borrowed books:", error);
      }
    };

    const fetchReturnedBooks = async () => {
      try {
        const response = await fetch("/api/books?status=returned");
        if (!response.ok) {
          throw new Error("Failed to fetch returned books");
        }
        const data: Book[] = await response.json();
        setReturnedBooks(data);
        setTotalReturned(data.length);
      } catch (error) {
        console.error("Error fetching returned books:", error);
      }
    };

    fetchBorrowedBooks();
    fetchReturnedBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.id.toString().includes(searchQuery) ||
      book.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.amount.toString().includes(searchQuery)
  );

  const handleReturnBook = async (bookId: number) => {
    try {
      const response = await fetch(`/api/books/${bookId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ returned: true }),
      });

      if (response.ok) {
        const updatedBooks = books.filter((book) => book.id !== bookId);
        setBooks(updatedBooks);
        setTotalBorrowed(updatedBooks.length);
        setTotalReturned((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-16 bg-black text-white p-4 flex flex-col items-center">
        <div className="text-2xl mb-8">📚</div>
        <div className="mb-4 text-xl">🏠</div>
        <div className="mb-4 text-xl">👤</div>
        <div className="mb-4 text-xl">📋</div>
        <div className="text-xl">🗺️</div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold">Nilas Gunasekara</h2>
            <p className="text-sm text-gray-500">User</p>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <div className="font-medium">12:29 PM</div>
              <div className="text-sm text-gray-500">Sep 02, 2023</div>
            </div>
            <div className="text-xl">⚙️</div>
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-4">Library Lane Books</h1>

        <div className="bg-gray-200 rounded-t-lg">
          <button
            className={`px-4 py-2 ${activeTab === "borrowed" ? "bg-gray-900 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTab("borrowed")}
          >
            Borrowed Books
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "returned" ? "bg-gray-900 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTab("returned")}
          >
            Returned Books
          </button>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search by ID, Type, or Amount"
            className="flex-1 p-2 border rounded-l-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-black text-white px-4 py-2 rounded-r-lg">
            Search
          </button>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">User ID</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Due Date</th>
                <th className="px-4 py-2 text-left">Date & Time</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {(activeTab === "borrowed" ? filteredBooks : returnedBooks).map((book) => (
                <tr key={book.id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{book.id}</td>
                  <td className="px-4 py-2">{book.userId}</td>
                  <td className="px-4 py-2">{book.amount}</td>
                  <td className="px-4 py-2">{book.dueDate}</td>
                  <td className="px-4 py-2">{book.dateTime}</td>
                  <td className="px-4 py-2">
                    {activeTab === "borrowed" ? (
                      <button
                        className="bg-black text-white px-2 py-1 rounded"
                        onClick={() => handleReturnBook(book.id)}
                      >
                        Return
                      </button>
                    ) : (
                      <span className="text-green-500">Returned</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
