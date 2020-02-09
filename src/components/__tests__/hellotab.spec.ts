import { render, fireEvent } from "@testing-library/vue";
import HelloTab from "../HelloTab.vue";
import axiosMock from "axios";
import { LotteryData } from "../interfaces";
import "@testing-library/jest-dom";

const mockResponst: LotteryData = {
  ErrorInfo: null,
  Success: true,
  DrawResults: [
    {
      ProductId: "Powerball",
      PrimaryNumbers: [1, 15, 25, 26, 27, 32, 33],
      SecondaryNumbers: [13]
    }
  ]
};

describe("hello tab home page", () => {
  it("should match snapshot", () => {
    const { container } = render(HelloTab);
    expect(container).toMatchSnapshot();
  });

  it("should match snapshot when clicked", async () => {
    ((axiosMock.post as unknown) as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        data: mockResponst
      })
    );

    const { getByTestId, container } = render(HelloTab);

    fireEvent.click(getByTestId("get.results"));
    expect(container).toMatchSnapshot();
  });

  it("button should call the server", async () => {
    ((axiosMock.post as unknown) as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        data: mockResponst
      })
    );

    const { getByTestId } = render(HelloTab);

    expect(getByTestId("get.results")).toBeVisible();
    fireEvent.click(getByTestId("get.results"));
    await Promise.resolve();
    expect(axiosMock.post).toHaveBeenCalled();
  });
});
