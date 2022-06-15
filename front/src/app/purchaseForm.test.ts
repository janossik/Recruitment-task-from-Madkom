import { AnyAction } from "redux";
import reducer, {
  setPurchaseFormInputField,
  resetPurchaseForm,
} from "./purchaseForm";

it("Test initialState", () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual({
    first_name: "",
    last_name: "",
    city: "",
    zip_code: "",
  });
  expect(
    reducer(
      {
        first_name: "Marcin",
        last_name: "Czaniecki",
        city: "Gdynia",
        zip_code: "97-034",
      },
      {} as AnyAction
    )
  ).toEqual({
    first_name: "Marcin",
    last_name: "Czaniecki",
    city: "Gdynia",
    zip_code: "97-034",
  });
});
it("Test reset sate", () => {
  expect(
    reducer(
      {
        first_name: "Marcin",
        last_name: "Czaniecki",
        city: "Gdynia",
        zip_code: "97-034",
      },
      resetPurchaseForm()
    )
  ).toEqual({
    first_name: "",
    last_name: "",
    city: "",
    zip_code: "",
  });
});
describe("Test setPurchaseFormInputField action", () => {
  it("Test first_name", () => {
    expect(
      reducer(
        undefined,
        setPurchaseFormInputField({ value: "Marcin", field: "first_name" })
      )
    ).toEqual({
      first_name: "Marcin",
      last_name: "",
      city: "",
      zip_code: "",
    });
  });
  it("Test last_name", () => {
    expect(
      reducer(
        undefined,
        setPurchaseFormInputField({ value: "Czaniecki", field: "last_name" })
      )
    ).toEqual({
      first_name: "",
      last_name: "Czaniecki",
      city: "",
      zip_code: "",
    });
  });
  it("Test city", () => {
    expect(
      reducer(
        undefined,
        setPurchaseFormInputField({ value: "Gdynia", field: "city" })
      )
    ).toEqual({
      first_name: "",
      last_name: "",
      city: "Gdynia",
      zip_code: "",
    });
  });
  it("Test zip_code", () => {
    expect(
      reducer(
        undefined,
        setPurchaseFormInputField({ value: "81-093", field: "zip_code" })
      )
    ).toEqual({
      first_name: "",
      last_name: "",
      city: "",
      zip_code: "81-093",
    });
  });
  it("Test field with state", () => {
    expect(
      reducer(
        {
          first_name: "Marcin",
          last_name: "",
          city: "",
          zip_code: "81-093",
        },
        setPurchaseFormInputField({ value: "81-093", field: "zip_code" })
      )
    ).toEqual({
      first_name: "Marcin",
      last_name: "",
      city: "",
      zip_code: "81-093",
    });
  });
});

/* test("should handle a todo being added to an empty list", () => {
  const previousState = [];
  expect(reducer(previousState, todoAdded("Run the tests"))).toEqual([
    {
      text: "Run the tests",
      completed: false,
      id: 0,
    },
  ]);
});
Ą */
