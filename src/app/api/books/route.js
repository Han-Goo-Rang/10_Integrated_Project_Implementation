import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Di sini Anda akan menghubungkan ke database dan mengambil data
    // Contoh menggunakan data dummy:
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    let books = [
      {
        id: 1,
        userId: 1,
        amount: "002 Books",
        dueDate: "13-03-2024",
        dateTime: "25-02-2024 10:39:43",
        returned: status === "returned" ? true : false,
      },
      // Tambahkan lebih banyak buku dummy jika diperlukan
    ];

    if (status) {
      books = books.filter((book) => book.returned === (status === "returned"));
    }

    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}
