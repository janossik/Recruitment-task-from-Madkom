import { AnyAction } from "redux";
import reducer, {
  addBookToCart,
  removeBookFromCart,
  setBookInCart,
  resetCartBook,
} from "./cart";

it("Test initialState", () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual({
    booksInCart: {},
  });
  expect(
    reducer(
      {
        booksInCart: {
          458: {
            quantity: 1,
            book: {
              id: 458,
              title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
              author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
              cover_url: "http://localhost:3001/static/cover/book/458.jpg",
              pages: 300,
              price: 3300,
              currency: "PLN",
            },
          },
          1228: {
            quantity: 1,
            book: {
              id: 1228,
              title: "Nowa Matematyka z plusem 6. Podręcznik",
              author: "M. Dobrowolska, M. Jucewicz, M. Karpiński, P. Zarzycki",
              cover_url: "http://localhost:3001/static/cover/book/1228.jpg",
              pages: 268,
              price: 3190,
              currency: "PLN",
            },
          },
        },
      },
      {} as AnyAction
    )
  ).toEqual({
    booksInCart: {
      458: {
        quantity: 1,
        book: {
          id: 458,
          title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
          author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
          cover_url: "http://localhost:3001/static/cover/book/458.jpg",
          pages: 300,
          price: 3300,
          currency: "PLN",
        },
      },
      1228: {
        quantity: 1,
        book: {
          id: 1228,
          title: "Nowa Matematyka z plusem 6. Podręcznik",
          author: "M. Dobrowolska, M. Jucewicz, M. Karpiński, P. Zarzycki",
          cover_url: "http://localhost:3001/static/cover/book/1228.jpg",
          pages: 268,
          price: 3190,
          currency: "PLN",
        },
      },
    },
  });
});

describe("Test actions", () => {
  it("Test reset sate", () => {
    expect(
      reducer(
        {
          booksInCart: {
            458: {
              quantity: 1,
              book: {
                id: 458,
                title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
                author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
                cover_url: "http://localhost:3001/static/cover/book/458.jpg",
                pages: 300,
                price: 3300,
                currency: "PLN",
              },
            },
            1228: {
              quantity: 1,
              book: {
                id: 1228,
                title: "Nowa Matematyka z plusem 6. Podręcznik",
                author:
                  "M. Dobrowolska, M. Jucewicz, M. Karpiński, P. Zarzycki",
                cover_url: "http://localhost:3001/static/cover/book/1228.jpg",
                pages: 268,
                price: 3190,
                currency: "PLN",
              },
            },
          },
        },
        resetCartBook()
      )
    ).toEqual({
      booksInCart: {},
    });
  });

  it("Test set quantity for book", () => {
    expect(
      reducer(
        {
          booksInCart: {
            458: {
              quantity: 1,
              book: {
                id: 458,
                title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
                author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
                cover_url: "http://localhost:3001/static/cover/book/458.jpg",
                pages: 300,
                price: 3300,
                currency: "PLN",
              },
            },
          },
        },
        setBookInCart({
          book: {
            id: 458,
            title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
            author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
            cover_url: "http://localhost:3001/static/cover/book/458.jpg",
            pages: 300,
            price: 3300,
            currency: "PLN",
          },
          quantity: 20,
        })
      )
    ).toEqual({
      booksInCart: {
        458: {
          quantity: 20,
          book: {
            id: 458,
            title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
            author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
            cover_url: "http://localhost:3001/static/cover/book/458.jpg",
            pages: 300,
            price: 3300,
            currency: "PLN",
          },
        },
      },
    });
  });

  it("Test set new book", () => {
    expect(
      reducer(
        {
          booksInCart: {},
        },
        setBookInCart({
          book: {
            id: 458,
            title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
            author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
            cover_url: "http://localhost:3001/static/cover/book/458.jpg",
            pages: 300,
            price: 3300,
            currency: "PLN",
          },
          quantity: 20,
        })
      )
    ).toEqual({
      booksInCart: {
        458: {
          quantity: 20,
          book: {
            id: 458,
            title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
            author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
            cover_url: "http://localhost:3001/static/cover/book/458.jpg",
            pages: 300,
            price: 3300,
            currency: "PLN",
          },
        },
      },
    });
  });

  it("Test add new book", () => {
    expect(
      reducer(
        {
          booksInCart: {},
        },
        addBookToCart({
          id: 458,
          title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
          author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
          cover_url: "http://localhost:3001/static/cover/book/458.jpg",
          pages: 300,
          price: 3300,
          currency: "PLN",
        })
      )
    ).toEqual({
      booksInCart: {
        458: {
          quantity: 1,
          book: {
            id: 458,
            title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
            author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
            cover_url: "http://localhost:3001/static/cover/book/458.jpg",
            pages: 300,
            price: 3300,
            currency: "PLN",
          },
        },
      },
    });
  });

  it("Test add the same book", () => {
    expect(
      reducer(
        {
          booksInCart: {
            458: {
              quantity: 1,
              book: {
                id: 458,
                title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
                author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
                cover_url: "http://localhost:3001/static/cover/book/458.jpg",
                pages: 300,
                price: 3300,
                currency: "PLN",
              },
            },
          },
        },
        addBookToCart({
          id: 458,
          title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
          author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
          cover_url: "http://localhost:3001/static/cover/book/458.jpg",
          pages: 300,
          price: 3300,
          currency: "PLN",
        })
      )
    ).toEqual({
      booksInCart: {
        458: {
          quantity: 2,
          book: {
            id: 458,
            title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
            author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
            cover_url: "http://localhost:3001/static/cover/book/458.jpg",
            pages: 300,
            price: 3300,
            currency: "PLN",
          },
        },
      },
    });
  });

  it("Test remove one book from many", () => {
    expect(
      reducer(
        {
          booksInCart: {
            458: {
              quantity: 5,
              book: {
                id: 458,
                title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
                author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
                cover_url: "http://localhost:3001/static/cover/book/458.jpg",
                pages: 300,
                price: 3300,
                currency: "PLN",
              },
            },
          },
        },
        removeBookFromCart({
          id: 458,
          title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
          author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
          cover_url: "http://localhost:3001/static/cover/book/458.jpg",
          pages: 300,
          price: 3300,
          currency: "PLN",
        })
      )
    ).toEqual({
      booksInCart: {
        458: {
          quantity: 4,
          book: {
            id: 458,
            title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
            author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
            cover_url: "http://localhost:3001/static/cover/book/458.jpg",
            pages: 300,
            price: 3300,
            currency: "PLN",
          },
        },
      },
    });
  });

  it("Test remove the last book of this type", () => {
    expect(
      reducer(
        {
          booksInCart: {
            458: {
              quantity: 1,
              book: {
                id: 458,
                title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
                author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
                cover_url: "http://localhost:3001/static/cover/book/458.jpg",
                pages: 300,
                price: 3300,
                currency: "PLN",
              },
            },
          },
        },
        removeBookFromCart({
          id: 458,
          title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
          author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
          cover_url: "http://localhost:3001/static/cover/book/458.jpg",
          pages: 300,
          price: 3300,
          currency: "PLN",
        })
      )
    ).toEqual({
      booksInCart: {},
    });
  });
  it("Test try to delete a book that is not there", () => {
    expect(
      reducer(
        {
          booksInCart: {},
        },
        removeBookFromCart({
          id: 458,
          title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
          author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
          cover_url: "http://localhost:3001/static/cover/book/458.jpg",
          pages: 300,
          price: 3300,
          currency: "PLN",
        })
      )
    ).toEqual({
      booksInCart: {},
    });
  });
});
