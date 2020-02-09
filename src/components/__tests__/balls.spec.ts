import { render } from "@testing-library/vue";
import Balls from "../Balls.vue";

describe("Balls", () => {
  it("should match its snapshot", () => {
    const { container } = render(Balls, { props: { value: 6 } });
    expect(container).toMatchSnapshot();
  });

  it("should display the correct number", () => {
    const { getByText } = render(Balls, { props: { value: 6 } });
    expect(getByText("6")).toBeDefined();
  });
});
